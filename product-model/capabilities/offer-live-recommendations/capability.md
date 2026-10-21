---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: crates/recommendations/src/lib.rs#TriggerDetector
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#generation_seed
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#dispatch_generation
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#resolve_provider_advice
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#scan_is_due
- kind: code
  role: implementation
  target: src/App.tsx#RecommendationPreview
- kind: doc
  role: intent
  target: README.md
---

# Offer live recommendations

During a recording meeting, speak up on its own when the other side asks a question or someone touches a hard constraint from the brief, and between those periodically re-read the brief and notes against the last minute of conversation. The status line says Checking notes while the provider reads, then names the reason. Cards are titled Answer, Red line or Savvy noticed and show what to say, what to avoid, the first source and how grounded the advice is.
