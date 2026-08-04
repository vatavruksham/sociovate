import {
  CalendarDays,
  Send,
  BarChart3,
  Inbox,
  Sparkles,
  Building2,
} from 'lucide-react';

export const features = [
  {
    id: 1,
    title: 'Content Calendar',
    description:
      'A visual weekly and monthly calendar that plans every post across every platform. Drag, drop, and reorder — Sociovate keeps your whole content pipeline organized in one view.',
    icon: CalendarDays,
    image: '/images/features/content-calendar.jpg',
  },
  {
    id: 2,
    title: 'Auto-Publish',
    description:
      'Approve a post once and Sociovate publishes it automatically at the optimal time for each channel — no manual posting, no missed windows, no copy-pasting between apps.',
    icon: Send,
    image: '/images/features/auto-publish.jpg',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description:
      'Unified performance data from every connected platform — reach, engagement, follower growth, and conversions — visualized in one clear dashboard instead of five different apps.',
    icon: BarChart3,
    image: '/images/features/analytics-dashboard.jpg',
  },
  {
    id: 4,
    title: 'Unified Inbox',
    description:
      'Every comment, DM, and mention across Instagram, X, LinkedIn, TikTok, and Facebook lands in one inbox, so your team never misses a conversation with your audience.',
    icon: Inbox,
    image: '/images/features/unified-inbox.jpg',
  },
  {
    id: 5,
    title: 'AI Draft Generator',
    description:
      'Describe a topic or goal and Sociovate drafts on-brand captions, hooks, and hashtags for every platform in seconds — ready to review, tweak, and schedule.',
    icon: Sparkles,
    image: '/images/features/ai-draft-generator.jpg',
  },
  {
    id: 6,
    title: 'Multi-Brand Management',
    description:
      'Run content for multiple brands or clients from one login. Separate calendars, analytics, and inboxes keep every account organized without switching tools.',
    icon: Building2,
    image: '/images/features/multi-brand-management.jpg',
  },
];

export default features;
