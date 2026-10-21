---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Edit the brief's Markdown file elsewhere, then choose Refresh
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts:
    - Markdown file
  contexts:
    desktop:
      place: desktop::prepare
- text: Read the file and take the sections from its headings, the constraint sections becoming the hard constraints
  kind: product
  entities:
  - entity: brief
    effect: changes
    facts:
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
- text: Show the refreshed brief
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::prepare
---

# Refresh an edited brief

## Trigger

The person edited the brief's Markdown in another editor.

## Outcome

The brief shows the edited content, and its hard constraints follow the edited headings; it must be reviewed again before a meeting.

## Edge cases

- A file whose text still matches the generated brief keeps its evidence links.
