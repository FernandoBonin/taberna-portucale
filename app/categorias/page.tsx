import React from 'react';
import { Sailboat, Utensils, Info, Clock } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import AzulejoBand from '@/components/AzulejoBand';
import CategoryCard from '@/components/CategoryCard';
import { CATEGORIES } from '@/data/menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categorias do Cardápio - Taberna Portucale',
  description: 'Explore nossas receitas tradicionais: Bacalhau da Noruega, Entradas, Peixes, Carnes, Sobremesas Conventuais e Vinhos.',
};

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header variant="home" title="Categorias" />

      <main className="flex-1 flex flex-col relative w-full pb-12">
        <AzulejoBand />

        <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-8 py-6 md:py-12">
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
          <div className="flex flex-col gap-space-xs mb-8 md:mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded-full bg-surface-container text-tertiary-container border border-tertiary-fixed/30">
              <Utensils className="w-3.5 h-3.5 text-on-tertiary-container" />
              <span className="font-label-md text-label-md font-bold uppercase tracking-wider">
                Nosso Cardápio Digital
              </span>
            </div>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight font-bold">
              Categorias da Taberna
            </h1>
            <p className="font-body-md md:font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Explore as nossas receitas tradicionais e ingredientes selecionados com alma lusitana, direto das cozinhas de Portugal para a sua mesa no Tatuapé.
            </p>
          </div>

          {/* Category List: Mobile Vertical / Tablet 2 cols / Desktop 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          {/* Helpful Tavern Notice at Bottom */}
          <div className="mt-8 md:mt-12 p-5 md:p-6 rounded-2xl bg-surface-container-highest shadow-sm border border-outline-variant/20 max-w-4xl">
            <div className="flex items-start gap-space-sm md:gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary">
                <Info className="w-5 h-5" />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-title-md text-base md:text-lg text-on-surface font-bold">
                  Informação da Cozinha
                </h3>
                <p className="font-body-md text-sm md:text-base text-on-surface-variant mt-1 leading-relaxed">
                  Todos os pratos principais servem generosamente de 1 a 2 pessoas. Preparação artesanal feita com calma e dedicação na hora do seu pedido para garantir a máxima suculência e sabor autêntico.
                </p>
                <div className="flex items-center gap-space-xs mt-3 text-on-tertiary-fixed-variant font-label-md text-xs md:text-sm">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>Tempo estimado por prato: 30 a 45 minutos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
