from __future__ import annotations

import json
from pathlib import Path
from xml.sax.saxutils import escape
from zipfile import ZIP_DEFLATED, ZipFile


ROOT = Path(__file__).resolve().parents[1]
EMISSOR_DIR = ROOT / "curriculo-emissor"
PUBLIC_DIR = ROOT / "public"
CONTENT_PATH = EMISSOR_DIR / "content.json"
OUTPUT_DOCX = PUBLIC_DIR / "curriculo.docx"


def para(text: str, style: str | None = None) -> str:
    style_xml = f"<w:pStyle w:val=\"{style}\"/>" if style else ""
    return (
        "<w:p>"
        "<w:pPr>"
        f"{style_xml}"
        "<w:spacing w:before=\"0\" w:after=\"80\" w:line=\"276\" w:lineRule=\"auto\"/>"
        "</w:pPr>"
        "<w:r>"
        f"<w:t xml:space=\"preserve\">{escape(text)}</w:t>"
        "</w:r>"
        "</w:p>"
    )


def bullet(text: str) -> str:
    return (
        "<w:p>"
        "<w:pPr>"
        "<w:pStyle w:val=\"BodyText\"/>"
        "<w:ind w:left=\"540\" w:hanging=\"260\"/>"
        "<w:spacing w:before=\"0\" w:after=\"60\" w:line=\"260\" w:lineRule=\"auto\"/>"
        "</w:pPr>"
        "<w:r><w:t>• </w:t></w:r>"
        f"<w:r><w:t xml:space=\"preserve\">{escape(text)}</w:t></w:r>"
        "</w:p>"
    )


def section_title(text: str) -> str:
    return para(text.upper(), "SectionTitle")


