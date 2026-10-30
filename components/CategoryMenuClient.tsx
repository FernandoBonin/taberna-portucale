'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ChevronRight,
  ArrowLeft,
  Award,
  Clock,
  Info,
  Sailboat,
  Utensils,
  MessageCircle,
} from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import AzulejoBand from '@/components/AzulejoBand';
import DishCard from '@/components/DishCard';
import { Category, Dish, RESTAURANT_INFO } from '@/data/menu';

interface CategoryMenuClientProps {
  category: Category;
  dishes: Dish[];
}

export default function CategoryMenuClient({
  category,
  dishes,
}: CategoryMenuClientProps) {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'forno' | 'desfiado' | 'natas'>('all');

  const isBacalhau = category.slug === 'bacalhau';

  const filteredDishes = dishes.filter((dish) => {
    if (selectedFilter === 'all') return true;
    return dish.categoryType === selectedFilter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header
        variant="subpage"
        title="Detalhes Do Prato"
        subtitle={RESTAURANT_INFO.name}
        backHref="/categorias"
      />

      <main className="flex-1 flex flex-col relative w-full pb-12">
        <AzulejoBand />

        <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-8 py-4 md:py-8">
          {/* Decorative Breadcrumbs & Navigation */}
          <div className="pt-2 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/15 mb-6">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-xs sm:text-sm">
              <Link href="/" className="hover:underline text-on-surface-variant">
                Início
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-outline-variant" />
              <Link href="/categorias" className="hover:underline text-on-surface-variant">
                Categorias
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-outline-variant" />
              <span className="text-secondary font-bold">{category.name}</span>
            </div>

            <button
              onClick={() => router.push('/categorias')}
              className="inline-flex items-center gap-1.5 self-start sm:self-auto text-primary-container font-label-md text-xs sm:text-sm font-bold py-1 px-2.5 rounded-lg hover:bg-surface-container transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para Categorias</span>
            </button>
          </div>

          {/* Category Headline Section */}
          <section className="pb-6">
            <div className="bg-surface-container rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden border border-tertiary-fixed/30">
              {/* Subtle Azulejo Crest Watermark Accent */}
              <div className="absolute -right-4 -bottom-6 opacity-10 pointer-events-none text-primary">
                <Sailboat className="w-48 h-48 md:w-64 md:h-64" />
              </div>

              <div className="max-w-3xl relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold uppercase tracking-wider mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>{category.badge || 'Especialidade da Casa'}</span>
                </div>

                <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface mb-2 font-bold">
                  {category.slug === 'bacalhau' ? 'Pratos de Bacalhau' : category.name}
                </h1>

                <p className="font-body-md md:font-body-lg text-sm sm:text-base text-on-surface-variant mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="inline-flex items-center gap-2 p-2.5 px-3.5 bg-surface-container-high rounded-xl text-tertiary-container font-label-md text-xs sm:text-sm border border-outline-variant/15">
                  <Clock className="w-4 h-4 text-secondary shrink-0" />
                  <span>Preparo artesanal cuidadoso: {RESTAURANT_INFO.estimatedTime}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Filter Chips */}
          {isBacalhau && (
            <section className="pb-6">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                <button
                  type="button"
                  onClick={() => setSelectedFilter('all')}
                  className={`px-5 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    selectedFilter === 'all'
                      ? 'bg-primary-container text-surface shadow-md scale-105'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Todos
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter('forno')}
                  className={`px-5 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    selectedFilter === 'forno'
                      ? 'bg-primary-container text-surface shadow-md scale-105'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Ao Forno
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter('desfiado')}
                  className={`px-5 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    selectedFilter === 'desfiado'
                      ? 'bg-primary-container text-surface shadow-md scale-105'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Desfiado
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedFilter('natas')}
                  className={`px-5 py-2 rounded-full font-label-md text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    selectedFilter === 'natas'
                      ? 'bg-primary-container text-surface shadow-md scale-105'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Com Natas
                </button>
              </div>
            </section>
          )}

          {/* Menu Item Grid: Mobile 1 Col / Tablet 2 Cols / Desktop 3 Cols */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-8" id="menuItemsList">
            {filteredDishes.length > 0 ? (
              filteredDishes.map((dish) => <DishCard key={dish.id} dish={dish} />)
            ) : (
              <div className="col-span-full p-12 text-center bg-surface-container rounded-2xl text-on-surface-variant border border-outline-variant/20">
                Nenhum prato encontrado para este filtro.
              </div>
            )}
          </section>

          {/* Kitchen Notice Banner */}
          <div className="mb-8">
            <div className="p-4 md:p-5 rounded-2xl bg-surface-container-high flex items-center gap-3.5 border border-outline-variant/20 max-w-3xl">
              <Info className="w-6 h-6 text-secondary shrink-0" />
              <div className="flex flex-col">
                <span className="font-label-md text-xs md:text-sm text-on-surface font-bold">
                  Aviso da Cozinha
                </span>
                <span className="font-body-md text-xs md:text-sm text-on-surface-variant">
                  Não retiramos e nem trocamos itens do prato para manter a fidelidade e equilíbrio das receitas tradicionais.
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Reservation Card / Call to Action */}
          <section className="pb-8">
            <div className="bg-primary-container text-surface rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-surface/5 pointer-events-none"></div>
              
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-surface-container/20 flex items-center justify-center text-tertiary-fixed shrink-0">
                  <Utensils className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-xl md:text-2xl text-surface font-semibold mb-1">
                    Deseja reservar sua mesa para hoje?
                  </h4>
                  <p className="font-body-md text-sm text-primary-fixed-dim/90 max-w-lg leading-snug">
                    Venha desfrutar da autêntica culinária lusa em ambiente aconchegante no coração do Tatuapé.
                  </p>
                </div>
              </div>

              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-sm md:text-base rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-95 hover:bg-tertiary-fixed-dim transition-all shrink-0 font-bold"
              >
                <MessageCircle className="w-5 h-5 text-on-tertiary-fixed" />
                <span>Reservar pelo WhatsApp</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
