---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose General guidelines only in the context selector
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Show the newest general brief, if any
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
    - Version
    - Prepared
    - Content
  contexts:
    desktop:
      place: desktop::prepare
---

# Choose general guidelines only

## Trigger

The meeting is not for a particular client.

## Outcome

General guidelines only is the meeting context and the newest general brief, if any, is shown.
