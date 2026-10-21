---
domain: prepare
references:
- kind: code
  role: implementation
  target: crates/dossier/src/lib.rs#scan_folder
- kind: code
  role: implementation
  target: crates/dossier/src/extract.rs
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#list_client_documents
---

# Source document

A supported file in a client folder or the guidance folder. Savvy reads it in place and never copies or changes it; selected excerpts reach the reasoning provider when a brief or recommendation is prepared.

## Information kept

- **Relative path** — Where the file sits inside its folder; recommendations and brief facts cite it.
- **Kind** — PDF, Word, Slides, Spreadsheet, CSV, Markdown, Text or EPUB.
- **Folder** — The client folder or the guidance folder it belongs to.

## States

### Selected

Included in briefs and meeting context; every supported document starts selected, and guidance-folder documents always are.

### Unselected

Left out of briefs and meeting context for its client; the file stays in the folder.
