'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsAppCare = () => {
    const message = encodeURIComponent(
      'Olá, Aline! Conheci a UNA Essence pelo site e gostaria de um momento para cuidar de mim. Como podemos conversar?'
    );
    window.open(`https://wa.me/5521964753383?text=${message}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-28 bg-una-cream-50 bg-grain">
      {/* Subtle organic light accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-una-sand-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Editorial Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-una-cream-100 border border-una-sand-300/70 shadow-2xs">
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-una-earth-700">
                Spa e Ateliê • Nova Iguaçu - RJ
              </span>
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-5">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-una-olive-950 font-normal leading-[1.12] tracking-tight">
                SUA ESSÊNCIA <br className="hidden sm:inline" />
                <span className="italic font-normal text-una-olive-700">
                  É ÚNICA®
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-una-olive-900/80 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Um espaço para desacelerar, cuidar de si e reconectar-se com aquilo que realmente importa.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://wa.me/5521964753383?text=Ol%C3%A1%2C%20Aline!%20Conheci%20a%20UNA%20Essence%20pelo%20site%20e%20gostaria%20de%20um%20momento%20para%20cuidar%20de%20mim.%20Como%20podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp com Aline da UNA Essence para cuidar de si"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-una-olive-800 hover:bg-una-olive-900 text-una-cream-50 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer active:scale-98"
              >
                <span>Quero Cuidar de Mim</span>
                <ArrowRight className="w-3.5 h-3.5 text-una-sand-300" />
              </a>

              <a
                href="#a-una"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-una-cream-100 text-una-olive-900 border border-una-olive-800/30 hover:border-una-olive-800 text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer"
              >
                <span>Conheça a UNA Essence</span>
              </a>
            </div>

            {/* Human Signature Callout */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-una-earth-500 font-serif italic">
              <span>Por Aline Barbosa — Fisioterapeuta e Fundadora</span>
            </div>
          </div>

          {/* Right: Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Refined Frame */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-una-sand-300/40 via-una-cream-100 to-una-olive-700/20 shadow-xl">
                <div className="relative h-[450px] sm:h-[520px] w-full rounded-2xl overflow-hidden bg-una-olive-950">
                  <Image
                    src="/images/una/Perfil.jpg"
                    alt="Aline Barbosa no ambiente acolhedor da UNA Essence"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover object-top hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-una-olive-950/70 via-transparent to-transparent" />

                  {/* Editorial Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-una-cream-50 bg-una-olive-950/80 backdrop-blur-md p-4 rounded-xl border border-una-sand-300/30">
                    <p className="font-serif text-lg font-medium text-white">
                      Aline Barbosa
                    </p>
                    <p className="text-[10px] text-una-sand-300 tracking-widest uppercase mt-0.5">
                      Fundadora da UNA Essence • Fisioterapeuta
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle Tree Emblem Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-5 bg-una-olive-900 text-una-cream-50 p-3 rounded-2xl shadow-lg border border-una-sand-300/30 flex items-center gap-2.5 max-w-[200px]">
                <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-una-olive-950 ring-1 ring-una-sand-400">
                  <Image
                    src="/images/una/logo.jpg"
                    alt="Árvore da UNA"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-serif font-medium text-una-sand-300">Tudo começa pelas raízes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
