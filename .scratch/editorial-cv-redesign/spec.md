# Editorial CV Redesign

Status: ready-for-agent

## Problem Statement

The current public CV site presents Nguyễn Thái Bảo's experience as a compact document-style page. It contains the right professional content, but the UI does not yet communicate the strength of the CV quickly enough for senior engineering evaluation. The page should feel closer to the warm, polished, preserving the existing static GitHub Pages deployment model.

The visitor should immediately understand that Nguyễn Thái Bảo is a senior full stack developer with strong frontend leadership, full-stack delivery experience, Cardano/Web3 depth, production infrastructure exposure, and modern AI-assisted engineering practice. The current page buries the strongest proof points, especially the Minswap metrics, inside long work-experience bullets.

## Solution

Redesign the public CV as a one-page, typography-first, warm editorial CV with a stronger content hierarchy. The page should keep the existing static site shape and remain focused on the CV, but should read more like a senior-engineer portfolio narrative at the top and a detailed CV below.

The first viewport should contain Nguyễn Thái Bảo's name, the `0xj4m35` handle as secondary identity, the title `Senior Full Stack Developer`, a concise homepage intro rewritten from the longer objective, primary calls to action for email contact and CV download, and compact public contact links. The phone number should not appear in public page links, though it may remain in source CV data for private or PDF usage.

The page should use the following section order: Hero, Skills, Flagship Minswap, Work Experience, Projects, Education/Awards, Contact. Skills should be summarized in a condensed categorized grid, while detailed technologies remain associated with the relevant roles and projects. Minswap should be treated as the flagship role with stronger visual weight and metric treatment for active traders, successful trades, ADA volume, bundle-size improvement, and build-time improvement.

The download CTA should target the local CV PDF asset. The implementation must make the missing PDF asset explicit as acceptance criteria so the public download action does not ship broken.

## User Stories

