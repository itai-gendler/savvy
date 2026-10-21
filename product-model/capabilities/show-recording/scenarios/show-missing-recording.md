---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Show recording in Meeting details
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Recording
  contexts:
    desktop:
      place: desktop::meeting-details
- text: The audio file is no longer in the recordings folder
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-details
- text: Say the recording is unavailable and may have been moved or removed
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-details
---

# Show a recording that is gone

## Trigger

The recording file was moved or removed outside Savvy.

## Outcome

Nothing opens; Savvy says the recording is unavailable.
