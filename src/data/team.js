/**
 * Sociovate leadership team — Singapore-based, founded 2024.
 * Avatars use DiceBear "notionists" (clean professional line-art), seeded by name.
 */
const avatar = (seed) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}`;

export const team = [
  {
    name: 'Wei Ling Tan',
    title: 'CEO & Co-Founder',
    email: 'weiling@sociovate.io',
    photo: avatar('Wei Ling Tan'),
    bio: 'Wei Ling spent eight years leading social strategy for regional e-commerce brands before founding Sociovate. She set out to build the automation layer she always wished she had — one dashboard for every platform, every brand.',
    imagePrompt:
      'Professional corporate headshot of a Singaporean Chinese woman in her mid-30s with sleek shoulder-length black hair, confident smile, wearing a modern blazer, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Arjun Nair',
    title: 'CTO & Co-Founder',
    email: 'arjun@sociovate.io',
    photo: avatar('Arjun Nair'),
    bio: 'Arjun is a machine learning engineer who previously built recommendation systems for large social platforms. He leads the AI engine that plans, drafts, and schedules content across every channel Sociovate supports.',
    imagePrompt:
      'Professional corporate headshot of a Singaporean Indian man in his late 30s with short black hair and light stubble, warm confident expression, wearing a navy shirt, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Nur Aisyah Rahman',
    title: 'Head of Product',
    email: 'aisyah@sociovate.io',
    photo: avatar('Nur Aisyah Rahman'),
    bio: 'Aisyah brings years of experience designing tools for community and social teams across Southeast Asia. She ensures every calendar, inbox, and dashboard in Sociovate feels effortless to use daily.',
    imagePrompt:
      'Professional corporate headshot of a Singaporean Malay woman in her early 30s wearing a modern hijab, friendly smile, wearing a soft coral blouse, soft studio lighting, clean neutral background, editorial portrait photography',
  },
  {
    name: 'Marcus Lim',
    title: 'VP Engineering',
    email: 'marcus@sociovate.io',
    photo: avatar('Marcus Lim'),
    bio: 'Marcus is a cloud infrastructure specialist who has scaled publishing systems handling millions of posts per month. He keeps Sociovate fast and reliable as brands publish across every platform simultaneously.',
    imagePrompt:
      'Professional corporate headshot of a Singaporean Chinese man in his mid-30s with short black hair and glasses, approachable smile, wearing a charcoal sweater, soft studio lighting, clean neutral background, editorial portrait photography',
  },
];

export default team;
