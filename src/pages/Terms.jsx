import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';

export default function Terms() {
  useDocumentTitle('Terms of Service - Sociovate');

  return (
    <>
      <section className="bg-gradient-to-b from-surface-100 to-surface-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Legal" title="Terms of Service" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="rounded-2xl border border-surface-200 bg-white/70 p-8 shadow-card backdrop-blur prose prose-sm max-w-none">
          <p className="mb-6 leading-relaxed text-ink-soft">Last updated: January 2026</p>

          <h3 className="font-display font-bold text-ink">1. Acceptance of Terms</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            By accessing or using Sociovate, you agree to be bound by these Terms of
            Service. If you do not agree, you may not use the service.
          </p>

          <h3 className="font-display font-bold text-ink">2. Service Description</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            Sociovate provides AI-powered social media planning, publishing, inbox, and
            analytics tools across Instagram, X, LinkedIn, TikTok, and Facebook.
          </p>

          <h3 className="font-display font-bold text-ink">3. User Responsibilities</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            You are responsible for maintaining the confidentiality of your account
            credentials, ensuring your published content complies with each platform's
            policies, and providing accurate information about your brands.
          </p>

          <h3 className="font-display font-bold text-ink">4. Payment & Billing</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            Subscription fees are billed monthly. You may cancel at any time, with
            cancellation taking effect at the end of the current billing period. Refunds
            are available within 14 days of purchase.
          </p>

          <h3 className="font-display font-bold text-ink">5. Intellectual Property</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            You retain full ownership of your content, brand assets, and the drafts
            generated for your account. Sociovate retains ownership of the underlying
            AI technology and platform.
          </p>

          <h3 className="font-display font-bold text-ink">6. Limitation of Liability</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            Sociovate is provided "as is." While we strive for accuracy and reliability,
            we are not liable for third-party platform outages, policy changes, or
            indirect damages arising from use of the service.
          </p>

          <h3 className="font-display font-bold text-ink">7. Contact</h3>
          <p className="leading-relaxed text-ink-soft">
            Questions about these terms? Contact us at support@sociovate.io.
          </p>
        </div>
      </section>
    </>
  );
}
