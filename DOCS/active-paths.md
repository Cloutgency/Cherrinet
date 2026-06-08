# Active Paths

This document lists the active frontend routes, backend API endpoints, and important static asset paths for the Cherrinet project.

## Frontend routes (defined in `src/app/routes.ts`)

- `/` — Home ([src/app/pages/home.tsx](src/app/pages/home.tsx))
- `/plans` — Plans ([src/app/pages/plans.tsx](src/app/pages/plans.tsx))
- `/coverage` — Coverage ([src/app/pages/coverage.tsx](src/app/pages/coverage.tsx))
- `/about` — About ([src/app/pages/about.tsx](src/app/pages/about.tsx))
- `/support` — Support ([src/app/pages/support.tsx](src/app/pages/support.tsx))
- `/enquire` — Enquire ([src/app/pages/enquire.tsx](src/app/pages/enquire.tsx))

### GForce (sub-route under `/gforce`)

- `/gforce` — GForce landing ([src/app/gforce/pages/landing.tsx](src/app/gforce/pages/landing.tsx))
- `/gforce/plans` — GForce Plans ([src/app/gforce/pages/plans.tsx](src/app/gforce/pages/plans.tsx))
- `/gforce/coverage` — GForce Coverage (re-uses [src/app/pages/coverage.tsx](src/app/pages/coverage.tsx))
- `/gforce/subscribe` — GForce Subscribe ([src/app/gforce/pages/subscribe.tsx](src/app/gforce/pages/subscribe.tsx))
- `/gforce/support` — GForce Support (re-uses [src/app/pages/support.tsx](src/app/pages/support.tsx))

`*` (wildcard) — currently falls back to `Layout` / Home

## Backend API

- `POST /api/send-mail` — Mail backend (implemented in `server.js`) — used by `src/app/lib/email.ts`

## Static / Public assets

- `/images/*` — images in `public/images/` (e.g., `cherrinet-favicon.png`, banners)
- Favicon: `/images/cherrinet-favicon.png`

## Notes
- If you add new pages, register them in `src/app/routes.ts` to include them in routing and sitemap generation.
