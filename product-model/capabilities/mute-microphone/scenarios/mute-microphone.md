---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Mute microphone on the overlay
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Stop capturing microphone and system audio and cancel any recommendation in progress
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Recording
    to: Paused
    facts: []
  - entity: recommendation
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Show Savvy is muted, and with Savvy managed tell the service to pause without waiting for it
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Mute the meeting

## Trigger

The person needs a private moment.

## Outcome

The meeting is muted; nothing is captured, transcribed or metered until it is unmuted.
