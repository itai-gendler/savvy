---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#refresh_brief_from_document
- kind: code
  role: implementation
  target: src-tauri/src/brief_document.rs#synchronize
---

# Refresh brief from file

Reload the brief in use from its Markdown file after editing it, with Refresh or Refresh from file. The edited headings replace the brief's sections and hard constraints, and changed text keeps no earlier evidence links.
