---
availability:
- place: desktop
domain: models-and-account
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#delete_transcription_api_key
- kind: code
  role: implementation
  target: src/App.tsx#SettingsView
---

# Remove transcription API key

Remove the selected provider's saved API key from macOS Keychain or Windows Credential Manager.
