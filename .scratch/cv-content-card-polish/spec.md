# CV Content And Card Polish

Status: ready-for-agent

## Problem Statement

The current public CV has the right core content and editorial direction, but several presentation details weaken scanability and hierarchy. List items do not visibly communicate as bullets, the Skills section lacks icon anchors, and Minswap is separated into a standalone flagship section even though it should read as the first Role inside Work Experience.

The CV owner wants the page to keep the warm gradient card language that already works well, apply that treatment more consistently, and add a stronger Minswap statement that the frontend application was built from scratch.

## Solution

Polish the CV presentation while preserving the one-page static site. Lists should show visible leading bullet dots where the content is naturally a list. Skill Groups should gain one icon per group using the existing icon system. Minswap should move into Work Experience as the first Role, with the separate flagship section and `Flagship Role` label removed.

Minswap should retain its Impact Metrics inside the first Work Experience card, keep slightly stronger visual prominence than the other cards, and gain a new bullet explaining that the Minswap frontend application was built from scratch. Skills, Work Experience, Projects, Education, and Awards should share the current gradient card language so the CV feels consistent without losing hierarchy.

## User Stories

1. As a CV visitor, I want list items to have visible bullet dots, so that role and project details are easier to scan.
2. As a recruiter, I want Work Experience points to read as clear bullets, so that I can quickly evaluate responsibilities and impact.
3. As a technical interviewer, I want Project points to read as clear bullets, so that I can understand product scope without parsing dense paragraphs.
4. As a CV visitor, I want Education and Awards content to retain clear visual structure, so that academic context remains easy to scan.
5. As a CV owner, I want bullet styling to match the existing visual language, so that the page does not feel mechanically formatted.
6. As a CV visitor, I want each Skill Group to have an icon, so that the Skills section has stronger visual anchors.
7. As a recruiter, I want one icon per Skill Group rather than one icon per individual skill, so that Skills remain scannable and not visually noisy.
8. As a maintainer, I want the new icons to use the existing icon system, so that the site does not add an unnecessary dependency.
9. As a technical interviewer, I want the Frontend Skill Group to remain prominent, so that frontend leadership is easy to notice.
10. As a Web3 reviewer, I want the Web3 / Cardano Skill Group to be visually distinct, so that ecosystem experience is easy to find.
11. As an AI-forward engineering team, I want the AI & Agents Skill Group to be visually distinct, so that practical AI-assisted development experience is visible.
12. As a recruiter, I want Minswap to appear as the first Role in Work Experience, so that the professional Role order remains coherent.
13. As a CV visitor, I want the separate Flagship Minswap section removed, so that the page has less section fragmentation.
14. As a CV owner, I want the `Flagship Role` label removed, so that the page no longer over-explains the hierarchy.
15. As a hiring manager, I want Minswap to keep stronger visual prominence than other Roles, so that the strongest experience is still obvious.
16. As a recruiter, I want Minswap Impact Metrics preserved, so that scale and outcomes remain easy to evaluate.
17. As a technical interviewer, I want the active traders, successful trades, and ADA volume metrics preserved, so that production scale remains clear.
18. As an engineering manager, I want the bundle-size and build-time metrics preserved, so that engineering improvement work remains measurable.
19. As a CV owner, I want Minswap Impact Metrics inside the Minswap Work Experience card, so that the metrics are attached to the correct Role.
20. As a technical interviewer, I want Minswap to state that the frontend application was built from scratch, so that ownership of the original frontend foundation is explicit.
21. As a technical interviewer, I want the built-from-scratch statement to include architecture, core trading flows, and reusable frontend foundations, so that the claim is specific.
22. As a recruiter, I want the Minswap title, dates, and technology details preserved, so that the Role remains complete after moving sections.
23. As a CV visitor, I want all major content cards to share a consistent card style, so that the page feels cohesive.
24. As a CV owner, I want the current gradient card feeling preserved, so that the redesign keeps the visual treatment I prefer.
25. As a CV visitor, I want Skills cards to use the shared gradient card style, so that the Skills section feels as polished as Work Experience.
26. As a recruiter, I want Work Experience cards to use the shared gradient card style, so that each Role is visually grouped.
27. As a technical reviewer, I want Project cards to use the shared gradient card style, so that Projects remain distinct and readable.
28. As a CV visitor, I want Education and Awards cards to use the shared gradient card style, so that the lower sections feel finished.
29. As a maintainer, I want Minswap metric tiles to remain compact inside the Minswap card, so that nested content does not overwhelm the page.
30. As a mobile visitor, I want the polished cards and icons to remain readable on narrow screens, so that the CV stays usable on phones.
31. As a desktop visitor, I want the gradient cards to preserve the editorial feel, so that the page still feels warm and senior.
32. As a maintainer, I want the update scoped to existing CV content, rendering, and styling structures, so that the change remains reviewable.
33. As a maintainer, I want no new routes or server behavior, so that the static CV architecture remains unchanged.
34. As a CV owner, I want screenshot-based UI testing excluded for this pass, so that implementation can focus on content and code-level verification.
35. As a future agent, I want the spec to use the project glossary terms, so that implementation language stays consistent.

