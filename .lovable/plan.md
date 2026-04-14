

# Upgrade CTA "Get in Touch" — Results-Oriented, in English

## What changes

Transform the generic contact section into an aggressive, hiring-oriented CTA that positions Lucas as a solution to a recruiter's problem.

## New copy

- **Heading**: "Looking for someone who automates processes and delivers results?"
- **Subtext**: "I can help your team reduce manual work and build more efficient systems using Node.js, integrations, and AI."
- **Primary CTA**: "Let's Talk" button (mailto link), visually prominent
- **Secondary**: GitHub, LinkedIn, Upwork kept as icon links below

## Technical changes

1. **`src/constants/content.ts`** — Add `contactHeading` and `contactDescription` to `siteConfig`
2. **`src/components/Contact.tsx`** — Use new fields for heading/subtext, add a styled "Let's Talk" `<a>` button as primary CTA, keep social links as secondary row

Visual style stays consistent with the current dark, restrained theme.

