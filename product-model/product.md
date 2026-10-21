---
id: savvy
summary: A meeting assistant for macOS and Windows that prepares a brief from your own documents and offers source-grounded
  guidance during the live conversation.
category: productivity
tags:
- meetings
- meeting-preparation
- transcription
- negotiation
- desktop
authors:
- name: Alamas Labs, Inc.
license: MIT
languages:
- en
limitations:
- 'Live transcription is not local: meeting audio streams to the selected transcription provider, or through Savvy
  to Deepgram with Savvy managed.'
- Briefs and recommendations come from the person's signed-in Codex CLI or Claude Code, or from Savvy managed; Savvy
  runs no model of its own.
- Source documents, briefs and meeting history stay on the computer where they were made; nothing synchronizes between
  computers.
- Checkout and billing management happen on Stripe-hosted pages; a subscription is canceled there, not in Savvy.
- Savvy runs on macOS 13 or newer and on Windows 11 for x64 PCs.
references:
- kind: doc
  role: intent
  target: README.md
- kind: doc
  role: intent
  target: CONTRIBUTING.md
- kind: doc
  role: context
  target: SECURITY.md
- kind: doc
  role: context
  target: backend/README.md
- kind: code
  role: implementation
  target: config/managed-catalog.json
- kind: code
  role: implementation
  target: src/App.tsx#App
---

# Savvy

Savvy is a desktop meeting assistant for macOS and Windows 11. Before a meeting it prepares a brief from the person's own source documents, scoped to one client or kept general. During the meeting it records locally, transcribes both sides of the conversation and offers short recommendations that cite the brief, the documents or the transcript. People either connect their own transcription key and signed-in Codex CLI or Claude Code, or sign in to Savvy managed, which supplies transcription and AI from an allowance of meeting hours and briefs bought as a monthly plan or hours packs.

## Intent

**Your next meeting, prepared.** Savvy "prepares a brief from your own source documents, then offers source-grounded guidance during a live conversation. Preparation can be scoped to a specific client or kept general."

Two commitments hold the product together, in the project's own words: "A recommendation that cannot be traced back to a source is a bug", and "Provider failures must never stop local recording. Transcription reconnects on its own; a meeting in progress outranks any network call."
