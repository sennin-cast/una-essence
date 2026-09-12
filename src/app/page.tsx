import React from 'react';
import { Hero } from '@/components/Hero';
import { EmotionalBlock } from '@/components/EmotionalBlock';
import { FirstVisualExperience } from '@/components/FirstVisualExperience';
import { RootsSection } from '@/components/RootsSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { StoryAlineSection } from '@/components/StoryAlineSection';
import { GallerySection } from '@/components/GallerySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { LocationSection } from '@/components/LocationSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* FASE 1 — Hero */}
      <Hero />

      {/* FASE 1 — Bloco Emocional */}
      <EmotionalBlock />

      {/* FASE 1 — Primeira Experiência Visual */}
      <FirstVisualExperience />

      {/* FASE 2.2 — Raízes da Árvore */}
      <RootsSection />

      {/* FASE 2.3 & 2.4 — Experiências e Serviços sem Preço */}
      <ExperiencesSection />

      {/* FASE 2.1 — História da Aline & Equipe */}
      <StoryAlineSection />

      {/* FASE 2.5 — Galeria Editorial do Espaço */}
      <GallerySection />

      {/* FASE 2.6 — Depoimentos Autênticos */}
      <TestimonialsSection />

      {/* FASE 2.7 — Localização & Recepção */}
      <LocationSection />
    </main>
  );
}
