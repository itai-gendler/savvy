---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#import_brief_document
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#refresh_brief_from_document
- kind: code
  role: implementation
  target: src-tauri/src/brief_document.rs#synchronize
- kind: code
  role: implementation
  target: src/lib/api.ts#replaceBriefDocument
---

# Choose brief file

Use an existing Markdown file as the brief: Choose Markdown file when there is none, or Choose another file for the brief in use. The file stays where it is; its Red lines, Prohibited claims and Unauthorized commitments sections become the meeting's hard constraints, and its other sections are read by heading.
