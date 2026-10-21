---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Refresh
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
- text: The Markdown file is missing, unreadable or over 2 MiB
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Keep the brief as it was and say why
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Refresh from a file that cannot be read

## Trigger

The brief's file was moved, deleted or grew past 2 MiB.

## Outcome

The brief is unchanged and Savvy says why the file could not be read.
