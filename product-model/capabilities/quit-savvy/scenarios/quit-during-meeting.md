---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Quit Savvy while a meeting is running
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop
- text: Stop and save the meeting first
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Recording
    to: Completed
    facts:
    - Ended
    - Transcript
  contexts:
    desktop:
      place: desktop
- text: Stop the reasoning CLIs and exit
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop
---

# Quit during a meeting

## Trigger

The person quits Savvy while a meeting is running.

## Outcome

The meeting is completed and saved, the reasoning CLIs stop, and Savvy exits.
