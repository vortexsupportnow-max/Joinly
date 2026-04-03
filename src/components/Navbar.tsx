'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Funzionalità', href: '#features' },
    { label: 'Come Funziona', href: '#how-it-works' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-dark-border bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #F97316 100%)' }}>
              <span className="text-white font-black text-sm">J</span>
            </div>
            <span className="text-white font-bold text-xl">Joinly</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
              Accedi
            </a>
            <a href="#cta" className="btn-primary text-sm py-2 px-5">
              Inizia Gratis →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark-card border-t border-brand-dark-border px-4 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-400 hover:text-white transition-colors py-2 text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className="btn-primary text-sm py-2 w-full text-center mt-2" onClick={() => setMobileOpen(false)}>
            Inizia Gratis →
          </a>
        </div>
      )}
    </header>
  );
}
