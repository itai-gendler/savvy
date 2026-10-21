---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#start_meeting
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#start_meeting_inner
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#build_context_pack
- kind: code
  role: implementation
  target: src-tauri/src/brief_document.rs#load_reviewed
- kind: code
  role: implementation
  target: src/App.tsx#App
- kind: code
  role: implementation
  target: backend/src/sessions.ts#createSession
---

# Start meeting

Start listening with Start meeting on Before you start. Savvy builds the meeting's context from the reviewed brief, the guidance folder and the selected client documents, records the microphone to a local file, starts transcription and shows the meeting overlay. With Savvy managed, the service first checks the brief and context with its AI supplier, without using allowance, and opens the account's one assisted meeting.
