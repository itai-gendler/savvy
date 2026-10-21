---
kind: edge
routes:
  desktop: Desktop
steps:
- text: Untick a selected document in the chosen client's list
  kind: actor
  actor: user
  entities:
  - entity: source-document
    effect: reads
    facts:
    - Relative path
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: The selection cannot be saved
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Say the context selection was not confirmed and offer Retry context selection
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
---

# The selection is not saved

## Trigger

Saving the selection fails.

## Outcome

The documents keep their earlier selection; Savvy asks to save it before preparing a brief or starting, with Retry context selection.
