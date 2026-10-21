---
appliesTo:
- type: capability
  id: remove-expired-meetings
- type: entity
  id: meeting
  effect: removes
references:
- kind: doc
  role: intent
  target: README.md
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#cleanup_expired_meetings
---

# Meetings are kept for 30 days after they end

Recordings, transcripts and recommendations are deleted at the first launch more than 30 days after a meeting ended; an interrupted meeting counts from when it started.
