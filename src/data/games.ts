/**
 * Dummy game data for the gaming website
 * This file contains realistic game data for demonstration purposes
 * In a real application, this would come from a database or API
 */

import { Game, GameCategory, GameDifficulty, GamePlatform } from '@/types';

/**
 * Generate a random rating distribution
 * Creates realistic rating distributions for games
 */
function generateRatingDistribution() {
  const total = Math.floor(Math.random() * 1000) + 100;
  const five = Math.floor(total * 0.4) + Math.floor(Math.random() * 100);
  const four = Math.floor(total * 0.3) + Math.floor(Math.random() * 50);
  const three = Math.floor(total * 0.2) + Math.floor(Math.random() * 30);
  const two = Math.floor(total * 0.08) + Math.floor(Math.random() * 20);
  const one = total - five - four - three - two;

  const average = ((five * 5) + (four * 4) + (three * 3) + (two * 2) + (one * 1)) / total;

  return {
    average: Math.round(average * 10) / 10,
    count: total,
    distribution: { 1: one, 2: two, 3: three, 4: four, 5: five }
  };
}

/**
 * Generate a random date within the last 2 years
 */
function generateRandomDate(): Date {
  const now = new Date();
  const twoYearsAgo = new Date(now.getTime() - (2 * 365 * 24 * 60 * 60 * 1000));
  const randomTime = twoYearsAgo.getTime() + Math.random() * (now.getTime() - twoYearsAgo.getTime());
  return new Date(randomTime);
}

/**
 * Dummy games data array
 * Contains realistic game information for demonstration
 */
