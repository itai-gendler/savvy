---
appliesTo:
- type: capability
  id: start-meeting
- type: capability
  id: choose-brief-file
- type: capability
  id: refresh-brief-from-file
- type: capability
  id: offer-live-recommendations
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#build_context_pack
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#is_constraint_heading
- kind: code
  role: implementation
  target: src-tauri/src/brief_document.rs#synchronize
- kind: code
  role: implementation
  target: src/App.tsx#BriefReview
---

# Hard constraints come from the brief's constraint sections and the guidance folder

The meeting's hard constraints are the plain-text items under the brief's Red lines, Prohibited claims and Unauthorized commitments headings, plus lines under constraint headings in guidance documents, such as Red lines, Never, Do not, Prohibited claims and Unauthorized commitments, in English, Spanish or Catalan. Other formatting in the brief is context for the AI only.
