---
entities:
- entity: client
  shows:
  - Name
  - Document count
- entity: source-document
  shows:
  - Relative path
  - Kind
- entity: settings
  shows:
  - Guidance folder
  - Brief prompt
  - Conversation Language
  - Reasoning provider
  - Service mode
  collects:
  - Brief prompt
  - Conversation Language
- entity: brief
  shows:
  - Title
  - Version
  - Prepared
  - Markdown file
  - Content
  collects:
  - Instructions
references:
- kind: code
  role: implementation
  target: src/App.tsx#PrepareView
- kind: code
  role: implementation
  target: src/App.tsx#MeetingContextSelector
- kind: code
  role: implementation
  target: src/App.tsx#ClientDocumentList
- kind: code
  role: implementation
  target: src/App.tsx#BriefPreview
- kind: code
  role: implementation
  target: src/App.tsx#BriefGenerationProgress
---

# Prepare for your meeting

The Prepare page: choose the meeting context — a client or general guidelines only — see and select its documents, set the guidance folder and the meeting objective, prepare or choose the brief and check readiness. Brief preparation progress is shown here while it runs.
