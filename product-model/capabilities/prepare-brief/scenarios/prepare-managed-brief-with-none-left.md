---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Prepare brief
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Savvy managed is the service mode and the account has no briefs remaining
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
  - entity: savvy-account
    effect: reads
    facts:
    - Briefs remaining
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Refuse, saying no brief allowance remains
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts: []
  - entity: allowance
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Prepare a managed brief with none remaining

## Trigger

The Savvy account has no briefs left.

## Outcome

No brief is prepared; Savvy says no brief allowance remains and to buy an hours pack or wait for renewal.
