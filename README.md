# CodeCroupier / C-Chip Dashboard

React + Vite implementation of the C-Chip admin dashboard, themed with the
**"Black Diamond Protocol"** palette (see `1.Master_Theme_Black_Diamond_Reserve_v1.txt`).

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Folder structure

```
codecroupier-dashboard/
├── index.html                 # HTML shell, loads Google Fonts (Montserrat / Inter / JetBrains Mono)
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Root: renders TopNav + active page
│   ├── constants/
│   │   └── nav.js              # Nav items + Transactions sub-tabs
│   ├── styles/
│   │   ├── theme.css           # Color/type/radius design tokens (CSS variables)
│   │   └── dashboard.css       # All component + layout styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Logo.jsx
│   │   │   ├── StatusTicker.jsx   # Signature protocol status strip under the nav
│   │   │   └── TopNav.jsx
│   │   └── common/
│   │       ├── Card.jsx
│   │       ├── MetricCard.jsx
│   │       ├── Buttons.jsx        # PrimaryButton, SecondaryButton
│   │       ├── SearchBar.jsx
│   │       ├── Pagination.jsx
│   │       ├── EmptyState.jsx
│   │       └── SectionTitle.jsx
│   └── pages/
│       ├── DashboardPage.jsx
│       ├── FarmingPage.jsx        # (was "Deposit")
│       ├── DirectEarnedPage.jsx
│       ├── PassiveBonusPage.jsx   # (was "Affiliate" / "Level Income")
│       ├── TeamsPage.jsx
│       ├── TransactionsPage.jsx
│       └── ListPage.jsx           # shared search+list template
```

## Notes

- Navigation lives entirely in the **top bar** (no sidebar) and is shared
  across every page via `App.jsx` — matching the requested single-layout
  structure.
- All colors/fonts are defined once as CSS variables in `src/styles/theme.css`,
  sourced directly from the Black Diamond Protocol theme doc. Change a value
  there to re-theme the whole app.
- `ListPage.jsx` is a shared template for Farming, Direct Earned, and Passive
  Bonus so their search bar / pagination / empty-state markup stays identical
  — Transactions reuses the same primitives but adds its own sub-tab row.
- Wallet connect, search, and pagination are currently wired to local state
  only (no backend calls) — hook them up to your contract/API layer as
  needed.
