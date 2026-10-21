---
availability:
- place: desktop
domain: general
references:
- kind: code
  role: implementation
  target: src/AudioCheck.tsx#AudioCheck
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#audio_check_start
- kind: code
  role: implementation
  target: src-tauri/src/audio_check.rs
---

# Check audio

Check audio from General, Before you start or setup: watch the microphone meter while speaking, then the meeting-audio meter while something plays, then run a transcription test that shows a real transcript. Signal meters and a successful transcription test are separate checks; skipping one leaves audio readiness unverified.
