---
appliesTo:
- type: capability
  id: prepare-brief
- type: capability
  id: cancel-brief-generation
references:
- kind: code
  role: implementation
  target: backend/src/billing.ts#reserveBrief
- kind: code
  role: implementation
  target: backend/src/billing.ts#settleBriefSuccess
- kind: code
  role: implementation
  target: backend/src/billing.ts#releaseBrief
---

# Each Savvy managed brief uses one brief from the allowance

A managed brief holds one brief from the allowance when it starts, spends it when the brief is saved, and returns it when preparation fails or is cancelled. With no briefs remaining, preparation is refused.
