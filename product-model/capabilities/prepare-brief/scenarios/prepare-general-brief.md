---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: With General guidelines only chosen, choose Prepare brief
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: The guidance folder holds documents Savvy can read
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Guidance folder
  contexts:
    desktop:
      place: desktop::prepare
- text: Draft the brief from guidance excerpts, the brief prompt and the objective with the reasoning provider
  kind: product
  entities:
  - entity: source-document
    effect: reads
    facts:
    - Relative path
    - Folder
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Save the next general version as Markdown and open it in the brief review
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
      place: desktop::brief-review
---

# Prepare a general brief

## Trigger

The meeting has no client; the person wants a brief from the general guidelines.

## Outcome

A new general brief version is saved and opened for review.
