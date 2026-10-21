---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Start meeting on Before you start
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Savvy managed is the service mode and the account has no meeting time remaining
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
      place: desktop::meeting-readiness
- text: Refuse, saying no meeting time remains and to buy an hours pack
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
---

# Start with no meeting time left

## Trigger

The Savvy account has no meeting time remaining.

## Outcome

No meeting starts; Savvy says no meeting time remains and to buy an hours pack.
