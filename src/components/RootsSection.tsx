'use client';

import React from 'react';
import Image from 'next/image';

export const RootsSection: React.FC = () => {
  const elements = [
    {
      stage: 'Raízes',
      headline: 'O Alicerce Invisível',
      desc: 'Deus, família, fé, sonhos resgatados e pessoas verdadeiras que sustentam cada passo.',
    },
    {
      stage: 'Tronco',
      headline: 'A Estrutura e o Propósito',
      desc: 'A trajetória construída com resiliência, formação profissional e a criação da UNA Essence.',
    },
    {
      stage: 'Folhas',
      headline: 'O Toque e o Cuidado',
      desc: 'As experiências sensoriais, massagens terapêuticas e rituais que abrigam e acolhem quem chega.',
    },
    {
      stage: 'Frutos',
      headline: 'A Transformação',
      desc: 'Pausa, acolhimento, autocuidado, bem-estar profundo e a reconexão com a própria essência.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-una-olive-950 text-una-cream-50 bg-grain-dark relative overflow-hidden">
      {/* Subtle lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-una-olive-800/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-una-olive-900 border border-una-sand-300/20 text-una-sand-300 text-[10px] font-semibold uppercase tracking-widest">
            O Símbolo da Árvore
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight">
            De onde vêm as <br />
            <span className="italic text-una-sand-300 font-normal">nossas raízes.</span>
          </h2>
          <p className="text-xs sm:text-sm text-una-cream-100/75 font-light leading-relaxed max-w-lg mx-auto">
            A árvore da nossa identidade visual é mais do que um emblema: é a representação viva da nossa história e do nosso propósito.
          </p>
        </div>

        {/* 4 Metaphorical Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {elements.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-una-olive-900/60 border border-una-sand-300/15 backdrop-blur-xs flex flex-col justify-between hover:border-una-sand-400/40 transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-una-sand-400 font-medium">
                    Parte 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-una-sand-400/60 group-hover:bg-una-sand-300 transition-colors" />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-medium text-white group-hover:text-una-sand-300 transition-colors">
                    {item.stage}
                  </h3>
                  <p className="text-xs font-serif italic text-una-sand-300/80 mt-1">
                    {item.headline}
                  </p>
                </div>

                <p className="text-xs text-una-cream-100/75 font-light leading-relaxed pt-2">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-una-olive-800/80 mt-6">
                <span className="text-[10px] uppercase tracking-widest text-una-cream-100/40 font-light">
                  UNA Essence
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
