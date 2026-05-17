---
name: Start Up Validator Design
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b6b5b4'
  tertiary: '#fff9f0'
  on-tertiary: '#3a3000'
  tertiary-container: '#ffdb3f'
  on-tertiary-container: '#736000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffe16c'
  tertiary-fixed-dim: '#e7c427'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  stat-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1200px
---

## Brand & Style

The design system is engineered for the "Startup Validation" platform, evoking a sense of clinical precision, high-speed data processing, and technical authority. The aesthetic is rooted in **Techno-Minimalism**, merging the austerity of high-end developer tools with the vibrant energy of futuristic interfaces.

The UI should feel like a sophisticated instrument—uncluttered, objective, and efficient. By utilizing deep blacks and sharp accent glows, the system directs the user's focus entirely toward market data and validation metrics. There is an intentional absence of decorative imagery, relying instead on structural integrity, mathematical spacing, and superior typography to convey brand value.

## Colors

This design system utilizes a **Pure Dark** palette to maximize contrast and reduce visual fatigue during deep-work sessions.

- **Primary (Electric Cyan):** Used exclusively for high-priority actions, validation success states, and data highlights. It should feel "energized."
- **Neutrals:** The background is a true `#000000` to allow the screen to recede. Secondary surfaces use varying shades of deep grey to create structural hierarchy without traditional shadows.
- **Data Visualization:** Use the primary cyan for positive trends and a muted slate-grey for secondary data. Semantic colors (Red/Amber) should be desaturated but high-luminance to pop against the black background.

## Typography

The typography strategy emphasizes a "technical readout" feel. 

- **Headlines:** Space Grotesk provides a geometric, slightly futuristic character for high-level information.
- **Body:** Geist offers a neutral, highly legible sans-serif experience optimized for technical density.
- **Labels & Data:** JetBrains Mono (monospaced) is used for all metadata, status labels, and numeric validation scores to reinforce the "marketing assistant as an engine" metaphor.

All text should maintain high contrast. Use white (`#FFFFFF`) for primary headers and a 60% opacity white (`#999999`) for secondary body text to maintain clear information hierarchy.

## Layout & Spacing

The design system follows a strict **4px baseline grid** to ensure mathematical consistency. 

- **Grid Model:** A 12-column fluid grid for desktop, collapsing to 4 columns for mobile.
- **Hierarchy:** Elements are grouped into distinct modules with significant "negative space" between logical sections, while internal padding within modules remains tight (12px–20px) to feel compact and professional.
- **Alignment:** All data points must be strictly aligned to the left grid edge. Visual separators (thin lines) should be used instead of large gaps to define the layout structure.

## Elevation & Depth

In this dark-only environment, depth is achieved through **Luminance and Outlines** rather than traditional soft shadows.

- **Tonal Layers:** Objects closer to the user are lighter in color. Level 0 is Black (`#000000`), Level 1 is Dark Grey (`#0D0D0D`).
- **The "Scanner" Border:** Instead of shadows, use 1px solid borders (`#1F1F1F`). For active or focused states, these borders transition to the Primary Electric Cyan with a subtle 4px outer glow (0.2 opacity).
- **Glassmorphism:** For overlays or navigation bars, use a heavy backdrop blur (20px) with a semi-transparent surface (`#0A0A0A` at 0.8 opacity) to maintain a sense of layered complexity.

## Shapes

The shape language is **"Soft-Industrial."** 

Elements utilize a standard `0.25rem` (4px) corner radius. This is large enough to feel modern and accessible, but sharp enough to maintain a technical, serious tone. 

- **Buttons:** Follow the standard 4px radius.
- **Cards/Modules:** Use 4px for consistency.
- **Status Pills:** Use 100px (full pill) to distinguish interactive or status-based elements from structural layout modules.

## Components

- **Buttons:** Primary buttons are solid Electric Cyan with black text. Secondary buttons are outlined with 1px grey borders and white text. No gradients.
- **Validation Cards:** Minimalist containers with a 1px border. They should contain a monospaced "Status Label" at the top-right and use the `stat-lg` typography for the primary metric.
- **Input Fields:** Flat, dark background (`#0A0A0A`) with a bottom-only border that illuminates to Cyan on focus. Use JetBrains Mono for placeholder text.
- **Data Chips:** Small, monospaced text within a 1px bordered pill. Backgrounds should be 5% opacity of the text color.
- **Progress Indicators:** High-contrast, thin bars (4px height). The "filled" portion should use a subtle glow effect to appear as if it is emitting light.
- **The "Validator" HUD:** A persistent layout component that displays the "Confidence Score" in a large, geometric font, acting as the anchor point for all marketing assistant insights.
