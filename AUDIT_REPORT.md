# Audit Report: gaze-beauty.ru

Date: 2026-05-07
Scope: https://gaze-beauty.ru/ and repository https://github.com/milowqo/gaze-sochi-beauty.git

## 1. Brief Summary

The site is a Vite + React + TypeScript static frontend deployed on GitHub Pages. No production server, database, admin panel, CI logs, or backend logs were available in this audit scope.

The most important fixed issues are vulnerable frontend/dev dependencies, oversized image assets, tracked environment file hygiene, missing browser-level security policy, lint errors, unsafe external window opening, duplicate footer rendering, and missing reduced-motion support.

Items that still need owner-side attention: GitHub Pages cannot set full HTTP security headers such as HSTS and X-Frame-Options from this repository alone; configure those at the hosting/CDN layer if the site is moved behind a controllable CDN. Supabase RLS/auth rules could not be verified without project access.

## 2. Findings Table

| ID | Category | Description | Severity | Where | Risk | Fix | Status | Verification |
|---|---|---:|---|---|---|---|---|---|
| A-01 | Dependencies | 16 npm audit findings, including high severity router/build-tool advisories | High | package-lock.json | XSS/open redirect and build/dev tooling exposure | Ran safe audit fix and updated Vite/SWC/tagger compatible versions | Fixed | `npm audit --audit-level=moderate`: 0 vulnerabilities |
| A-02 | Performance | Large JPG assets, up to 2.36 MB each | High | src/assets/*.jpg | Slower LCP and mobile load | Recompressed large hero/gallery images without changing imports | Fixed | Build assets now 119-289 KB for optimized images |
| A-03 | Security | `.env` tracked with public Supabase anon config | Medium | .env | Environment drift and accidental future secret leakage | Removed tracked `.env`, added `.env.example`, ignored env files | Fixed | `git diff` shows `.env` deleted and `.gitignore` updated |
| A-04 | Security | No CSP/referrer policy in app HTML | Medium | index.html | Wider XSS/data leakage blast radius | Added CSP meta policy and strict referrer policy | Fixed | Local HTML includes policy |
| A-05 | Code Quality | ESLint failed on empty interface types and CommonJS require | Medium | command.tsx, textarea.tsx, tailwind.config.ts | Failing quality gate | Converted to type aliases and ESM import | Fixed | `npm run lint`: 0 errors |
| A-06 | UX/Security | External buttons used `window.open` without noopener/noreferrer | Medium | src/pages/Index.tsx | Reverse-tabnabbing risk | Centralized safe external opener | Fixed | Code review and lint pass |
| A-07 | UX/Accessibility | Motion effects ignored reduced-motion preference | Low | src/index.css | Accessibility discomfort | Added `prefers-reduced-motion` CSS override | Fixed | CSS present and build passes |
| A-08 | Performance | Gallery images loaded eagerly | Low | src/components/Gallery.tsx | Unnecessary initial bandwidth/decoding | Added `loading="lazy"` and async decoding | Fixed | Code review and build pass |
| A-09 | SEO | Sitemap lastmod was stale | Low | public/sitemap.xml | Less accurate crawl signal | Updated lastmod to audit date | Fixed | File diff |
| A-10 | Hosting | Missing HSTS/security headers on live GitHub Pages response | Medium | Live HTTP headers | Browser hardening incomplete | Documented hosting-layer requirement; partially mitigated CSP via meta | Needs Review | `curl -I https://gaze-beauty.ru/` |

## 3. Security

Fixed: dependency advisories, tracked env hygiene, CSP/referrer meta policy, external link opener hardening, lint errors that blocked CI-quality enforcement.

Not verifiable in current scope: Supabase database policies, auth/session behavior, webhooks, file uploads, admin roles, server firewall, backup routines, production logs, and rate limiting. The public app does not expose local forms, payments, uploads, or login flows in the repository version audited.

Additional hosting recommendations: enable HSTS, X-Content-Type-Options, Permissions-Policy, and X-Frame-Options or frame-ancestors via CDN/hosting that supports response headers.

## 4. Performance

Before build snapshot: hero and gallery images emitted at 353 KB to 2.36 MB; JS 353.84 KB raw / 112.53 KB gzip; CSS 69.38 KB raw / 12.10 KB gzip.

After build snapshot: optimized images emitted at 119 KB to 289 KB; JS 345.63 KB raw / 109.49 KB gzip; CSS 67.29 KB raw / 12.07 KB gzip.

Optimized: large images, lazy gallery loading, async image decoding, duplicate footer removal.

Remaining bottlenecks: third-party scripts (GTM, Yandex Metrika, Dikidi widget) can still affect INP/LCP and should be measured with field data or Lighthouse in staging/production.

## 5. Bugs

Fixed lint-blocking TypeScript/ESM issues and duplicate footer rendering. No backend runtime bugs were testable because this is a static frontend and no server/API credentials were provided.

## 6. SEO And Accessibility

Fixed: stale sitemap date, reduced-motion support, more accurate hero alt text, duplicate footer removal.

Existing SEO metadata and structured data for BeautySalon were present and readable on the live page. Direct non-root URLs on GitHub Pages return GitHub's 404; this is acceptable for the current one-page sitemap, but should be revisited if more routes are added.

## 7. Code Changes

Changed files: `.gitignore`, `.env.example`, `index.html`, `package.json`, `package-lock.json`, `public/sitemap.xml`, `src/App.tsx`, `src/pages/Index.tsx`, `src/components/Gallery.tsx`, `src/components/ui/command.tsx`, `src/components/ui/textarea.tsx`, `src/index.css`, `tailwind.config.ts`, and optimized JPG assets under `src/assets`.

Potential risks: Vite major update should be checked in CI/staging before production deployment. Removing tracked `.env` requires deployment env vars to be configured wherever Supabase is actually used.

## 8. Checks

Executed:

- `npm ci`
- `npm audit fix`
- `npm install --save-dev vite@8.0.10 @vitejs/plugin-react-swc@4.3.0`
- `npm install --save-dev lovable-tagger@1.3.0`
- `npm run lint`
- `npm run build`
- `npm audit --audit-level=moderate`
- `curl -I https://gaze-beauty.ru/`
- `curl -L https://gaze-beauty.ru/robots.txt`
- `curl -L https://gaze-beauty.ru/sitemap.xml`
- Local HTTP smoke check at `http://127.0.0.1:8080/`

Results: build passes, audit reports 0 vulnerabilities, lint has 0 errors and 7 existing Fast Refresh warnings in shadcn UI files.

## 9. Recommendations

Urgent: deploy dependency/image/security fixes to staging first, then production; configure production env vars outside git; review Supabase RLS policies.

Medium term: add CI with `npm ci`, `npm run lint`, `npm run build`, and `npm audit --audit-level=moderate`; add Lighthouse CI budgets for image weight and LCP.

Long term: move behind a CDN that supports security headers and cache policies; consider route-level/static pre-rendering if more pages are added.

## 10. Rollback Plan

The work was done on branch `audit-hardening-fixes`; original upstream state remains at `origin/main`.

Rollback options:

- Before merge: switch back to `main` or delete the branch.
- After merge: revert the merge commit or revert the individual commit containing these changes.
- For image-only rollback: restore the JPG files from `origin/main`.
- For env rollback: do not recommit `.env`; restore required values in the deployment environment instead.
