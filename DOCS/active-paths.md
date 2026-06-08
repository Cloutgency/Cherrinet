# Active Paths

This document lists the active frontend routes, backend API endpoints, and important static asset paths for the Cherrinet project.

## Frontend routes (defined in `src/app/routes.ts`)

- `/` — Home ([src/app/pages/home.tsx](src/app/pages/home.tsx))
- `/plans` — Plans ([src/app/pages/plans.tsx](src/app/pages/plans.tsx))
- `/cherrinet-coverage` — Coverage ([src/app/pages/coverage.tsx](src/app/pages/coverage.tsx))
- `/about-us` — About ([src/app/pages/about.tsx](src/app/pages/about.tsx))
- `/support` — Support ([src/app/pages/support.tsx](src/app/pages/support.tsx))
- `/contact-us` — Contact / Enquire ([src/app/pages/enquire.tsx](src/app/pages/enquire.tsx))

### G-Force (sub-route under `/g-force`)

- `/g-force` — G-Force landing ([src/app/gforce/pages/landing.tsx](src/app/gforce/pages/landing.tsx))
- `/g-force/plans` — G-Force Plans ([src/app/gforce/pages/plans.tsx](src/app/gforce/pages/plans.tsx))
- `/g-force/coverage` — G-Force Coverage (re-uses [src/app/pages/coverage.tsx](src/app/pages/coverage.tsx))
- `/g-force/subscribe` — G-Force Subscribe ([src/app/gforce/pages/subscribe.tsx](src/app/gforce/pages/subscribe.tsx))
- `/g-force/support` — G-Force Support (re-uses [src/app/pages/support.tsx](src/app/pages/support.tsx))

`*` (wildcard) — currently falls back to `Layout` / Home

## Backend API

- `POST /api/send-mail` — Mail backend (implemented in `server.js`) — used by `src/app/lib/email.ts`

## Static / Public assets

- `/images/*` — images in `public/images/` (e.g., `cherrinet-favicon.png`, banners)
- Favicon: `/images/cherrinet-favicon.png`

## Notes
- If you add new pages, register them in `src/app/routes.ts` to include them in routing and sitemap generation.
