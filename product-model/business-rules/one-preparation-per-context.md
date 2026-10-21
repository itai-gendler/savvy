---
appliesTo:
- type: capability
  id: prepare-brief
- type: capability
  id: remove-client
- type: capability
  id: unselect-brief
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#generate_brief_draft
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#with_context_removal
---

# One brief is prepared at a time for each client or general meetings

A second brief for the same client, or for general meetings, is refused while one is being prepared, and that client or brief cannot be removed until preparation ends or is cancelled.
