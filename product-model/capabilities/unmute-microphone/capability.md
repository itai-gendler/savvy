---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#resume_meeting
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#set_meeting_listening
- kind: code
  role: implementation
  target: backend/src/sessions.ts#lifecycle
---

# Unmute microphone

Resume listening with Unmute microphone. With Savvy managed the service must still have meeting time; after time runs out, adding allowance never resumes a meeting by itself.
