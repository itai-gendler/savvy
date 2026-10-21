---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Open History
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::history
- text: List meetings newest first with client, start, duration, state and recording
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Context
    - Started
    - Ended
    - Recording
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::history
---

# List past meetings

## Trigger

The person wants to find an earlier meeting.

## Outcome

History lists the meetings with their client, start, duration and state.

## Edge cases

- With no meetings, History says recordings stay on this Mac or PC.
- A meeting whose recording file is gone shows Audio unavailable.
