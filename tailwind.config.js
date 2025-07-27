/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        secondary: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
          950: "#4a044e",
        },
        gaming: {
          neon: "#00ff41",
          cyber: "#ff0080",
          electric: "#00d4ff",
          plasma: "#ff6b35",
          dark: "#0a0a0a",
          "dark-gray": "#1a1a1a",
          "light-gray": "#2a2a2a",
        },
      },
      fontFamily: {
        gaming: ["Orbitron", "monospace"],
        display: ["Rajdhani", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41",
          },
          "50%": {
            boxShadow: "0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1.05)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in": "slide-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
      },
      boxShadow: {
        gaming: "0 0 20px rgba(0, 255, 65, 0.3)",
        "gaming-lg": "0 0 40px rgba(0, 255, 65, 0.4)",
        "gaming-xl": "0 0 60px rgba(0, 255, 65, 0.5)",
        neon: "0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41",
        "neon-lg": "0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41",
      },
    },
  },
  plugins: [],
};
