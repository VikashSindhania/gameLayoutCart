import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * This function combines clsx and tailwind-merge for optimal class handling
 * 
 * @param inputs - Class values to merge
 * @returns Merged class string
 * 
 * @example
 * ```tsx
 * cn('px-2 py-1', 'px-4') // Returns 'py-1 px-4' (px-2 is overridden by px-4)
 * cn('bg-red-500', condition && 'bg-blue-500') // Conditional classes
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Debug utility for development
 * Only logs in development environment to avoid console pollution in production
 * 
 * @param message - Debug message
 * @param data - Optional data to log
 * @param level - Log level (log, warn, error)
 */
export function debug(
  message: string, 
  data?: any, 
  level: 'log' | 'warn' | 'error' = 'log'
) {
  if (process.env.NODE_ENV === 'development') {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [DEBUG]`;
    
    switch (level) {
      case 'warn':
        console.warn(`${prefix} ${message}`, data);
        break;
      case 'error':
        console.error(`${prefix} ${message}`, data);
        break;
      default:
        console.log(`${prefix} ${message}`, data);
    }
  }
}

/**
 * Format number with appropriate suffix (K, M, B)
 * Useful for displaying large numbers like play counts, ratings, etc.
 * 
 * @param num - Number to format
 * @returns Formatted string
 * 
 * @example
 * ```tsx
 * formatNumber(1500) // Returns '1.5K'
 * formatNumber(1000000) // Returns '1M'
 * ```
 */
export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * Generate a random ID for temporary use
 * Useful for generating unique keys in lists or temporary identifiers
 * 
 * @param length - Length of the ID (default: 8)
 * @returns Random ID string
 */
export function generateId(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Debounce function to limit the rate of function calls
 * Useful for search inputs, scroll handlers, and other frequent events
 * 
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 * 
 * @example
 * ```tsx
 * const debouncedSearch = debounce((query) => {
 *   // Perform search
 * }, 300);
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function to limit the rate of function calls
 * Different from debounce - throttling ensures the function is called at regular intervals
 * 
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Deep clone an object
 * Creates a completely independent copy of the object
 * 
 * @param obj - Object to clone
 * @returns Cloned object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T;
  }
  
  if (typeof obj === 'object') {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  
  return obj;
}

/**
 * Check if the current environment is a browser
 * Useful for avoiding SSR issues with browser-only APIs
 * 
 * @returns True if running in browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Get the current viewport dimensions
 * Returns null if not in browser environment
 * 
 * @returns Viewport dimensions or null
 */
export function getViewportDimensions(): { width: number; height: number } | null {
  if (!isBrowser()) return null;
  
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * Check if the device is mobile based on screen width
 * 
 * @param breakpoint - Mobile breakpoint in pixels (default: 768)
 * @returns True if mobile device
 */
export function isMobile(breakpoint: number = 768): boolean {
  if (!isBrowser()) return false;
  return window.innerWidth < breakpoint;
}

/**
 * Sleep utility for async operations
 * Useful for testing or simulating delays
 * 
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after the specified time
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Validate email format
 * 
 * @param email - Email to validate
 * @returns True if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Capitalize first letter of a string
 * 
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Convert string to kebab case
 * Useful for generating URL slugs or CSS class names
 * 
 * @param str - String to convert
 * @returns Kebab case string
 * 
 * @example
 * ```tsx
 * toKebabCase('Hello World') // Returns 'hello-world'
 * toKebabCase('Game Title 123') // Returns 'game-title-123'
 * ```
 */
export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Truncate text to specified length with ellipsis
 * 
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Calculate reading time for text content
 * 
 * @param text - Text content
 * @param wordsPerMinute - Reading speed (default: 200)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Get random element from array
 * 
 * @param array - Array to select from
 * @returns Random element
 */
export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Shuffle array in place using Fisher-Yates algorithm
 * 
 * @param array - Array to shuffle
 * @returns Shuffled array (same reference)
 */
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
} 