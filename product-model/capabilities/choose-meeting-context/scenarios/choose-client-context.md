---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose a client in the context selector on Prepare
  kind: actor
  actor: user
  entities:
  - entity: client
    effect: reads
    facts:
    - Name
    - Document count
  contexts:
    desktop:
      place: desktop::prepare
- text: Re-read the client's folder and refresh its document count and passages
  kind: product
  entities:
  - entity: client
    effect: changes
    facts:
    - Document count
    - Last indexed
    - Indexed passages
  contexts:
    desktop:
      place: desktop::prepare
- text: Show the client's newest brief, if any
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
    - Version
    - Prepared
    - Content
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Choose a client

## Trigger

The person prepares for one client's meeting.

## Outcome

The client is the meeting context with its current document count and its newest brief, if any.

## Edge cases

- When the folder cannot be read, the client keeps the passages and count from its last successful reading.
