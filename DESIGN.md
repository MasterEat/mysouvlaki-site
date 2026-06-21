---
name: Epicurean Analytics
colors:
  surface: '#fcf9f1'
  surface-dim: '#dcdad2'
  surface-bright: '#fcf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3eb'
  surface-container: '#f1eee6'
  surface-container-high: '#ebe8e0'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#41484b'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f3f1e9'
  outline: '#71787b'
  outline-variant: '#c0c8cb'
  surface-tint: '#376571'
  primary: '#00262f'
  on-primary: '#ffffff'
  primary-container: '#063d49'
  on-primary-container: '#7aa8b6'
  inverse-primary: '#a0cedc'
  secondary: '#685d43'
  on-secondary: '#ffffff'
  secondary-container: '#eddebd'
  on-secondary-container: '#6c6247'
  tertiary: '#371b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#51300f'
  on-tertiary-container: '#c8976e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bbeaf9'
  primary-fixed-dim: '#a0cedc'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#1d4d59'
  secondary-fixed: '#f0e1c0'
  secondary-fixed-dim: '#d3c5a5'
  on-secondary-fixed: '#221b07'
  on-secondary-fixed-variant: '#4f462e'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#f0bc90'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#623f1d'
  background: '#fcf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
  petrol-dark: '#042B33'
  gold-muted: '#C2B391'
  surface-cream: '#F7F4EC'
  text-main: '#063D49'
  data-success: '#4A7C59'
  data-alert: '#A34F4F'
typography:
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.08em
  data-numeral:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 64px
---

## Brand & Style

The design system focuses on the intersection of culinary excellence and rigorous business logic. The target audience consists of restaurant owners and stakeholders who prioritize profitability and operational efficiency over traditional, "greasy" food aesthetics. 

The visual style is **Minimalist and Corporate/Modern**. It avoids industry clichés like flame icons or hand-drawn illustrations in favor of structured data visualizations and clean layouts. The emotional response is one of confidence, precision, and high-end professionalism—transforming the concept of a souvlaki shop into a high-yield enterprise. The interface uses generous whitespace and a sophisticated "Petrol and Cream" palette to differentiate itself from competitors’ loud and cluttered applications.

## Colors

The color palette is anchored by a refined **Cream (#F7F4EC)** background, which provides a softer, more premium feel than a standard clinical white. 

- **Primary (Petrol, #063D49):** Used for primary typography, navigation, and core branding elements. It conveys stability and seriousness.
- **Secondary (Gold, #D7C9A9):** Reserved for highlights, subtle accents, and "premium" data indicators. It is never used for large blocks of text to maintain legibility.
- **Data Visualization:** While the palette is restricted, functional colors for "Profit" (Muted Green) and "Loss" (Muted Red) should be desaturated to align with the high-end aesthetic.

## Typography

The design system utilizes **Outfit** exclusively to achieve a clean, rounded, yet architectural look. 

- **Hierarchy:** Headlines use a tighter letter-spacing and heavier weights to command authority. 
- **Bilingual Optimization:** Outfit's geometric nature ensures that both Greek and Latin characters maintain visual parity in weight and height, essential for a bilingual dashboard.
- **Data Focus:** A specific `data-numeral` style is defined for financial figures, ensuring currency and cost metrics are immediately legible.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a "report-like" structured feel, transitioning to a fluid single-column layout on mobile.

- **Grid:** A 12-column grid is used for dashboards. Financial modules usually span 4 columns, while main data tables span 8 or 12.
- **Rhythm:** An 8px base unit governs all padding and margins. 
- **Negative Space:** Use generous "breathing room" (section-gap) between distinct management modules (e.g., Inventory vs. Profit Analysis) to prevent cognitive overload.

## Elevation & Depth

To maintain a professional, minimalist aesthetic, this design system eschews traditional heavy shadows.

- **Tonal Layers:** Depth is created primarily through color blocking. Darker petrol containers are used for sidebars, while the main workspace remains on the cream surface.
- **Low-Contrast Outlines:** Instead of shadows, use 1px solid borders in a slightly darker shade of the cream background or a very faint Petrol (10% opacity) to define cards and input fields.
- **Interactive Depth:** Only the primary action buttons should use a subtle, tinted ambient shadow to indicate clickability.

## Shapes

The shape language reflects the "rounded sans-serif" nature of the typography. 

- **Corners:** A consistent 8px (0.5rem) radius is applied to cards, buttons, and input fields. This softens the "corporate" feel without becoming "playful."
- **Data Points:** In charts and graphs, use rounded caps for bars and smooth curves for line graphs to maintain consistency with the brand's geometric softness.

## Components

- **Buttons:** Primary buttons are Petrol (#063D49) with Cream text. Secondary buttons use a Gold (#D7C9A9) outline. Ghost buttons are used for utility actions.
- **Input Fields:** To emphasize the management aspect, inputs should look like ledger entries: clean, with 1px Petrol-tinted borders and Outfit Medium for the input text.
- **Cards:** Used for individual food items or cost modules. They feature no shadows; they are defined by a background color slightly different from the page (e.g., a 5% darker cream) or a thin border.
- **Data Tables:** Highly structured. Row hovering should be subtle (a slight shift to a gold-tinted cream). Use Petrol for header text to signify hierarchy.
- **Profitability Badges:** Small chips using the `label-caps` typography to indicate high/low margin status of menu items.