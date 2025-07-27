import { Metadata } from "next";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service - AwesomeCart Gaming",
  description:
    "Read our terms of service and understand the rules and guidelines for using AwesomeCart Gaming.",
  keywords: ["terms of service", "terms", "legal", "gaming terms"],
  openGraph: {
    title: "Terms of Service - AwesomeCart Gaming",
    description: "Read our terms of service and guidelines.",
    type: "website",
  },
};

/**
 * Terms of Service page component
 *
 * @returns The terms of service page
 */
export default function TermsPage() {
  debug("TermsPage: Rendering terms page", {
    timestamp: new Date().toISOString(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 prose prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using AwesomeCart Gaming, you accept and agree to
              be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on AwesomeCart Gaming's
              website for personal, non-commercial transitory viewing only.
            </p>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on AwesomeCart Gaming's website are provided on an
              'as is' basis. AwesomeCart Gaming makes no warranties, expressed
              or implied, and hereby disclaims and negates all other warranties
              including without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall AwesomeCart Gaming or its suppliers be liable
              for any damages (including, without limitation, damages for loss
              of data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on AwesomeCart Gaming's
              website.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on AwesomeCart Gaming's website could
              include technical, typographical, or photographic errors.
              AwesomeCart Gaming does not warrant that any of the materials on
              its website are accurate, complete or current.
            </p>

            <h2>6. Links</h2>
            <p>
              AwesomeCart Gaming has not reviewed all of the sites linked to its
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              AwesomeCart Gaming of the site.
            </p>

            <h2>7. Modifications</h2>
            <p>
              AwesomeCart Gaming may revise these terms of service for its
              website at any time without notice. By using this website you are
              agreeing to be bound by the then current version of these Terms
              and Conditions of Use.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws and you irrevocably submit to the
              exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <ul>
              <li>Email: legal@awesomecart-gaming.com</li>
              <li>Address: 123 Gaming Street, Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
