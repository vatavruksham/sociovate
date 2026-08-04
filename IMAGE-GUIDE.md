# Sociovate — Image Guide

## Concept
AI Social Media Automation Hub — content calendars, publishing dashboards, analytics,
unified inboxes, and multi-brand management. Visual language: violet + cyan gradients,
clean SaaS dashboard UI, abstract network/hub motifs. No literal social platform logos
baked into artwork, no text/taglines rendered in images.

## Local Images (generated, compressed, committed to `public/images/`)
- `public/images/hero-dashboard.jpg` — home hero dashboard preview (calendar + inbox + analytics).
- `public/images/og.jpg` — 1200×630 social share preview.
- `public/images/features/content-calendar.jpg` — Content Calendar feature.
- `public/images/features/auto-publish.jpg` — Auto-Publish feature.
- `public/images/features/analytics-dashboard.jpg` — Analytics Dashboard feature.
- `public/images/features/unified-inbox.jpg` — Unified Inbox feature.
- `public/images/features/ai-draft-generator.jpg` — AI Draft Generator feature.
- `public/images/features/multi-brand-management.jpg` — Multi-Brand Management feature.

All images were generated locally, resized, and compressed to JPEG (700–130 KB range)
before committing — no remote hotlinking in production.

## Regeneration Prompts (Midjourney / DALL-E / SDXL)

### Hero
"Modern SaaS dashboard UI mockup for a social media automation platform, showing a
colorful content calendar grid with post thumbnail blocks, small analytics charts, and
a unified inbox panel, violet and cyan gradient accents, clean minimal professional
interface design, soft glassmorphism cards, floating abstract network/hub nodes in the
background, no readable text or logos --ar 16:9"

### Feature Cards
1. **Content Calendar** — "Abstract UI illustration of a content calendar grid with
   colorful rounded post blocks in violet, cyan, and white, clean modern flat design,
   violet-to-cyan gradient background, no readable text --ar 4:3"
2. **Auto-Publish** — "Abstract illustration of a single post icon launching like a
   rocket and branching into multiple glowing generic platform icons, motion trail
   lines, violet and cyan gradient, no readable text or brand logos --ar 4:3"
3. **Analytics Dashboard** — "Abstract data analytics dashboard illustration with
   glowing bar charts, line graphs trending upward, and circular progress rings, violet
   and cyan gradient lighting, dark glassmorphism background, no readable text --ar 4:3"
4. **Unified Inbox** — "Abstract illustration of many small colorful chat bubble and
   message icons converging into a single glowing inbox tray icon, violet and cyan
   gradient, no readable text --ar 4:3"
5. **AI Draft Generator** — "Abstract illustration of a glowing magic sparkle star
   wand generating floating blurred caption text-line blocks, violet and cyan gradient
   magical light effect, no readable text or letters --ar 4:3"
6. **Multi-Brand Management** — "Abstract illustration of several distinct colorful
   brand placeholder circles and squares organized into a dashboard grid, violet and
   cyan gradient background, no readable text or real logos --ar 4:3"

## Testimonial & Team Avatars
DiceBear "notionists" style (clean professional line-art), seeded by name:
```
https://api.dicebear.com/7.x/notionists/svg?seed={FullName}
```

## Notes
- No text sentences or marketing copy are baked into any generated artwork.
- Feature and hero images live under `public/images/` — run `node scripts/check-images.mjs`
  to verify all required local images are present before deploying.
