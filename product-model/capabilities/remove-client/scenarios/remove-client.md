---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Remove client for the chosen client
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
- text: Confirm Remove in Remove client?
  kind: actor
  actor: user
  entities:
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Delete the client with its briefs, generated brief files, meetings, recordings, transcripts and passages,
    leaving its folder untouched
  kind: product
  entities:
  - entity: client
    effect: removes
  - entity: brief
    effect: removes
    with: client
  - entity: meeting
    effect: removes
    from: Completed
    with: client
  - entity: recommendation
    effect: removes
    from: Completed
    with: meeting
  - entity: source-document
    effect: removes
    from: Selected
    with: client
  contexts:
    desktop:
      place: desktop::prepare
- text: Show Prepare for the next client, or for general guidelines
  kind: product
  entities:
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Remove a client

## Trigger

The person no longer needs a client in Savvy.

## Outcome

The client and its local briefs and meeting history are gone; the folder and its files are unchanged.
