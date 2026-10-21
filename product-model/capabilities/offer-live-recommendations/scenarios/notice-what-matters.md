---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: At least 30 seconds after the last check, two meaningful remote turns or a commitment, objection or decision
    have arrived, or a minute has passed since a remote turn
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-overlay
  unattended: true
- text: Show Checking notes, then Thinking, with Advice still available
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Re-read the brief and notes against the last minute of conversation
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Show a Savvy noticed card citing the turns it noticed
  kind: product
  entities:
  - entity: recommendation
    effect: creates
    to: Completed
    facts:
    - Trigger
    - Say
    - Avoid
    - Rationale
    - Grounding
    - Grounded score
    - Sources
    - Cited turns
    - Language
    - Created
    - Expires
    - Provider and model
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Notice something between triggers

## Trigger

The conversation moves on without a question or a red line.

## Outcome

A Savvy noticed card appears when the provider finds something concrete; otherwise nothing is shown.

## Edge cases

- When the provider finds nothing concrete, no card appears.
