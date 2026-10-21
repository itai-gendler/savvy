---
appliesTo:
- type: capability
  id: start-meeting
- type: capability
  id: check-readiness
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#ensure_transcription_ready
- kind: code
  role: implementation
  target: src/MeetingReadiness.tsx#MeetingReadiness
---

# A meeting with your own providers needs the transcription provider's key

Start meeting is refused with your own providers until the selected transcription provider has a saved API key; Before you start shows API key required.
