import { Suspense } from "react";
import { Metadata } from "next";
import GameCategories from "@/components/games/GameCategories";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Game Categories - Browse Games by Category",
  description:
    "Explore games by category. From action and adventure to puzzle and strategy, find the perfect game for your mood.",
  keywords: [
    "game categories",
    "action games",
    "puzzle games",
    "racing games",
    "strategy games",
    "adventure games",
  ],
  openGraph: {
    title: "Game Categories - AwesomeCart Gaming",
    description: "Browse games by category and find your next favorite game.",
    type: "website",
  },
};

/**
 * Categories page component
 * Displays all game categories with descriptions and game counts
 *
 * @returns The categories page
 */
export default function CategoriesPage() {
  debug("CategoriesPage: Rendering categories page", {
    timestamp: new Date().toISOString(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            Game Categories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our vast collection of games organized by category. From
            fast-paced action to brain-teasing puzzles, there's something for
            every type of gamer.
          </p>
        </div>

        {/* Categories Grid */}
        <Suspense
          fallback={
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="p-6 bg-card border border-border rounded-xl animate-pulse"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted mb-3"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded w-2/3 mx-auto"></div>
                </div>
              ))}
            </div>
          }
        >
          <GameCategories />
        </Suspense>

        {/* Category Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              6+
            </div>
            <div className="text-muted-foreground">Game Categories</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              1000+
            </div>
            <div className="text-muted-foreground">Total Games</div>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl">
            <div className="text-3xl font-gaming font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-muted-foreground">Available to Play</div>
          </div>
        </div>
      </div>
    </div>
  );
}
