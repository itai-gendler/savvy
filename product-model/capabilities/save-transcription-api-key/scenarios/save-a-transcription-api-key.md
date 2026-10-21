---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Paste the key for the selected provider and choose Save
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
- text: Check the key with the provider without sending audio
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Keep it in Keychain or Credential Manager and show it as configured
  kind: product
  entities:
  - entity: transcription-api-key
    effect: creates
    facts:
    - Provider
    - Key
  contexts:
    desktop:
      place: desktop::models
---

# Save an API key

## Trigger

The person has an API key for the selected provider.

## Outcome

The key is kept securely and the field shows Configured.

## Edge cases

- Saving replaces the provider's earlier key.
