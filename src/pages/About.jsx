import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { team } from '../data/team';

export default function About() {
  useDocumentTitle('About - Sociovate');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface-100 to-surface-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Our Story"
            title="Making Social Media Run Itself"
            subtitle="Founded in Singapore in 2024, Sociovate was born from a simple frustration: managing social media across five platforms shouldn't require five different tools."
          />
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-surface-200 bg-white/70 p-8 shadow-card backdrop-blur">
            <h3 className="mb-4 font-display text-xl font-bold text-ink">Our Mission</h3>
            <p className="mb-4 leading-relaxed text-ink-soft">
              Social media teams spend more time switching between apps than actually
              creating great content. We believe that should change. Sociovate exists to
              give every brand — from solo creators to multi-client agencies — a single
              AI-powered hub for planning, publishing, and understanding their social
              presence.
            </p>
            <p className="mb-4 leading-relaxed text-ink-soft">
              By combining a content planner, auto-publisher, unified inbox, and
              analytics dashboard into one workspace, Sociovate replaces the five-tab
              chaos of modern social management with a single, intelligent system.
            </p>
            <p className="leading-relaxed text-ink-soft">
              From independent creators in Singapore to agencies managing dozens of
              client brands worldwide, Sociovate gives every team the leverage of a
              full social media department.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll delay={100}>
          <div className="rounded-2xl border border-surface-200 bg-gradient-to-r from-primary/5 to-accent/5 p-8">
            <h3 className="mb-4 font-display text-xl font-bold text-ink">How It Started</h3>
            <p className="mb-4 leading-relaxed text-ink-soft">
              In 2024, our founding team was running social accounts for a portfolio of
              e-commerce clients and losing hours every week to manual scheduling,
              scattered inboxes, and disconnected analytics dashboards across every
              platform.
            </p>
            <p className="leading-relaxed text-ink-soft">
              We combined expertise in AI content generation, publishing infrastructure,
              and product design to build Sociovate — a hub where you describe your goal
              and the AI handles the plan, the drafts, the schedule, and the reporting.
            </p>
          </div>
        </AnimateOnScroll>
      </section>


      {/* Our AI */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll delay={150}>
          <div className="rounded-2xl border border-surface-200 bg-white/70 p-8 shadow-card backdrop-blur">
            <h3 className="mb-4 font-display text-xl font-bold text-ink">Our AI</h3>
            <p className="leading-relaxed text-ink-soft">
              Sociovate combines NLP content generation with scheduling optimization and engagement analytics models. Planning, drafting, and prediction workloads are designed for accelerated inference inside one product hub for brands that want software — not an outsourced social team.
            </p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <h3 className="mb-8 text-center font-display text-2xl font-bold text-ink">
          Our Team
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <AnimateOnScroll key={member.name} delay={idx * 100}>
              <div className="flex flex-col items-center rounded-2xl border border-surface-200 bg-white/70 p-6 text-center shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="h-20 w-20 rounded-full border-2 border-surface-200 bg-surface-100 shadow-card"
                />
                <h4 className="mt-4 font-display font-semibold text-ink">{member.name}</h4>
                <p className="text-sm font-medium text-primary">{member.title}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">{member.bio}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
