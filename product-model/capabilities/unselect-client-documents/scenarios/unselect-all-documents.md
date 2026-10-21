---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Select none, or untick a subfolder
  kind: actor
  actor: user
  entities:
  - entity: source-document
    effect: reads
    facts:
    - Relative path
  contexts:
    desktop:
      place: desktop::prepare
- text: Save the client's selection with those documents left out
  kind: product
  entities:
  - entity: source-document
    effect: changes
    from: Selected
    to: Unselected
    facts: []
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Select none

## Trigger

The person wants to start the selection over.

## Outcome

No document of the client is selected.
