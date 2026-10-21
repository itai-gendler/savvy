---
references:
- kind: code
  role: implementation
  target: crates/domain/src/lib.rs#Recommendation
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#resolve_provider_advice
- kind: code
  role: implementation
  target: crates/recommendations/src/lib.rs#recommend_from_hard_constraint
---

# Recommendation

One piece of live guidance shown on a card during a meeting and kept with the meeting's history.

## Information kept

- **Trigger** — Why Savvy spoke up: Answer, for their question; Red line, for a hard constraint touched; Advice, when asked; or Savvy noticed, from the periodic check.
- **Say** — What to say, at most 90 words.
- **Avoid** — What not to say, if anything; the matching hard constraint for a red line.
- **Rationale** — Why this advice applies.
- **Grounding** — Whether it rests on documents, the brief, both, or inference from the transcript.
- **Grounded score** — Shown as a percentage grounded.
- **Sources** — The cited document passages, each with its path and location.
- **Cited turns** — The transcript turns it answers or builds on.
- **Language** — The language it is written in.
- **Created** — When it appeared.
- **Expires** — How long the card stays relevant.
- **Provider and model** — Who produced it: Codex, Claude, Savvy managed, or Savvy's local check of the brief.

## States

### Local

Composed immediately by Savvy from the brief's hard constraints, before or without the reasoning provider.

### Completed

Validated advice from the reasoning provider, replacing the local card when there was one.
