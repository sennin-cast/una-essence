'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { OFFICIAL_SERVICES, CATEGORY_TABS } from '@/data/services';
import { Service, ServiceCategory } from '@/types';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const ExperiencesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const filteredServices = OFFICIAL_SERVICES.filter((s) => {
    if (selectedCategory === 'todos') return true;
    return s.category === selectedCategory;
  });

  const getWhatsAppUrl = (serviceName: string) => {
    const message = encodeURIComponent(
      `Olá, Aline! Conheci a UNA Essence pelo site e gostaria de saber mais sobre o ${serviceName}.`
    );
    return `https://wa.me/5521964753383?text=${message}`;
  };

  return (
    <section id="experiencias" className="py-24 md:py-32 bg-una-cream-50 bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-una-earth-500 block">
            Nossos Rituais & Terapias
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-una-olive-950 font-normal leading-tight">
            Encontre o cuidado que combina <br />
            <span className="italic text-una-olive-700">com o seu momento.</span>
          </h2>
          <p className="text-sm sm:text-base text-una-olive-900/75 font-light leading-relaxed max-w-xl mx-auto">
            Cada corpo possui necessidades únicas. Explore nossas experiências e converse diretamente conosco pelo WhatsApp para tirar dúvidas e agendar seu horário.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div
          role="tablist"
          aria-label="Categorias de rituais e cuidados"
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar"
        >
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(tab.key)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-una-olive-800 text-una-cream-50 shadow-xs scale-102'
                    : 'bg-white/80 hover:bg-white text-una-olive-900 border border-una-cream-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid (Editorial Spa Boutique Style - ZERO PREÇOS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredServices.map((service: Service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-una-cream-300 hover:border-una-sand-400/90 shadow-2xs hover:shadow-lg transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-una-olive-950">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Category tag */}
                <span className="absolute bottom-3 left-4 text-[10px] text-una-cream-100 uppercase tracking-widest font-medium">
                  {service.categoryLabel}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-una-olive-950 group-hover:text-una-olive-700 transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-una-olive-800/75 mt-2.5 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {service.safetyNote && (
                    <p className="text-[11px] text-amber-800/80 mt-2 font-light italic">
                      {service.safetyNote}
                    </p>
                  )}
                </div>

                {/* Single Contextual WhatsApp CTA - No Prices! */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Conversar no WhatsApp sobre ${service.name}`}
                    className="w-full py-3.5 px-5 rounded-full bg-una-olive-800 hover:bg-una-olive-900 text-una-cream-50 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs group/btn cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-una-sand-300" />
                    <span>Quero essa experiência</span>
                    <ArrowRight className="w-3.5 h-3.5 text-una-sand-400 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
