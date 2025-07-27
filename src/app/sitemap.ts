import { MetadataRoute } from 'next';
import { dummyGames } from '@/data/games';
import { GameCategory } from '@/types';

/**
 * Generate sitemap for SEO optimization
 * This function creates a dynamic sitemap with all game pages and categories
 * 
 * @returns Sitemap entries for search engines
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://awesomecart-gaming.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Category pages
  const categoryPages = Object.values(GameCategory).map((category) => ({
    url: `${baseUrl}/categories/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Game pages
  const gamePages = dummyGames.map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: game.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Combine all pages
  return [...staticPages, ...categoryPages, ...gamePages];
} 