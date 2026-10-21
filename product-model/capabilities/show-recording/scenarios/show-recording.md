---
kind: primary
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
- text: Reveal the meeting's audio file in the recordings folder
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Recording
  contexts:
    desktop:
      place: desktop::meeting-details
---

# Show a meeting's recording

## Trigger

The person wants the audio file.

## Outcome

The recording is revealed in the recordings folder.
