---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Monthly plan
  kind: actor
  actor: user
  entities:
  - entity: subscription
    effect: reads
    facts:
    - Paid through
  contexts:
    desktop:
      place: desktop::models
- text: The account has a subscription that is not canceled
  kind: condition
  entities:
  - entity: subscription
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::models
- text: Refuse and point to Manage billing for the existing subscription
  kind: product
  entities:
  - entity: subscription
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::models
---

# Subscribe while a monthly plan is active

## Trigger

The account's subscription is still active or past due.

## Outcome

No purchase starts; the monthly plan is managed in billing instead.
