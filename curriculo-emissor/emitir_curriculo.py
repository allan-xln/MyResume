from __future__ import annotations

import argparse
import asyncio
import json
import shutil
import tempfile
from html import escape
from pathlib import Path
from typing import Any

from pyppeteer import launch


ROOT = Path(__file__).resolve().parents[1]
EMISSOR_DIR = ROOT / "curriculo-emissor"
DIST_DIR = EMISSOR_DIR / "dist"
PUBLIC_DIR = ROOT / "public"
CONTENT_PATH = EMISSOR_DIR / "content.json"
TEMPLATE_PATH = EMISSOR_DIR / "template.html"
STYLE_PATH = EMISSOR_DIR / "style.css"

OUTPUTS = {
    "pt": {
        "html": DIST_DIR / "curriculo-pt.html",
        "pdf": PUBLIC_DIR / "curriculo.pdf",
        "title": "Currículo — Allan Pereira",
    },
    "en": {
        "html": DIST_DIR / "resume-en.html",
        "pdf": PUBLIC_DIR / "resume.pdf",
        "title": "Résumé — Allan Pereira",
    },
}


def anchor(label: str, href: str) -> str:
    return f'<a href="{escape(href, quote=True)}">{escape(label)}</a>'


def render_products(products: list[dict[str, str]]) -> str:
    return "".join(
        f"""
        <article class="product">
          <div class="product-heading">
            <h3>{escape(product["name"])}</h3>
            <p>{escape(product["category"])}</p>
          </div>
          <p class="product-description">{escape(product["description"])}</p>
          <p class="product-evidence">{escape(product["evidence"])}</p>
        </article>
        """
        for product in products
    )


def render_experience(experiences: list[dict[str, Any]]) -> str:
    return "".join(
        f"""
        <article class="experience-item">
          <p class="experience-period">{escape(item["period"])}</p>
          <div class="experience-copy">
            <div class="experience-heading">
              <h3>{escape(item["role"])}</h3>
              <p>{escape(item["company"])}</p>
            </div>
            <ul class="experience-contributions">
              {"".join(f"<li>{escape(contribution)}</li>" for contribution in item["contributions"])}
            </ul>
          </div>
        </article>
        """
        for item in experiences
    )


def render_capabilities(capabilities: list[dict[str, str]]) -> str:
    return "".join(
        f"""
        <article class="capability">
          <h3>{escape(item["title"])}</h3>
          <p>{escape(item["items"])}</p>
        </article>
        """
        for item in capabilities
    )


def render_education(education: list[dict[str, str]]) -> str:
    return "".join(
        f"""
        <article class="education-item">
          <h3>{escape(item["title"])}</h3>
          <p>{escape(item["detail"])}</p>
        </article>
        """
        for item in education
    )


def build_html(language: str) -> str:
    DIST_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    content: dict[str, Any] = json.loads(CONTENT_PATH.read_text(encoding="utf-8"))
    personal = content["personal"]
    payload = content[language]
    labels = payload["labels"]
    location = personal["location_pt"] if language == "pt" else personal["location_en"]

    contact_items = [
        anchor(personal["email"], f'mailto:{personal["email"]}'),
        anchor(personal["phone"], f'tel:{personal["phone"].replace(" ", "")}'),
        anchor(personal["github"], f'https://{personal["github"]}'),
        anchor(personal["website"], f'https://{personal["website"]}'),
        f"<span>{escape(location)}</span>",
    ]

    body = f"""
    <article class="resume">
      <header class="resume-header">
        <div class="topline">
          <span class="mark">AP<i></i></span>
          <span>{escape(payload["document_label"])}</span>
        </div>
        <div class="identity">
          <h1>{escape(personal["display_name"])}</h1>
          <p>{escape(payload["role"])}</p>
        </div>
        <div class="contact-line" aria-label="{escape(labels["contact"])}">
          {''.join(contact_items)}
        </div>
      </header>

      <div class="resume-body">
        <div class="main-column">
          <section class="resume-section profile-section">
            <h2>{escape(labels["profile"])}</h2>
            <p class="summary">{escape(payload["summary"])}</p>
          </section>

          <section class="resume-section experience-section">
            <h2>{escape(labels["experience"])}</h2>
            {render_experience(payload["experience"])}
          </section>

          <section class="resume-section products-section">
            <h2>{escape(labels["products"])}</h2>
            {render_products(payload["products"])}
          </section>
        </div>

        <aside class="side-column">
          <section class="resume-section capabilities-section">
            <h2>{escape(labels["capabilities"])}</h2>
            {render_capabilities(payload["capabilities"])}
          </section>

          <section class="resume-section other-work">
            <h2>{escape(labels["other_work"])}</h2>
            <p>{escape(payload["other_work"])}</p>
          </section>

          <section class="resume-section education-section">
            <h2>{escape(labels["education"])}</h2>
            {render_education(payload["education"])}
          </section>
        </aside>
      </div>

      <footer class="resume-footer">
        <span>meetallan.com</span>
        <span>Software · AI · Automation · Infrastructure</span>
      </footer>
    </article>
    """

    output = OUTPUTS[language]
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    css = STYLE_PATH.read_text(encoding="utf-8")
    html = (
        template.replace("__LANG__", payload["lang"])
        .replace("__TITLE__", output["title"])
        .replace("__INLINE_CSS__", css)
        .replace("__CONTENT__", body)
    )
    output["html"].write_text(html, encoding="utf-8")
    return html


