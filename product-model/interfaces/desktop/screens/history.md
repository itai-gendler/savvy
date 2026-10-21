---
entities:
- entity: meeting
  shows:
  - Context
  - Started
  - Ended
  - Recording
references:
- kind: code
  role: implementation
  target: src/App.tsx#HistoryView
- kind: code
  role: implementation
  target: src/App.tsx#MeetingHistoryRow
- kind: code
  role: implementation
  target: src/App.tsx#MeetingAudioPlayer
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#get_meeting_history
---

# Meeting history

Every meeting kept on this computer, newest first, with its client, start, duration and state, a player for its recording, and ways to open its details, show its transcript file or delete it.
