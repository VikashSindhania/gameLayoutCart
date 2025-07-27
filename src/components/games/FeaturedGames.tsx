"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import components and data
import GameCard from "./GameCard";
import { getFeaturedGames } from "@/data/games";
import { Game } from "@/types";
import { debug } from "@/lib/utils";

/**
 * Featured games component
 * Displays a grid of featured games with animations
 *
 * @returns The featured games component
 */
export default function FeaturedGames() {
  // State management
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Debug logging
  debug("FeaturedGames: Rendering featured games component", {
    gamesCount: games.length,
    loading,
    error,
  });

  // Load featured games
  useEffect(() => {
    const loadFeaturedGames = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const featuredGames = getFeaturedGames();
        setGames(featuredGames);
        debug("FeaturedGames: Loaded featured games", {
          count: featuredGames.length,
        });
      } catch (err) {
        setError("Failed to load featured games");
        debug("FeaturedGames: Error loading games", { error: err }, "error");
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedGames();
  }, []);

  // Handle game click
  const handleGameClick = (game: Game) => {
    debug("FeaturedGames: Game clicked", {
      gameId: game.id,
      gameTitle: game.title,
    });
    // TODO: Navigate to game page or open game modal
  };

  // Loading state
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <GameCard
            key={index}
            game={{} as Game}
            loading={true}
            showDetails={false}
          />
        ))}
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-lg mb-4">{error}</div>
        <button onClick={() => window.location.reload()} className="btn-gaming">
          Try Again
        </button>
      </div>
    );
  }

  // Empty state
  if (games.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground text-lg mb-4">
          No featured games available at the moment.
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {games.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          <GameCard game={game} onClick={handleGameClick} showDetails={true} />
        </motion.div>
      ))}
    </motion.div>
  );
}
