---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#start_transcription_worker
- kind: code
  role: implementation
  target: crates/transcription/src/lib.rs
- kind: code
  role: implementation
  target: backend/src/transcription.ts#attachAudio
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#managed_stream_message
---

# Transcribe meeting

While a meeting is recording, stream the microphone and, unless microphone only is set, the system audio to the transcription provider — Deepgram or AssemblyAI with the person's key, or Deepgram through Savvy with Savvy managed — and keep each final turn with its source. Local recording never depends on it: transcription reconnects on its own.
