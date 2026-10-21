---
kind: primary
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
    - Kind
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Save the client's selection with the document left out
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

# Unselect one document

## Trigger

A document should not inform this client's briefs or meetings.

## Outcome

The document is unselected, the summary reads x of y documents selected, and the file stays in the folder.
