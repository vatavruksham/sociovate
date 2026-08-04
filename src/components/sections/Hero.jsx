import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Wand2 } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const enter = () =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;

  const stagger = (ms) => ({ transitionDelay: mounted ? `${ms}ms` : '0ms' });

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-100 via-surface-50 to-surface-100">
      {/* decorative glows */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy + CTAs */}
          <div className="text-center lg:text-left">
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur ${enter()}`}
              style={stagger(0)}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI Social Media Automation Hub
            </span>

            <h1
              className={`mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl ${enter()}`}
              style={stagger(80)}
            >
              Run Your Social Hub{' '}
              <span className="gradient-text">with AI</span>
            </h1>

            <p
              className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0 ${enter()}`}
              style={stagger(160)}
            >
              Create, publish, analyze, and engage from one dashboard. Plan your
              content calendar, draft posts, auto-publish everywhere, and turn
              engagement into insight — so every brand you manage runs itself.
            </p>

            <div
              className={`mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center ${enter()}`}
              style={stagger(240)}
            >
              <Button href="/#demo" size="lg">
                <span className="inline-flex items-center gap-2">
                  <Wand2 className="h-4 w-4" aria-hidden="true" />
                  Test the AI
                </span>
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                <span className="inline-flex items-center gap-2">
                  View Pricing
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>
            </div>

            <p
              className={`mt-4 text-sm text-ink-muted ${enter()}`}
              style={stagger(300)}
            >
              No free trial needed — test the live AI demo below.
            </p>
          </div>

          {/* Right: product dashboard preview */}
          <div className={`relative ${enter()}`} style={stagger(320)}>
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 p-3 shadow-card-hover backdrop-blur-xl sm:p-4">
              <img
                src="/images/hero-dashboard.jpg"
                alt="Sociovate social media hub dashboard with content calendar, analytics, and unified inbox across platforms"
                loading="eager"
                className="w-full rounded-2xl object-cover"
              />
              <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2.5 text-center text-sm font-medium text-ink-soft">
                <Wand2 className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>A full week of content, planned in seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
