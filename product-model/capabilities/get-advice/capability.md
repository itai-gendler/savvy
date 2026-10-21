---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#request_recommendation
- kind: code
  role: implementation
  target: src/App.tsx#MeetingOverlay
- kind: code
  role: implementation
  target: crates/recommendations/src/lib.rs#validate_recommendation
---

# Get advice

Ask for a recommendation now with Advice on the meeting overlay. Savvy shows Checking notes, then Getting advice, and answers about the latest turn. Advice cards are not held to the grounding threshold that cards Savvy offers on its own must meet.
