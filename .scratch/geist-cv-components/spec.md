# Spec: Geist-style CV Components

Status: ready-for-agent

## Problem Statement

The current CV is a public document-style page, but its UI primitives do not yet consistently reflect Vercel's Geist Design System. The CV should keep its recruiter-friendly reading flow while adopting a sharper, more coherent Geist-inspired visual language: self-hosted Geist typography, precise spacing, restrained borders, subtle buttons, and badge-style metadata.

The user wants this change specified before implementation so the work can move through the local markdown issue flow instead of jumping directly from grilling to code changes.

## Solution

Update the CV page so the existing document structure remains intact, but its local UI primitives are restyled and lightly reshaped around Geist visual language. The solution should use local components and CSS tokens rather than adopting the archived `geist-ui` React package.

The CV should remain light-only, static-export compatible, and simple to maintain. It should still read like a CV, not like a Vercel product clone. The page should use Geist Sans for primary text, Geist Mono for precise metadata such as dates, periods, and small labels, Geist-style badges for tech stacks, subtle border-based sections, and restrained action buttons.

## User Stories

1. As a CV visitor, I want the page to feel polished and precise, so that the candidate presents as a senior engineer with strong product taste.
2. As a recruiter, I want the CV to retain a direct document-style reading flow, so that I can scan experience without learning a custom interface.
3. As a hiring manager, I want experience entries to remain easy to compare, so that I can quickly understand company, title, period, impact, and technologies.
4. As a CV visitor, I want the visual hierarchy to be clear, so that I can distinguish the candidate identity, Objective, Roles, Projects, education, and awards at a glance.
5. As a mobile visitor, I want the CV to remain readable on narrow screens, so that I can review it from a phone without horizontal scrolling.
6. As a desktop visitor, I want the CV to use comfortable width and spacing, so that long work history text remains readable.
7. As a CV visitor, I want contact links to remain visible and accessible, so that I can email, call, view GitHub, or identify location easily.
8. As a CV visitor, I want action buttons to be restrained and recognizable, so that contact and download actions are available without dominating the document.
9. As a recruiter, I want tech stacks to appear as compact badges, so that I can scan technologies faster than reading a long inline sentence.
10. As a recruiter, I want each Role's technologies grouped with that Role, so that I can connect skills to real work history.
11. As a recruiter, I want each Project's technologies grouped with that Project, so that I can distinguish professional Role experience from Project experience.
12. As a CV visitor, I want date ranges to look like precise metadata, so that the timeline is easy to scan.
13. As a CV visitor, I want section titles to be visually consistent, so that the CV feels cohesive from top to bottom.
14. As a CV visitor, I want the page to avoid heavy decorative cards, so that the CV remains professional and content-led.
15. As a CV visitor, I want the page to avoid Vercel branding, so that it feels inspired by Geist rather than impersonating Vercel.
16. As the CV owner, I want the implementation to use local components, so that future content edits do not depend on a stale third-party component library.
17. As the CV owner, I want the Geist font to be self-hosted, so that builds do not depend on fetching Google fonts or other remote font resources.
18. As the CV owner, I want the site to remain compatible with static export, so that GitHub Pages deployment continues to work.
19. As the CV owner, I want light-only theming, so that the page remains simple and print-friendly.
20. As a user printing the CV, I want print output to remain clean and readable, so that the browser-generated document can be shared offline.
21. As a future agent, I want the styling decision recorded in the spec and ADR, so that implementation does not accidentally install archived Geist UI packages.
22. As a future agent, I want the CV domain language to stay consistent, so that implementation uses CV, Role, and Project as the canonical terms.
23. As a maintainer, I want existing CV content to remain unchanged, so that the update is purely presentation-focused.
24. As a maintainer, I want the local component set to stay small, so that the page remains easy to reason about.
25. As a visitor using assistive technology, I want links, headings, and content order to remain semantic, so that the CV is navigable without visual layout.

## Implementation Decisions

- Keep the CV as a single document-style page. Do not reintroduce a large marketing hero, metrics panel, navigation-heavy layout, or product-dashboard structure.
- Apply Geist visual language through local UI primitives and CSS tokens, following ADR-0002.
- Do not install or use the archived `geist-ui` React package.
- Add the maintained `geist` font package and use its self-hosted Sans and Mono fonts through Next.js-compatible imports.
- Use Geist Sans for the main CV typography.
- Use Geist Mono for precise metadata such as Role periods, education period, awards period, section labels if used, and small technical metadata.
- Keep the page light-only. Do not add dark mode, theme toggles, or persisted appearance settings.
- Keep the existing CV sections: Objective, Work Experience, Personal Projects, Education, and Certifications - Honors & Awards.
- Convert existing CV UI primitives rather than adding unrelated new sections or flows.
- Treat `Section`, Role rendering, Project rendering, contact links, action buttons, award rows, and technology metadata as the local component surface to update.
- Convert Role and Project tech stacks from inline text into Geist-style badges.
- Badges should be compact, readable, and designed for short metadata. They should not become oversized pills or decorative chips.
- Preserve contact and download actions. The existing PDF path can remain a placeholder unless a real PDF is added separately.
- Preserve RemixIcon usage for contact/action icons unless a later implementation decision explicitly replaces the icon set.
- Avoid Vercel logos, Vercel trademarks, or any layout that suggests affiliation with Vercel.
- Preserve static export compatibility for GitHub Pages.
- Keep CV content data-driven from the existing structured CV data model.
- Avoid adding animation unless it is extremely restrained and does not affect print or readability.
- Preserve print-friendly behavior, including hiding screen-only actions where appropriate.
- The implementation should be scoped to presentation and dependency changes needed for Geist fonts. It should not alter the CV content.

## Testing Decisions

- Test at the highest useful seam: the generated static CV page.
- A good test checks external behavior and user-visible output, not internal CSS implementation details.
- Run lint to catch TypeScript, React, accessibility, and framework issues.
- Run the production build to verify static export compatibility.
- Smoke-check the homepage locally or against the generated output to ensure the CV route returns successfully.
- Confirm the rendered page still exposes the expected CV sections in semantic order.
- Confirm contact links remain present and usable.
- Confirm Role and Project tech stacks render as visible badge-style metadata.
- Confirm the self-hosted Geist font integration does not require remote font fetching during build.
- Confirm the light-only print path remains usable and screen-only controls do not pollute print output.
- Prior art in this repo is command-level verification: `pnpm lint`, `pnpm build`, and a homepage HTTP smoke check.

## Out of Scope

- Changing the CV's written content.
- Adding new sections such as hobbies, blog posts, testimonials, or case studies.
- Adding dark mode.
- Adding Vercel branding, logos, or trademarked presentation.
- Installing or adopting archived `geist-ui`.
- Replacing RemixIcon.
- Adding a real PDF asset for the download button.
- Changing GitHub Pages deployment behavior.
- Creating implementation tickets; this spec only defines the update.

## Further Notes

This spec follows ADR-0002: the CV should use local Geist-style components rather than a component package. The work should respect the domain glossary: `CV`, `Role`, and `Project` are the canonical terms for this context.

The expected implementation path after this spec is `/to-tickets`, then `/implement` per ticket.
