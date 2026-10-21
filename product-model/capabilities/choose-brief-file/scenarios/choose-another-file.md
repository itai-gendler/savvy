---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Choose another file on the brief card
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
    - Markdown file
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
- text: Point the brief in use at the file and take its content, sections and hard constraints from it
  kind: product
  entities:
  - entity: brief
    effect: changes
    facts:
    - Markdown file
    - Content
    - Facts and evidence
    - Concessions
    - Instructions
    - Objective
    - Positions
    - Priorities
    - Discussion outline
    - Desired outcomes
    - Questions to ask
    - Red lines
    - Prohibited claims
    - Unauthorized commitments
    - Risks
  contexts:
    desktop:
      place: desktop::prepare
---

# Choose another file for the brief in use

## Trigger

The brief in use should come from a different Markdown file.

## Outcome

The brief in use reads from the new file; evidence links and generation instructions from before are dropped.
