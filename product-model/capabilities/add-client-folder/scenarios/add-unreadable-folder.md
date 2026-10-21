---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Add client folder… and pick the folder
  kind: actor
  actor: user
  entities:
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: A document cannot be extracted, or reading takes over 60 seconds, 16 MiB of text or 10,000 passages
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Report that the selected folder could not be indexed and add nothing
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Add a folder that cannot be indexed

## Trigger

The chosen folder holds a document Savvy cannot extract, or more than it reads at once.

## Outcome

Nothing is added and Savvy says the selected folder could not be indexed.
