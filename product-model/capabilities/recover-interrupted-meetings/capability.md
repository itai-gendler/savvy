---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#run
---

# Recover interrupted meetings

When Savvy launches and finds a meeting still marked as running from before — because Savvy closed unexpectedly — it closes that meeting as Interrupted, ending at the launch time and keeping what was recorded.
