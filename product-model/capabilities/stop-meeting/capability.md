---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#stop_meeting
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#stop_live_meeting
- kind: code
  role: implementation
  target: src/App.tsx#MeetingOverlay
---

# Stop meeting

End the meeting with Stop meeting on the overlay and confirm, or with the Start Listening shortcut. Capture and transcription stop, any recommendation in progress is cancelled, the transcript file is written, and the main window opens History.
