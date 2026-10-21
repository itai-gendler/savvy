---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Remove client and confirm
  kind: actor
  actor: user
  entities:
  - entity: client
    effect: reads
    facts:
    - Name
  contexts:
    desktop:
      place: desktop::prepare
- text: A brief for that client is being prepared
  kind: condition
  entities:
  - entity: brief
    effect: reads
    facts: []
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Refuse and ask to cancel brief generation first
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Remove a client while its brief is being prepared

## Trigger

A brief for the client is still being prepared.

## Outcome

Nothing is removed; Savvy asks to cancel brief generation first.
