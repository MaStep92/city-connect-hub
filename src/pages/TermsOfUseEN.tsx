import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfUseEN = () => {
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
          Terms of Use
        </h1>
        <p className="text-muted-foreground mb-8">
          Last updated: January 8, 2026
        </p>

        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By using the SmartCity mobile application ("App"), you agree to comply with these Terms of Use. If you do not agree with these terms, please do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-4">
              SmartCity is a mobile application that provides access to city services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Public transport and parking information</li>
              <li>Utility payments and meter readings submission</li>
              <li>Submitting petitions and requests to city authorities</li>
              <li>Viewing city events and news</li>
              <li>Receiving notifications from city services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">By using the App, you agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide accurate and current information during registration</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not use the App for illegal purposes</li>
              <li>Not attempt to gain unauthorized access to the system</li>
              <li>Not violate the rights of other users</li>
              <li>Report any security breaches</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All rights to the App, including design, code, logos, and content, belong to SmartCity or its licensors. You may not copy, modify, or distribute any part of the App without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              The App is provided "as is" without any warranties. We are not responsible for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Service interruptions or technical failures</li>
              <li>Loss of data or information damage</li>
              <li>Actions of third parties or external services</li>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Accuracy of information provided by city services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              We strive to ensure uninterrupted operation of the App but do not guarantee constant availability. We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Temporarily suspend operation for maintenance</li>
              <li>Change or discontinue any features without prior notice</li>
              <li>Restrict access to certain features in certain regions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We may update these Terms of Use from time to time. By continuing to use the App after changes are made, you agree to the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms of Use are governed by the laws of Ukraine. Any disputes shall be resolved in the appropriate courts of Ukraine.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about these Terms of Use, please contact us:
            </p>
            <p className="text-primary font-medium">
              contact@smartcity.app
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUseEN;