## Implementation Decisions

- Keep the public artifact as a CV and continue using the existing single-page structure.
- Keep the static export architecture and avoid adding server behavior.
- Preserve the current editorial visual direction while refining its section hierarchy.
- Restore visible bullet dots for role, project, and education-style lists where content is naturally line-by-line.
- Do not convert Skill Group items into full bullet lists; keep Skills compact.
- Add one icon to each Skill Group.
- Use the existing icon system for new Skill Group icons.
- Do not add a new icon dependency.
- Move Minswap from a separate flagship section into Work Experience as the first Role.
- Remove the standalone Flagship Minswap section.
- Remove the `Flagship Role` label.
- Preserve Minswap as the visually strongest Work Experience card.
- Keep Minswap Impact Metrics attached to the Minswap Role inside Work Experience.
- Preserve the existing Minswap metrics: active traders, successful trades, ADA volume, bundle-size reduction, and build-time reduction.
- Keep Minswap metric tiles compact inside the Minswap card.
- Add the Minswap point: “Built the Minswap frontend application from scratch, establishing the initial architecture, core trading flows, and reusable frontend foundations.”
- Preserve the rest of Minswap's technical and leadership points unless implementation requires minor copy ordering for readability.
- Preserve all other Roles and keep Work Experience in reverse-chronological order.
- Apply a shared gradient card style to Skills, Work Experience, Projects, Education, and Awards.
- Let Minswap keep a slightly stronger gradient treatment than other cards.
- Keep the implementation scoped to the existing content model, page rendering, and global styling.
- This spec supersedes the previous decision to show Minswap as a separate flagship section, while preserving the older ADR's intent that Minswap receives stronger visual emphasis and metric treatment.

## Testing Decisions

- Test at the rendered CV page seam. This is the highest useful seam because the feature is presentation, content hierarchy, and public CV behavior.
- Tests should assert user-visible output and stable semantic structure, not component names or CSS implementation details.
- Verify that Work Experience contains Minswap as the first Role.
- Verify that there is no separate Flagship Minswap section.
- Verify that the `Flagship Role` label is absent.
- Verify that Minswap Impact Metrics still render with the Minswap Role.
- Verify that the new Minswap built-from-scratch point renders.
- Verify that Skill Groups render with icons.
- Verify that visible list semantics remain intact for role and project details.
- Verify that linting succeeds.
- Verify that the static build succeeds.
- Use manual browser review if desired, but screenshot-based UI testing is out of scope for this pass.
- Existing prior art is command-level verification through lint and build scripts. No dedicated test framework is currently established for this CV site, so avoid adding one solely for this polish pass.

## Out of Scope

- Creating implementation tickets in this step.
- Taking screenshots to test the UI.
- Adding a new icon package.
- Adding new routes.
- Changing deployment or GitHub Pages static export behavior.
- Rewriting the full CV content beyond the agreed Minswap point and section placement.
- Removing Minswap Impact Metrics.
- Turning every individual skill into its own iconized item.
- Adding animation-heavy presentation work.
- Replacing the current editorial direction with a different design system.

## Further Notes

- The accepted testing seam is the rendered CV page, plus lint and static build verification.
- The implementation should respect the current lightweight dependency model.
- The user intends to create implementation tickets later.
