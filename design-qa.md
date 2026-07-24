# Skills Design QA

## Artifacts

- Source visual truth: `/private/tmp/contact-design-source-education-1440x900.png`
  - Existing Education section used as the portfolio design-system reference; it is not a content-identical Skills mock.
- Desktop implementation: `/private/tmp/skills-implementation-1440x900.png`
- Mobile implementation: `/private/tmp/skills-implementation-mobile-390x844.png`
- Mobile focused regions: `/private/tmp/skills-implementation-mobile-mid-390x844.jpg`, `/private/tmp/skills-implementation-mobile-bottom-390x844.jpg`

## Normalization and State

- Desktop source and implementation: 1440 × 900 CSS px, 1440 × 900 image px, density 1×.
- Mobile implementation: 390 × 844 CSS px, 390 × 844 image px, density 1×.
- State: Japanese locale, Skills selected in the desktop navigation and mobile grouped submenu.
- The source and implementation intentionally show different sections. Comparison is limited to the shared visual system: composition, type hierarchy, paper cards, outline weight, hard shadows, accent palette, chips, navigation state, and responsive behavior.

## Full-view Comparison Evidence

- Fonts and typography: the Skills title uses the same heavy display hierarchy and yellow underline as Education. Mono kickers, strong Japanese card titles, compact descriptions, and small chip labels preserve the established hierarchy. No final text truncation was found.
- Spacing and layout rhythm: the desktop 2 × 2 grid aligns to the same centered content column and card gutters as Education. All four desktop cards are 542 × 318 px. Border radius, 2 px outline, and 4 px hard shadow match the existing system.
- Colors and visual tokens: `#fffdf7` paper, `#26201a` ink, yellow, pink, blue, and pale purple accents match the established sections. Accent fills are restricted to icons, number pills, and core-skill rows so the page remains balanced.
- Image and icon fidelity: Skills has no photographic or branded asset requirement. Existing Material Symbols are used consistently with the rest of the portfolio; no replacement illustration or placeholder is present.
- Copy and content: the four groups are grounded in the existing Experience, Education, and Projects data. Core labels distinguish the primary Vue/Nuxt/TypeScript stack from supporting tools and capabilities.
- Responsive composition: the 390 px viewport has no horizontal overflow (`scrollWidth = 390`). Cards stack vertically, the fixed mobile navigation remains accessible, and every skill name is visible in the focused middle and bottom captures.
- Browser/runtime check: navigation, reload, responsive resizing, and inner-panel scrolling completed without a Nuxt error overlay or page runtime error. Production build completed successfully; only existing sourcemap warnings were reported.

## Focused-region Evidence

- The mobile middle and bottom captures make the longest labels and lower cards readable at native 1× density, including `Composition API`, `Responsive UI`, `API状態管理`, and `共通コンポーネント`.
- Desktop chips and `CORE` labels are readable in the full-view capture, so no additional desktop crop was needed.

## Findings

- No actionable P0, P1, or P2 differences remain.
- P3 follow-up: if the portfolio is later tailored to a specific job description, the ordering and `CORE` markers could be reweighted without changing the layout.

## Comparison History

1. Initial mobile comparison found a P2 information-loss issue: the two-column mobile chip grid truncated `Vue 2 / Vue 3`, `Composition API`, `Responsive UI`, and `共通コンポーネント`.
2. Fix applied in `SkillsPanel.vue`: mobile chips now use one column below `sm`, and text truncation was removed; desktop retains two columns.
3. Post-fix evidence: the 390 px top, middle, and bottom captures show all labels in full, with zero horizontal overflow. No further P0/P1/P2 finding was identified.

## Implementation Checklist

- [x] Match established portfolio tokens and navigation state.
- [x] Organize evidence-backed skills into four recruiter-readable groups.
- [x] Mark core skills without overpowering supporting technologies.
- [x] Verify desktop 1440 × 900 layout.
- [x] Verify mobile 390 × 844 layout and persistent navigation.
- [x] Remove mobile text truncation and re-check all four cards.
- [x] Check browser runtime errors during navigation and responsive interaction.
- [x] Run the production build.

final result: passed
