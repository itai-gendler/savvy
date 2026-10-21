---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#generate_brief_draft
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#generate_brief_from_sources
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#collect_brief_evidence_for_job
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#map_generated_brief
- kind: code
  role: implementation
  target: src/App.tsx#BriefGenerationProgress
- kind: code
  role: implementation
  target: backend/src/billing.ts#reserveBrief
---

# Prepare brief

Prepare a new brief version for the chosen client, or for general meetings, with Prepare brief, Generate or Regenerate. Savvy reads the selected client documents and the guidance folder, sends excerpts with the brief prompt and meeting objective to the reasoning provider — the person's Codex CLI or Claude Code, or Savvy managed — and saves the result as Markdown. Progress reads Reading selected context, then Drafting your brief, then saving.
