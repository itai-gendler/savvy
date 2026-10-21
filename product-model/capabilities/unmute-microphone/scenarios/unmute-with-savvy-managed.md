---
kind: alternate
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
- text: Savvy managed is the service mode and meeting time remains
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
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
- text: Resume the assisted meeting on the service, then capture and transcription
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Paused
    to: Recording
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Unmute a Savvy managed meeting

## Trigger

A Savvy managed meeting is muted and the account has meeting time.

## Outcome

The service resumes the assisted meeting and the meeting is recording again.
