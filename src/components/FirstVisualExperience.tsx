'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export const FirstVisualExperience: React.FC = () => {
  const concepts = [
    { label: 'Pausa', desc: 'Silenciar a pressa externa e presentear-se com tempo.' },
    { label: 'Cuidado', desc: 'Toques terapêuticos pensados com respeito ao seu ritmo.' },
    { label: 'Presença', desc: 'Desconectar das distrações e habitar plenamente o seu corpo.' },
    { label: 'Equilíbrio', desc: 'Alívio para as tensões físicas e serenidade para as emoções.' },
  ];

  return (
    <section id="a-una" className="py-24 md:py-32 bg-una-cream-50 bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-una-earth-500 block">
            A Filosofia da UNA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-una-olive-950 font-normal leading-tight">
            Mais do que um momento <br />
            <span className="italic text-una-olive-700">de relaxamento.</span>
          </h2>
          <p className="text-sm sm:text-base text-una-olive-900/75 font-light leading-relaxed max-w-xl mx-auto">
            Uma experiência integrada de bem-estar onde corpo, mente e respiração encontram acolhimento. Cuidar de você é um gesto de gentileza consigo mesma.
          </p>
        </div>

        {/* Visual Composition: 2 Atmospheric Images + Sensory Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Atmospheric Treatment Visuals */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="relative h-72 sm:h-88 rounded-3xl overflow-hidden shadow-sm bg-una-olive-950">
              <Image
                src="/images/una/pedras_quentes.jpg"
                alt="Acolhimento com toques terapêuticos e pedras aquecidas"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
            <div className="relative h-72 sm:h-88 rounded-3xl overflow-hidden shadow-sm bg-una-olive-950 translate-y-6">
              <Image
                src="/images/una/head_spa.jpg"
                alt="Ritual de relaxamento e serenidade no Head Spa"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Concepts Grid */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0 lg:pl-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {concepts.map((concept, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/70 border border-una-cream-300/80 shadow-2xs hover:border-una-sand-400/80 transition-colors"
                >
                  <span className="font-serif text-xl font-medium text-una-olive-950 block">
                    {concept.label}
                  </span>
                  <p className="text-xs text-una-olive-800/75 mt-2 font-light leading-relaxed">
                    {concept.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-una-cream-100/70 border border-una-cream-300/60">
              <p className="text-xs text-una-olive-900/80 font-light leading-relaxed">
                Cada atendimento é conduzido com sensibilidade por fisioterapeuta e massoterapeutas dedicadas, respeitando os limites e as necessidades exclusivas de quem busca alívio e aconchego.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
