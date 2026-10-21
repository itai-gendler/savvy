---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Deepgram or AssemblyAI, paste the key and choose Save key
  kind: actor
  actor: user
  entities:
  - entity: transcription-api-key
    effect: reads
    facts:
    - Provider
  contexts:
    desktop:
      place: desktop::setup
- text: Check the key with the provider and keep it in Keychain or Credential Manager
  kind: product
  entities:
  - entity: transcription-api-key
    effect: creates
    facts:
    - Provider
    - Key
  contexts:
    desktop:
      place: desktop::setup
- text: Select that provider with its first model and language and say the key is saved
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Transcription Provider
    - Transcription Model
    - Conversation Language
  contexts:
    desktop:
      place: desktop::setup
---

# Save an API key during setup

## Trigger

During setup the person chose Use your own providers.

## Outcome

The key is saved, the provider is selected, and setup suggests the audio check.

## Edge cases

- Skip for now continues without a key; meetings cannot be transcribed until one is added.
