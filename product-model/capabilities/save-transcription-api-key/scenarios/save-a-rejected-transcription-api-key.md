---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Paste a key and choose Save
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
- text: The provider rejects the key
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Say the provider rejected the key and to check it and its permissions
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
---

# Save a key the provider rejects

## Trigger

The key is wrong or lacks permissions.

## Outcome

Nothing is saved; Savvy says the provider rejected the key.