def build_document_xml(content: dict) -> str:
    personal = content["personal"]
    payload = content["pt"]

    blocks: list[str] = []
    blocks.append(para(personal["full_name"], "NameTitle"))
    blocks.append(para(personal["role"], "RoleTitle"))
    blocks.append(
        para(
            " | ".join(
                [
                    personal["location"],
                    personal["phone"],
                    personal["email"],
                    personal["github"],
                    personal["website"],
                    f'Curriculo online: {personal["online_resume"]}',
                    f'Nascimento: {personal["birth_date_label"]}',
                ]
            ),
            "MetaLine",
        )
    )

    blocks.append(section_title(payload["profile_title"]))
    for paragraph in payload["paragraphs"]:
        blocks.append(para(paragraph, "BodyText"))

    blocks.append(section_title(payload["experience_title"]))
    for item in payload["experiences"]:
        blocks.append(para(f'{item["role"]} | {item["company"]}', "ItemTitle"))
        blocks.append(para(item["period"], "ItemMeta"))
        blocks.append(para(item["highlight"], "BodyText"))

    blocks.append(section_title(payload["projects_title"]))
    for item in payload["projects"]:
        blocks.append(bullet(item))

    blocks.append(section_title(payload["strengths_title"]))
    for item in payload["strengths"]:
        blocks.append(para(item["title"], "ItemTitle"))
        blocks.append(para(item["description"], "BodyText"))

    blocks.append(section_title(payload["skills_title"]))
    for group in payload["skills"]:
        blocks.append(para(group["title"], "ItemTitle"))
        for item in group["items"]:
            blocks.append(bullet(item))

    blocks.append(section_title(payload["education_title"]))
    for item in payload["education"]:
        blocks.append(para(item["title"], "ItemTitle"))
        if item["description"]:
            blocks.append(para(item["description"], "BodyText"))

    blocks.append(section_title(payload["closing_title"]))
    blocks.append(para(payload["closing"], "BodyText"))

    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document
  xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"
  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
  xmlns:w10="urn:schemas-microsoft-com:office:word"
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
  xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml"
  xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml"
  xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"
  xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk"
  xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml"
  xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"
  mc:Ignorable="w14 w15 wp14">
  <w:body>
    {''.join(blocks)}
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="720" w:right="720" w:bottom="720" w:left="720" w:header="450" w:footer="450" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>
"""


def build_styles_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Aptos" w:hAnsi="Aptos" w:eastAsia="Aptos" w:cs="Aptos"/>
        <w:sz w:val="22"/>
        <w:lang w:val="pt-BR"/>
      </w:rPr>
    </w:rPrDefault>
  </w:docDefaults>
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:qFormat/>
  </w:style>
  <w:style w:type="paragraph" w:styleId="NameTitle">
    <w:name w:val="NameTitle"/>
    <w:basedOn w:val="Normal"/>
    <w:qFormat/>
    <w:pPr><w:spacing w:after="80"/></w:pPr>
    <w:rPr>
      <w:b/>
      <w:color w:val="231A13"/>
      <w:sz w:val="36"/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="RoleTitle">
    <w:name w:val="RoleTitle"/>
    <w:basedOn w:val="Normal"/>
    <w:qFormat/>
    <w:rPr>
      <w:b/>
      <w:color w:val="A56224"/>
      <w:sz w:val="22"/>
      <w:caps/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="MetaLine">
    <w:name w:val="MetaLine"/>
    <w:basedOn w:val="Normal"/>
    <w:qFormat/>
    <w:rPr>
      <w:color w:val="67584A"/>
      <w:sz w:val="18"/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="SectionTitle">
    <w:name w:val="SectionTitle"/>
    <w:basedOn w:val="Normal"/>
    <w:qFormat/>
    <w:pPr><w:spacing w:before="160" w:after="80"/></w:pPr>
    <w:rPr>
      <w:b/>
      <w:color w:val="A56224"/>
      <w:sz w:val="20"/>
      <w:caps/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="ItemTitle">
    <w:name w:val="ItemTitle"/>
    <w:basedOn w:val="Normal"/>
    <w:qFormat/>
    <w:rPr>
      <w:b/>
      <w:color w:val="231A13"/>
      <w:sz w:val="22"/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="ItemMeta">
    <w:name w:val="ItemMeta"/>
    <w:basedOn w:val="Normal"/>
    <w:qFormat/>
    <w:rPr>
      <w:b/>
      <w:color w:val="7F4312"/>
      <w:sz w:val="18"/>
      <w:caps/>
    </w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="BodyText">
    <w:name w:val="BodyText"/>
    <w:basedOn w:val="Normal"/>
    <w:qFormat/>
    <w:rPr>
      <w:color w:val="67584A"/>
      <w:sz w:val="21"/>
    </w:rPr>
  </w:style>
</w:styles>
"""


def build_content_types_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
"""


def build_root_rels_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
"""


def build_document_rels_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>
"""


def build_core_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
 xmlns:dc="http://purl.org/dc/elements/1.1/"
 xmlns:dcterms="http://purl.org/dc/terms/"
 xmlns:dcmitype="http://purl.org/dc/dcmitype/"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>Curriculo Allan</dc:title>
  <dc:creator>Codex</dc:creator>
  <cp:lastModifiedBy>Codex</cp:lastModifiedBy>
</cp:coreProperties>
"""


def build_app_xml() -> str:
    return """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
 xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Microsoft Office Word</Application>
</Properties>
"""


def main() -> None:
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    content = json.loads(CONTENT_PATH.read_text(encoding="utf-8"))

    with ZipFile(OUTPUT_DOCX, "w", compression=ZIP_DEFLATED) as docx:
      docx.writestr("[Content_Types].xml", build_content_types_xml())
      docx.writestr("_rels/.rels", build_root_rels_xml())
      docx.writestr("docProps/core.xml", build_core_xml())
      docx.writestr("docProps/app.xml", build_app_xml())
      docx.writestr("word/document.xml", build_document_xml(content))
      docx.writestr("word/styles.xml", build_styles_xml())
      docx.writestr("word/_rels/document.xml.rels", build_document_rels_xml())

    print(f"Word gerado em: {OUTPUT_DOCX}")


if __name__ == "__main__":
    main()
