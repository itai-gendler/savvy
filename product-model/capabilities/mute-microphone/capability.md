---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#pause_meeting
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#set_meeting_listening
- kind: code
  role: implementation
  target: src/App.tsx#MeetingOverlay
---

# Mute microphone

Mute the meeting with Mute microphone on the overlay. Capture of both sides stops, any recommendation in progress is cancelled, the overlay says Savvy is muted, and Savvy managed stops metering time.
