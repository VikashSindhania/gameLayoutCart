"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Import icons
import {
  Search,
  Menu,
  X,
  User,
  Heart,
  Settings,
  Sun,
  Moon,
  Gamepad2,
} from "lucide-react";

// Import utilities
import { cn, debug } from "@/lib/utils";

/**
 * Header component with navigation and search functionality
 * Features responsive design, dark mode toggle, and gaming aesthetic
 *
 * @returns The header component with full navigation
 */
export default function Header() {
  // State management for responsive behavior
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Debug logging
  debug("Header: Rendering header component", {
    isMenuOpen,
    isSearchOpen,
    isDarkMode,
    isScrolled,
  });

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    debug("Header: Dark mode toggled", { isDarkMode: !isDarkMode });
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      debug("Header: Search submitted", { query: searchQuery });
      // TODO: Implement search functionality
      setIsSearchOpen(false);
    }
  };

  // Navigation items
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "Categories", href: "/categories" },
    { label: "Trending", href: "/trending" },
    { label: "New", href: "/new" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="AwesomeCart Gaming - Home"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Gamepad2 className="w-full h-full text-primary group-hover:text-secondary transition-colors duration-200" />
            </div>
            <span className="text-xl lg:text-2xl font-gaming font-bold text-gradient group-hover:scale-105 transition-transform duration-200">
              AwesomeCart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              aria-label="Search games"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* User Menu */}
            <div className="relative group">
              <button className="p-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200">
                <User className="w-5 h-5" />
              </button>

              {/* User Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 text-foreground hover:bg-primary/10 transition-colors duration-200"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                  <Link
                    href="/favorites"
                    className="flex items-center px-4 py-2 text-foreground hover:bg-primary/10 transition-colors duration-200"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Favorites
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-foreground hover:bg-primary/10 transition-colors duration-200"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="py-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
                >
                  Search
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border"
            >
              <nav className="py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile Actions */}
                <div className="px-4 py-2 border-t border-border mt-4">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                    >
                      {isDarkMode ? (
                        <Sun className="w-4 h-4 mr-2" />
                      ) : (
                        <Moon className="w-4 h-4 mr-2" />
                      )}
                      {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </button>

                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className="flex items-center px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </button>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
