---
entities:
- entity: meeting
  shows:
  - Context
- entity: client
  shows:
  - Name
- entity: settings
  shows:
  - Service mode
  - Microphone only
  - Transcription Provider
  - Reasoning provider
- entity: transcription-api-key
  shows:
  - Provider
- entity: savvy-account
  shows:
  - Meeting time remaining
references:
- kind: code
  role: implementation
  target: src/MeetingReadiness.tsx#MeetingReadiness
---

# Before you start

Meeting readiness, titled with the context the meeting will use — the client, or General meeting: microphone and meeting-audio permission, transcription and AI assistance status, and managed minutes available, with an audio check and Start meeting.
