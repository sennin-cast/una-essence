'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A UNA', href: '#a-una' },
    { label: 'Experiências', href: '#experiencias' },
    { label: 'Nossa História', href: '#nossa-historia' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#contato' },
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      'Olá, Aline! Conheci a UNA Essence pelo site e gostaria de saber mais sobre as experiências disponíveis.'
    );
    window.open(`https://wa.me/5521964753383?text=${message}`, '_blank');
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-una-cream-50/95 backdrop-blur-md shadow-xs border-b border-una-cream-200/80 py-3.5'
          : 'bg-una-cream-50/80 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-1 ring-una-sand-400/60 bg-una-olive-900 shadow-2xs group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/una/logo.jpg"
              alt="UNA Essence — Spa e Ateliê"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-una-olive-950 leading-none group-hover:text-una-olive-700 transition-colors">
              UNA ESSENCE
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-una-earth-500 font-medium mt-1">
              SPA E ATELIÊ
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-widest text-una-olive-900/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-una-olive-700 transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Action */}
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/5521964753383?text=Ol%C3%A1%2C%20Aline!%20Conheci%20a%20UNA%20Essence%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20experi%C3%AAncias%20dispon%C3%ADveis."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a UNA Essence no WhatsApp"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-una-olive-800 hover:bg-una-olive-900 text-una-cream-50 text-xs font-medium tracking-wider uppercase transition-all duration-300 shadow-2xs hover:shadow-sm hover:scale-[1.02] cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-una-sand-300" />
            <span>Falar com a UNA</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg text-una-olive-900 hover:bg-una-cream-200 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-una-cream-50 border-t border-una-cream-200 px-6 py-6 space-y-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-una-olive-900" aria-label="Menu móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-una-cream-200/50 hover:text-una-olive-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="https://wa.me/5521964753383?text=Ol%C3%A1%2C%20Aline!%20Conheci%20a%20UNA%20Essence%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20experi%C3%AAncias%20dispon%C3%ADveis."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-una-olive-800 text-una-cream-50 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98 transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-una-sand-300" />
              <span>Falar com a UNA</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
