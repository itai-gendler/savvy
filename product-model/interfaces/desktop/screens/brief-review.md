---
entities:
- entity: client
  shows:
  - Name
- entity: brief
  shows:
  - Title
  - Prepared
  - Markdown file
  - Content
references:
- kind: code
  role: implementation
  target: src/App.tsx#BriefReview
- kind: code
  role: implementation
  target: src/lib/briefReview.ts
---

# Your meeting brief

Review the brief in use, page by page when it is long, before checking readiness; open the full Markdown file or refresh from it.
