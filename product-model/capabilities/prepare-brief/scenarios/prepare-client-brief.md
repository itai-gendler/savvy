---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Enter the objective and choose Prepare brief for the chosen client
  kind: actor
  actor: user
  entities:
  - entity: client
    effect: reads
    facts:
    - Name
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Read the selected client documents and the guidance folder, leaving Savvy's own brief files out
  kind: product
  entities:
  - entity: source-document
    effect: reads
    facts:
    - Relative path
    - Kind
    - Folder
  - entity: client
    effect: reads
    facts: []
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Send the excerpts, brief prompt and objective to the selected reasoning CLI and draft the brief
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts:
    - Reasoning provider
    - Reasoning Model
    - Context Window
    - Service Tier
    - Brief prompt
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Check that every fact cites a provided excerpt, then save the next version as Markdown in Savvy's briefs
    folder
  kind: product
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
      place: desktop::prepare
- text: Open the new brief in the brief review
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
    - Prepared
    - Content
  contexts:
    desktop:
      place: desktop::brief-review
---

# Prepare a client brief with your own provider

## Trigger

The person wants a brief for a client meeting, using their signed-in CLI.

## Outcome

A new brief version is saved as Markdown in Savvy's briefs folder and opened for review.

## Edge cases

- An edited brief prompt is saved before preparation starts.
- A second brief for the same client is refused while one is being prepared.
- A brief that cites evidence it was not given, or lacks a title, objective or outline, is rejected and nothing is saved.
- The objective and selected context stay in place when preparation fails.
