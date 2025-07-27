"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GameCard from "./GameCard";
import { getGamesByCategory, searchGames } from "@/data/games";
import { Game, GameCategory } from "@/types";
import { cn, debug } from "@/lib/utils";

interface GameGridProps {
  /** Category filter */
  category?: GameCategory;
  /** Search query */
  searchQuery?: string;
  /** Number of games per page */
  gamesPerPage?: number;
  /** Custom CSS classes */
  className?: string;
}

/**
 * GameGrid component for displaying games in a responsive grid
 * Features pagination, filtering, and smooth animations
 *
 * @param props - Component props
 * @returns The game grid component
 */
export function GameGrid({
  category,
  searchQuery = "",
  gamesPerPage = 12,
  className,
}: GameGridProps) {
  // State management
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Debug logging
  debug("GameGrid: Rendering game grid", {
    category,
    searchQuery,
    currentPage,
    gamesPerPage,
  });

  // Load games based on filters
  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);

      try {
        let filteredGames: Game[];

        if (searchQuery.trim()) {
          filteredGames = searchGames(searchQuery);
        } else if (category) {
          filteredGames = getGamesByCategory(category);
        } else {
          // Load all games (you might want to implement getAllGames function)
          filteredGames = searchGames(""); // This will return all games for now
        }

        setGames(filteredGames);
        setTotalPages(Math.ceil(filteredGames.length / gamesPerPage));
        setCurrentPage(1);

        debug("GameGrid: Games loaded", {
          count: filteredGames.length,
          totalPages: Math.ceil(filteredGames.length / gamesPerPage),
        });
      } catch (error) {
        debug("GameGrid: Error loading games", { error });
        setGames([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, [category, searchQuery, gamesPerPage]);

  // Get current page games
  const getCurrentPageGames = () => {
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    return games.slice(startIndex, endIndex);
  };

  // Handle game click
  const handleGameClick = (game: Game) => {
    debug("GameGrid: Game clicked", { gameId: game.id, gameTitle: game.title });
    // TODO: Navigate to game page or open game modal
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    debug("GameGrid: Page changed", { page });
  };

  if (loading) {
    return (
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
          className
        )}
      >
        {Array.from({ length: gamesPerPage }).map((_, i) => (
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
    );
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎮</div>
        <h3 className="text-2xl font-display font-semibold mb-2">
          No games found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  const currentGames = getCurrentPageGames();

  return (
    <div className="space-y-8">
      {/* Games Grid */}
      <motion.div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentGames.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GameCard
              game={game}
              onClick={handleGameClick}
              showDetails={true}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-card border border-border hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  "px-3 py-2 rounded-lg font-medium transition-all duration-200",
                  currentPage === page
                    ? "bg-primary text-white"
                    : "bg-card border border-border hover:bg-primary/10"
                )}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-card border border-border hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Results info */}
      <div className="text-center text-muted-foreground">
        Showing {(currentPage - 1) * gamesPerPage + 1} to{" "}
        {Math.min(currentPage * gamesPerPage, games.length)} of {games.length}{" "}
        games
      </div>
    </div>
  );
}
