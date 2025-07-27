"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { cn, debug } from "@/lib/utils";

interface SearchBarProps {
  /** Initial search query */
  initialQuery?: string;
  /** Callback when search query changes */
  onSearch?: (query: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Custom CSS classes */
  className?: string;
}

/**
 * SearchBar component for searching games
 * Features real-time search with debouncing and clear functionality
 *
 * @param props - Component props
 * @returns The search bar component
 */
export function SearchBar({
  initialQuery = "",
  onSearch,
  placeholder = "Search games...",
  className,
}: SearchBarProps) {
  // State management
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);

  // Debug logging
  debug("SearchBar: Rendering search bar", { query, isFocused });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch?.(newQuery);
    debug("SearchBar: Query changed", { newQuery });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
    debug("SearchBar: Search submitted", { query });
  };

  // Clear search
  const clearSearch = () => {
    setQuery("");
    onSearch?.("");
    debug("SearchBar: Search cleared");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div
        className={cn(
          "relative flex items-center",
          "bg-background border border-border rounded-lg",
          "transition-all duration-200",
          isFocused
            ? "border-primary shadow-lg shadow-primary/10"
            : "hover:border-primary/50"
        )}
      >
        {/* Search Icon */}
        <div className="absolute left-3 text-muted-foreground">
          <Search className="w-5 h-5" />
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "w-full pl-10 pr-10 py-3",
            "bg-transparent border-none outline-none",
            "text-foreground placeholder:text-muted-foreground",
            "font-body text-base"
          )}
          aria-label="Search games"
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 p-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Tips */}
      {isFocused && !query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg p-4 shadow-lg z-10">
          <h4 className="font-display font-semibold text-sm mb-2">
            Search Tips:
          </h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Try searching by game title, category, or developer</li>
            <li>• Use keywords like "racing", "puzzle", "action"</li>
            <li>• Search for specific features like "multiplayer" or "3D"</li>
          </ul>
        </div>
      )}
    </form>
  );
}
