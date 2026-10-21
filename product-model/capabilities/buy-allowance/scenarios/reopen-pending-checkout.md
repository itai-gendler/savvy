---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Retry pending hours pack, or Reopen pending checkout
  kind: actor
  actor: user
  entities:
  - entity: purchase
    effect: reads
    facts:
    - Product
  contexts:
    desktop:
      place: desktop::models
- text: Reopen the pending purchase's checkout page
  kind: product
  entities:
  - entity: purchase
    effect: reads
    facts:
    - Checkout
  contexts:
    desktop:
      place: desktop::models
---

# Reopen a pending checkout

## Trigger

A purchase of the same product is still pending.

## Outcome

The same purchase's checkout page opens again; no second purchase starts.
