# VRC SNS Mock

VRChat creator network / commission / circle / event / membership UI mock.

This repository is a static frontend prototype. Open `index.html` directly or serve the folder with a simple local server.

## Codex handoff

Read this first when another Codex instance continues the work:

- [docs/CODEX_HANDOFF.md](docs/CODEX_HANDOFF.md)

That document is the source of truth for current screens, mock data, routes, UX rules, and update policy.

## Files

- `index.html` - app shell, dialogs, views, and static markup anchors.
- `styles.css` - responsive layout, theme styling, buttons, cards, modals, mobile UI.
- `app.js` - all mock data, routing, rendering, state, and interactions.

## Push policy

When making future feature changes, update `docs/CODEX_HANDOFF.md` in the same commit when the change affects screens, routes, data shape, UX rules, or known behavior.