1. As a recruiter, I want to understand Nguyễn Thái Bảo's seniority within the first viewport, so that I can quickly decide whether the CV matches a senior full stack role.
2. As a hiring manager, I want the site to foreground real production impact, so that I can judge the candidate by outcomes rather than only technology keywords.
3. As a visitor, I want the page to feel polished and intentional, so that the candidate's CV feels credible before I read every detail.
4. As a recruiter, I want the title to say `Senior Full Stack Developer`, so that the positioning is clear and aligned with the stated experience.
5. As a visitor, I want to see `Nguyễn Thái Bảo` as the primary name and `0xj4m35` as a secondary handle, so that I can connect the professional identity to the GitHub identity.
6. As a visitor, I want a concise intro instead of a dense objective paragraph in the hero, so that I can understand the CV quickly.
7. As a recruiter, I want the longer objective content preserved in the CV data, so that detailed CV material is not lost.
8. As a visitor, I want email contact to be a primary action, so that I can reach out immediately.
9. As a recruiter, I want a download CV action, so that I can save or forward the candidate's CV.
10. As the CV owner, I want the download action to use a local PDF asset, so that the site stays self-contained on static hosting.
11. As the CV owner, I want the implementation to verify that the CV PDF exists, so that the public download action is not broken.
12. As the CV owner, I want the phone number hidden from public page links, so that the public site reduces spam exposure.
13. As the CV owner, I want the phone number retained in source CV data, so that private CV or PDF workflows can still use it.
14. As a visitor, I want compact public contact links for email, GitHub, and location, so that I can find the most useful channels without clutter.
15. As a visitor, I want a minimal navigation with Experience, Projects, and Contact, so that I can jump to the highest-value sections.
16. As a mobile visitor, I want navigation and calls to action to remain usable on small screens, so that the CV works during quick review.
17. As a desktop visitor, I want the page to use generous whitespace and refined typography, so that longer CV content remains easy to scan.
18. As a recruiter, I want skills grouped into clear categories, so that I can evaluate fit across frontend, backend, Web3, infrastructure, AI-assisted engineering, process, leadership, and English proficiency.
19. As a technical interviewer, I want frontend skills to include React.js, Next.js, Redux, Jotai, Context API, Tailwind CSS, design systems, performance optimization, and scalable frontend architecture, so that I can see the candidate's frontend range.
20. As a technical interviewer, I want backend skills to include Node.js, REST APIs, GraphQL, CronJobs, microservices, and distributed systems, so that I can see full-stack capability.
21. As a technical interviewer, I want data-store skills to include PostgreSQL, Redis, Elasticsearch, TimescaleDB, database design, and query optimization, so that I can evaluate data experience.
22. As a technical interviewer, I want messaging and streaming skills to include Kafka, RabbitMQ, and event-driven architecture, so that I can evaluate distributed-system experience.
23. As a Web3 team, I want Cardano, CIP-30 wallets, Ledger integration, DEX/trading applications, and on-chain/off-chain integration experience to be prominent, so that I can assess ecosystem fit.
24. As an engineering leader, I want DevOps and observability skills to include Docker, CI/CD, bare-metal infrastructure, Sentry, Grafana, production monitoring, troubleshooting, and performance optimization, so that I can understand operational maturity.
25. As an AI-forward engineering team, I want Claude Code, Codex, MCP, and agent skills represented clearly, so that I can see practical AI-assisted development experience.
26. As a hiring manager, I want leadership skills represented directly, so that frontend lead and mentoring experience are not hidden inside work history.
27. As a visitor, I want Minswap presented as the flagship role, so that the strongest work is easy to find.
28. As a recruiter, I want Minswap metrics shown with visual emphasis, so that 262K+ active traders, 6.4M+ successful trades, and 10B+ ADA trading volume stand out.
29. As a technical interviewer, I want Minswap architecture and implementation details to remain visible, so that the CV still supports deep technical discussion.
30. As a hiring manager, I want frontend leadership at Minswap to be explicit, so that team leadership and review responsibility are clear.
31. As a product-minded reviewer, I want advanced trading experiences such as TradingView charts, trading terminal platform, Ledger support, and CIP-30 wallet integration preserved, so that product complexity is visible.
32. As a partner or platform reviewer, I want reusable Trading Widget libraries and SDK work preserved, so that platform-thinking experience is visible.
33. As a backend reviewer, I want GraphQL, REST API, PostgreSQL, and CronJobs contributions preserved, so that full-stack scope is clear.
34. As an infrastructure reviewer, I want bare-metal infrastructure, Docker, CI/CD, and Sentry work preserved, so that production ownership is clear.
35. As a technical reviewer, I want the 50% bundle-size reduction and build-time reduction from 5 minutes to 40 seconds highlighted, so that engineering improvement work is measurable.
36. As a recruiter, I want the remaining work experience to stay complete but less visually dominant than Minswap, so that the page keeps hierarchy without losing history.
37. As a recruiter, I want One Mount Group, Teko Vietnam, and BraveBits Company roles preserved with dates, titles, bullets, and technologies, so that the career timeline is complete.
38. As a visitor, I want CloudBook and FPT Education Recruitment System displayed as project cards, so that personal and academic product work is visible without overwhelming the page.
39. As a technical reviewer, I want project technologies preserved, so that older platform experience remains discoverable.
40. As a recruiter, I want education, GPA, honors, and awards preserved, so that academic context and recognition remain available.
41. As a visitor, I want a contact section at the end, so that there is a clear final action after reading the CV.
42. As a visitor, I want the site to avoid a portrait or avatar placeholder, so that the design remains clean without weak visual assets.
43. As the CV owner, I want the visual direction to be inspired by the reference site rather than copied, so that the page feels personal and original.
44. As the CV owner, I want the design to stay static-export compatible, so that GitHub Pages deployment remains simple.
45. As a maintainer, I want the redesign scoped to content data, the rendered CV page, global styling, and metadata when needed, so that the implementation stays small and reviewable.
46. As a maintainer, I want no new routes for this redesign, so that the one-page CV remains the central artifact.
47. As a maintainer, I want deployment workflow changes out of scope, so that the redesign does not disturb already-decided hosting architecture.
48. As a visitor using assistive technology, I want semantic headings, section order, and link labels to remain meaningful, so that the CV is navigable without relying on visual layout alone.
49. As a mobile visitor, I want no horizontal scrolling or overlapping text, so that the CV remains readable on narrow screens.
50. As a maintainer, I want the build and lint commands to pass, so that the static site remains healthy after the redesign.

