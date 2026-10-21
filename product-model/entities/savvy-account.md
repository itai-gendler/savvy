---
domain: models-and-account
relations:
- entity: allowance
  verb: has
  cardinality: one-to-many
- entity: purchase
  verb: makes
  cardinality: one-to-many
- entity: subscription
  verb: has
  cardinality: one-to-many
references:
- kind: code
  role: implementation
  target: backend/src/billing.ts#accountSummary
- kind: code
  role: implementation
  target: backend/src/auth.ts
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Savvy account

A Savvy managed account, created with a Google sign-in or an emailed code. Billing identity is the verified sign-in identity; matching email addresses never merge accounts.

## Information kept

- **Name** — The name from the sign-in identity, if any.
- **Email** — The verified email address.
- **Meeting time remaining** — Minutes left across monthly and pack allowances.
- **Briefs remaining** — Managed briefs left across monthly and pack allowances.
