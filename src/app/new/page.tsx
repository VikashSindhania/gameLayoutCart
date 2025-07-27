import { Suspense } from "react";
import { Metadata } from "next";
import NewGames from "@/components/games/NewGames";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "New Games - Latest Releases and Fresh Games",
  description:
    "Discover the newest games just released. Be among the first to play the latest and greatest games!",
  keywords: [
    "new games",
    "latest games",
    "recent releases",
    "fresh games",
    "new releases",
  ],
  openGraph: {
    title: "New Games - AwesomeCart Gaming",
    description: "Discover the newest games just released.",
    type: "website",
  },
};

/**
 * New games page component
 * Displays recently released and new games
 *
 * @returns The new games page
 */
export default function NewPage() {
  debug("NewPage: Rendering new page", { timestamp: new Date().toISOString() });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            New Games
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be among the first to play the latest releases! Discover fresh games
            with cutting-edge graphics and innovative gameplay.
          </p>
        </div>

        {/* New Games Grid */}
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
          <NewGames />
        </Suspense>

        {/* New Games Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              🆕
            </div>
            <div className="text-lg font-semibold mb-2">Fresh Releases</div>
            <div className="text-muted-foreground">Added this week</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              🎯
            </div>
            <div className="text-lg font-semibold mb-2">Exclusive Content</div>
            <div className="text-muted-foreground">Play before anyone else</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              🚀
            </div>
            <div className="text-lg font-semibold mb-2">
              Innovative Features
            </div>
            <div className="text-muted-foreground">
              Latest gaming technology
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
