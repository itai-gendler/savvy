---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Markdown file while no brief is in use
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Pick a .md or .markdown file
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Read the file and create the next brief version from it, taking its sections and hard constraints from its
    headings
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
---

# Choose a Markdown file as the brief

## Trigger

The person already wrote a brief.

## Outcome

The file is the newest brief version for the context, named after the file.

## Edge cases

- Its response language is the current conversation language.
