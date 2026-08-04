/**
 * Customer testimonials for Sociovate — from social media managers, agency owners, and founders.
 * Western names only. Avatars use DiceBear "notionists" (clean professional line-art).
 */
const avatar = (seed) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}`;

export const testimonials = [
  {
    quote:
      'We manage twelve brand accounts across five platforms, and Sociovate cut our content ops time in half. The AI drafts are genuinely on-brand, not generic filler.',
    name: 'Michael Anderson',
    role: 'Social Media Director',
    company: 'USA',
    avatar: avatar('Michael Anderson'),
  },
  {
    quote:
      'The unified inbox alone was worth switching. We used to juggle five apps to answer comments — now it is all in one place and nothing slips through.',
    name: 'Sarah Thompson',
    role: 'Community Manager',
    company: 'UK',
    avatar: avatar('Sarah Thompson'),
  },
  {
    quote:
      'I set our monthly goal and Sociovate plans the entire content calendar around it. Our engagement rate has climbed every month since we started using it.',
    name: 'Daniel Walker',
    role: 'Marketing Consultant',
    company: 'Canada',
    avatar: avatar('Daniel Walker'),
  },
  {
    quote:
      'As a solo creator, I never had time to post consistently. Now Sociovate auto-publishes for me across Instagram, TikTok, and X while I focus on making content.',
    name: 'Emma Richardson',
    role: 'Content Creator',
    company: 'Australia',
    avatar: avatar('Emma Richardson'),
  },
  {
    quote:
      'Our agency runs every client account through Sociovate. Multi-brand management means no more logging in and out of ten different tools every morning.',
    name: 'James Carter',
    role: 'Agency Owner',
    company: 'USA',
    avatar: avatar('James Carter'),
  },
  {
    quote:
      'The analytics dashboard finally gives us one number that matters instead of five confusing exports. Reporting to clients takes minutes now, not hours.',
    name: 'Olivia Bennett',
    role: 'Growth Marketer',
    company: 'UK',
    avatar: avatar('Olivia Bennett'),
  },
];

export default testimonials;
