---
appliesTo:
- type: capability
  id: start-meeting
- type: capability
  id: transcribe-meeting
- type: capability
  id: offer-live-recommendations
references:
- kind: doc
  role: intent
  target: CONTRIBUTING.md
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#start_meeting_inner
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#start_transcription_worker
---

# Provider failures never stop local recording

The local recording continues when transcription fails to start, drops or reconnects, when system audio is unavailable, and when the reasoning provider fails. Only Stop meeting, mute, quitting, or a Savvy managed meeting running out of time stops capture.

## Rationale

In the project's words, "a meeting in progress outranks any network call".
