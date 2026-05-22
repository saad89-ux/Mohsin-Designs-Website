'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#0305a8]/20 bg-[#fff35c] shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#0305a8] shadow-lg">
              <span className="relative font-bold text-[#fff35c] text-sm">LML</span>
            </div>
            <span className="hidden font-bold tracking-tight text-[#0305a8] sm:inline">
              Lumina Motion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-[#0305a8]/80 transition-colors hover:bg-black/5 hover:text-[#0305a8]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden rounded-full bg-[#0305a8] px-6 py-2 text-sm font-semibold text-[#fff35c] transition-all hover:bg-[#0305a8]/90 hover:shadow-lg sm:inline-block"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#0305a8]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-[#0305a8]/10 bg-[#fff35c]">
            <ul className="space-y-1 px-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#0305a8]/80 transition-colors hover:bg-black/5 hover:text-[#0305a8]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block rounded-lg bg-[#0305a8] px-4 py-2 text-sm font-semibold text-[#fff35c] text-center transition-all hover:bg-[#0305a8]/90 hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
