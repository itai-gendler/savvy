---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Choose Markdown file and pick a file
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: The file is not Markdown, is over 2 MiB, or has more than 20 discussion sections
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Refuse and say why the file cannot be used
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Choose a file that cannot be a brief

## Trigger

The chosen file is not Markdown, is larger than 2 MiB, or has more than 20 discussion sections.

## Outcome

Nothing changes and Savvy says why the file cannot be used.
