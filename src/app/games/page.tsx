import { Suspense } from "react";
import { Metadata } from "next";
import { GameGrid } from "@/components/games/GameGrid";
import { GameFilters } from "@/components/games/GameFilters";
// import { SearchBar } from "@/components/games/SearchBar";
import { debug } from "@/lib/utils";

export const metadata: Metadata = {
  title: "All Games - Browse Thousands of Free Online Games",
  description:
    "Discover and play thousands of free online games. Filter by category, difficulty, and more. Find your next favorite game!",
  keywords: [
    "free games",
    "online games",
    "browser games",
    "game categories",
    "game filters",
  ],
  openGraph: {
    title: "All Games - AwesomeCart Gaming",
    description:
      "Browse thousands of free online games with advanced filtering options.",
    type: "website",
  },
};

/**
 * Games page component
 * Displays all games with filtering, search, and pagination
 *
 * @returns The games page with full game browsing functionality
 */
export default function GamesPage() {
  debug("GamesPage: Rendering games page", {
    timestamp: new Date().toISOString(),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            All Games
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover thousands of free online games. Use filters to find exactly
            what you're looking for.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* <Suspense
            fallback={
              <div className="h-12 bg-muted rounded-lg animate-pulse"></div>
            }
          >
            <SearchBar />
          </Suspense> */}

          <Suspense
            fallback={
              <div className="h-16 bg-muted rounded-lg animate-pulse"></div>
            }
          >
            <GameFilters />
          </Suspense>
        </div>

        {/* Games Grid */}
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
          <GameGrid />
        </Suspense>
      </div>
    </div>
  );
}
