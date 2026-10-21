---
kind: primary
result: achieved
routes:
  desktop: Desktop
steps:
- text: Choose Add client folder… and pick the folder
  kind: actor
  actor: user
  capability: add-client-folder
  entities:
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Add the client with its documents selected and select it on Prepare
  kind: product
  capability: add-client-folder
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
- text: Enter the objective and choose Prepare brief
  kind: actor
  actor: user
  capability: prepare-brief
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Draft and save the brief, then open it in the brief review
  kind: product
  capability: prepare-brief
  entities:
  - entity: brief
    effect: creates
    facts:
    - Title
    - Version
    - Prepared
    - Markdown file
    - Content
    - Objective
    - Positions
    - Priorities
    - Discussion outline
    - Desired outcomes
    - Questions to ask
    - Facts and evidence
    - Concessions
    - Red lines
    - Prohibited claims
    - Unauthorized commitments
    - Risks
    - Instructions
    - Response language
  contexts:
    desktop:
      place: desktop::brief-review
---

# Add a client and prepare its brief

## Trigger

The person prepares for a new client.

## Outcome

The new client is the meeting context and its first brief is open for review.
