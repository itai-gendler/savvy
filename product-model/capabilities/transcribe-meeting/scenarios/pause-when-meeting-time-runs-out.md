---
kind: edge
routes:
  desktop: Desktop
steps:
- text: A Savvy managed meeting is recording
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
  unattended: true
- text: The account's meeting time runs out
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
- text: Spend the remaining time from the allowance and stop relaying audio
  kind: product
  entities:
  - entity: allowance
    effect: changes
    facts:
    - Meeting time used
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: 'Mute the meeting and say the included time ran out: add time, then explicitly resume'
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Recording
    to: Paused
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Run out of meeting time

## Trigger

A Savvy managed meeting uses the last of the account's meeting time.

## Outcome

The meeting is muted with assistance paused; it resumes only when the person adds time and unmutes.

## Edge cases

- Muted time is not metered, and two audio sources share one meeting clock.
