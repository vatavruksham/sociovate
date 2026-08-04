import { useEffect, useRef, useState } from 'react';
import {
  Loader2,
  Wand2,
  RotateCcw,
  ShoppingBag,
  Cpu,
  Star,
  Store,
  Instagram,
  Facebook,
  Linkedin,
  Music2,
  Users,
  TrendingUp,
  Heart,
  Megaphone,
  CalendarDays,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

function XIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const brandTypes = [
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'saas', label: 'SaaS / Tech', icon: Cpu },
  { id: 'creator', label: 'Creator', icon: Star },
  { id: 'local', label: 'Local Business', icon: Store },
];

const platformsList = [
  { id: 'instagram', label: 'Instagram', icon: Instagram, formats: ['Reel', 'Carousel', 'Story'] },
  { id: 'x', label: 'X', icon: XIcon, formats: ['Thread', 'Post'] },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, formats: ['Post', 'Carousel'] },
  { id: 'tiktok', label: 'TikTok', icon: Music2, formats: ['Short Video', 'Duet'] },
  { id: 'facebook', label: 'Facebook', icon: Facebook, formats: ['Post', 'Story'] },
];

const goals = [
  { id: 'followers', label: 'Grow Followers', icon: Users },
  { id: 'sales', label: 'Drive Sales', icon: TrendingUp },
  { id: 'engagement', label: 'Boost Engagement', icon: Heart },
  { id: 'awareness', label: 'Brand Awareness', icon: Megaphone },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const goalIdeas = {
  followers: [
    'Behind-the-scenes look at how {brand} creates its products',
    'Quick tips your audience can use today',
    'Trending audio remix showcasing your brand personality',
    'Ask-me-anything post to spark comments',
    'Before/after transformation story',
    'Customer shoutout and user-generated content repost',
    'Fun poll inviting shares and tags',
  ],
  sales: [
    'Limited-time offer countdown post',
    'Product demo highlighting your bestseller',
    'Customer testimonial with a clear call-to-action',
    'Comparison carousel: us vs. the old way',
    'Flash sale announcement with urgency copy',
    'Unboxing-style feature for your top product',
    'Bundle deal spotlight with savings breakdown',
  ],
  engagement: [
    'Community question to start a conversation',
    'Interactive poll or quiz about your niche',
    'Caption-this photo contest',
    'Fan-favorite recap of the week',
    'Live Q&A teaser with your team',
    'Relatable meme tailored to your audience',
    'Weekly roundup celebrating your community',
  ],
  awareness: [
    'Founder story introducing {brand}\u2019s mission',
    'Educational carousel on your industry',
    'Milestone or achievement announcement',
    'A day in the life at {brand}',
    'Industry trend commentary from your team',
    'Partnership or collaboration spotlight',
    'Values-driven post on what makes {brand} different',
  ],
};

export default function AIDemo() {
  const [brand, setBrand] = useState('ecommerce');
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram', 'linkedin', 'x']);
  const [goal, setGoal] = useState('followers');
  const [status, setStatus] = useState('idle'); // idle | loading | done
  const [plan, setPlan] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const togglePlatform = (id) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const generate = () => {
    if (selectedPlatforms.length === 0) return;
    clearTimeout(timerRef.current);
    setStatus('loading');
    timerRef.current = setTimeout(() => {
      const brandLabel = brandTypes.find((b) => b.id === brand)?.label || 'your brand';
      const ideas = goalIdeas[goal];
      const activePlatforms = platformsList.filter((p) => selectedPlatforms.includes(p.id));

      const nextPlan = days.map((day, i) => {
        const platform = activePlatforms[i % activePlatforms.length];
        const format = platform.formats[i % platform.formats.length];
        const idea = ideas[i % ideas.length].replace('{brand}', brandLabel);
        return { day, platform, format, idea };
      });

      setPlan(nextPlan);
      setStatus('done');
    }, 1400);
  };

  const reset = () => {
    clearTimeout(timerRef.current);
    setStatus('idle');
    setPlan([]);
  };

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-gradient-to-b from-surface-100 to-surface-50 py-20"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live AI Demo"
          title="Test the AI Right Here"
          subtitle="Pick your brand type, platforms, and goal — Sociovate plans a full week of content, matched to your audience and objective, in seconds."
        />

        <div className="glass mx-auto max-w-4xl rounded-3xl p-6 sm:p-8">
          {/* Step 1: Brand type */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-ink">1. Choose your brand type</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {brandTypes.map((b) => {
                const Icon = b.icon;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => {
                      setBrand(b.id);
                      reset();
                    }}
                    aria-pressed={brand === b.id}
                    className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all duration-300 ${
                      brand === b.id
                        ? 'border-primary bg-primary/5 shadow-card-hover'
                        : 'border-surface-200 bg-white/70 hover:border-primary/40'
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${brand === b.id ? 'text-primary' : 'text-ink-muted'}`} />
                    <span className={`text-xs font-medium ${brand === b.id ? 'text-primary' : 'text-ink-soft'}`}>
                      {b.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Platforms */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-ink">2. Select your platforms</p>
            <div className="flex flex-wrap gap-3">
              {platformsList.map((p) => {
                const Icon = p.icon;
                const active = selectedPlatforms.includes(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      togglePlatform(p.id);
                      reset();
                    }}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      active
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-surface-200 bg-white/70 text-ink-soft hover:border-primary/40'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Goal */}
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold text-ink">3. Pick your goal</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {goals.map((g) => {
                const Icon = g.icon;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => {
                      setGoal(g.id);
                      reset();
                    }}
                    aria-pressed={goal === g.id}
                    className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all duration-300 ${
                      goal === g.id
                        ? 'border-primary bg-primary/5 shadow-card-hover'
                        : 'border-surface-200 bg-white/70 hover:border-primary/40'
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${goal === g.id ? 'text-primary' : 'text-ink-muted'}`} />
                    <span className={`text-xs font-medium ${goal === g.id ? 'text-primary' : 'text-ink-soft'}`}>
                      {g.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result area */}
          <div className="rounded-2xl border border-surface-200 bg-white overflow-hidden min-h-[280px]">
            {status === 'done' ? (
              <div className="animate-fade-in p-5">
                <div className="mb-4 flex items-center justify-between border-b border-surface-200 pb-3">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-ink">Your Weekly Content Plan</h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    AI Generated
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7">
                  {plan.map((item) => {
                    const Icon = item.platform.icon;
                    return (
                      <div
                        key={item.day}
                        className="rounded-xl bg-surface-50 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                          {item.day}
                        </p>
                        <div className="mt-2 flex items-center gap-1.5">
                          <Icon className="h-3.5 w-3.5 text-primary" />
                          <span className="text-[10px] font-medium text-ink-soft">{item.platform.label}</span>
                        </div>
                        <span className="mt-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-semibold text-accent">
                          {item.format}
                        </span>
                        <p className="mt-2 text-xs leading-snug text-ink-soft">{item.idea}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : status === 'loading' ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
                <Loader2 className="h-9 w-9 animate-spin text-primary/60" aria-hidden="true" />
                <p className="text-sm text-ink-muted">Planning your week across platforms\u2026</p>
              </div>
            ) : (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
                <Wand2 className="h-9 w-9 text-ink-muted/50" aria-hidden="true" />
                <p className="max-w-xs text-sm text-ink-muted">
                  Your AI-generated weekly content plan will appear here.
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {status === 'done' ? (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-white/70 px-8 py-3 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/5"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Try Another
              </button>
            ) : (
              <button
                type="button"
                onClick={generate}
                disabled={status === 'loading' || selectedPlatforms.length === 0}
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Wand2 className="h-4 w-4" aria-hidden="true" />
                {status === 'loading' ? 'Generating\u2026' : 'Test the AI'}
              </button>
            )}
            <p className="text-xs text-ink-muted">
              Interactive preview \u00b7 select at least one platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
