'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, Sprout } from 'lucide-react';

export const StoryAlineSection: React.FC = () => {
  const milestones = [
    {
      year: 'A Formação & Trajetória',
      title: 'Fisioterapia e Movimento',
      desc: 'Formada em Fisioterapia e com anos de dedicação ao Pilates, Aline sempre cultivou o olhar atento ao corpo e ao alívio do sofrimento físico.',
    },
    {
      year: 'Maio de 2021',
      title: 'Recomeço & Aromaterapia',
      desc: 'Diante de um momento de dor e recolhimento, os óleos essenciais e a criação de sabonetes artesanais se tornaram um refúgio terapêutico e criativo.',
    },
    {
      year: 'Dezembro de 2021',
      title: 'O Contato com as Pessoas',
      desc: 'A primeira feira de artesanato reacendeu o sorriso, a troca de afeto com o público e a certeza de que o cuidado com o outro era sua vocação.',
    },
    {
      year: 'Março de 2022',
      title: 'O Sonho do Spa Floresce',
      desc: 'Resgatado em oração, o antigo sonho de ter um refúgio acolhedor de bem-estar se tornou realidade: nascia a UNA Essence.',
    },
  ];

  return (
    <section id="nossa-historia" className="py-24 md:py-32 bg-una-cream-50 bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-una-earth-500 block">
            Nossa História
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-una-olive-950 font-normal leading-tight">
            Antes da UNA, <br />
            <span className="italic text-una-olive-700">existia um sonho.</span>
          </h2>
          <p className="text-sm sm:text-base text-una-olive-900/75 font-light leading-relaxed max-w-xl mx-auto">
            A história de Aline Barbosa é marcada por fé, sensibilidade e a determinação de transformar superação em acolhimento para outras pessoas.
          </p>
        </div>

        {/* Story Composition: Portrait + Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Aline's Real Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden p-2.5 bg-gradient-to-b from-una-sand-300/50 via-una-cream-100 to-una-olive-700/20 shadow-xl max-w-md mx-auto">
              <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden bg-una-olive-950">
                <Image
                  src="/images/una/2.jpeg"
                  alt="Aline Barbosa, Fundadora da UNA Essence"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-una-olive-950/75 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-una-olive-950/80 backdrop-blur-md border border-una-sand-300/30 text-white">
                  <p className="font-serif text-lg font-medium text-una-sand-300">
                    Aline Barbosa
                  </p>
                  <p className="text-[10px] text-una-cream-100 tracking-widest uppercase mt-0.5">
                    Fisioterapeuta • Fundadora da UNA Essence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative Milestones & Highlight Quote */}
          <div className="lg:col-span-7 space-y-8">
            <blockquote className="p-6 rounded-2xl bg-una-cream-100/80 border-l-4 border-una-sand-400 font-serif italic text-lg sm:text-xl text-una-olive-950 font-light leading-relaxed">
              “Sempre vi minha mãe lutando, mas nunca vi ela desistindo!”
            </blockquote>

            <div className="space-y-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-una-olive-100 border border-una-sand-400/60 flex items-center justify-center flex-shrink-0 text-una-olive-800 text-xs font-semibold mt-1">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-una-earth-500">
                      {m.year}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-una-olive-950">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-una-olive-800/75 font-light leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Tribute */}
        <div className="pt-12 border-t border-una-cream-300/80">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-10">
            <h3 className="font-serif text-2xl text-una-olive-950 font-normal">
              Equipe UNA Essence
            </h3>
            <p className="text-xs text-una-olive-800/70 font-light">
              Profissionais dedicadas ao cuidado acolhedor e individualizado de cada momento.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-una-cream-300 shadow-2xs group">
              <div className="relative h-64 w-full bg-una-olive-900">
                <Image
                  src="/images/una/2.jpeg"
                  alt="Aline Barbosa"
                  fill
                  sizes="300px"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-serif text-base font-semibold text-una-olive-950">Aline Barbosa</h4>
                <p className="text-[11px] text-una-earth-500 font-light mt-0.5">Fundadora & Fisioterapeuta</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-una-cream-300 shadow-2xs group">
              <div className="relative h-64 w-full bg-una-olive-900">
                <Image
                  src="/images/una/3.jpeg"
                  alt="Alícia Barbosa"
                  fill
                  sizes="300px"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-serif text-base font-semibold text-una-olive-950">Alícia Barbosa</h4>
                <p className="text-[11px] text-una-earth-500 font-light mt-0.5">Assistente de Gestão</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-una-cream-300 shadow-2xs group sm:col-span-2 lg:col-span-1">
              <div className="relative h-64 w-full bg-una-olive-900">
                <Image
                  src="/images/una/4.jpeg"
                  alt="Isabele Menezes"
                  fill
                  sizes="300px"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-serif text-base font-semibold text-una-olive-950">Isabele Menezes</h4>
                <p className="text-[11px] text-una-earth-500 font-light mt-0.5">Massoterapeuta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
