from __future__ import annotations

import asyncio
import json
from datetime import datetime
from html import escape
from pathlib import Path
from zoneinfo import ZoneInfo

from pyppeteer import launch


ROOT = Path(__file__).resolve().parents[1]
EMISSOR_DIR = ROOT / "curriculo-emissor"
DIST_DIR = EMISSOR_DIR / "dist"
PUBLIC_DIR = ROOT / "public"
CONTENT_PATH = EMISSOR_DIR / "content.json"
TEMPLATE_PATH = EMISSOR_DIR / "template.html"
STYLE_PATH = EMISSOR_DIR / "style.css"
OUTPUT_HTML = DIST_DIR / "curriculo.html"
OUTPUT_PDF = PUBLIC_DIR / "curriculo.pdf"
TIME_ZONE = "America/Sao_Paulo"


def get_age(birth_date: dict[str, int]) -> int:
    now = datetime.now(ZoneInfo(TIME_ZONE))
    age = now.year - birth_date["year"]
    if (now.month, now.day) < (birth_date["month"], birth_date["day"]):
        age -= 1
    return age


def render_list_items(items: list[str], class_name: str) -> str:
    return "".join(f'<li>{escape(item)}</li>' for item in items)


def render_profile(paragraphs: list[str]) -> str:
    return "".join(f'<p class="profile-text">{escape(paragraph)}</p>' for paragraph in paragraphs)


def render_strengths(strengths: list[dict[str, str]]) -> str:
    return "".join(
        f"""
        <article class="strength-card">
          <h4>{escape(item["title"])}</h4>
          <p>{escape(item["description"])}</p>
        </article>
        """
        for item in strengths
    )


def render_experiences(experiences: list[dict[str, str]]) -> str:
    return "".join(
        f"""
        <article class="timeline-item">
          <div class="timeline-head">
            <h4>{escape(item["role"])}</h4>
            <span class="timeline-period">{escape(item["period"])}</span>
          </div>
          <p class="timeline-company">{escape(item["company"])}</p>
          <p class="timeline-desc">{escape(item["highlight"])}</p>
        </article>
        """
        for item in experiences
    )


def render_skill_groups(groups: list[dict[str, object]]) -> str:
    html_parts: list[str] = []
    for group in groups:
        html_parts.append(
            f"""
            <section class="skill-group">
              <h4>{escape(str(group["title"]))}</h4>
              <ul class="skill-list">
                {render_list_items(list(group["items"]), "skill-list")}
              </ul>
            </section>
            """
        )
    return "".join(html_parts)


def render_education(items: list[dict[str, str]]) -> str:
    return "".join(
        f"""
        <article class="edu-card">
          <h4>{escape(item["title"])}</h4>
          {'<p>' + escape(item["description"]) + '</p>' if item["description"] else ''}
        </article>
        """
        for item in items
    )


def build_html() -> str:
    DIST_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

    content = json.loads(CONTENT_PATH.read_text(encoding="utf-8"))
    payload = content["pt"]
    personal = content["personal"]
    age_label = f'{get_age(personal["birth_date"])} anos'

    body = f"""
    <section class="sheet">
      <header class="hero">
        <div class="hero-inner">
          <p class="kicker">{escape(payload["kicker"])}</p>
          <h1>{escape(personal["full_name"])}</h1>
          <p class="role">{escape(personal["role"])}</p>
          <p class="hero-summary">{escape(payload["hero_summary"])}</p>
          <p class="hero-support">{escape(payload["header_line"])}</p>
          <section class="hero-stats">
            {''.join(f'<div class="hero-stat">{escape(item)}</div>' for item in payload["stats"])}
          </section>
          <section class="hero-contact">
            <span>{escape(personal["location"])}</span>
            <span>{escape(personal["phone"])}</span>
            <span>{escape(personal["email"])}</span>
            <span>{escape(personal["github"])}</span>
            <span>{escape(personal["website"])}</span>
            <span>Curriculo online: {escape(personal["online_resume"])}</span>
            <span>{escape(personal["birth_date_label"])} | {escape(age_label)}</span>
          </section>
        </div>
      </header>

      <section class="body">
        <div class="column">
          <section>
            <h3 class="section-title">{escape(payload["profile_title"])}</h3>
            {render_profile(payload["paragraphs"])}
          </section>

          <section>
            <h3 class="section-title">{escape(payload["experience_title"])}</h3>
            <div class="timeline">
              {render_experiences(payload["experiences"])}
            </div>
          </section>

          <section>
            <h3 class="section-title">{escape(payload["projects_title"])}</h3>
            <div class="project-card">
              <ul class="project-list">
                {render_list_items(payload["projects"], "project-list")}
              </ul>
            </div>
          </section>
        </div>

        <div class="column">
          <section>
            <h3 class="section-title">{escape(payload["strengths_title"])}</h3>
            <div class="cards">
              {render_strengths(payload["strengths"])}
            </div>
          </section>

          <section>
            <h3 class="section-title">{escape(payload["skills_title"])}</h3>
            {render_skill_groups(payload["skills"])}
          </section>

          <section>
            <h3 class="section-title">{escape(payload["education_title"])}</h3>
            <div class="cards">
              {render_education(payload["education"])}
            </div>
          </section>

          <section class="closing">
            <h3 class="section-title">{escape(payload["closing_title"])}</h3>
            <p>{escape(payload["closing"])}</p>
          </section>
        </div>
      </section>
    </section>
    """

    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    css = STYLE_PATH.read_text(encoding="utf-8")
    html = template.replace("__INLINE_CSS__", css).replace("__CONTENT__", body)
    OUTPUT_HTML.write_text(html, encoding="utf-8")
    return html


async def export_pdf(html: str) -> None:
    browser = await launch(
        headless=True,
        args=[
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
        ],
    )
    try:
        page = await browser.newPage()
        await page.setViewport({"width": 1400, "height": 1980, "deviceScaleFactor": 1})
        await page.setContent(html)
        await asyncio.sleep(0.35)
        await page.pdf(
            {
                "path": str(OUTPUT_PDF),
                "format": "A4",
                "landscape": False,
                "printBackground": True,
                "scale": 0.58,
                "margin": {
                    "top": "0",
                    "right": "0",
                    "bottom": "0",
                    "left": "0",
                },
            }
        )
    finally:
        await browser.close()


def main() -> None:
    html = build_html()
    asyncio.run(export_pdf(html))
    print(f"HTML gerado em: {OUTPUT_HTML}")
    print(f"PDF gerado em: {OUTPUT_PDF}")


if __name__ == "__main__":
    main()
