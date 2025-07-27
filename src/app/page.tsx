import { Metadata } from "next";
import { Suspense } from "react";

// Import components
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import FeaturedGames from "@/components/games/FeaturedGames";
import GameCategories from "@/components/games/GameCategories";
import TrendingGames from "@/components/games/TrendingGames";
import NewGames from "@/components/games/NewGames";
import Footer from "@/components/layout/Footer";

// Import utilities
import { debug } from "@/lib/utils";

/**
 * Home page metadata for SEO
 * Optimized for gaming website with relevant keywords and descriptions
 */
export const metadata: Metadata = {
  title: "AwesomeCart Gaming - Play Free Online Games",
  description:
    "Discover and play thousands of free online games. From action and adventure to puzzle and strategy games, find your next favorite game on AwesomeCart Gaming.",
  keywords: [
    "free online games",
    "browser games",
    "action games",
    "puzzle games",
    "strategy games",
    "arcade games",
    "casual games",
    "multiplayer games",
    "gaming platform",
    "play games online",
  ],
  openGraph: {
    title: "AwesomeCart Gaming - Play Free Online Games",
    description:
      "Discover and play thousands of free online games. From action and adventure to puzzle and strategy games, find your next favorite game.",
    images: ["/og-home.jpg"],
  },
  twitter: {
    title: "AwesomeCart Gaming - Play Free Online Games",
    description:
      "Discover and play thousands of free online games. From action and adventure to puzzle and strategy games, find your next favorite game.",
  },
};

/**
 * Home page component
 * Main landing page for the gaming website
 *
 * @returns The home page component with all sections
 */
export default function HomePage() {
  // Debug logging for development
  debug("HomePage: Rendering home page component", {
    timestamp: new Date().toISOString(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Game Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-gaming font-bold text-center mb-12 text-gradient">
              Game Categories
            </h2>
            <Suspense
              fallback={
                <div className="text-center">Loading categories...</div>
              }
            >
              <GameCategories />
            </Suspense>
          </div>
        </section>

        {/* Featured Games */}
        <section className="py-16 px-4 bg-gaming-pattern">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-gaming font-bold text-center mb-12 text-gradient">
              Featured Games
            </h2>
            <Suspense
              fallback={
                <div className="text-center">Loading featured games...</div>
              }
            >
              <FeaturedGames />
            </Suspense>
          </div>
        </section>

        {/* Trending Games */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-gaming font-bold text-center mb-12 text-gradient">
              Trending Now
            </h2>
            <Suspense
              fallback={
                <div className="text-center">Loading trending games...</div>
              }
            >
              <TrendingGames />
            </Suspense>
          </div>
        </section>

        {/* New Games */}
        <section className="py-16 px-4 bg-gaming-pattern">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-gaming font-bold text-center mb-12 text-gradient">
              New Releases
            </h2>
            <Suspense
              fallback={<div className="text-center">Loading new games...</div>}
            >
              <NewGames />
            </Suspense>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-gaming font-bold mb-6 text-white">
              Ready to Play?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of players and discover your next favorite game.
              Start playing now and experience the thrill of gaming!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gaming text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100">
                Browse All Games
              </button>
              <button className="btn-gaming text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary">
                Create Account
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
