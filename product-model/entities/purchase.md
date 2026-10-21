---
domain: models-and-account
references:
- kind: code
  role: implementation
  target: backend/src/stripe.ts#checkout
- kind: code
  role: implementation
  target: backend/src/stripe.ts#processEvent
- kind: code
  role: implementation
  target: config/managed-catalog.json
---

# Purchase

One checkout attempt for a monthly plan or an hours pack. The offer's price, hours and briefs come from the shared catalog.

## Information kept

- **Product** — Monthly plan or Hours pack.
- **Price** — $79 a month for the monthly plan, $29 once for an hours pack.
- **Hours and briefs** — 10 meeting hours and 20 briefs a month, or 3 hours and 6 briefs per pack.
- **Checkout** — The Stripe-hosted checkout page for this attempt.

## States

### Pending

Checkout has been opened and no payment has been reported yet.

### Payment pending

The payment processor reported a completed checkout whose payment is still settling.

### Complete

Payment confirmed and the allowance added.

### Failed

The payment did not go through; no time or briefs were added.

### Expired

The checkout page expired before payment.
