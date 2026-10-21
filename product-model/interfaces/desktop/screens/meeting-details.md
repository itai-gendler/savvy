---
entities:
- entity: meeting
  shows:
  - Context
  - Started
  - Ended
  - Transcript
  - Recording
references:
- kind: code
  role: implementation
  target: src/MeetingDetails.tsx#MeetingDetails
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#get_meeting_transcript_page
---

# Meeting details

One past meeting's transcript, 50 turns per page with the time and whether you or the other speaker said it, and its transcript and recording files.
