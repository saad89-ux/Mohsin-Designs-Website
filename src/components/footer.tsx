'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Logo Design', href: '/services/logo-design' },
      { label: 'Technical SEO', href: '/services/technical-seo' },
      { label: 'Google Ads', href: '/services/google-ads' },
      { label: 'Brand Identity', href: '/services/brand-identity' },
      { label: 'Website Development', href: '/services/website-development' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blogs' },
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookie' },
    ],
  };

  return (
    <footer className="border-t border-[#0305a8]/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-lg bg-gradient-to-r from-[#0305a8]/5 to-[#3b82f6]/5 border border-[#0305a8]/10 p-8">
          <div className="max-w-2xl">
            <h3 className="mb-2 text-2xl font-bold text-[#0305a8]">Stay Updated</h3>
            <p className="mb-4 text-muted-foreground">
              Get the latest insights on digital marketing and design trends.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-sm placeholder-muted-foreground outline-none transition-colors focus:border-[#0305a8]/30 focus:bg-white text-gray-900"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#0305a8] px-6 py-3 font-medium text-[#fff35c] transition-all hover:bg-[#0305a8]/90 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0305a8]">
                <span className="relative font-bold text-[#fff35c]">LML</span>
              </div>
              <span className="font-bold tracking-tight text-[#0305a8]">Lumina</span>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              Award-winning digital agency transforming brands through innovation and creativity.
            </p>
            <div className="flex gap-3">
              <a href="#" className="rounded-lg bg-slate-100 p-2 text-[#0305a8]/70 transition-colors hover:bg-[#0305a8]/10 hover:text-[#0305a8]">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-lg bg-slate-100 p-2 text-[#0305a8]/70 transition-colors hover:bg-[#0305a8]/10 hover:text-[#0305a8]">
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-lg bg-slate-100 p-2 text-[#0305a8]/70 transition-colors hover:bg-[#0305a8]/10 hover:text-[#0305a8]">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-lg bg-slate-100 p-2 text-[#0305a8]/70 transition-colors hover:bg-[#0305a8]/10 hover:text-[#0305a8]">
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 font-semibold text-[#0305a8]">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-[#0305a8]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-[#0305a8]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-1 h-4 w-4 flex-shrink-0 text-[#0305a8]" />
                <span className="text-muted-foreground">hello@luminamotionlabs.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-[#0305a8]" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-[#0305a8]" />
                <span className="text-muted-foreground">123 Design Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#0305a8]/10 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Lumina Motion Labs. All rights reserved. | Designed with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
