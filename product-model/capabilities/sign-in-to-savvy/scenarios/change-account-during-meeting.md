---
kind: validation
routes:
  desktop: Desktop and browser
steps:
- text: Finish signing in to a different Savvy account in the browser
  kind: actor
  actor: user
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Email
  contexts:
    desktop:
      place: account-web::sign-in
- text: A meeting or managed request is running
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::models
- text: Refuse the new sign-in and ask to end the meeting and pending requests first
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::models
---

# Sign in to another account during a meeting

## Trigger

A meeting or managed request is running and the person signs in as a different account.

## Outcome

This computer stays on its current account; Savvy asks to end the meeting and pending requests first.
