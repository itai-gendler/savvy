---
appliesTo:
- type: entity
  id: meeting
  effect: creates
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#start_meeting_inner
- kind: code
  role: implementation
  target: backend/src/sessions.ts#createSession
---

# Only one meeting runs at a time

Savvy keeps one live meeting per computer: Start meeting is refused while another is active. With Savvy managed, one assisted meeting runs per Savvy account across computers, and a muted one is closed when a new one starts.
