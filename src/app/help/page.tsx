import { Metadata } from "next";
import {
  HelpCircle,
  Search,
  BookOpen,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Help Center - Support & FAQ",
  description:
    "Get help with AwesomeCart Gaming. Find answers to frequently asked questions and get support for any issues.",
  keywords: ["help", "support", "FAQ", "troubleshooting", "gaming help"],
  openGraph: {
    title: "Help Center - AwesomeCart Gaming",
    description: "Get help and support for any gaming issues.",
    type: "website",
  },
};

/**
 * Help page component
 * Displays FAQ and support information
 *
 * @returns The help page
 */
export default function HelpPage() {
  debug("HelpPage: Rendering help page", {
    timestamp: new Date().toISOString(),
  });

  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      questions: [
        {
          question: "How do I create an account?",
          answer:
            'Creating an account is easy! Click the "Sign Up" button in the top right corner, fill in your details, and you\'ll be ready to play in minutes.',
        },
        {
          question: "Are the games really free?",
          answer:
            "Yes! All games on AwesomeCart Gaming are completely free to play. No hidden fees, no subscriptions required.",
        },
        {
          question: "What devices are supported?",
          answer:
            "Our platform works on all devices - desktop computers, laptops, tablets, and smartphones. Just open your browser and start playing!",
        },
      ],
    },
    {
      title: "Gameplay",
      icon: MessageCircle,
      questions: [
        {
          question: "How do I save my progress?",
          answer:
            "Your progress is automatically saved when you're logged in. Make sure to stay signed in to keep your game data safe.",
        },
        {
          question: "Can I play games offline?",
          answer:
            "Most games require an internet connection to load and save progress. However, some games may work offline once loaded.",
        },
        {
          question: "How do I report a bug?",
          answer:
            "If you encounter a bug, please use our contact form or email us at support@awesomecart-gaming.com with details about the issue.",
        },
      ],
    },
    {
      title: "Account & Settings",
      icon: HelpCircle,
      questions: [
        {
          question: "How do I change my password?",
          answer:
            'Go to your profile settings, click on "Security", and you\'ll find the option to change your password.',
        },
        {
          question: "Can I delete my account?",
          answer:
            "Yes, you can delete your account from the profile settings. Please note that this action cannot be undone.",
        },
        {
          question: "How do I enable two-factor authentication?",
          answer:
            "Two-factor authentication can be enabled in your security settings for added account protection.",
        },
      ],
    },
  ];

  const quickLinks = [
    {
      title: "Contact Support",
      href: "/contact",
      description: "Get in touch with our team",
    },
    {
      title: "Game Categories",
      href: "/categories",
      description: "Browse all game types",
    },
    {
      title: "Terms of Service",
      href: "/terms",
      description: "Read our terms and conditions",
    },
    {
      title: "Privacy Policy",
      href: "/privacy",
      description: "Learn about data protection",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions and get the support you need to
            enjoy the best gaming experience.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-gaming font-bold mb-6 text-gradient text-center">
            Quick Links
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-200 group"
              >
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                  {link.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-gaming font-bold text-gradient">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group border border-border rounded-lg overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors duration-200">
                      <h3 className="font-display font-semibold text-lg">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform duration-200" />
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-gaming font-bold mb-4 text-gradient">
              Still Need Help?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to
              help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gaming inline-flex items-center justify-center"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@awesomecart-gaming.com"
                className="btn-gaming inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