## Implementation Decisions

- Keep the public artifact canonicalized as a **CV**, matching the existing domain glossary.
- Keep the site as a single-page CV rather than adding multiple routes.
- Preserve the existing static export and GitHub Pages architecture.
- Redesign toward a warm, refined, editorial visual direction inspired by the reference site, without copying exact colors, spacing, or layout.
- Keep a typography-first design and do not add a portrait, avatar, or placeholder image.
- Use `Nguyễn Thái Bảo` as the primary display name and `0xj4m35` as secondary identity.
- Change the public professional title to `Senior Full Stack Developer`.
- Rewrite the hero intro into shorter homepage copy derived from the full objective.
- Preserve the full objective content in CV data for detailed CV usage.
- Use email contact and download CV as primary calls to action.
- Keep GitHub visible as a secondary public contact channel.
- Hide the phone number from public page links.
- Retain the phone number in source CV data for private or PDF workflows.
- Keep location visible as Hanoi, Vietnam.
- Add a minimal navigation with Experience, Projects, and Contact.
- Use the section order: Hero, Skills, Flagship Minswap, Work Experience, Projects, Education/Awards, Contact.
- Add a condensed categorized skills grid before the flagship Minswap section.
- Keep detailed technology tags attached to each role and project.
- Treat Minswap as the flagship role with stronger visual hierarchy than other roles.
- Highlight Minswap metrics for active traders, successful trades, ADA trading volume, bundle-size reduction, and build-time improvement.
- Preserve the complete work history and all role dates, titles, bullets, and technology lists.
- Preserve CloudBook and FPT Education Recruitment System as project cards.
- Preserve education, GPA, honors, and awards.
- Keep metadata aligned with the new `Senior Full Stack Developer` positioning.
- The CV download CTA must target the local PDF asset.
- The redesign should explicitly require that the local PDF asset exists before the download CTA is considered complete.
- Do not add deployment workflow changes as part of this feature.
- Do not add separate content routes as part of this feature.

## Testing Decisions

- Test at the rendered CV page seam. This is the highest useful seam because the feature is primarily public presentation, content hierarchy, links, and static rendering.
- Tests should assert external behavior and user-visible output, not component internals or CSS implementation details.
- Verify that the page renders the new primary identity, title, concise intro, public contact links, calls to action, minimal navigation, skills grid, flagship Minswap section, remaining roles, projects, education, awards, and final contact section.
- Verify that the phone number does not appear in public rendered links or visible public contact UI.
- Verify that the download CV link points to the local CV PDF asset and that the asset exists.
- Verify that semantic section order matches the agreed page order.
- Verify that the static build succeeds.
- Verify linting succeeds.
- Include a responsive smoke check for mobile width to catch horizontal scrolling, overlapping text, and unusable navigation or CTA layout.
- Existing prior art is command-level verification in the repo through lint and build scripts. No dedicated test framework is currently present, so additional automated tests should be added only if the implementation introduces an established test seam.

## Out of Scope

- Creating multiple routes such as a separate CV page, project page, or contact page.
- Changing the GitHub Pages static export deployment architecture.
- Adding or changing deployment workflow automation.
- Creating a blog, writing section, or case-study route.
- Pixel-cloning the reference site.
- Adding a portrait, avatar, or generated personal image.
- Building a contact form or server-backed contact flow.
- Removing the phone number from source CV data.
- Replacing the local CV PDF download with an external storage provider.
- Rewriting the full professional history beyond the agreed content updates.
- Creating implementation tickets in this step. Ticket creation is reserved for a later `to-ticket` pass.

## Further Notes

- The current public assets do not include the expected CV PDF. The future implementation issue should call this out as a required acceptance criterion.
- The content should continue to use the CV vocabulary from the project glossary.
- The design should remain polished but restrained: senior engineering credibility matters more than animation, decoration, or marketing-page flourish.
