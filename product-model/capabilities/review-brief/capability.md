---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src/App.tsx#BriefReview
- kind: code
  role: implementation
  target: src/lib/briefReview.ts
- kind: code
  role: implementation
  target: src-tauri/src/brief_document.rs#verify_review
---

# Review brief

Read the brief in use before a meeting with Review brief. A brief longer than one page is reviewed page by page, and Check readiness is offered only on the last page. Savvy remembers the reviewed content, and a meeting starts only with exactly that content.
