'use client';

import React from 'react';
import { MapPin, Phone, Mail, Navigation, MessageCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Mario+Guimar%C3%A3es,+318+-+Centro,+Nova+Igua%C3%A7u+-+RJ,+26255-230';

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      'Olá, Aline! Conheci a UNA Essence pelo site e gostaria de saber sobre horários e como chegar ao espaço.'
    );
    window.open(`https://wa.me/5521964753383?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-una-cream-100/40 border-t border-una-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Location & Contacts */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-una-earth-500 block">
                Localização & Recepção
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-una-olive-950 font-normal leading-tight">
                Seu momento <br />
                <span className="italic text-una-olive-700">começa aqui.</span>
              </h2>
              <p className="text-sm sm:text-base text-una-olive-900/75 font-light leading-relaxed max-w-lg">
                Um espaço discreto, silencioso e acolhedor situado no polo central de Nova Iguaçu, pensado para você deixar a correria lá fora.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-una-cream-300 shadow-2xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-una-olive-100 flex items-center justify-center flex-shrink-0 text-una-olive-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-una-olive-950">
                    Av. Dr. Mario Guimarães, 318 — Sala 104
                  </h3>
                  <p className="text-xs text-una-olive-800/75 font-light mt-0.5">
                    Centro • Nova Iguaçu — RJ • CEP 26255-230
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-una-cream-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-una-olive-800/80 font-light">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-una-sand-400" />
                  <span>(21) 96475-3383</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-una-sand-400" />
                  <span className="truncate">unaessence.spa@gmail.com</span>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir rota para a UNA Essence no Google Maps"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-una-olive-800 hover:bg-una-olive-900 text-una-cream-50 text-xs font-semibold uppercase tracking-wider transition-all shadow-2xs hover:shadow-xs cursor-pointer active:scale-98"
              >
                <Navigation className="w-3.5 h-3.5 text-una-sand-300" />
                <span>Como Chegar</span>
              </a>

              <a
                href="https://wa.me/5521964753383?text=Ol%C3%A1%2C%20Aline!%20Conheci%20a%20UNA%20Essence%20pelo%20site%20e%20gostaria%20de%20saber%20sobre%20hor%C3%A1rios%20e%20como%20chegar%20ao%20espa%C3%A7o."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar com a UNA Essence pelo WhatsApp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-una-cream-100 text-una-olive-900 border border-una-cream-300 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-una-olive-800" />
                <span>Falar com a UNA</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white bg-una-cream-200 h-[380px] sm:h-[440px]">
              <iframe
                title="Localização da UNA Essence Spa em Nova Iguaçu"
                src="https://maps.google.com/maps?q=Av.+Dr.+Mario+Guimar%C3%A3es,+318,+Centro,+Nova+Igua%C3%A7u+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter contrast-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
