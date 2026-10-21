---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Prepare brief
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: No selected document of the context can be extracted
  kind: condition
  entities:
  - entity: source-document
    effect: reads
    facts:
    - Kind
  contexts:
    desktop:
      place: desktop::prepare
- text: Refuse, saying the folder contains no extractable supported documents
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Prepare a brief with nothing to read

## Trigger

The chosen client has no readable selected documents, or general meetings have no readable guidance folder.

## Outcome

No brief is prepared; Savvy says the folder contains no extractable supported documents.
