import type { Metadata, Viewport } from "next";
import { Inter, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

// Import utility functions for debugging and optimization
import { debug } from "@/lib/utils";

// Font configuration for gaming aesthetic
// Inter: Clean, modern body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Orbitron: Futuristic gaming font for headings
const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

// Rajdhani: Display font for gaming elements
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-rajdhani",
});

/**
 * Root layout metadata for SEO optimization
 * This metadata is used by search engines and social media platforms
 */
export const metadata: Metadata = {
  // Base URL for metadata resolution
  metadataBase: new URL("https://awesomecart-gaming.com"),

  // Basic metadata
  title: {
    default: "AwesomeCart Gaming - Play Free Online Games",
    template: "%s | AwesomeCart Gaming",
  },
  description:
    "Discover and play thousands of free online games. From action and adventure to puzzle and strategy games, find your next favorite game on AwesomeCart Gaming.",
  keywords: [
    "online games",
    "free games",
    "browser games",
    "gaming",
    "action games",
    "puzzle games",
    "strategy games",
    "arcade games",
    "casual games",
    "multiplayer games",
  ],
  authors: [{ name: "AwesomeCart Gaming Team" }],
  creator: "AwesomeCart Gaming",
  publisher: "AwesomeCart Gaming",

  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://awesomecart-gaming.com",
    siteName: "AwesomeCart Gaming",
    title: "AwesomeCart Gaming - Play Free Online Games",
    description:
      "Discover and play thousands of free online games. From action and adventure to puzzle and strategy games, find your next favorite game.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AwesomeCart Gaming - Free Online Games",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "AwesomeCart Gaming - Play Free Online Games",
    description:
      "Discover and play thousands of free online games. From action and adventure to puzzle and strategy games, find your next favorite game.",
    images: ["/og-image.jpg"],
    creator: "@awesomecartgaming",
  },

  // Additional metadata for better SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification tokens for search engines
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Icons for the website
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00ff41" },
    ],
  },

  // Manifest for PWA support
  manifest: "/manifest.json",

  // Category for app stores
  category: "games",

  // Classification for content
  classification: "Gaming",

  // Language and region settings
  alternates: {
    canonical: "https://awesomecart-gaming.com",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
      "fr-FR": "/fr-FR",
      "de-DE": "/de-DE",
    },
  },
};

/**
 * Viewport configuration for responsive design
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#00ff41" },
  ],
};

/**
 * Root layout component
 * This is the main layout wrapper for all pages in the application
 *
 * @param children - The page content to be rendered
 * @returns The layout component with proper structure and metadata
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Debug logging for development
  debug("RootLayout: Rendering root layout component", {
    timestamp: new Date().toISOString(),
  });

  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://picsum.photos" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//picsum.photos" />
        <link rel="dns-prefetch" href="//via.placeholder.com" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/orbitron-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AwesomeCart Gaming",
              description: "Discover and play thousands of free online games",
              url: "https://awesomecart-gaming.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://awesomecart-gaming.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "AwesomeCart Gaming",
                logo: {
                  "@type": "ImageObject",
                  url: "https://awesomecart-gaming.com/logo.png",
                },
              },
            }),
          }}
        />
      </head>

      <body
        className={`
        ${inter.className}
        antialiased
        bg-background
        text-foreground
        font-body
        min-h-screen
        flex
        flex-col
      `}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="
            sr-only
            focus:not-sr-only
            focus:absolute
            focus:top-4
            focus:left-4
            bg-primary
            text-primary-foreground
            px-4
            py-2
            rounded-md
            z-50
            transition-all
            duration-200
          "
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>

        {/* Performance monitoring script */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Performance monitoring
                window.addEventListener('load', function() {
                  if ('performance' in window) {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    }
                  }
                });
              `,
            }}
          />
        )}

        {/* Error boundary for better error handling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                console.error('Global error caught:', e.error);
                // In production, you would send this to your error tracking service
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
