---
availability:
- place: desktop
domain: models-and-account
references:
- kind: code
  role: implementation
  target: src/App.tsx#SettingsView
- kind: code
  role: implementation
  target: src/App.tsx#PrepareView
- kind: code
  role: implementation
  target: src/App.tsx#AppFooter
- kind: code
  role: implementation
  target: src/lib/transcriptionModels.ts
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#validate_settings
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#choose_healthy_provider
---

# Change Models settings

Change the provider settings on Models: Transcription Provider, Transcription Model and Conversation Language for live transcripts, and the reasoning provider with its Reasoning Model and Context Window or Service Tier. Conversation language is also offered under Meeting options on Prepare, and the reasoning model in the footer. They apply to your own providers; Savvy managed supplies Deepgram Nova-3 and Fireworks GLM-5.3.
