---
kind: primary
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
- text: Read every supported document in the folder and extract its passages, leaving the files untouched
  kind: product
  entities:
  - entity: client
    effect: creates
    facts:
    - Name
    - Folder
    - Document count
    - Last indexed
    - Indexed passages
  - entity: source-document
    effect: creates
    to: Selected
    facts:
    - Relative path
    - Kind
    - Folder
    with: client
  contexts:
    desktop:
      place: desktop::prepare
- text: Select the new client on Prepare
  kind: product
  entities:
  - entity: client
    effect: reads
    facts:
    - Name
    - Document count
  contexts:
    desktop:
      place: desktop::prepare
---

# Add a client folder

## Trigger

The person prepares for a client Savvy does not know yet.

## Outcome

The client is listed under its folder's name with every supported document selected, and it is the meeting context.
