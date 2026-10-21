---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Plan and usage on the Account page
  kind: actor
  actor: user
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Name
    - Email
  contexts:
    desktop:
      place: desktop::models
- text: Show what remains, the Monthly remaining and Purchased packs balances with their expiry, and renewal
  kind: product
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Meeting time remaining
    - Briefs remaining
  - entity: allowance
    effect: reads
    facts:
    - Kind
    - Meeting time
    - Meeting time used
    - Briefs
    - Briefs used
    - Expires
  - entity: subscription
    effect: reads
    facts:
    - Paid through
    - Renewal canceled
  contexts:
    desktop:
      place: desktop::models
---

# See balances and renewal

## Trigger

The person wants to know how much time and how many briefs are left.

## Outcome

Plan and usage shows the monthly and pack balances, renewal and the time of the last update.

## Edge cases

- Ten minutes or less, two minutes or less, and 80% of included time used each show a warning.
- An account with no allowance shows No plan yet with View plans and pricing.
