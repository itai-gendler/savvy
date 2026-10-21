---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Check for updates in the footer
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop
- text: Ask for the latest signed release and say Up to date, or offer the new version
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop
---

# Check for updates from the footer

## Trigger

The person wants to know whether a newer Savvy exists.

## Outcome

The footer says Up to date, or Savvy offers the new version.

## Edge cases

- A failed check says Update check failed and can be retried.
