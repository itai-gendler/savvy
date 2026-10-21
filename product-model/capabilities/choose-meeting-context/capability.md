---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src/App.tsx#MeetingContextSelector
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#get_preparation_snapshot
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#commit_client_scan
---

# Choose meeting context

Choose what the meeting is prepared for under Meeting context: one client, or General guidelines only, which needs no client folder. Choosing a client re-reads its folder so its document count and passages are current, and shows that client's newest brief.
