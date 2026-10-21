---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Check microphone
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::general
- text: A meeting is running
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::general
- text: Refuse and ask to end the meeting before checking audio
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::general
---

# Check audio during a meeting

## Trigger

The person starts an audio check while a meeting runs.

## Outcome

No check runs; Savvy asks to end the meeting first.
