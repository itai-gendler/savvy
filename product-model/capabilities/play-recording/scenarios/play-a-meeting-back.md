---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Play recording on a meeting
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Recording
  contexts:
    desktop:
      place: desktop::history
- text: Play it, pausing any other recording, and show the position and length
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::history
- text: Drag Recording position to another moment
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::history
---

# Play a recording

## Trigger

The person wants to listen to part of a meeting.

## Outcome

The recording plays from the chosen position.
