import { Link } from 'react-router-dom';
import { Wand2 } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent px-6 py-16 text-center shadow-card sm:px-12">
        <div
          className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
          aria-hidden="true"
        />

        <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Your Social Hub Runs Itself Starting Today
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
          Tell Sociovate your goal. The AI plans, drafts, publishes, and reports —
          across every platform you manage.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/#demo"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-lg font-semibold text-primary shadow-lg transition-all duration-300 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Wand2 className="h-5 w-5" aria-hidden="true" />
            Test the AI
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-8 py-3.5 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
