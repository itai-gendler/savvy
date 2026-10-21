---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Tick an unselected document in the chosen client's list
  kind: actor
  actor: user
  entities:
  - entity: source-document
    effect: reads
    facts:
    - Relative path
    - Kind
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Save the client's selection with the document included
  kind: product
  entities:
  - entity: source-document
    effect: changes
    from: Unselected
    to: Selected
    facts: []
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Show how many of the client's documents are selected
  kind: product
  entities:
  - entity: client
    effect: reads
    facts:
    - Document count
  contexts:
    desktop:
      place: desktop::prepare
---

# Select one document

## Trigger

The person wants a previously unselected document used again.

## Outcome

The document is selected and the summary counts it.

## Edge cases

- Preparing a brief and starting a meeting wait until the selection is saved.
