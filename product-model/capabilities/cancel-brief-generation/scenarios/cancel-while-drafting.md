---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Preparation is still reading or drafting
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Choose Cancel
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Stop the reasoning request and show that cancelling waits for it to finish
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Return to Prepare with the objective and selected context kept
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Cancel while drafting

## Trigger

The person no longer wants the brief being prepared.

## Outcome

No new version is saved; Prepare shows the objective and context as they were.

## Edge cases

- Cancel is unavailable once Savvy is saving the brief.
