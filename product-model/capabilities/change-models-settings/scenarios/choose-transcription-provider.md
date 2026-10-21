---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose a Transcription Provider on Models
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Transcription Provider
  contexts:
    desktop:
      place: desktop::models
- text: Save the provider with its first model and that model's first language
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
      place: desktop::models
- text: Show whether that provider's API key is configured
  kind: product
  entities:
  - entity: transcription-api-key
    effect: reads
    facts:
    - Provider
  contexts:
    desktop:
      place: desktop::models
---

# Choose a transcription provider

## Trigger

The person wants AssemblyAI instead of Deepgram, or the reverse.

## Outcome

The provider is saved with its first model and language, and the page shows whether its key is configured.

## Edge cases

- A model that does not support the current language switches the language to the model's first.
