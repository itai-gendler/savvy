---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Savvy launches and finds a meeting still recording
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop
  unattended: true
- text: Mark the meeting interrupted, ending now
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Recording
    to: Interrupted
    facts:
    - Ended
  contexts:
    desktop:
      place: desktop
- text: List it in History as interrupted
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Context
    - Started
    - Ended
    - Recording
  contexts:
    desktop:
      place: desktop::history
---

# Close an interrupted meeting at launch

## Trigger

Savvy closed unexpectedly during a meeting and is launched again.

## Outcome

History lists the meeting as interrupted with its recording and transcript so far.

## Edge cases

- A meeting left muted is closed the same way.
