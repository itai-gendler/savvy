---
domain: models-and-account
references:
- kind: code
  role: implementation
  target: backend/src/billing.ts#insertGrant
- kind: code
  role: implementation
  target: backend/src/billing.ts#balance
- kind: code
  role: implementation
  target: backend/src/stripe.ts#processEvent
---

# Allowance

Meeting time and briefs added to a Savvy account by one paid hours pack or one paid monthly period. Monthly allowance is spent before packs.

## Information kept

- **Kind** — Monthly or Hours pack; a service without billing grants one unmetered allowance instead.
- **Meeting time** — Hours included.
- **Meeting time used** — Time spent by assisted meetings, both audio sources on one meeting clock.
- **Briefs** — Managed briefs included.
- **Briefs used** — Managed briefs prepared.
- **Expires** — The paid period end for monthly allowance; packs have no scheduled expiry.

## States

### Available

Spendable until it expires or runs out.

### Revoked

Withdrawn because the payment that added it was refunded or disputed.
