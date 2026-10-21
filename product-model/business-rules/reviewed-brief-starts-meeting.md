---
appliesTo:
- type: capability
  id: review-brief
- type: capability
  id: check-readiness
- type: capability
  id: start-meeting
- type: capability
  id: refresh-brief-from-file
references:
- kind: code
  role: implementation
  target: src-tauri/src/brief_document.rs#verify_review
- kind: code
  role: implementation
  target: src/lib/api.ts#startMeeting
- kind: code
  role: implementation
  target: src/App.tsx#BriefReview
---

# A meeting starts only with the brief content that was reviewed

Check readiness from Your meeting brief remembers the exact content reviewed, and Start meeting is refused when the brief's content differs, for example after Refresh. A brief longer than one page must be paged through to its last page first.

## Rationale

The brief's Markdown is sent whole to the reasoning provider and its constraint sections drive live red-line checks, so the person approves what the meeting will actually use.
