import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameGrid } from "@/components/games/GameGrid";
import { getGamesByCategory } from "@/data/games";
import { GameCategory } from "@/types";
import { debug } from "@/lib/utils";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

/**
 * Generate metadata for the category page
 *
 * @param props - Page props containing category parameter
 * @returns Metadata for the category page
 */
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = params.category as GameCategory;

  // Validate category
  if (!Object.values(GameCategory).includes(category)) {
    return {
      title: "Category Not Found",
    };
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const games = getGamesByCategory(category);

  return {
    title: `${categoryName} Games - Free Online ${categoryName} Games`,
    description: `Play the best free online ${category.toLowerCase()} games. Discover ${games.length}+ ${category.toLowerCase()} games with stunning graphics and addictive gameplay.`,
    keywords: [
      `${category.toLowerCase()} games`,
      "free games",
      "online games",
      "browser games",
    ],
    openGraph: {
      title: `${categoryName} Games - AwesomeCart Gaming`,
      description: `Play the best free online ${category.toLowerCase()} games.`,
      type: "website",
    },
  };
}

/**
 * Generate static params for all categories
 *
 * @returns Array of category parameters
 */
export async function generateStaticParams() {
  return Object.values(GameCategory).map((category) => ({
    category: category,
  }));
}

/**
 * Category page component
 * Displays games for a specific category
 *
 * @param props - Page props
 * @returns The category page
 */
export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category as GameCategory;

  debug("CategoryPage: Rendering category page", {
    category,
    timestamp: new Date().toISOString(),
  });

  // Validate category
  if (!Object.values(GameCategory).includes(category)) {
    notFound();
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const games = getGamesByCategory(category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-gaming-dark-gray to-gaming-light-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold mb-6 text-gradient">
            {categoryName} Games
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Discover the best free online {category.toLowerCase()} games. From
            classic favorites to exciting new releases.
          </p>
          <div className="text-lg text-primary font-medium">
            {games.length} games available
          </div>
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
          <GameGrid category={category} />
        </Suspense>

        {/* Category Description */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-gaming font-bold mb-4 text-gradient">
            About {categoryName} Games
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {categoryName} games offer an exciting blend of strategy, skill,
              and entertainment. Whether you're looking for quick gaming
              sessions or immersive experiences, our collection of{" "}
              {category.toLowerCase()} games has something for everyone. All
              games are free to play and optimized for the best gaming
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
