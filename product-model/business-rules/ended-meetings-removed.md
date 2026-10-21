---
appliesTo:
- type: entity
  id: meeting
  effect: removes
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#remove_meeting_files
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#delete_meeting
---

# Only an ended meeting is removed

Deleting a meeting, removing its client and the 30-day cleanup remove only completed or interrupted meetings; each is refused while the meeting is recording or muted.
