# Supernova Dental frontend instructions

## Standing objective

Build and maintain a fast, accessible, clinically trustworthy website that helps Supernova Dental earn strong organic visibility and qualified patient enquiries for relevant dental searches in Bridgwater and genuinely served nearby Somerset areas. Treat first-place rankings as an ambition, never a guarantee or a reason to use spammy tactics.

## Context-efficient workflow

- Start with `git status` and inspect only files relevant to the request. Prefer `rg`/`rg --files`; exclude `.next`, generated output, caches, dependencies, and unrelated routes.
- Do not read large documents or scan the whole repository by default.
- For work that can affect public search performance-page copy, routes, metadata, canonicals, structured data, headings, internal links, images/alt text, sitemap/robots, redirects, crawlability, indexation, or material Core Web Vitals-read `docs/SEO.md` before editing.
- For visual/UI redesigns, read `docs/DESIGN_REFERENCES.md` before making design decisions. Do not load it for backend, tooling, SEO-only, or unrelated maintenance work.
- Skip `docs/SEO.md` for isolated internal refactors, tests, tooling, or styling changes with no SEO, semantic, accessibility, or performance impact.
- Reuse established components and dependencies. Make the smallest coherent change and avoid unrelated cleanup.

## Non-negotiables

- Never invent treatments, prices, qualifications, GDC numbers, awards, reviews, results, opening hours, service areas, clinical claims, or staff details.
- Preserve working booking, enquiry, telephone, WhatsApp, maps, analytics/consent, metadata, schema, navigation, and footer behaviour unless the task explicitly changes them.
- Write for prospective patients first. Avoid keyword stuffing, hidden text, duplicated location swaps, doorway pages, fake urgency, and unsupported superlatives.
- Keep Next.js/Tailwind conventions, semantic HTML, WCAG-conscious interaction, descriptive images, responsive layouts, and restrained client-side JavaScript.
- Do not promise ranking outcomes. Explain SEO changes in terms of relevance, clarity, crawlability, local trust, performance, and conversion quality.

## Validation

- Use the narrowest relevant checks while iterating.
- For public routes or SEO-sensitive changes, run lint, TypeScript checking, and a production build when practical; report missing scripts and pre-existing warnings separately.
- Before handoff, confirm that only intentional source/documentation changes remain and remove generated reports or build artefacts from the diff.
