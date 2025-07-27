/**
 * Type definitions for the gaming website
 * This file contains all the TypeScript interfaces and types used throughout the application
 */

// ============================================================================
// GAME TYPES
// ============================================================================

/**
 * Game category enumeration
 * Defines the different categories of games available on the platform
 */
export enum GameCategory {
  ACTION = 'action',
  ADVENTURE = 'adventure',
  PUZZLE = 'puzzle',
  RACING = 'racing',
  STRATEGY = 'strategy',
  SHOOTER = 'shooter',
  SPORTS = 'sports',
  RPG = 'rpg',
  SIMULATION = 'simulation',
  ARCADE = 'arcade',
  CASUAL = 'casual',
  EDUCATIONAL = 'educational',
}

/**
 * Game difficulty levels
 * Used for filtering and displaying game complexity
 */
export enum GameDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  EXPERT = 'expert',
}

/**
 * Game platform compatibility
 * Indicates which platforms the game supports
 */
export enum GamePlatform {
  WEB = 'web',
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
  TABLET = 'tablet',
}

/**
 * Game rating system
 * User-generated ratings for games
 */
export interface GameRating {
  /** Average rating (1-5 stars) */
  average: number;
  /** Total number of ratings */
  count: number;
  /** Distribution of ratings (1-5 stars) */
  distribution: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

/**
 * Game review interface
 * Individual user reviews for games
 */
export interface GameReview {
  id: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  createdAt: Date;
  helpful: number;
  reported: boolean;
}

/**
 * Game metadata interface
 * Core game information and properties
 */
export interface Game {
  /** Unique identifier for the game */
  id: string;
  /** URL-friendly slug for routing */
  slug: string;
  /** Game title */
  title: string;
  /** Game description */
  description: string;
  /** Short description for cards and previews */
  shortDescription: string;
  /** Game category */
  category: GameCategory;
  /** Game difficulty level */
  difficulty: GameDifficulty;
  /** Supported platforms */
  platforms: GamePlatform[];
  /** Game thumbnail image URL */
  thumbnail: string;
  /** Game banner image URL */
  banner: string;
  /** Game screenshots */
  screenshots: string[];
  /** Game rating information */
  rating: GameRating;
  /** Number of times the game has been played */
  playCount: number;
  /** Game developer/publisher */
  developer: string;
  /** Game release date */
  releaseDate: Date;
  /** Game file size in MB */
  fileSize: number;
  /** Game tags for search and filtering */
  tags: string[];
  /** Whether the game is featured */
  featured: boolean;
  /** Whether the game is new */
  isNew: boolean;
  /** Whether the game is trending */
  trending: boolean;
  /** Game play URL */
  playUrl: string;
  /** Game instructions */
  instructions: string;
  /** Game controls */
  controls: string;
  /** Minimum age requirement */
  ageRating: number;
  /** Game language support */
  languages: string[];
  /** Game reviews */
  reviews: GameReview[];
  /** Creation timestamp */
  createdAt: Date;
  /** Last update timestamp */
  updatedAt: Date;
}

// ============================================================================
// USER TYPES
// ============================================================================

/**
 * User role enumeration
 * Defines different user roles and permissions
 */
export enum UserRole {
  USER = 'user',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
}

/**
 * User profile interface
 * User account information and preferences
 */
export interface User {
  /** Unique user identifier */
  id: string;
  /** Username for display */
  username: string;
  /** User email address */
  email: string;
  /** User avatar image URL */
  avatar?: string;
  /** User role and permissions */
  role: UserRole;
  /** User's favorite games */
  favorites: string[];
  /** User's game history */
  gameHistory: string[];
  /** User's total play time in minutes */
  totalPlayTime: number;
  /** User's achievements */
  achievements: Achievement[];
  /** User's preferences */
  preferences: UserPreferences;
  /** Account creation date */
  createdAt: Date;
  /** Last login date */
  lastLoginAt: Date;
  /** Whether the account is verified */
  isVerified: boolean;
  /** Whether the account is active */
  isActive: boolean;
}

/**
 * User preferences interface
 * User's customizable settings and preferences
 */
export interface UserPreferences {
  /** Preferred theme (light/dark/auto) */
  theme: 'light' | 'dark' | 'auto';
  /** Preferred language */
  language: string;
  /** Whether to show mature content */
  showMatureContent: boolean;
  /** Whether to receive email notifications */
  emailNotifications: boolean;
  /** Whether to receive push notifications */
  pushNotifications: boolean;
  /** Preferred game categories */
  preferredCategories: GameCategory[];
  /** Accessibility settings */
  accessibility: AccessibilitySettings;
}

/**
 * Accessibility settings interface
 * User's accessibility preferences
 */
export interface AccessibilitySettings {
  /** Whether to enable high contrast mode */
  highContrast: boolean;
  /** Whether to enable reduced motion */
  reducedMotion: boolean;
  /** Whether to enable screen reader support */
  screenReader: boolean;
  /** Font size preference */
  fontSize: 'small' | 'medium' | 'large';
  /** Color blind support */
  colorBlindSupport: boolean;
}

/**
 * Achievement interface
 * User achievements and progress
 */
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  progress?: number;
  maxProgress?: number;
}

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

