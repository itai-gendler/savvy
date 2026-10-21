---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Review brief on the brief card
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
  contexts:
    desktop:
      place: desktop::prepare
- text: Show the brief review with the client's name, when it was prepared and its sections
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
    - Prepared
    - Content
  - entity: client
    effect: reads
    facts:
    - Name
  contexts:
    desktop:
      place: desktop::brief-review
- text: Read every page with Next page
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::brief-review
- text: Choose Check readiness on the last page
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::brief-review
- text: Remember the reviewed content and open Before you start
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::meeting-readiness
---

# Review the brief and check readiness

## Trigger

The person is about to hold the meeting.

## Outcome

The reviewed content is remembered and Before you start opens.

## Edge cases

- An empty brief offers no Check readiness; Savvy asks to refresh the file or edit context.
