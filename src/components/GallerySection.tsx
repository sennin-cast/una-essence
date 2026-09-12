'use client';

import React from 'react';
import Image from 'next/image';

export const GallerySection: React.FC = () => {
  const images = [
    {
      src: '/images/una/Perfil.jpg',
      alt: 'Aline Barbosa no ambiente acolhedor da UNA Essence',
      span: 'md:col-span-2 md:row-span-2 h-96 md:h-[480px]',
      caption: 'Acolhimento com olhar atento e humano',
    },
    {
      src: '/images/una/head_spa.jpg',
      alt: 'Ritual relaxante no Head Spa',
      span: 'h-60 md:h-[228px]',
      caption: 'Hidroterapia e serenidade',
    },
    {
      src: '/images/una/pedras_quentes.jpg',
      alt: 'Toques com pedras aquecidas e óleos botânicos',
      span: 'h-60 md:h-[228px]',
      caption: 'Alívio para as tensões',
    },
    {
      src: '/images/una/spa_pes.jpg',
      alt: 'Escalda-pés com ervas e sais aromáticos',
      span: 'h-60 md:h-[228px]',
      caption: 'Pausa para os passos da rotina',
    },
    {
      src: '/images/una/1.jpeg',
      alt: 'Equipe da UNA Essence reunida no espaço',
      span: 'md:col-span-2 h-60 md:h-[228px]',
      caption: 'Nossa equipe pronta para te receber',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-una-cream-100/40 border-y border-una-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-una-earth-500 block">
            Atmosfera & Detalhes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-una-olive-950 font-normal leading-tight">
            Um espaço pensado <br />
            <span className="italic text-una-olive-700">para você.</span>
          </h2>
          <p className="text-sm sm:text-base text-una-olive-900/75 font-light leading-relaxed max-w-xl mx-auto">
            Cada cantinho da UNA Essence foi planejado para transportar você para um estado de silêncio, tranquilidade e renovação.
          </p>
        </div>

        {/* Editorial Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden shadow-2xs group bg-una-olive-950 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-una-olive-950/70 via-transparent to-transparent opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-4 right-4 text-white opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-serif italic text-una-sand-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
