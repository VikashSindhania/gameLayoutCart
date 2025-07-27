# AwesomeCart Gaming 🎮

A modern, responsive gaming website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project demonstrates best practices for building a production-ready gaming platform with SEO optimization, accessibility, and performance.

## ✨ Features

### 🎯 Core Features

- **Modern Gaming UI/UX** - Beautiful, responsive design with gaming aesthetic
- **Game Discovery** - Browse games by categories, search, and filters
- **Responsive Design** - Mobile-first approach with perfect mobile experience
- **Dark/Light Mode** - Toggle between themes with system preference detection
- **Performance Optimized** - Fast loading with Next.js optimizations
- **SEO Optimized** - Meta tags, structured data, sitemap, and robots.txt

### 🛠 Technical Features

- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth animations and transitions
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Performance** - Core Web Vitals optimization
- **Debugging** - Comprehensive logging and error handling

### 🎮 Gaming Features

- **Game Categories** - Action, Adventure, Puzzle, Racing, Strategy, etc.
- **Game Cards** - Interactive cards with hover effects and ratings
- **Search & Filter** - Find games by category, difficulty, platform
- **Featured Games** - Highlighted games section
- **Trending Games** - Popular games based on play count
- **New Releases** - Latest games added to the platform

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/awesomecart-gaming.git
   cd awesomecart-gaming
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
AwesomeCart/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── robots.txt         # SEO robots file
│   │   └── sitemap.ts         # Dynamic sitemap
│   ├── components/            # Reusable components
│   │   ├── layout/           # Layout components
│   │   └── games/            # Game-specific components
│   ├── lib/                  # Utility functions
│   ├── types/                # TypeScript definitions
│   └── data/                 # Dummy data
├── public/                   # Static assets
└── config files...
```

## 🎨 Design System

### Colors

- **Primary**: Blue gradient (#0ea5e9 to #d946ef)
- **Secondary**: Purple gradient (#d946ef to #a855f7)
- **Gaming**: Neon green (#00ff41), Cyber pink (#ff0080)
- **Dark Theme**: Dark backgrounds with high contrast

### Typography

- **Gaming Font**: Orbitron (headings)
- **Display Font**: Rajdhani (subheadings)
- **Body Font**: Inter (body text)

### Components

- **Game Cards** - Interactive cards with hover effects
- **Buttons** - Gaming-style buttons with gradients
- **Navigation** - Responsive navigation with mobile menu
- **Hero Section** - Animated hero with call-to-action

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Watch mode tests
npm run test:e2e     # End-to-end tests
```

### Environment Variables

Create a `.env.local` file:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=AwesomeCart Gaming

# API Configuration (for future use)
NEXT_PUBLIC_API_URL=https://api.awesomecart-gaming.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support
- **Reduced motion** preferences
- **Focus indicators** for all interactive elements

## 🚀 Performance

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimizations

- **Image optimization** with Next.js Image component
- **Font optimization** with next/font
- **Code splitting** and lazy loading
- **Bundle analysis** and optimization
- **Caching strategies**

## 🔍 SEO Features

- **Meta tags** for all pages
- **Open Graph** and Twitter Card support
- **Structured data** (JSON-LD)
- **Dynamic sitemap** generation
- **Robots.txt** configuration
- **Canonical URLs**
- **Breadcrumb navigation**

## 🧪 Testing

```bash
# Unit tests
npm run test

# Component tests
npm run test:components

# E2E tests
npm run test:e2e
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Configure build settings
- **AWS Amplify**: Connect repository
- **Docker**: Use provided Dockerfile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier
- Write meaningful commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Picsum Photos** for placeholder images

## 📞 Support

- **Email**: support@awesomecart-gaming.com
- **Issues**: [GitHub Issues](https://github.com/yourusername/awesomecart-gaming/issues)
- **Documentation**: [Wiki](https://github.com/yourusername/awesomecart-gaming/wiki)

---

**Made with ❤️ by the AwesomeCart Gaming Team**
