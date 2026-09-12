'use client';

import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';

export const MobileActionBar: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/5521964753383?text=' +
    encodeURIComponent(
      'Olá, Aline! Conheci a UNA Essence pelo site e gostaria de conversar sobre um momento de cuidado para mim.'
    );

  const mapsUrl =
    'https://maps.google.com/?q=Av.+Dr.+Mario+Guimar%C3%A3es,+318,+Centro,+Nova+Igua%C3%A7u+-+RJ';

  return (
    <div
      aria-label="Ações rápidas no celular"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-una-cream-50/95 backdrop-blur-md border-t border-una-sand-200/80 px-4 py-3 shadow-lg shadow-una-olive-950/5 safe-area-bottom"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full border border-una-olive-900/20 text-una-olive-900 bg-white/60 hover:bg-white text-xs tracking-wider uppercase font-medium transition-all active:scale-95 shadow-sm"
          aria-label="Como chegar à UNA Essence no Google Maps"
        >
          <MapPin className="w-4 h-4 text-una-terracotta-500 shrink-0" />
          <span>Como Chegar</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-una-olive-900 hover:bg-una-olive-950 text-una-cream-50 text-xs tracking-wider uppercase font-medium transition-all active:scale-95 shadow-md shadow-una-olive-900/20"
          aria-label="Conversar com a UNA Essence no WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-una-sand-300 shrink-0" />
          <span>Falar com a UNA</span>
        </a>
      </div>
    </div>
  );
};
