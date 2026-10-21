---
availability:
- place: desktop
domain: history
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#delete_meeting
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#remove_meeting_files
- kind: code
  role: implementation
  target: src/App.tsx#HistoryView
---

# Delete meeting

Delete a past meeting permanently from History: its recording, transcript and recommendations are removed. A meeting still running cannot be deleted.
