---
kind: edge
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
- text: The provider cannot verify the key right now
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Say to try again, keeping the saved key unchanged
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
---

# Save a key while the provider is unreachable

## Trigger

The provider cannot be reached to check the key.

## Outcome

Nothing changes; Savvy says the key could not be verified now and the saved key has not changed.
