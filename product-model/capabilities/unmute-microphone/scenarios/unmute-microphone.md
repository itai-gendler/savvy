---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Unmute microphone on the overlay
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Resume capturing the microphone and, unless microphone only is set, system audio
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Paused
    to: Recording
    facts: []
  - entity: settings
    effect: reads
    facts:
    - Microphone only
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Show Savvy is listening
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Unmute the meeting

## Trigger

The person is ready to be heard again.

## Outcome

The meeting is recording again and the overlay says Savvy is listening.
