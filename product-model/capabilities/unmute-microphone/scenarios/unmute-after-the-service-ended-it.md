---
kind: edge
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
- text: The service reports the assisted meeting ended
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Stop and save the meeting and say to start a new one
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Paused
    to: Completed
    facts:
    - Ended
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Unmute after the service ended the meeting

## Trigger

The service no longer has the assisted meeting, for example after it expired.

## Outcome

The meeting is stopped and saved; Savvy says to start a new meeting.
