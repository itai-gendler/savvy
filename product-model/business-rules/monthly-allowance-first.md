---
appliesTo:
- type: entity
  id: allowance
references:
- kind: code
  role: implementation
  target: backend/src/billing.ts#balance
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Monthly allowance is spent before packs

Meeting time and briefs come first from allowance that expires soonest — the current monthly period — and then from packs, which never expire. Monthly time not used by the period end expires; there are no automatic overages.
