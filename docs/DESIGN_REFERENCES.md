# Supernova Dental design references

Read this file for visual/UI redesigns, component composition, interaction quality, animation decisions, and responsive design reviews. These are quality references only-not templates to copy.

## References

- [UI Skills](https://www.ui-skills.com/)
- [Coss UI](https://coss.com/ui)
- [Design System Checklist](https://designsystemchecklist.com/)
- [ReUI](https://reui.io/components)
- [Aceternity UI](https://ui.aceternity.com/)
- [You Don’t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)

## How to use them

- Use these references to evaluate hierarchy, spacing, typography, composition, responsive behaviour, accessibility, interaction feedback, and animation restraint.
- Adapt useful ideas into the existing Supernova Dental design system, using the current Next.js, Tailwind, component, and dependency conventions.
- Do not copy a reference site’s visual language wholesale. The result must remain warm, premium, clinically trustworthy, personal, and appropriate for a UK private dental practice.
- Do not introduce Coss UI, ReUI, Aceternity, or another component library wholesale. Use existing project dependencies first.
- Do not add a new animation library. Continue using the project’s established `framer-motion` patterns where JavaScript motion is genuinely useful; prefer CSS transitions for simple states.
- Treat animation as optional enhancement. Important content must remain available without animation, and `prefers-reduced-motion` must be respected.
- Avoid generic SaaS patterns, excessive glassmorphism, glowing effects, constant motion, cursor effects, infinite marquees, dramatic parallax, and decorative elements without a clear purpose.
- Check keyboard focus, semantic controls, contrast, touch targets, content hierarchy, and mobile layouts alongside visual polish.

## Supernova-specific direction

The established brand direction is:

> Luxury private clinic meets modern boutique hotel.

Prefer:

- Obsidian/midnight navy, deep blue-black, warm ivory, soft porcelain, restrained champagne gold, warm bronze, and muted taupe/stone.
- Editorial serif headings paired with a clear modern sans-serif.
- Natural photography, generous whitespace, fine rules, thoughtful composition, and calm confidence.
- Premium detail through typography, spacing, material restraint, and hierarchy-not excessive effects.

For service pages, treatment pages, and team pages, adapt the visual language to the content. Do not reuse a staff-card layout for treatments merely because the colours match.
