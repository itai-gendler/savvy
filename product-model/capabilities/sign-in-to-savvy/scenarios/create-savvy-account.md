---
kind: alternate
routes:
  desktop: Desktop and browser
steps:
- text: Choose Create account on the welcome step
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Open the sign-in page titled Create account in the browser
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Enter an email address, then the 6-digit code emailed to it
  kind: actor
  actor: user
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Email
  contexts:
    desktop:
      place: account-web::sign-in
- text: Create the Savvy account with no plan and hand the sign-in back to Savvy
  kind: product
  entities:
  - entity: savvy-account
    effect: creates
    facts:
    - Name
    - Email
    - Meeting time remaining
    - Briefs remaining
  contexts:
    desktop:
      place: account-web::sign-in
- text: Keep the sign-in, select Savvy managed and continue to audio access
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Signed-in account
    - Service mode
  contexts:
    desktop:
      place: desktop::setup
---

# Create an account during setup

## Trigger

A new person chooses Create account on the welcome step of setup.

## Outcome

The account exists with no plan, this computer is signed in, Savvy managed is selected and setup continues to audio access.

## Edge cases

- Signing in with an address that has no account creates one the same way.
