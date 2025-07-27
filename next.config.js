/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  // This helps identify potential problems in your application
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  // SWC is a Rust-based compiler that's much faster than Babel
  swcMinify: true,

  // Image optimization configuration
  // Next.js automatically optimizes images for better performance
  images: {
    // Allow images from external domains (for dummy data)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Set default image formats for better compression
    formats: ["image/webp", "image/avif"],
    // Enable device pixel ratio optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features for better performance
  experimental: {
    // Enable server components
    serverComponentsExternalPackages: [],
    // Enable optimized package imports
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Security headers for better security
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  // Redirects for better SEO and user experience
  async redirects() {
    return [
      {
        // Redirect old game URLs to new format
        source: "/game/:slug",
        destination: "/games/:slug",
        permanent: true,
      },
    ];
  },

  // Rewrites for API routes and internal routing
  async rewrites() {
    return [
      {
        // Rewrite API calls to internal routes
        source: "/api/games/:path*",
        destination: "/api/games/:path*",
      },
    ];
  },

  // Webpack configuration for better bundle optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size in production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }

    return config;
  },

  // Compiler configuration
  compiler: {
    // Remove console.logs in production for better performance
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
