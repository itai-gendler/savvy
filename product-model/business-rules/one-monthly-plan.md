---
appliesTo:
- type: capability
  id: buy-allowance
- type: entity
  id: subscription
references:
- kind: code
  role: implementation
  target: backend/src/stripe.ts#checkout
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# An account holds one monthly plan at a time

Monthly plan checkout is refused while the account has a subscription that is not canceled; it is managed in billing instead. Hours packs can be bought at any time.
