---
availability:
- place: desktop
domain: models-and-account
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#set_transcription_api_key
- kind: code
  role: implementation
  target: src-tauri/src/transcription_key.rs
- kind: code
  role: implementation
  target: src-tauri/src/credentials.rs
---

# Save transcription API key

Save a Deepgram or AssemblyAI API key on Models or during setup. Savvy checks the key directly with the provider, without sending audio, before keeping it in macOS Keychain or Windows Credential Manager.
