---
entities:
- entity: settings
  shows:
  - Service mode
  - Signed-in account
  - Transcription Provider
  - Transcription Model
  - Conversation Language
  - Reasoning provider
  - Reasoning Model
  - Context Window
  - Service Tier
  collects:
  - Service mode
  - Transcription Provider
  - Transcription Model
  - Conversation Language
  - Reasoning provider
  - Reasoning Model
  - Context Window
  - Service Tier
- entity: transcription-api-key
  shows:
  - Provider
  collects:
  - Key
- entity: savvy-account
  shows:
  - Name
  - Email
  - Meeting time remaining
  - Briefs remaining
- entity: allowance
  shows:
  - Kind
  - Meeting time
  - Meeting time used
  - Briefs
  - Briefs used
  - Expires
- entity: purchase
  shows:
  - Product
  - Price
  - Hours and briefs
  collects:
  - Product
- entity: subscription
  shows:
  - Paid through
  - Renewal canceled
references:
- kind: code
  role: implementation
  target: src/App.tsx#SettingsView
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Models

The provider settings page, labelled Account while Savvy managed is selected: the service mode, the Savvy account with its plan, usage and payments, the live transcript provider, model, language and API key, and the reasoning provider and model.
