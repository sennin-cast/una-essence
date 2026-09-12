'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { InstagramIcon } from '@/components/Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-una-olive-950 text-una-cream-100 border-t border-una-olive-900 pt-16 pb-24 md:pb-16 bg-grain-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-una-olive-900/80">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-1 ring-una-sand-400/60 bg-una-olive-900">
                <Image
                  src="/images/una/logo.jpg"
                  alt="UNA Essence — Spa e Ateliê"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wide text-white block leading-none">
                  UNA ESSENCE
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-una-sand-300 font-medium">
                  SPA E ATELIÊ
                </span>
              </div>
            </div>

            <p className="font-serif italic text-una-sand-300 text-base font-light">
              “SUA ESSÊNCIA É ÚNICA®”
            </p>

            <p className="text-xs text-una-cream-100/70 font-light leading-relaxed max-w-sm">
              Um espaço para desacelerar, cuidar de si e reconectar-se com aquilo que realmente importa. Centro, Nova Iguaçu - RJ.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-una-sand-300">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-xs text-una-cream-100/80 font-light">
              <li><a href="#a-una" className="hover:text-white transition-colors">A UNA Essence</a></li>
              <li><a href="#experiencias" className="hover:text-white transition-colors">Experiências</a></li>
              <li><a href="#nossa-historia" className="hover:text-white transition-colors">Nossa História</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Localização & Contato</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-una-sand-300">
              Atendimento & Localização
            </h3>
            <div className="space-y-3 text-xs text-una-cream-100/80 font-light">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-una-sand-400 flex-shrink-0 mt-0.5" />
                <span>Av. Dr. Mario Guimarães, 318 - Sala 104 • Centro, Nova Iguaçu - RJ</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-una-sand-400 flex-shrink-0" />
                <a href="https://wa.me/5521964753383" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  (21) 96475-3383 (WhatsApp Oficial)
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-una-sand-400 flex-shrink-0" />
                <a href="mailto:unaessence.spa@gmail.com" className="hover:text-white transition-colors">
                  unaessence.spa@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-una-sand-400 flex-shrink-0" />
                <a href="https://instagram.com/unaessencespa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @unaessencespa
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-una-cream-100/60 font-light gap-4">
          <p>
            © {new Date().getFullYear()} UNA ESSENCE — SPA E ATELIÊ. Todos os direitos reservados.
          </p>

          <p className="flex items-center gap-1">
            Feito com carinho <Heart className="w-3 h-3 text-una-sand-300 fill-una-sand-300 inline" /> para você
          </p>
        </div>
      </div>
    </footer>
  );
};
