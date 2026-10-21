---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Advice on the overlay
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Clear the current card and show Checking notes, then Getting advice
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Send the latest turn with the brief, passages and recent conversation to the reasoning provider
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  - entity: source-document
    effect: reads
    facts:
    - Relative path
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Show an Advice card and keep it with the meeting
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
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Ask for advice

## Trigger

The person wants guidance at this moment.

## Outcome

An Advice card shows what to say and its source.

## Edge cases

- Advice appears once the first transcript turn exists.
- Advice is unavailable while Savvy is answering a question or checking a red line.
