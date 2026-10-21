---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#cancel_brief_draft
- kind: code
  role: implementation
  target: src-tauri/src/brief_job.rs
- kind: code
  role: implementation
  target: src/App.tsx#BriefGenerationProgress
---

# Cancel brief generation

Cancel a brief while Savvy is reading or drafting it. Nothing is saved, the objective and selected context are kept, and a Savvy managed brief returns to the allowance.
