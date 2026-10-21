---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Edit context while reviewing
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
  contexts:
    desktop:
      place: desktop::brief-review
- text: Return to Prepare
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Go back to edit context

## Trigger

The review shows the brief needs other documents or a different objective.

## Outcome

Prepare opens again with nothing marked as reviewed.
