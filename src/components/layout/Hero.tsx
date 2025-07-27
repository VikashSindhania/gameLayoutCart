"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Star, Users, Zap } from "lucide-react";

// Import utilities
import { debug } from "@/lib/utils";

/**
 * Hero section component
 * Main landing section with gaming aesthetic and call-to-action
 *
 * @returns The hero section component
 */
export default function Hero() {
  // Debug logging
  debug("Hero: Rendering hero component", {
    timestamp: new Date().toISOString(),
  });

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Stats data
  const stats = [
    { icon: Users, value: "50K+", label: "Active Players" },
    { icon: Star, value: "4.8", label: "Average Rating" },
    { icon: Zap, value: "1000+", label: "Games Available" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        {/* Animated background patterns */}
        <div className="absolute inset-0 bg-gaming-pattern opacity-30"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-gaming font-bold mb-6 text-gradient leading-tight text-shadow-gaming"
          >
            Play
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gaming-neon via-gaming-electric to-gaming-cyber animate-pulse-glow">
              Amazing Games
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Discover thousands of free online games. From action-packed
            adventures to brain-teasing puzzles, find your next favorite game
            and start playing instantly!
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/games"
              className="btn-gaming glow-effect text-lg px-8 py-4 bg-gradient-to-r from-gaming-neon to-gaming-electric hover:from-gaming-neon/90 hover:to-gaming-electric/90 transform hover:scale-105 transition-all duration-300 shadow-gaming animate-pulse-glow"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Playing Now
            </Link>

            <Link
              href="/categories"
              className="btn-gaming text-lg px-8 py-4 border-2 border-gaming-cyber text-gaming-cyber hover:bg-gaming-cyber hover:text-white transition-all duration-300 hover:shadow-neon"
            >
              Browse Categories
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-gaming-neon mr-2 group-hover:scale-110 transition-transform duration-200 animate-glow" />
                  <span className="text-2xl md:text-3xl font-gaming font-bold text-gradient text-shadow-gaming">
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gaming-neon rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gaming-neon rounded-full mt-2"
          />
        </motion.div>
        <p className="text-foreground/60 text-sm mt-2 text-center">
          Scroll to explore
        </p>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gaming-neon/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gaming-electric/10 rounded-full blur-2xl"></div>
    </section>
  );
}
