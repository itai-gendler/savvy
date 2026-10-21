---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Change Microphone only or System Audio Output
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Microphone only
    - System Audio Output
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
- text: Refuse and ask to stop the meeting first
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::general
---

# Change audio capture during a meeting

## Trigger

The person turns Microphone only on or off, or changes the Windows System Audio Output, while a meeting runs.

## Outcome

The setting is unchanged; Savvy asks to stop the meeting first.