export const dummyGames: Game[] = [
  {
    id: '1',
    slug: 'cyber-racer-2024',
    title: 'Cyber Racer 2024',
    description: 'Experience the future of racing in this high-octane cyberpunk racing game. Navigate through neon-lit cityscapes, upgrade your vehicle with cutting-edge technology, and compete against AI drivers in intense street races.',
    shortDescription: 'Futuristic racing in neon-lit cyberpunk cities',
    category: GameCategory.RACING,
    difficulty: GameDifficulty.MEDIUM,
    platforms: [GamePlatform.WEB, GamePlatform.DESKTOP],
    thumbnail: 'https://picsum.photos/400/300?random=1',
    banner: 'https://picsum.photos/1200/400?random=1',
    screenshots: [
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=12',
      'https://picsum.photos/800/600?random=13',
      'https://picsum.photos/800/600?random=14'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 50000) + 10000,
    developer: 'Neon Games Studio',
    releaseDate: generateRandomDate(),
    fileSize: 45.2,
    tags: ['racing', 'cyberpunk', 'futuristic', 'multiplayer', 'upgrades'],
    featured: true,
    isNew: true,
    trending: true,
    playUrl: '/play/cyber-racer-2024',
    instructions: 'Use WASD or arrow keys to control your vehicle. Collect power-ups to boost your speed and avoid obstacles.',
    controls: 'WASD / Arrow Keys: Move, Space: Boost, Shift: Drift',
    ageRating: 12,
    languages: ['English', 'Spanish', 'French', 'German'],
    reviews: [],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    slug: 'puzzle-master-pro',
    title: 'Puzzle Master Pro',
    description: 'Challenge your mind with hundreds of brain-teasing puzzles. From classic logic puzzles to innovative new challenges, this game will keep you entertained for hours while sharpening your problem-solving skills.',
    shortDescription: 'Brain-teasing puzzles for all skill levels',
    category: GameCategory.PUZZLE,
    difficulty: GameDifficulty.EASY,
    platforms: [GamePlatform.WEB, GamePlatform.MOBILE, GamePlatform.TABLET],
    thumbnail: 'https://picsum.photos/400/300?random=2',
    banner: 'https://picsum.photos/1200/400?random=2',
    screenshots: [
      'https://picsum.photos/800/600?random=21',
      'https://picsum.photos/800/600?random=22',
      'https://picsum.photos/800/600?random=23'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 75000) + 15000,
    developer: 'Brain Games Inc.',
    releaseDate: generateRandomDate(),
    fileSize: 12.8,
    tags: ['puzzle', 'logic', 'brain-training', 'casual', 'educational'],
    featured: false,
    isNew: false,
    trending: false,
    playUrl: '/play/puzzle-master-pro',
    instructions: 'Solve puzzles by matching colors, completing patterns, or finding hidden objects. Each level increases in difficulty.',
    controls: 'Mouse: Click and drag, Touch: Tap and swipe',
    ageRating: 3,
    languages: ['English', 'Spanish', 'French', 'German', 'Chinese'],
    reviews: [],
    createdAt: new Date('2023-08-20'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '3',
    slug: 'space-warriors',
    title: 'Space Warriors',
    description: 'Command your fleet in epic space battles across the galaxy. Build your empire, research advanced technologies, and engage in strategic warfare against rival factions in this immersive space strategy game.',
    shortDescription: 'Epic space strategy and empire building',
    category: GameCategory.STRATEGY,
    difficulty: GameDifficulty.HARD,
    platforms: [GamePlatform.WEB, GamePlatform.DESKTOP],
    thumbnail: 'https://picsum.photos/400/300?random=3',
    banner: 'https://picsum.photos/1200/400?random=3',
    screenshots: [
      'https://picsum.photos/800/600?random=31',
      'https://picsum.photos/800/600?random=32',
      'https://picsum.photos/800/600?random=33',
      'https://picsum.photos/800/600?random=34',
      'https://picsum.photos/800/600?random=35'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 30000) + 8000,
    developer: 'Galactic Studios',
    releaseDate: generateRandomDate(),
    fileSize: 78.5,
    tags: ['strategy', 'space', 'empire-building', 'multiplayer', 'sci-fi'],
    featured: true,
    isNew: false,
    trending: true,
    playUrl: '/play/space-warriors',
    instructions: 'Build your space empire by managing resources, researching technologies, and engaging in strategic battles.',
    controls: 'Mouse: Select and command, Keyboard: Hotkeys for quick actions',
    ageRating: 10,
    languages: ['English', 'Spanish', 'French'],
    reviews: [],
    createdAt: new Date('2023-11-05'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '4',
    slug: 'adventure-quest',
    title: 'Adventure Quest',
    description: 'Embark on an epic journey through mystical lands filled with ancient ruins, magical creatures, and hidden treasures. Solve puzzles, battle monsters, and uncover the secrets of a forgotten civilization.',
    shortDescription: 'Epic adventure through mystical lands',
    category: GameCategory.ADVENTURE,
    difficulty: GameDifficulty.MEDIUM,
    platforms: [GamePlatform.WEB, GamePlatform.MOBILE],
    thumbnail: 'https://picsum.photos/400/300?random=4',
    banner: 'https://picsum.photos/1200/400?random=4',
    screenshots: [
      'https://picsum.photos/800/600?random=41',
      'https://picsum.photos/800/600?random=42',
      'https://picsum.photos/800/600?random=43'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 40000) + 12000,
    developer: 'Fantasy Games',
    releaseDate: generateRandomDate(),
    fileSize: 32.1,
    tags: ['adventure', 'fantasy', 'rpg', 'exploration', 'story-driven'],
    featured: false,
    isNew: true,
    trending: false,
    playUrl: '/play/adventure-quest',
    instructions: 'Explore the world, interact with characters, solve puzzles, and battle enemies to progress through the story.',
    controls: 'WASD: Move, Mouse: Interact, Space: Jump, E: Use items',
    ageRating: 7,
    languages: ['English', 'Spanish', 'French', 'German', 'Italian'],
    reviews: [],
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '5',
    slug: 'arcade-classics',
    title: 'Arcade Classics',
    description: 'Relive the golden age of gaming with this collection of classic arcade games. From retro shooters to timeless puzzle games, experience the games that defined a generation.',
    shortDescription: 'Collection of classic arcade games',
    category: GameCategory.ARCADE,
    difficulty: GameDifficulty.EASY,
    platforms: [GamePlatform.WEB, GamePlatform.MOBILE, GamePlatform.TABLET],
    thumbnail: 'https://picsum.photos/400/300?random=5',
    banner: 'https://picsum.photos/1200/400?random=5',
    screenshots: [
      'https://picsum.photos/800/600?random=51',
      'https://picsum.photos/800/600?random=52',
      'https://picsum.photos/800/600?random=53'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 100000) + 20000,
    developer: 'Retro Gaming Co.',
    releaseDate: generateRandomDate(),
    fileSize: 8.9,
    tags: ['arcade', 'retro', 'classic', 'nostalgia', 'multiplayer'],
    featured: true,
    isNew: false,
    trending: true,
    playUrl: '/play/arcade-classics',
    instructions: 'Choose from various classic arcade games. Each game has its own controls and objectives.',
    controls: 'Varies by game - see individual game instructions',
    ageRating: 3,
    languages: ['English'],
    reviews: [],
    createdAt: new Date('2023-06-15'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '6',
    slug: 'sports-championship',
    title: 'Sports Championship',
    description: 'Compete in multiple sports disciplines in this comprehensive sports simulation. From football to basketball, tennis to golf, prove your skills and become a champion across all sports.',
    shortDescription: 'Multi-sport championship competition',
    category: GameCategory.SPORTS,
    difficulty: GameDifficulty.MEDIUM,
    platforms: [GamePlatform.WEB, GamePlatform.DESKTOP],
    thumbnail: 'https://picsum.photos/400/300?random=6',
    banner: 'https://picsum.photos/1200/400?random=6',
    screenshots: [
      'https://picsum.photos/800/600?random=61',
      'https://picsum.photos/800/600?random=62',
      'https://picsum.photos/800/600?random=63',
      'https://picsum.photos/800/600?random=64'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 60000) + 15000,
    developer: 'Sports Interactive',
    releaseDate: generateRandomDate(),
    fileSize: 56.7,
    tags: ['sports', 'multiplayer', 'championship', 'simulation', 'competitive'],
    featured: false,
    isNew: false,
    trending: false,
    playUrl: '/play/sports-championship',
    instructions: 'Choose your sport and compete against AI or other players. Master the controls to become a champion.',
    controls: 'WASD: Move, Mouse: Aim/Control, Space: Action, Shift: Sprint',
    ageRating: 7,
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese'],
    reviews: [],
    createdAt: new Date('2023-09-22'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '7',
    slug: 'shooter-arena',
    title: 'Shooter Arena',
    description: 'Enter the ultimate competitive shooter arena where skill and strategy determine victory. Choose from multiple character classes, unlock powerful weapons, and dominate the battlefield.',
    shortDescription: 'Competitive multiplayer shooter arena',
    category: GameCategory.SHOOTER,
    difficulty: GameDifficulty.HARD,
    platforms: [GamePlatform.WEB, GamePlatform.DESKTOP],
    thumbnail: 'https://picsum.photos/400/300?random=7',
    banner: 'https://picsum.photos/1200/400?random=7',
    screenshots: [
      'https://picsum.photos/800/600?random=71',
      'https://picsum.photos/800/600?random=72',
      'https://picsum.photos/800/600?random=73',
      'https://picsum.photos/800/600?random=74',
      'https://picsum.photos/800/600?random=75'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 80000) + 25000,
    developer: 'Combat Games Studio',
    releaseDate: generateRandomDate(),
    fileSize: 89.3,
    tags: ['shooter', 'multiplayer', 'competitive', 'fps', 'arena'],
    featured: true,
    isNew: false,
    trending: true,
    playUrl: '/play/shooter-arena',
    instructions: 'Choose your character class and weapon loadout. Work with your team to eliminate opponents and capture objectives.',
    controls: 'WASD: Move, Mouse: Aim, Left Click: Shoot, R: Reload, Q: Switch weapons',
    ageRating: 16,
    languages: ['English', 'Spanish', 'French', 'German', 'Russian'],
    reviews: [],
    createdAt: new Date('2023-12-01'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: '8',
    slug: 'rpg-legend',
    title: 'RPG Legend',
    description: 'Create your own legend in this epic role-playing game. Customize your character, embark on quests, battle monsters, and build your reputation in a vast fantasy world.',
    shortDescription: 'Epic fantasy role-playing adventure',
    category: GameCategory.RPG,
    difficulty: GameDifficulty.MEDIUM,
    platforms: [GamePlatform.WEB, GamePlatform.DESKTOP],
    thumbnail: 'https://picsum.photos/400/300?random=8',
    banner: 'https://picsum.photos/1200/400?random=8',
    screenshots: [
      'https://picsum.photos/800/600?random=81',
      'https://picsum.photos/800/600?random=82',
      'https://picsum.photos/800/600?random=83',
      'https://picsum.photos/800/600?random=84'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 35000) + 10000,
    developer: 'Fantasy RPG Studios',
    releaseDate: generateRandomDate(),
    fileSize: 67.8,
    tags: ['rpg', 'fantasy', 'character-customization', 'quests', 'story-driven'],
    featured: false,
    isNew: true,
    trending: false,
    playUrl: '/play/rpg-legend',
    instructions: 'Create your character, explore the world, complete quests, and level up your skills and abilities.',
    controls: 'WASD: Move, Mouse: Interact/Attack, I: Inventory, M: Map, Q: Quests',
    ageRating: 12,
    languages: ['English', 'Spanish', 'French', 'German'],
    reviews: [],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '9',
    slug: 'simulation-city',
    title: 'Simulation City',
    description: 'Build and manage your own thriving city in this comprehensive city-building simulation. Balance resources, manage population, and create a metropolis that stands the test of time.',
    shortDescription: 'Comprehensive city-building simulation',
    category: GameCategory.SIMULATION,
    difficulty: GameDifficulty.MEDIUM,
    platforms: [GamePlatform.WEB, GamePlatform.DESKTOP],
    thumbnail: 'https://picsum.photos/400/300?random=9',
    banner: 'https://picsum.photos/1200/400?random=9',
    screenshots: [
      'https://picsum.photos/800/600?random=91',
      'https://picsum.photos/800/600?random=92',
      'https://picsum.photos/800/600?random=93'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 25000) + 8000,
    developer: 'Simulation Games Ltd.',
    releaseDate: generateRandomDate(),
    fileSize: 45.6,
    tags: ['simulation', 'city-building', 'management', 'strategy', 'creative'],
    featured: false,
    isNew: false,
    trending: false,
    playUrl: '/play/simulation-city',
    instructions: 'Plan and build your city by placing buildings, managing resources, and ensuring citizen happiness.',
    controls: 'Mouse: Select and place buildings, Scroll: Zoom, Drag: Pan camera',
    ageRating: 7,
    languages: ['English', 'Spanish', 'French', 'German', 'Italian'],
    reviews: [],
    createdAt: new Date('2023-10-12'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '10',
    slug: 'casual-farm',
    title: 'Casual Farm',
    description: 'Relax and unwind with this charming farming simulation. Plant crops, raise animals, and build your dream farm in this peaceful and addictive casual game.',
    shortDescription: 'Relaxing farming simulation game',
    category: GameCategory.CASUAL,
    difficulty: GameDifficulty.EASY,
    platforms: [GamePlatform.WEB, GamePlatform.MOBILE, GamePlatform.TABLET],
    thumbnail: 'https://picsum.photos/400/300?random=10',
    banner: 'https://picsum.photos/1200/400?random=10',
    screenshots: [
      'https://picsum.photos/800/600?random=101',
      'https://picsum.photos/800/600?random=102',
      'https://picsum.photos/800/600?random=103'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 120000) + 30000,
    developer: 'Casual Games Studio',
    releaseDate: generateRandomDate(),
    fileSize: 15.4,
    tags: ['casual', 'farming', 'relaxing', 'simulation', 'family-friendly'],
    featured: true,
    isNew: false,
    trending: true,
    playUrl: '/play/casual-farm',
    instructions: 'Plant seeds, water crops, harvest produce, and expand your farm with new buildings and animals.',
    controls: 'Mouse: Click to interact, Touch: Tap to interact on mobile',
    ageRating: 3,
    languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'],
    reviews: [],
    createdAt: new Date('2023-07-30'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '11',
    slug: 'educational-math',
    title: 'Educational Math',
    description: 'Make learning fun with this interactive math game designed for all ages. Practice arithmetic, algebra, geometry, and more through engaging puzzles and challenges.',
    shortDescription: 'Interactive math learning game',
    category: GameCategory.EDUCATIONAL,
    difficulty: GameDifficulty.EASY,
    platforms: [GamePlatform.WEB, GamePlatform.MOBILE, GamePlatform.TABLET],
    thumbnail: 'https://picsum.photos/400/300?random=11',
    banner: 'https://picsum.photos/1200/400?random=11',
    screenshots: [
      'https://picsum.photos/800/600?random=111',
      'https://picsum.photos/800/600?random=112',
      'https://picsum.photos/800/600?random=113'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 50000) + 15000,
    developer: 'Educational Games Inc.',
    releaseDate: generateRandomDate(),
    fileSize: 8.2,
    tags: ['educational', 'math', 'learning', 'puzzle', 'family-friendly'],
    featured: false,
    isNew: false,
    trending: false,
    playUrl: '/play/educational-math',
    instructions: 'Solve math problems by selecting the correct answers or completing mathematical puzzles.',
    controls: 'Mouse: Click answers, Touch: Tap answers on mobile, Keyboard: Type numbers',
    ageRating: 3,
    languages: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean'],
    reviews: [],
    createdAt: new Date('2023-05-18'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '12',
    slug: 'action-hero',
    title: 'Action Hero',
    description: 'Become the ultimate action hero in this fast-paced adventure game. Fight enemies, solve puzzles, and save the world with your incredible skills and abilities.',
    shortDescription: 'Fast-paced action adventure game',
    category: GameCategory.ACTION,
    difficulty: GameDifficulty.HARD,
    platforms: [GamePlatform.WEB, GamePlatform.DESKTOP],
    thumbnail: 'https://picsum.photos/400/300?random=12',
    banner: 'https://picsum.photos/1200/400?random=12',
    screenshots: [
      'https://picsum.photos/800/600?random=121',
      'https://picsum.photos/800/600?random=122',
      'https://picsum.photos/800/600?random=123',
      'https://picsum.photos/800/600?random=124'
    ],
    rating: generateRatingDistribution(),
    playCount: Math.floor(Math.random() * 45000) + 12000,
    developer: 'Action Games Studio',
    releaseDate: generateRandomDate(),
    fileSize: 72.1,
    tags: ['action', 'adventure', 'combat', 'platformer', 'hero'],
    featured: true,
    isNew: false,
    trending: true,
    playUrl: '/play/action-hero',
    instructions: 'Navigate through levels, defeat enemies, collect power-ups, and overcome obstacles to reach the end.',
    controls: 'WASD: Move, Space: Jump, Mouse: Aim/Attack, Shift: Sprint, E: Interact',
    ageRating: 10,
    languages: ['English', 'Spanish', 'French', 'German', 'Italian'],
    reviews: [],
    createdAt: new Date('2023-11-28'),
    updatedAt: new Date('2024-01-15')
  }
];

/**
 * Get featured games
 * Returns games marked as featured
 */
export function getFeaturedGames(): Game[] {
  return dummyGames.filter(game => game.featured);
}

/**
 * Get new games
 * Returns games marked as new
 */
export function getNewGames(): Game[] {
  return dummyGames.filter(game => game.isNew);
}

/**
 * Get trending games
 * Returns games marked as trending
 */
export function getTrendingGames(): Game[] {
  return dummyGames.filter(game => game.trending);
}

/**
 * Get games by category
 * Returns games filtered by category
 */
export function getGamesByCategory(category: GameCategory): Game[] {
  return dummyGames.filter(game => game.category === category);
}

/**
 * Search games
 * Returns games matching the search query
 */
export function searchGames(query: string): Game[] {
  const lowercaseQuery = query.toLowerCase();
  return dummyGames.filter(game => 
    game.title.toLowerCase().includes(lowercaseQuery) ||
    game.description.toLowerCase().includes(lowercaseQuery) ||
    game.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

/**
 * Get game by slug
 * Returns a specific game by its slug
 */
export function getGameBySlug(slug: string): Game | undefined {
  return dummyGames.find(game => game.slug === slug);
}

/**
 * Get game by ID
 * Returns a specific game by its ID
 */
export function getGameById(id: string): Game | undefined {
  return dummyGames.find(game => game.id === id);
} 