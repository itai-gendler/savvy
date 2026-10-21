---
appliesTo:
- type: capability
  id: show-client-documents
- type: capability
  id: prepare-brief
- type: capability
  id: add-client-folder
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#is_generated_brief
---

# Savvy's own brief files are never read as source documents

Files named like generated briefs (savvy-brief-v… .md) are skipped when a folder is listed, indexed or read for a brief.

## Rationale

Re-reading a generated brief as evidence would feed its own claims back into the next brief.
