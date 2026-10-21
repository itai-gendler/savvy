---
appliesTo:
- type: capability
  id: start-meeting
- type: capability
  id: unmute-microphone
- type: capability
  id: transcribe-meeting
references:
- kind: doc
  role: intent
  target: README.md
- kind: code
  role: implementation
  target: backend/src/sessions.ts#createSession
- kind: code
  role: implementation
  target: backend/src/sessions.ts#lifecycle
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Savvy managed meetings run only on remaining meeting time

Starting or unmuting a Savvy managed meeting needs meeting time on the account. When the time runs out the meeting is muted with assistance paused; adding allowance never resumes it by itself — the person unmutes explicitly. Muted time is not metered, and two audio sources share one meeting clock.
