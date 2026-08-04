/**
 * Pricing tiers for Sociovate. Three tiers: Starter, Pro, Business.
 * All CTAs route to /login (BUY NOW).
 */
export const pricing = [
  {
    id: 'starter',
    name: 'Starter',
    price: 19,
    priceLabel: '$19/mo',
    renderLimit: '1 brand, 3 platforms',
    features: [
      '1 connected brand',
      'Up to 3 social platforms',
      'AI content calendar',
      '30 scheduled posts / month',
      'Basic analytics dashboard',
      'Email support',
    ],
    highlighted: false,
    ctaText: 'Buy Now',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    priceLabel: '$49/mo',
    renderLimit: '3 brands, all platforms',
    features: [
      'Up to 3 connected brands',
      'All 5 supported platforms',
      'Everything in Starter',
      'Unlimited scheduled posts',
      'Unified inbox for comments & DMs',
      'AI draft generator with brand voice',
      'Priority support',
    ],
    highlighted: true,
    ctaText: 'Buy Now',
  },
  {
    id: 'business',
    name: 'Business',
    price: 89,
    priceLabel: '$89/mo',
    renderLimit: 'Unlimited brands',
    features: [
      'Unlimited connected brands',
      'Everything in Pro',
      'Advanced analytics & custom reports',
      'Team roles & approval workflows',
      'Agency-ready multi-client dashboard',
      'API access & custom integrations',
      'Dedicated account manager',
    ],
    highlighted: false,
    ctaText: 'Buy Now',
  },
];

export default pricing;

/**
 * Feature comparison matrix across tiers.
 */
export const comparison = [
  {
    label: 'Connected brands',
    starter: '1',
    pro: '3',
    business: 'Unlimited',
  },
  {
    label: 'Social platforms',
    starter: '3',
    pro: '5',
    business: '5',
  },
  {
    label: 'Scheduled posts',
    starter: '30 / month',
    pro: 'Unlimited',
    business: 'Unlimited',
  },
  {
    label: 'AI content calendar',
    starter: true,
    pro: true,
    business: true,
  },
  {
    label: 'Unified inbox',
    starter: false,
    pro: true,
    business: true,
  },
  {
    label: 'AI draft generator',
    starter: 'Basic',
    pro: 'Brand voice',
    business: 'Brand voice',
  },
  {
    label: 'Team roles & approvals',
    starter: false,
    pro: false,
    business: true,
  },
  {
    label: 'Analytics',
    starter: 'Basic',
    pro: 'Advanced',
    business: 'Advanced + custom reports',
  },
  {
    label: 'API access',
    starter: false,
    pro: false,
    business: true,
  },
  {
    label: 'Support',
    starter: 'Email',
    pro: 'Priority',
    business: 'Dedicated manager',
  },
];

/**
 * Frequently asked questions for the pricing page.
 */
export const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'There is no free trial — instead you can test the AI live on our home page with the interactive weekly content planner. Pick a plan whenever you are ready and connect your accounts in minutes.',
  },
  {
    q: 'Which platforms does Sociovate support?',
    a: 'Sociovate connects to Instagram, X, LinkedIn, TikTok, and Facebook. You can mix and match platforms per brand depending on your plan.',
  },
  {
    q: 'Can I manage multiple brands or clients?',
    a: 'Yes. The Pro plan supports up to three brands, and Business supports unlimited brands — ideal for agencies managing multiple client accounts from one dashboard.',
  },
  {
    q: 'Does the AI actually publish posts automatically?',
    a: 'Yes. Once you approve a draft, Sociovate schedules and publishes it directly to each connected platform at the time our AI determines will perform best for that audience.',
  },
  {
    q: 'What happens if I need to change my plan?',
    a: 'You can upgrade, downgrade, or cancel from your account settings at any time. Changes take effect at the start of your next billing cycle with no cancellation fees.',
  },
  {
    q: 'How does the unified inbox work?',
    a: 'Comments, mentions, and direct messages from every connected platform flow into a single inbox in Sociovate, so your team can respond without switching apps.',
  },
  {
    q: 'Do you offer a money-back guarantee?',
    a: 'Yes. Every plan includes a 14-day money-back guarantee. If Sociovate is not the right fit for your team, contact support within 14 days of your first payment for a full refund.',
  },
];
