---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Start meeting on Before you start
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: The selected transcription provider has no API key
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Transcription Provider
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Refuse and ask to add the provider's API key in Models
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
---

# Start without a transcription key

## Trigger

Your own providers are in use and the selected transcription provider has no key.

## Outcome

No meeting starts; Savvy asks to add the provider's API key in Models.
