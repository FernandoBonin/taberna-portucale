import React from 'react';
import { Sailboat, Utensils, Info, Clock } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import CategoryCard from '@/components/CategoryCard';
import { CATEGORIES } from '@/data/menu';

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header variant="home" title="Categorias" />

      <main className="flex-1 flex flex-col relative w-full pt-4 pb-12">
        <div className="flex flex-col w-full px-margin-mobile pb-space-lg">
          {/* Decorative Heritage Brand Strip */}
          <div className="flex items-center justify-between py-space-xs mb-space-sm opacity-90">
            <div className="flex items-center gap-space-xs text-on-tertiary-fixed-variant">
              <Sailboat className="w-4 h-4 text-primary" />
              <span className="font-label-md text-label-md tracking-wider uppercase font-semibold">
                Tradição Cantagalo 856
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-container"></span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
            </div>
          </div>

          {/* Header & Page Intro */}
          <div className="flex flex-col gap-space-xs mb-space-md">
            <div className="inline-flex items-center gap-space-xs self-start px-2.5 py-1 rounded-full bg-surface-container text-tertiary-container">
              <Utensils className="w-3.5 h-3.5 text-on-tertiary-container" />
              <span className="font-label-md text-label-md font-bold uppercase tracking-wider">
                Nosso Cardápio Digital
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight">
              Categorias da Taberna
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Explore as nossas receitas tradicionais e ingredientes selecionados com alma lusitana, direto das cozinhas de Portugal para a sua mesa no Tatuapé.
            </p>
          </div>

          {/* Category List */}
          <div className="flex flex-col gap-space-sm">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          {/* Helpful Tavern Notice at Bottom */}
          <div className="mt-space-md p-space-md rounded-xl bg-surface-container-highest shadow-sm border border-outline-variant/20">
            <div className="flex items-start gap-space-sm">
              <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary">
                <Info className="w-4 h-4" />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-title-md text-title-md text-on-surface font-bold">
                  Informação da Cozinha
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-snug">
                  Todos os pratos principais servem generosamente de 1 a 2 pessoas. Preparação artesanal feita com calma e dedicação na hora do seu pedido.
                </p>
                <div className="flex items-center gap-space-xs mt-space-xs text-on-tertiary-fixed-variant font-label-md text-label-md">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  <span>Tempo estimado por prato: 30 a 45 minutos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
