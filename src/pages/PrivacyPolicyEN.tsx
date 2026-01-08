import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicyEN = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to English when viewing this page
  setLanguage('en');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 -ml-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: January 8, 2026
        </p>

        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              citi.app ("we", "our", or "the app") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when using our mobile application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Data We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Contact information:</strong> email address, phone number</li>
              <li><strong>Account data:</strong> first name, last name, selected city</li>
              <li><strong>Usage data:</strong> information about how you interact with the app</li>
              <li><strong>Device information:</strong> device type, operating system, unique identifiers</li>
              <li><strong>Location data:</strong> with your consent, to provide location-based services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide and maintain our application</li>
              <li>Authenticate and manage your account</li>
              <li>Send notifications about city services and events</li>
              <li>Improve and personalize your user experience</li>
              <li>Analyze usage to improve our services</li>
              <li>Contact you regarding updates and important notices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              We may use third-party services for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Analytics (to understand app usage)</li>
              <li>Push notifications (to send you important updates)</li>
              <li>Payment processing (for utility payments)</li>
              <li>Authentication (for secure login)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              These services have their own privacy policies and may collect information according to their practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Data Protection</h2>
            <p className="text-muted-foreground mb-4">
              We take appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. Your data is transmitted through secure connections and stored on protected servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to the processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Data Sale</h2>
            <p className="text-muted-foreground mb-4">
              <strong>We do not sell your personal data to third parties.</strong> Your information is used solely to provide and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or your personal data, please contact us:
            </p>
            <p className="text-primary font-medium">
              contact@citi.top
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyEN;
