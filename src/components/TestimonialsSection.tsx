'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/services';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-una-cream-50 bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-una-earth-500 block">
            Relatos & Afeto
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-una-olive-950 font-normal leading-tight">
            Quem vive a UNA, <br />
            <span className="italic text-una-olive-700">entende.</span>
          </h2>
          <p className="text-sm sm:text-base text-una-olive-900/75 font-light leading-relaxed max-w-xl mx-auto">
            Palavras espontâneas de quem encontrou na UNA Essence o seu momento sagrado de respiro e desaceleração.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-una-cream-300 shadow-2xs hover:border-una-sand-400/80 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-una-sand-400/80" />
                <h3 className="font-serif text-lg font-medium text-una-olive-950 leading-snug">
                  “{item.highlight}”
                </h3>
                <p className="text-xs text-una-olive-800/75 font-light leading-relaxed">
                  {item.comment}
                </p>
              </div>

              <div className="pt-6 border-t border-una-cream-200 mt-6">
                <p className="font-serif text-sm font-semibold text-una-olive-950">
                  {item.name}
                </p>
                <p className="text-[11px] text-una-earth-500 font-light mt-0.5">
                  {item.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
