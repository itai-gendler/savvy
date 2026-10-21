---
appliesTo:
- type: capability
  id: offer-live-recommendations
- type: capability
  id: get-advice
references:
- kind: code
  role: implementation
  target: crates/recommendations/src/lib.rs#recommend_from_hard_constraint
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#generation_seed
---

# A touched red line is flagged from the brief at once

When a final turn matches a hard constraint, or Advice is asked about such a turn, a local card appears before the reasoning provider answers, advising to pause and clarify scope and authority and to avoid the matching constraint. The provider's advice replaces it and keeps that constraint as what to avoid; if the provider fails, the card stays.
