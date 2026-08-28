# Supernova Dental SEO playbook

Read this file before changing public content, routes, metadata, structured data, internal links, crawl/indexation controls, or performance-sensitive page architecture.

## Objective and guardrails

The commercial objective is to maximise qualified organic visibility for Supernova Dental across relevant private-dentistry searches in Bridgwater and the genuine Somerset catchment, then help visitors confidently book or enquire.

SEO work must remain helpful, factual, clinically responsible, and consistent with the real practice. No implementation can guarantee a ranking position. Never trade patient trust, accessibility, accuracy, performance, or conversion quality for keyword repetition.

Follow current Google Search Central guidance when SEO behaviour may have changed:

- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Search spam policies, including doorway abuse: https://developers.google.com/search/docs/essentials/spam-policies
- Local business structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business

## Local market

- Primary location: Bridgwater, Somerset.
- Canonical practice details currently used by the site: Supernova Building, Marsh Lane, Huntworth Gate, Bridgwater, Somerset, TA6 6LQ; telephone 01278 228665.
- Nearby areas already evidenced in current site content include Taunton, Highbridge, Burnham-on-Sea, and North Petherton. Verify the source and genuine relevance before using any location on a new page.
- Do not automatically target every Somerset town. Add an area only when the practice genuinely serves it and the page provides distinct patient value, such as realistic travel context, treatment relevance, or locally specific information.
- Never create near-duplicate pages whose only meaningful difference is a swapped place name. Recommend one strong regional/service page or a genuinely useful location page instead.

## Search intent and page ownership

Before editing or creating a page:

1. Identify the primary patient intent: practice discovery, treatment research, urgent care, pricing, clinician research, directions, booking, or enquiry.
2. Inspect existing routes and metadata to find the current page that owns that intent.
3. Avoid competing pages targeting the same intent. Consolidate, redirect, or differentiate only when the task authorises it.
4. Choose one natural primary topic and a small set of closely related questions. Do not build comma-separated keyword copy.
5. Preserve the page's real conversion path and ensure the call to action matches the intent.

## On-page requirements

- Give every indexable page a unique, accurate title, description, canonical URL, H1, and useful main content.
- Lead titles and headings with patient meaning. Include Bridgwater where locally relevant, but do not force it into every heading or paragraph.
- Keep heading order logical and make important information available in rendered HTML without requiring animation or interaction.
- Answer likely patient questions clearly: what the service is, who it may suit, what happens next, clinician involvement where verified, location/access, and how to book or enquire.
- Use concise, descriptive internal-link anchor text. Link related treatments, relevant clinicians, pricing, location, and booking pages where useful; avoid repetitive sitewide exact-match anchors.
- Preserve original bios, testimonials, qualifications, GDC numbers, prices, finance terms, and treatment facts. Do not paraphrase regulated or clinical claims unless asked and supported by an authoritative source.
- Alt text should describe the image's purpose/content for users. Do not stuff locations or treatments into decorative or unrelated images.

## Local trust and clinical accuracy

- Keep name, address, telephone, opening hours, map destination, and contact details consistent wherever they appear.
- Structured data must match visible page content and use the most specific supported Schema.org type. Do not add ratings, reviews, awards, offers, prices, staff credentials, or service areas that are not visibly supported and verified.
- For medical/dental guidance, prefer cautious, patient-friendly language. Do not make guarantees about suitability, pain, permanence, safety, or results.
- Preserve genuine practitioner authorship, credentials, testimonials, and attribution. Never fabricate experience signals.

## Technical SEO

- Preserve or deliberately manage canonicals, redirects, sitemap inclusion, robots directives, metadata inheritance, Open Graph data, and JSON-LD when routes change.
- Index only useful public pages. Keep private forms, thin utility pages, duplicated campaigns, and sensitive workflows out of search where appropriate.
- Use Next.js server rendering/static generation and metadata APIs where the codebase supports them. Keep essential content out of client-only rendering.
- Use `next/image` with accurate dimensions or aspect ratios, responsive `sizes`, meaningful alt text, and priority only for genuinely above-the-fold images.
- Protect Core Web Vitals: avoid unnecessary client components, large third-party bundles, layout shift, autoplay media, render-blocking assets, and decorative animation.
- Maintain semantic landmarks, keyboard access, visible focus, readable contrast, and mobile usability. Accessibility and SEO should reinforce each other.

## Content and location-page quality test

Do not publish or recommend a new page unless it has a distinct purpose and can pass these checks:

- It answers a real patient need better than an existing page.
- Its content is substantially unique, not a location or treatment-name substitution.
- Claims and local details are verifiable.
- It has a clear place in the internal-link architecture.
- It offers a useful next step without aggressive sales language.
- It would still deserve to exist if search engines did not.

## Validation and handoff

For SEO-sensitive changes, check the relevant subset of:

- rendered title, description, canonical, robots, headings, links, image attributes, and JSON-LD;
- route status, redirect behaviour, sitemap/robots output, and broken internal links;
- mobile layout, keyboard navigation, reduced motion, and obvious contrast/overflow issues;
- lint, TypeScript, tests where available, and production build;
- diff cleanliness and absence of generated reports/caches.

In the handoff, state the intent targeted, pages affected, facts or sources relied on, checks run, and any measurement or Search Console follow-up needed. Never report that rankings are guaranteed.
