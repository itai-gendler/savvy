---
domain: models-and-account
references:
- kind: code
  role: implementation
  target: backend/src/stripe.ts#processEvent
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Subscription

The monthly plan's recurring subscription, mirrored from the payment processor. Signing out or switching to your own providers never cancels it.

## Information kept

- **Paid through** — The end of the last paid period.
- **Renewal canceled** — Whether it ends at the period end instead of renewing.

## States

### Active

Renews each month and adds the next period's allowance when paid.

### Past due

A renewal payment is overdue; paid access ends at the paid-through date.

### Canceled

Ended; purchased packs remain available.
