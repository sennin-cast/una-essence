'use client';

import React from 'react';

export const EmotionalBlock: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-una-olive-950 text-una-cream-50 relative overflow-hidden bg-grain-dark">
      {/* Subtle organic light accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-una-olive-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative space-y-8">
        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-una-sand-400 block">
          Um Momento de Reflexão
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
          Você tem cuidado <br className="hidden sm:inline" />
          <span className="italic font-normal text-una-sand-300">de você?</span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-5 text-sm sm:text-base md:text-lg text-una-cream-100/85 font-light leading-relaxed">
          <p>
            Entre compromissos, responsabilidades e tantas demandas do dia a dia, é fácil deixar você mesma para depois.
          </p>
          <p>
            A UNA Essence nasceu para lembrar que cuidar de si também é uma forma de se escolher.
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-una-sand-300 pt-2">
            Porque você importa.
          </p>
        </div>
      </div>
    </section>
  );
};
