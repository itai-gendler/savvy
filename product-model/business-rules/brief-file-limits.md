---
appliesTo:
- type: capability
  id: choose-brief-file
- type: capability
  id: refresh-brief-from-file
- type: capability
  id: prepare-brief
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#read_brief_document
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#selected_brief_path
- kind: code
  role: implementation
  target: src-tauri/src/brief_document.rs#synchronize
---

# A brief is a Markdown file of at most 2 MiB

Chosen and refreshed briefs must be .md or .markdown files no larger than 2 MiB, with at most 20 discussion sections; a generated brief that would exceed 2 MiB is not saved.
