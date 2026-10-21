---
kind: primary
result: achieved
routes:
  desktop: Desktop
steps:
- text: Choose Use your own providers, then paste a Deepgram or AssemblyAI key and choose Save key
  kind: actor
  actor: user
  capability: save-transcription-api-key
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Check the key with the provider and keep it
  kind: product
  capability: save-transcription-api-key
  entities:
  - entity: transcription-api-key
    effect: creates
    facts:
    - Provider
    - Key
  contexts:
    desktop:
      place: desktop::setup
- text: Choose Done and pick a connected Codex CLI or Claude Code
  kind: actor
  actor: user
  capability: change-service-mode
  entities:
  - entity: settings
    effect: reads
    facts:
    - Reasoning provider
  contexts:
    desktop:
      place: desktop::setup
- text: Save the reasoning provider with your own providers and ask for audio access
  kind: product
  capability: change-service-mode
  entities:
  - entity: settings
    effect: changes
    facts:
    - Reasoning provider
    - Service mode
  contexts:
    desktop:
      place: desktop::setup
- text: Allow the microphone and system audio and choose Continue
  kind: actor
  actor: user
  capability: allow-audio-access
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Save that both sides are captured and open the audio setup
  kind: product
  capability: allow-audio-access
  entities:
  - entity: settings
    effect: changes
    facts:
    - Microphone only
  contexts:
    desktop:
      place: desktop::setup
- text: Check audio and finish setup
  kind: product
  actor: user
  capability: finish-setup
  entities:
  - entity: settings
    effect: changes
    facts:
    - Setup completed
  contexts:
    desktop:
      place: desktop::prepare
---

# Add a key and connect a CLI

## Trigger

A new person chooses Use your own providers on the welcome step.

## Outcome

Setup is complete with the key saved, the CLI connected and audio checked.
