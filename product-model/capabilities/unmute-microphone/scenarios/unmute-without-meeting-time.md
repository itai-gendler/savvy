---
kind: validation
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
- text: The account has no meeting time remaining
  kind: condition
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Meeting time remaining
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Keep the meeting muted and ask to buy a pack before resuming
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Unmute with no meeting time left

## Trigger

A Savvy managed meeting was muted when its time ran out and no time was added.

## Outcome

The meeting stays muted; Savvy asks to buy a pack before resuming.
