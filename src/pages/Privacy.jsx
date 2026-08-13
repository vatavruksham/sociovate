import useDocumentTitle from '../hooks/useDocumentTitle';
import SectionHeading from '../components/ui/SectionHeading';

export default function Privacy() {
  useDocumentTitle('Privacy Policy - Sociovate');

  return (
    <>
      <section className="bg-gradient-to-b from-surface-100 to-surface-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Legal" title="Privacy Policy" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="rounded-2xl border border-surface-200 bg-white/70 p-8 shadow-card backdrop-blur prose prose-sm max-w-none">
          <p className="mb-6 leading-relaxed text-ink-soft">Last updated: January 2026</p>

          <h3 className="font-display font-bold text-ink">1. Information We Collect</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            We collect information you provide directly — your name, email, connected
            social accounts, and any content you draft or schedule using Sociovate. We
            also collect technical data such as browser type, IP address, and usage
            analytics to improve our services.
          </p>

          <h3 className="font-display font-bold text-ink">2. How We Use Your Information</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            Your information is used to provide and improve the Sociovate service,
            publish content to the platforms you connect, and communicate with you
            about your account. We do not sell your personal data to third parties.
          </p>

          <h3 className="font-display font-bold text-ink">3. Connected Platform Data</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            When you connect Instagram, X, LinkedIn, TikTok, or Facebook, we access only
            the permissions required to schedule posts, retrieve analytics, and manage
            your inbox. Access tokens are encrypted and can be revoked at any time from
            your account settings.
          </p>

          <h3 className="font-display font-bold text-ink">4. Data Retention</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            We retain your data for as long as your account is active or as needed to
            provide services. Upon account deletion, we remove personal data within 30
            days, subject to any legal retention requirements.
          </p>

          <h3 className="font-display font-bold text-ink">5. Your Rights</h3>
          <p className="mb-4 leading-relaxed text-ink-soft">
            You have the right to access, correct, or delete your personal data. You may
            also request data portability or restrict processing. Contact us at
            support@sociovate.co to exercise these rights.
          </p>

          <h3 className="font-display font-bold text-ink">6. Contact</h3>
          <p className="leading-relaxed text-ink-soft">
            For privacy-related inquiries, please contact us at support@sociovate.co.
          </p>
        </div>
      </section>
    </>
  );
}
