---
appliesTo:
- type: capability
  id: transcribe-meeting
- type: capability
  id: check-audio
references:
- kind: doc
  role: intent
  target: README.md
- kind: code
  role: implementation
  target: crates/transcription/src/lib.rs
---

# Savvy asks Deepgram not to train on meeting audio

Every Deepgram transcription request Savvy makes carries Deepgram's model-training opt-out. Other providers' terms decide their own equivalent.
