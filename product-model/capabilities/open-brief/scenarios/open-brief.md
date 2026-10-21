---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Open on the brief card
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
- text: Open the brief's Markdown file in the default editor
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Markdown file
  contexts:
    desktop:
      place: desktop
---

# Open the brief in an editor

## Trigger

The person wants to read the full brief or edit it.

## Outcome

The Markdown file opens in the default editor.

## Edge cases

- The preview shows at most 20,000 characters and 200 lines; Open full brief shows all content sent to the provider.
