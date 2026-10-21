---
appliesTo:
- type: capability
  id: offer-live-recommendations
- type: capability
  id: get-advice
references:
- kind: doc
  role: intent
  target: README.md
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#skip_generation_without_provider
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#choose_healthy_provider
---

# Savvy thinks only with a usable reasoning provider

With your own providers, Savvy never thinks while neither Codex CLI nor Claude Code is signed in; it shows one notice per meeting instead. With Savvy managed it needs a signed-in account. When the selected CLI is not signed in but the other is, Savvy uses the other.
