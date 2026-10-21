---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Select all, or tick a subfolder
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
- text: Save the client's selection with those documents included
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
---

# Select all documents

## Trigger

The person wants every supported document used.

## Outcome

Every supported document of the client is selected.
