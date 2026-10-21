---
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

# Transcription API key

A personal transcription provider's API key, kept in macOS Keychain or Windows Credential Manager and used only with your own providers. Settings show only whether a key is configured, never the key.

## Information kept

- **Provider** — Deepgram or AssemblyAI; one key per provider.
- **Key** — The secret itself, sent to the provider only in the authorization header.
