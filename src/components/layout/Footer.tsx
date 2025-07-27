'use client';

import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Twitch,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react';
import { debug } from '@/lib/utils';

export default function Footer() {
  debug('Footer: Rendering footer component', { timestamp: new Date().toISOString() });

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    games: [
      { label: 'Action Games', href: '/categories/action' },
      { label: 'Puzzle Games', href: '/categories/puzzle' },
      { label: 'Racing Games', href: '/categories/racing' },
      { label: 'Strategy Games', href: '/categories/strategy' },
      { label: 'All Games', href: '/games' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Blog', href: '/blog' },
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
    social: [
      { label: 'Facebook', href: '#', icon: Facebook },
      { label: 'Twitter', href: '#', icon: Twitter },
      { label: 'Instagram', href: '#', icon: Instagram },
      { label: 'YouTube', href: '#', icon: Youtube },
      { label: 'Twitch', href: '#', icon: Twitch },
    ]
  };

  return (
    <footer className="bg-gaming-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-gaming font-bold text-gradient">
                AwesomeCart
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your ultimate destination for free online gaming. Discover thousands of games 
              and join millions of players worldwide.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Games */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Games</h3>
            <ul className="space-y-2">
              {footerLinks.games.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@awesomecart.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Gaming Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>&copy; {currentYear} AwesomeCart Gaming. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-500" />
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors duration-200">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 