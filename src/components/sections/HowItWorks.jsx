import { Link2, Sparkles, Send, LineChart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Connect Your Brand',
    description:
      'Link your Instagram, X, LinkedIn, TikTok, and Facebook accounts in minutes. Manage one brand or a dozen, all from a single Sociovate workspace.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI Plans Your Content',
    description:
      'Tell Sociovate your goal — grow followers, drive sales, boost engagement — and the AI builds a complete content calendar with drafts, formats, and timing tailored to each platform.',
  },
  {
    number: '03',
    icon: Send,
    title: 'Auto-Publish Everywhere',
    description:
      'Approve once and Sociovate publishes automatically at the best time for each channel. No manual posting, no missed schedules, no copy-pasting between apps.',
  },
  {
    number: '04',
    icon: LineChart,
    title: 'Track & Optimize',
    description:
      'Watch performance roll in from every platform in one analytics view. The AI learns what works and refines your next week of content automatically.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-gradient-to-b from-surface-50 to-surface-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From Idea to Published Post, Fully Automated"
        />

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-xl border border-surface-200 bg-white/70 p-6 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span
                  className="pointer-events-none absolute right-4 top-2 select-none font-display text-6xl font-bold text-surface-100"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-card">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
