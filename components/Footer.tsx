import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const footerLinks = {
  community: [
    { label: 'Join The Community', href: '/community' },
    { label: 'Join The Team', href: '/team' },
  ],
  resources: [
    { label: 'The Internet\'s Best Articles', href: '/articles' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Resources', href: '/resources' },
  ],
  contact: [
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AO</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              © 2025-26 All Enterprise All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">
              Community
            </h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase text-sm tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-600 hover:text-yellow-500 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-yellow-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-yellow-500 transition-colors">
              Sitemap Directories
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
