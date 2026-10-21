---
availability:
- place: desktop
domain: history
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#open_meeting_transcript
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#write_meeting_transcript
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#render_transcript
---

# Show transcript file

Write a meeting's transcript to a text file in the recordings folder and show it in Finder or File Explorer, with Show transcript file in History or Open transcript in Meeting details. Each line has the time, the source — Microphone or System audio — and the text.
