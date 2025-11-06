import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'The Four Pillars', href: '/the-four-pillars' },
    { label: 'Blog', href: '/blog' },
    { label: 'All Videos', href: '/videos' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com/lifebydesign', label: 'Instagram' },
  { Icon: Facebook, href: 'https://facebook.com/lifebydesign', label: 'Facebook' },
  { Icon: Twitter, href: 'https://twitter.com/lifebydesign', label: 'Twitter' },
  { Icon: Youtube, href: 'https://youtube.com/@LifeByDesignWithTimBooker', label: 'YouTube' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/lifebydesign', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TB</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-black transition-colors">
                Life By Design
              </span>
            </Link>
            <p className="text-sm text-gray-600 mb-6">
              Building generational wealth through purpose, health, and legacy.
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Life By Design. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-black mb-3 text-sm uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              Made with purpose for building generational wealth
            </p>
            <Link 
              href="/sitemap" 
              className="hover:text-black transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}