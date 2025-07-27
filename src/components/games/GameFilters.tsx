"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import { GameCategory, GameDifficulty } from "@/types";
import { cn, debug } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";

interface GameFiltersProps {
  /** Current category filter */
  category?: GameCategory;
  /** Current difficulty filter */
  difficulty?: GameDifficulty;
  /** Callback when filters change */
  onFiltersChange?: (filters: FilterState) => void;
  /** Custom CSS classes */
  className?: string;
}

interface FilterState {
  category?: GameCategory | undefined;
  difficulty?: GameDifficulty | undefined;
  featured?: boolean;
  new?: boolean;
  trending?: boolean;
}

/**
 * GameFilters component for filtering games
 * Provides category, difficulty, and special filters
 *
 * @param props - Component props
 * @returns The game filters component
 */
export function GameFilters({
  category,
  difficulty,
  onFiltersChange,
  className,
}: GameFiltersProps) {
  // State management
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category,
    difficulty,
    featured: false,
    new: false,
    trending: false,
  });

  // Debug logging
  debug("GameFilters: Rendering filters", { filters, isOpen });

  // Handle filter change
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
    debug("GameFilters: Filter changed", { key, value, newFilters });
  };

  // Clear all filters
  const clearFilters = () => {
    const clearedFilters: FilterState = {};
    setFilters(clearedFilters);
    onFiltersChange?.(clearedFilters);
    debug("GameFilters: All filters cleared");
  };

  // Get active filters count
  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(Boolean).length;
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-primary/10 transition-all duration-200"
        >
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
          {getActiveFiltersCount() > 0 && (
            <span className="px-2 py-1 text-xs bg-primary text-white rounded-full">
              {getActiveFiltersCount()}
            </span>
          )}
        </button>

        {getActiveFiltersCount() > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-lg p-6 space-y-6"
          >
            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg">Category</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {Object.values(GameCategory).map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      handleFilterChange(
                        "category",
                        filters.category === cat ? undefined : cat
                      )
                    }
                    className={cn(
                      "px-3 py-2 text-sm rounded-lg border transition-all duration-200",
                      filters.category === cat
                        ? "bg-primary text-white border-primary"
                        : "bg-background border-border hover:border-primary/50"
                    )}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg">Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {Object.values(GameDifficulty).map((diff) => (
                  <button
                    key={diff}
                    onClick={() =>
                      handleFilterChange(
                        "difficulty",
                        filters.difficulty === diff ? undefined : diff
                      )
                    }
                    className={cn(
                      "px-3 py-2 text-sm rounded-lg border transition-all duration-200",
                      filters.difficulty === diff
                        ? "bg-primary text-white border-primary"
                        : "bg-background border-border hover:border-primary/50"
                    )}
                  >
                    {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Special Filters */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg">Special</h3>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.featured}
                    onChange={(e) =>
                      handleFilterChange("featured", e.target.checked)
                    }
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm">Featured</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.new}
                    onChange={(e) =>
                      handleFilterChange("new", e.target.checked)
                    }
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm">New</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.trending}
                    onChange={(e) =>
                      handleFilterChange("trending", e.target.checked)
                    }
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm">Trending</span>
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters Display */}
      {getActiveFiltersCount() > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.category && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Category: {filters.category}
              <button
                onClick={() => handleFilterChange("category", undefined)}
                className="ml-2 hover:text-primary-700"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.difficulty && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Difficulty: {filters.difficulty}
              <button
                onClick={() => handleFilterChange("difficulty", undefined)}
                className="ml-2 hover:text-primary-700"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.featured && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Featured
              <button
                onClick={() => handleFilterChange("featured", false)}
                className="ml-2 hover:text-primary-700"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.new && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              New
              <button
                onClick={() => handleFilterChange("new", false)}
                className="ml-2 hover:text-primary-700"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.trending && (
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Trending
              <button
                onClick={() => handleFilterChange("trending", false)}
                className="ml-2 hover:text-primary-700"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
