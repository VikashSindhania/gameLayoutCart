"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GameCard from "./GameCard";
import { getNewGames } from "@/data/games";
import { Game } from "@/types";
import { debug } from "@/lib/utils";

export default function NewGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  debug("NewGames: Rendering new games component", {
    gamesCount: games.length,
    loading,
    error,
  });

  useEffect(() => {
    const loadNewGames = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 600));
        const newGames = getNewGames();
        setGames(newGames);
        debug("NewGames: Loaded new games", { count: newGames.length });
      } catch (err) {
        setError("Failed to load new games");
        debug("NewGames: Error loading games", { error: err }, "error");
      } finally {
        setLoading(false);
      }
    };

    loadNewGames();
  }, []);

  const handleGameClick = (game: Game) => {
    debug("NewGames: Game clicked", { gameId: game.id, gameTitle: game.title });
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
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

  if (games.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground text-lg mb-4">
          No new games available at the moment.
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
