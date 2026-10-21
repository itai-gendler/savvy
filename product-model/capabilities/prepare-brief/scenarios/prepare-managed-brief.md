---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Prepare brief
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Savvy managed is the service mode
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
  contexts:
    desktop:
      place: desktop::prepare
- text: Hold one brief of the allowance and draft the brief with Savvy's AI service
  kind: product
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Briefs remaining
  - entity: source-document
    effect: reads
    facts:
    - Relative path
  - entity: brief
    effect: reads
    facts: []
  - entity: allowance
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Save the next version as Markdown and spend the held brief from the allowance
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
  - entity: allowance
    effect: changes
    facts:
    - Briefs used
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

# Prepare a brief with Savvy managed

## Trigger

The person uses Savvy managed and has briefs remaining.

## Outcome

The brief is saved and one brief is spent from the allowance.

## Edge cases

- Monthly allowance is spent before purchased packs.
- A failed or cancelled managed brief returns the held brief to the allowance.