async def export_pdf(language: str, html: str) -> dict[str, float | int]:
    executable = shutil.which("chromium-browser") or shutil.which("chromium")
    profile_dir = tempfile.mkdtemp(prefix="pdf-browser-", dir=DIST_DIR)
    browser = None

    try:
        browser = await launch(
            executablePath=executable,
            userDataDir=profile_dir,
            headless=False,
            autoClose=False,
            args=[
                "--headless=new",
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
            ],
        )
        page = await browser.newPage()
        await page.setViewport({"width": 794, "height": 1123, "deviceScaleFactor": 1})
        await page.setContent(html)
        await page.emulateMedia("print")
        await page.evaluate("() => document.fonts.ready")

        metrics = await page.evaluate(
            """() => {
              const root = document.querySelector('.resume');
              const rootRect = root.getBoundingClientRect();
              const body = document.querySelector('.resume-body');
              const bodyRect = body.getBoundingClientRect();
              const bottoms = [...root.querySelectorAll('*')].map((element) =>
                element.getBoundingClientRect().bottom
              );
              const bodyBottoms = [...body.querySelectorAll('*')].map((element) =>
                element.getBoundingClientRect().bottom
              );
              return {
                pageHeight: rootRect.height,
                contentBottom: Math.max(...bottoms) - rootRect.top,
                bodyHeight: bodyRect.height,
                bodyContentBottom: Math.max(...bodyBottoms) - bodyRect.top,
                links: document.querySelectorAll('a[href]').length,
              };
            }"""
        )

        if metrics["contentBottom"] > metrics["pageHeight"] + 1:
            raise RuntimeError(
                f'{language}: conteúdo excede a página em '
                f'{metrics["contentBottom"] - metrics["pageHeight"]:.2f}px'
            )

        if metrics["bodyContentBottom"] > metrics["bodyHeight"] + 1:
            raise RuntimeError(
                f'{language}: conteúdo interno invade o rodapé em '
                f'{metrics["bodyContentBottom"] - metrics["bodyHeight"]:.2f}px'
            )

        await page.pdf(
            {
                "path": str(OUTPUTS[language]["pdf"]),
                "width": "210mm",
                "height": "297mm",
                "preferCSSPageSize": True,
                "printBackground": True,
                "margin": {"top": "0", "right": "0", "bottom": "0", "left": "0"},
            }
        )
        return metrics
    finally:
        if browser is not None:
            await browser.close()
        shutil.rmtree(profile_dir, ignore_errors=True)


async def generate(language: str) -> None:
    html = build_html(language)
    metrics = await export_pdf(language, html)
    print(
        f'{language.upper()}: {OUTPUTS[language]["pdf"]} '
        f'| conteúdo {metrics["contentBottom"]:.1f}/{metrics["pageHeight"]:.1f}px '
        f'| {metrics["links"]} links'
    )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Gera o currículo A4 de Allan Pereira.")
    parser.add_argument("--lang", choices=("pt", "en", "all"), default="all")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    languages = ("pt", "en") if args.lang == "all" else (args.lang,)
    for language in languages:
        asyncio.run(generate(language))


if __name__ == "__main__":
    main()
