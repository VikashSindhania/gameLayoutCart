"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Heart, Star, Eye, Clock } from "lucide-react";

// Import types and utilities
import { Game } from "@/types";
import { cn, debug, formatNumber } from "@/lib/utils";

/**
 * Game card component props interface
 */
interface GameCardProps {
  /** Game data to display */
  game: Game;
  /** Whether to show additional details */
  showDetails?: boolean;
  /** Whether the card is in a loading state */
  loading?: boolean;
  /** Click handler for the card */
  onClick?: (game: Game) => void;
  /** Custom CSS classes */
  className?: string;
}

/**
 * Game card component
 * Displays individual game information with gaming aesthetic
 *
 * @param props - Component props
 * @returns The game card component
 */
export default function GameCard({
  game,
  showDetails = false,
  loading = false,
  onClick,
  className,
}: GameCardProps) {
  // State for hover effects and interactions
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Debug logging
  debug("GameCard: Rendering game card", {
    gameId: game.id,
    gameTitle: game.title,
    isHovered,
    isFavorite,
  });

  // Handle favorite toggle
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    debug("GameCard: Favorite toggled", {
      gameId: game.id,
      isFavorite: !isFavorite,
    });
  };

  // Handle card click
  const handleCardClick = () => {
    if (onClick) {
      onClick(game);
    }
  };

  // Loading skeleton
  if (loading) {
    return (
      <div
        className={cn(
          "card-gaming aspect-game-square bg-muted animate-pulse",
          className
        )}
      >
        <div className="w-full h-48 bg-muted rounded-t-xl"></div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-muted rounded w-3/4"></div>
          <div className="h-3 bg-muted rounded w-1/2"></div>
          <div className="flex space-x-2">
            <div className="h-6 bg-muted rounded w-16"></div>
            <div className="h-6 bg-muted rounded w-20"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "card-gaming aspect-game-square overflow-hidden group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Game Image */}
      <div className="relative aspect-game overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* Overlay with play button */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gaming bg-primary/90 hover:bg-primary text-white"
          >
            <Play className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Favorite button */}
        <button
          onClick={handleFavoriteToggle}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-full transition-all duration-200",
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-black/50 text-white hover:bg-red-500"
          )}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
        </button>

        {/* Game badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {game.featured && (
            <span className="badge-gaming bg-primary text-primary-foreground text-xs">
              Featured
            </span>
          )}
          {game.isNew && (
            <span className="badge-gaming bg-green-500 text-white text-xs">
              New
            </span>
          )}
          {game.trending && (
            <span className="badge-gaming bg-orange-500 text-white text-xs">
              Trending
            </span>
          )}
        </div>
      </div>

      {/* Game Information */}
      <div className="p-4 space-y-3">
        {/* Title and Rating */}
        <div className="space-y-2">
          <h3 className="font-display font-semibold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
            {game.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-foreground">
                {game.rating.average.toFixed(1)}
              </span>
              <span className="text-xs text-muted-foreground">
                ({formatNumber(game.rating.count)})
              </span>
            </div>

            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Eye className="w-3 h-3" />
              <span>{formatNumber(game.playCount)}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        {showDetails && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {game.shortDescription}
          </p>
        )}

        {/* Game Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-2">
            <span className="badge-gaming bg-muted text-muted-foreground">
              {game.category}
            </span>
            <span className="badge-gaming bg-muted text-muted-foreground">
              {game.difficulty}
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{game.fileSize}MB</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <Link
            href={game.playUrl}
            className="flex-1 btn-gaming bg-primary text-primary-foreground hover:bg-primary/90 text-sm py-2"
          >
            <Play className="w-4 h-4 mr-1" />
            Play Now
          </Link>

          <Link
            href={`/games/${game.slug}`}
            className="btn-gaming border border-border text-foreground hover:bg-muted text-sm py-2 px-3"
          >
            Details
          </Link>
        </div>
      </div>

      {/* Hover Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  );
}
