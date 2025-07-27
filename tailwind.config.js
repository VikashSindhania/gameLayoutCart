/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode for better gaming aesthetics
  // This allows users to toggle between light and dark themes
  darkMode: ['class'],

  // Content paths for Tailwind to scan and generate styles
  // This ensures only used styles are included in the final bundle
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // Theme customization for gaming website
  theme: {
    // Extend the default container for better responsive design
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    // Extend color palette with gaming-themed colors
    extend: {
      // Custom colors for gaming aesthetic
      colors: {
        // Primary gaming colors
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Secondary accent colors
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        // Gaming-specific colors
        gaming: {
          neon: '#00ff41',
          cyber: '#ff0080',
          electric: '#00d4ff',
          plasma: '#ff6b35',
          dark: '#0a0a0a',
          'dark-gray': '#1a1a1a',
          'light-gray': '#2a2a2a',
        },
        // Border colors for better contrast
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Component-specific colors
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
      },

      // Custom border radius for modern UI
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      // Custom font families for gaming aesthetic
      fontFamily: {
        // Gaming-style fonts
        gaming: ['Orbitron', 'monospace'],
        display: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },

      // Custom spacing for better component spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // Custom animation keyframes for gaming effects
      keyframes: {
        // Glow effect for gaming elements
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
          },
          '50%': {
            boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
          },
        },
        // Pulse effect for interactive elements
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
        // Slide animations for smooth transitions
        'slide-in': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        // Fade animations
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        // Scale animations for hover effects
        'scale-in': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },

      // Custom animation utilities
      animation: {
        // Gaming-specific animations
        glow: 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },

      // Custom background patterns for gaming aesthetic
      backgroundImage: {
        // Gradient backgrounds
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Gaming-specific patterns
        'gaming-pattern': "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff41' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },

      // Custom box shadows for depth
      boxShadow: {
        // Gaming-style shadows
        'gaming': '0 0 20px rgba(0, 255, 65, 0.3)',
        'gaming-lg': '0 0 40px rgba(0, 255, 65, 0.4)',
        'gaming-xl': '0 0 60px rgba(0, 255, 65, 0.5)',
        // Neon effects
        'neon': '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
        'neon-lg': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
      },
    },
  },

  // Plugins for additional functionality
  plugins: [
    // Plugin for better typography
    require('@tailwindcss/typography'),
    // Plugin for form styling
    require('@tailwindcss/forms'),
    // Plugin for aspect ratio utilities
    require('@tailwindcss/aspect-ratio'),
  ],
}; 