import { Metadata } from "next";
import {
  Users,
  Gamepad2,
  Award,
  Globe,
  Heart,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us - AwesomeCart Gaming",
  description:
    "Learn about AwesomeCart Gaming, our mission to provide the best free online gaming experience, and our commitment to players worldwide.",
  keywords: [
    "about us",
    "gaming company",
    "online games",
    "free games",
    "gaming platform",
  ],
  openGraph: {
    title: "About Us - AwesomeCart Gaming",
    description: "Learn about AwesomeCart Gaming and our mission.",
    type: "website",
  },
};

/**
 * About page component
 * Displays company information, mission, and team details
 *
 * @returns The about page
 */
export default function AboutPage() {
  debug("AboutPage: Rendering about page", {
    timestamp: new Date().toISOString(),
  });

  const stats = [
    { icon: Users, value: "10M+", label: "Active Players" },
    { icon: Gamepad2, value: "1000+", label: "Games Available" },
    { icon: Globe, value: "150+", label: "Countries" },
    { icon: Award, value: "5+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Player First",
      description:
        "Everything we do is centered around providing the best gaming experience for our players.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "We prioritize player safety and data security in everything we build.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what is possible in online gaming.",
    },
    {
      icon: Target,
      title: "Quality",
      description:
        "We maintain the highest standards of quality in all our games and services.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://picsum.photos/200/200?random=1",
      bio: "Gaming enthusiast with 15+ years in the industry.",
    },
    {
      name: "Sarah Chen",
      role: "Head of Development",
      image: "https://picsum.photos/200/200?random=2",
      bio: "Expert game developer passionate about creating amazing experiences.",
    },
    {
      name: "Mike Rodriguez",
      role: "Creative Director",
      image: "https://picsum.photos/200/200?random=3",
      bio: "Award-winning designer focused on innovative gameplay.",
    },
    {
      name: "Emily Watson",
      role: "Community Manager",
      image: "https://picsum.photos/200/200?random=4",
      bio: "Dedicated to building and nurturing our amazing gaming community.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            About AwesomeCart Gaming
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're passionate about bringing the best free online gaming
            experience to players worldwide. Our mission is to create a platform
            where everyone can discover, play, and share amazing games.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-gaming font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-3xl font-gaming font-bold mb-6 text-gradient text-center">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At AwesomeCart Gaming, we believe that gaming should be
                  accessible to everyone. Our platform provides thousands of
                  high-quality games completely free, creating a space where
                  players can explore, compete, and connect.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're committed to innovation, quality, and community. Every
                  game on our platform is carefully selected and optimized to
                  provide the best possible gaming experience across all
                  devices.
                </p>
              </div>
              <div className="text-center">
                <Gamepad2 className="w-32 h-32 mx-auto text-primary/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-gaming font-bold mb-8 text-gradient text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-display font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-gaming font-bold mb-8 text-gradient text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-display font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="text-3xl font-gaming font-bold mb-6 text-gradient text-center">
            Our Story
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              AwesomeCart Gaming was founded in 2019 by a group of passionate
              gamers and developers who wanted to create something special. We
              started with a simple idea: make gaming accessible to everyone,
              everywhere.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What began as a small collection of games has grown into one of
              the world's largest free gaming platforms. Today, we serve
              millions of players across 150+ countries, offering everything
              from classic arcade games to cutting-edge multiplayer experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our journey is far from over. We're constantly innovating, adding
              new features, and expanding our game library to provide the
              ultimate gaming destination for players worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
