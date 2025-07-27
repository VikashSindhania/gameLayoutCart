'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Zap, 
  Puzzle, 
  Car, 
  Target, 
  Trophy, 
  Sword, 
  Brain, 
  Gamepad2,
  Heart,
  BookOpen,
  Star
} from 'lucide-react';
import { GameCategory } from '@/types';
import { debug } from '@/lib/utils';

const categories = [
  { 
    id: GameCategory.ACTION, 
    name: 'Action', 
    icon: Zap, 
    color: 'from-red-500 to-orange-500',
    description: 'Fast-paced action games'
  },
  { 
    id: GameCategory.ADVENTURE, 
    name: 'Adventure', 
    icon: Sword, 
    color: 'from-green-500 to-emerald-500',
    description: 'Epic adventure games'
  },
  { 
    id: GameCategory.PUZZLE, 
    name: 'Puzzle', 
    icon: Puzzle, 
    color: 'from-blue-500 to-cyan-500',
    description: 'Brain-teasing puzzles'
  },
  { 
    id: GameCategory.RACING, 
    name: 'Racing', 
    icon: Car, 
    color: 'from-purple-500 to-pink-500',
    description: 'High-speed racing games'
  },
  { 
    id: GameCategory.STRATEGY, 
    name: 'Strategy', 
    icon: Brain, 
    color: 'from-yellow-500 to-orange-500',
    description: 'Strategic thinking games'
  },
  { 
    id: GameCategory.SHOOTER, 
    name: 'Shooter', 
    icon: Target, 
    color: 'from-red-600 to-red-800',
    description: 'Action shooter games'
  },
  { 
    id: GameCategory.SPORTS, 
    name: 'Sports', 
    icon: Trophy, 
    color: 'from-green-600 to-green-800',
    description: 'Sports and competition'
  },
  { 
    id: GameCategory.RPG, 
    name: 'RPG', 
    icon: Star, 
    color: 'from-purple-600 to-purple-800',
    description: 'Role-playing games'
  },
  { 
    id: GameCategory.SIMULATION, 
    name: 'Simulation', 
    icon: Gamepad2, 
    color: 'from-gray-500 to-gray-700',
    description: 'Life simulation games'
  },
  { 
    id: GameCategory.ARCADE, 
    name: 'Arcade', 
    icon: Heart, 
    color: 'from-pink-500 to-rose-500',
    description: 'Classic arcade games'
  },
  { 
    id: GameCategory.CASUAL, 
    name: 'Casual', 
    icon: BookOpen, 
    color: 'from-indigo-500 to-blue-500',
    description: 'Casual fun games'
  },
  { 
    id: GameCategory.EDUCATIONAL, 
    name: 'Educational', 
    icon: Brain, 
    color: 'from-teal-500 to-cyan-500',
    description: 'Learning games'
  }
];

export default function GameCategories() {
  debug('GameCategories: Rendering game categories component', { 
    categoriesCount: categories.length 
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1 
          }}
          whileHover={{ y: -5, scale: 1.05 }}
          className="group"
        >
          <Link
            href={`/categories/${category.id}`}
            className="block p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group-hover:shadow-gaming"
          >
            <div className="text-center space-y-3">
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                {category.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {category.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
} 