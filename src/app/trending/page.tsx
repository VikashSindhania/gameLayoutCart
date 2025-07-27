import { Suspense } from "react";
import { Metadata } from "next";
import TrendingGames from "@/components/games/TrendingGames";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Trending Games - Most Popular Games Right Now",
  description:
    "Discover the most popular and trending games right now. See what everyone is playing and join the fun!",
  keywords: [
    "trending games",
    "popular games",
    "hot games",
    "viral games",
    "most played games",
  ],
  openGraph: {
    title: "Trending Games - AwesomeCart Gaming",
    description: "Discover the most popular and trending games right now.",
    type: "website",
  },
};

/**
 * Trending games page component
 * Displays currently trending and popular games
 *
 * @returns The trending games page
 */
export default function TrendingPage() {
  debug("TrendingPage: Rendering trending page", {
    timestamp: new Date().toISOString(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            Trending Games
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what's hot right now! These are the most popular games that
            everyone is playing.
          </p>
        </div>

        {/* Trending Games Grid */}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="card-gaming aspect-game-square bg-muted animate-pulse"
                >
                  <div className="w-full h-48 bg-muted rounded-t-xl"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <TrendingGames />
        </Suspense>

        {/* Trending Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              🔥
            </div>
            <div className="text-lg font-semibold mb-2">Hot Right Now</div>
            <div className="text-muted-foreground">Updated every hour</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              📈
            </div>
            <div className="text-lg font-semibold mb-2">Rising Stars</div>
            <div className="text-muted-foreground">
              Based on player activity
            </div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              ⭐
            </div>
            <div className="text-lg font-semibold mb-2">Top Rated</div>
            <div className="text-muted-foreground">Highest player ratings</div>
          </div>
        </div>
      </div>
    </div>
  );
}
