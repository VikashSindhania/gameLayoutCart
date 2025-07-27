import { Metadata } from "next";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy - AwesomeCart Gaming",
  description:
    "Learn how AwesomeCart Gaming collects, uses, and protects your personal information.",
  keywords: [
    "privacy policy",
    "privacy",
    "data protection",
    "personal information",
  ],
  openGraph: {
    title: "Privacy Policy - AwesomeCart Gaming",
    description: "Learn how we protect your privacy and data.",
    type: "website",
  },
};

/**
 * Privacy Policy page component
 *
 * @returns The privacy policy page
 */
export default function PrivacyPage() {
  debug("PrivacyPage: Rendering privacy page", {
    timestamp: new Date().toISOString(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 prose prose-invert max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when
              you create an account, contact us, or participate in our services.
              This may include:
            </p>
            <ul>
              <li>Name and email address when you create an account</li>
              <li>Game preferences and play history</li>
              <li>Communication preferences</li>
              <li>Feedback and support requests</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our gaming services</li>
              <li>Personalize your gaming experience</li>
              <li>Communicate with you about updates and new features</li>
              <li>Respond to your comments and questions</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy. We may share information:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>

            <h2>5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your gaming
              experience, analyze usage, and provide personalized content. You
              can control cookie settings through your browser.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect personal information from children under 13. If
              you believe we have collected information from a child under 13,
              please contact us immediately.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <ul>
              <li>Email: privacy@awesomecart-gaming.com</li>
              <li>Address: 123 Gaming Street, Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
