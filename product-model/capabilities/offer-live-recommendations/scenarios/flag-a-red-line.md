---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: A final turn from either side touches a hard constraint of the brief
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  - entity: brief
    effect: reads
    facts:
    - Red lines
    - Prohibited claims
    - Unauthorized commitments
  contexts:
    desktop:
      place: desktop::meeting-overlay
  unattended: true
- text: 'Show a Red line card at once: pause and clarify scope and authority before agreeing, and avoid the matching
    constraint'
  kind: product
  entities:
  - entity: recommendation
    effect: creates
    to: Local
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
- text: Show Checking a red line while the reasoning provider prepares fuller advice
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Replace the card with the provider's accepted advice, still avoiding the constraint
  kind: product
  entities:
  - entity: recommendation
    effect: changes
    from: Local
    to: Completed
    facts:
    - Say
    - Rationale
    - Grounding
    - Grounded score
    - Sources
    - Cited turns
    - Expires
    - Provider and model
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Flag a red line

## Trigger

Someone on either side says something that touches a red line, prohibited claim or unauthorized commitment.

## Outcome

A Red line card appears at once from the brief alone and is then replaced by the provider's fuller advice.

## Edge cases

- When the provider fails or times out, the Red line card stays.
