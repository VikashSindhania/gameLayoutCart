import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with AwesomeCart Gaming",
  description:
    "Contact AwesomeCart Gaming for support, feedback, or business inquiries. We're here to help with any questions about our gaming platform.",
  keywords: ["contact us", "support", "feedback", "help", "gaming support"],
  openGraph: {
    title: "Contact Us - AwesomeCart Gaming",
    description: "Get in touch with our team for support and inquiries.",
    type: "website",
  },
};

/**
 * Contact page component
 * Displays contact information and contact form
 *
 * @returns The contact page
 */
export default function ContactPage() {
  debug("ContactPage: Rendering contact page", {
    timestamp: new Date().toISOString(),
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "support@awesomecart-gaming.com",
      description: "Get help with your account or report issues",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Speak with our support team directly",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Gaming Street, Tech City, TC 12345",
      description: "Our headquarters location",
    },
    {
      icon: Clock,
      title: "Support Hours",
      value: "24/7 Available",
      description: "We're here to help anytime",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question or need help? We're here to assist you with anything
            related to AwesomeCart Gaming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-gaming font-bold mb-6 text-gradient">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team is dedicated to providing the best gaming experience.
                Whether you have a question, need technical support, or want to
                share feedback, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">
                      {info.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Link */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="font-display font-semibold text-lg">
                  Quick Help
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Check out our FAQ section for quick answers to common questions.
              </p>
              <a
                href="/help"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-400 transition-colors duration-200"
              >
                <span>View FAQ</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-gaming font-bold mb-6 text-gradient">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="input-gaming w-full"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="input-gaming w-full"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-gaming w-full"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="input-gaming w-full"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="business">Business Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="input-gaming w-full resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-gaming w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-gaming font-bold mb-4 text-gradient">
              Response Time
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-gaming font-bold text-primary mb-2">
                  24h
                </div>
                <div className="text-muted-foreground">Email Response</div>
              </div>
              <div>
                <div className="text-2xl font-gaming font-bold text-primary mb-2">
                  2h
                </div>
                <div className="text-muted-foreground">Live Chat</div>
              </div>
              <div>
                <div className="text-2xl font-gaming font-bold text-primary mb-2">
                  Immediate
                </div>
                <div className="text-muted-foreground">Phone Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
