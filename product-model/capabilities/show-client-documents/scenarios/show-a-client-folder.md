---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Show documents for the chosen client
  kind: actor
  actor: user
  entities:
  - entity: client
    effect: reads
    facts:
    - Name
  contexts:
    desktop:
      place: desktop::prepare
- text: List the folder's files by subfolder with their kind and how many of each group are selected
  kind: product
  entities:
  - entity: source-document
    effect: reads
    facts:
    - Relative path
    - Kind
  contexts:
    desktop:
      place: desktop::prepare
- text: Choose Refresh documents after changing the folder
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Read the folder again and list its current files
  kind: product
  entities:
  - entity: source-document
    effect: reads
    facts:
    - Relative path
    - Kind
  contexts:
    desktop:
      place: desktop::prepare
---

# Show a client's documents

## Trigger

The person wants to see what Savvy will read for this client.

## Outcome

The folder's files are listed by subfolder with their kind and how many are selected.

## Edge cases

- An empty folder shows No documents found in this folder.
- A folder that cannot be read offers Retry reading documents.
- Groups with more than six files start collapsed.
