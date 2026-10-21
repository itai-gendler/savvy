---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Unselect brief and confirm Remove
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
  contexts:
    desktop:
      place: desktop::prepare
- text: Forget every brief version of the chosen context, leaving their Markdown files on disk
  kind: product
  entities:
  - entity: brief
    effect: removes
  contexts:
    desktop:
      place: desktop::prepare
- text: Offer to generate or choose a new brief
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Unselect the brief

## Trigger

The person wants the meeting to run without a brief.

## Outcome

Prepare offers Add a meeting brief; the brief files are still on disk.
