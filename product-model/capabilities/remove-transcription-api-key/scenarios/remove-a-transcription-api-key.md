---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Remove next to the configured key
  kind: actor
  actor: user
  entities:
  - entity: transcription-api-key
    effect: reads
    facts:
    - Provider
  contexts:
    desktop:
      place: desktop::models
- text: Delete the key from Keychain or Credential Manager and show Enter API key
  kind: product
  entities:
  - entity: transcription-api-key
    effect: removes
  contexts:
    desktop:
      place: desktop::models
---

# Remove an API key

## Trigger

The person no longer wants the key kept.

## Outcome

The key is deleted and the field asks for a key again.