/**
 * Game card component props
 * Props for the game card display component
 */
export interface GameCardProps {
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
 * Game grid component props
 * Props for the game grid display component
 */
export interface GameGridProps {
  /** Array of games to display */
  games: Game[];
  /** Whether to show loading skeleton */
  loading?: boolean;
  /** Number of columns in the grid */
  columns?: number;
  /** Custom CSS classes */
  className?: string;
}

/**
 * Search component props
 * Props for the search functionality
 */
export interface SearchProps {
  /** Current search query */
  query: string;
  /** Search query change handler */
  onQueryChange: (query: string) => void;
  /** Search submit handler */
  onSearch: (query: string) => void;
  /** Whether search is in progress */
  loading?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Custom CSS classes */
  className?: string;
}

/**
 * Filter component props
 * Props for the game filtering functionality
 */
export interface FilterProps {
  /** Current filter state */
  filters: GameFilters;
  /** Filter change handler */
  onFiltersChange: (filters: GameFilters) => void;
  /** Available categories */
  categories: GameCategory[];
  /** Custom CSS classes */
  className?: string;
}

/**
 * Game filters interface
 * Filter criteria for game search and display
 */
export interface GameFilters {
  /** Search query */
  query: string;
  /** Selected categories */
  categories: GameCategory[];
  /** Selected difficulty levels */
  difficulties: GameDifficulty[];
  /** Selected platforms */
  platforms: GamePlatform[];
  /** Minimum rating */
  minRating: number;
  /** Sort order */
  sortBy: 'relevance' | 'rating' | 'newest' | 'popular' | 'alphabetical';
  /** Sort direction */
  sortOrder: 'asc' | 'desc';
  /** Whether to show only featured games */
  featuredOnly: boolean;
  /** Whether to show only new games */
  newOnly: boolean;
  /** Whether to show only trending games */
  trendingOnly: boolean;
}

// ============================================================================
// API TYPES
// ============================================================================

/**
 * API response wrapper
 * Standard API response format
 */
export interface ApiResponse<T> {
  /** Whether the request was successful */
  success: boolean;
  /** Response data */
  data?: T;
  /** Error message if request failed */
  error?: string;
  /** HTTP status code */
  status: number;
  /** Response timestamp */
  timestamp: Date;
}

/**
 * Pagination parameters
 * For paginated API responses
 */
export interface PaginationParams {
  /** Page number (1-based) */
  page: number;
  /** Number of items per page */
  limit: number;
  /** Total number of items */
  total: number;
  /** Total number of pages */
  totalPages: number;
}

/**
 * Paginated API response
 * API response with pagination information
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  /** Pagination information */
  pagination: PaginationParams;
}

// ============================================================================
// STATE TYPES
// ============================================================================

/**
 * Application state interface
 * Global application state structure
 */
export interface AppState {
  /** Current user information */
  user: User | null;
  /** Authentication state */
  isAuthenticated: boolean;
  /** Current theme */
  theme: 'light' | 'dark' | 'auto';
  /** Loading states */
  loading: {
    games: boolean;
    user: boolean;
    search: boolean;
  };
  /** Error states */
  errors: {
    games: string | null;
    user: string | null;
    search: string | null;
  };
}

/**
 * Game state interface
 * Game-related state management
 */
export interface GameState {
  /** All available games */
  games: Game[];
  /** Currently filtered games */
  filteredGames: Game[];
  /** Current game filters */
  filters: GameFilters;
  /** Selected game */
  selectedGame: Game | null;
  /** User's favorite games */
  favorites: string[];
  /** Game history */
  gameHistory: string[];
  /** Loading states */
  loading: {
    games: boolean;
    search: boolean;
    filters: boolean;
  };
}

// ============================================================================
// EVENT TYPES
// ============================================================================

/**
 * Game play event
 * Event fired when a game is played
 */
export interface GamePlayEvent {
  /** Game ID */
  gameId: string;
  /** User ID */
  userId: string;
  /** Play duration in seconds */
  duration: number;
  /** Play timestamp */
  timestamp: Date;
}

/**
 * Game rating event
 * Event fired when a game is rated
 */
export interface GameRatingEvent {
  /** Game ID */
  gameId: string;
  /** User ID */
  userId: string;
  /** Rating value (1-5) */
  rating: number;
  /** Rating timestamp */
  timestamp: Date;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Loading state type
 * Generic loading state for components
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Sort option type
 * Available sorting options
 */
export type SortOption = {
  value: string;
  label: string;
  icon?: string;
};

/**
 * Navigation item type
 * Navigation menu items
 */
export type NavigationItem = {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
};

/**
 * Breadcrumb item type
 * Breadcrumb navigation items
 */
export type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
}; 