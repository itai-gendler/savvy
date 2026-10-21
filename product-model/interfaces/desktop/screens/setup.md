---
entities:
- entity: settings
  shows:
  - Service mode
  - Microphone only
  - Microphone
  - Input Channel
  - Transcription Provider
  - Reasoning provider
  collects:
  - Microphone only
  - Microphone
  - Input Channel
  - Transcription Provider
  - Reasoning provider
- entity: transcription-api-key
  shows:
  - Provider
  collects:
  - Provider
  - Key
- entity: purchase
  shows:
  - Product
  - Price
  - Hours and briefs
  collects:
  - Product
references:
- kind: code
  role: implementation
  target: src/Onboarding.tsx#Onboarding
- kind: code
  role: implementation
  target: src/Onboarding.tsx#PersonalAISetup
- kind: code
  role: implementation
  target: src/AudioCheck.tsx#AudioCheck
---

# Set up Savvy

First-run setup: choose between creating or signing in to a Savvy account and using your own providers, view plans and pricing, add a transcription key, connect a reasoning CLI, allow audio access and check audio, or set up later.
