---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#cleanup_expired_meetings
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#cleanup_orphaned_meeting_files
- kind: doc
  role: intent
  target: README.md
---

# Remove expired meetings

At each launch, delete meetings that ended more than 30 days ago, with their recordings, transcripts and recommendations, and any leftover files of meetings that no longer exist. An interrupted meeting counts from when it started.
