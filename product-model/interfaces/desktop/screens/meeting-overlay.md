---
entities:
- entity: meeting
  shows:
  - Started
  - Transcript
- entity: recommendation
  shows:
  - Trigger
  - Say
  - Avoid
  - Grounded score
  - Sources
- entity: settings
  shows:
  - Overlay
  - Overlay Position
  - Show Live Transcript
references:
- kind: code
  role: implementation
  target: src/App.tsx#MeetingOverlay
- kind: code
  role: implementation
  target: src/App.tsx#RecommendationPreview
- kind: code
  role: implementation
  target: src-tauri/src/overlay.rs
---

# Meeting overlay

The floating window shown while a meeting runs: elapsed time, whether Savvy is listening, muted or thinking and why, the live transcript when shown, the current recommendation card, and Advice, mute and stop controls.
