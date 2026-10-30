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

      <main className="flex-1 flex flex-col relative w-full pb-8">
        {/* Decorative Heritage Ribbon & Breadcrumbs */}
        <div className="px-margin-mobile pt-space-md pb-space-sm flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
            <Link href="/" className="hover:underline text-on-surface-variant">
              Início
            </Link>
            <ChevronRight className="w-3 h-3 text-outline-variant" />
            <Link href="/categorias" className="hover:underline text-on-surface-variant">
              Categorias
            </Link>
            <ChevronRight className="w-3 h-3 text-outline-variant" />
            <span className="text-secondary font-bold">{category.name}</span>
          </div>

          <button
            onClick={() => router.push('/categorias')}
            className="inline-flex items-center gap-space-xs self-start text-primary-container font-label-md text-label-md font-bold py-1 transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Categorias</span>
          </button>
        </div>

        {/* Category Headline Section */}
        <section className="px-margin-mobile pt-space-xs pb-space-md">
          <div className="bg-surface-container rounded-xl p-space-md shadow-sm relative overflow-hidden border border-tertiary-fixed/30">
            {/* Subtle Azulejo Crest Watermark Accent */}
            <div className="absolute -right-4 -bottom-6 opacity-10 pointer-events-none text-primary">
              <Sailboat className="w-32 h-32" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-md font-label-md uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>{category.badge || 'Especialidade da Casa'}</span>
            </div>

            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-2 font-bold">
              {category.slug === 'bacalhau' ? 'Pratos de Bacalhau' : category.name}
            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm leading-relaxed">
              {category.description}
            </p>

            <div className="flex items-center gap-2 p-2 bg-surface-container-high rounded-lg text-tertiary-container font-label-md text-label-md">
              <Clock className="w-4 h-4 text-secondary shrink-0" />
              <span>Preparo artesanal cuidadoso: {RESTAURANT_INFO.estimatedTime}</span>
            </div>
          </div>
        </section>

        {/* Interactive Filter Chips (Featured in Bacalhau screen) */}
        {isBacalhau && (
          <section className="px-margin-mobile pb-space-md">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              <button
                type="button"
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-1.5 rounded-full font-label-md text-label-md font-bold transition-all whitespace-nowrap ${
                  selectedFilter === 'all'
                    ? 'bg-primary-container text-surface shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Todos
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter('forno')}
                className={`px-4 py-1.5 rounded-full font-label-md text-label-md font-bold transition-all whitespace-nowrap ${
                  selectedFilter === 'forno'
                    ? 'bg-primary-container text-surface shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Ao Forno
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter('desfiado')}
                className={`px-4 py-1.5 rounded-full font-label-md text-label-md font-bold transition-all whitespace-nowrap ${
                  selectedFilter === 'desfiado'
                    ? 'bg-primary-container text-surface shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Desfiado
              </button>
              <button
                type="button"
                onClick={() => setSelectedFilter('natas')}
                className={`px-4 py-1.5 rounded-full font-label-md text-label-md font-bold transition-all whitespace-nowrap ${
                  selectedFilter === 'natas'
                    ? 'bg-primary-container text-surface shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                Com Natas
              </button>
            </div>
          </section>
        )}

        {/* Menu Item List */}
        <section className="px-margin-mobile flex flex-col gap-space-md pb-space-lg">
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => <DishCard key={dish.id} dish={dish} />)
          ) : (
            <div className="p-8 text-center bg-surface-container rounded-xl text-on-surface-variant">
              Nenhum prato encontrado para este filtro.
            </div>
          )}
        </section>

        {/* Tavern Note / Policy Banner */}
        <div className="px-margin-mobile mb-space-lg">
          <div className="p-space-md rounded-xl bg-surface-container-high flex items-center gap-3 border border-outline-variant/20">
            <Info className="w-6 h-6 text-secondary shrink-0" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Aviso da Cozinha
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">
                Não retiramos e nem trocamos itens do prato. Agradecemos a compreensão.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Reservation Card / Call to Action */}
        <section className="px-margin-mobile pb-space-lg">
          <div className="bg-primary-container text-surface rounded-xl p-space-md flex flex-col items-center text-center shadow-lg relative overflow-hidden">
            {/* Decorative Backdrop Flourish */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-surface/5 pointer-events-none"></div>
            <div className="w-12 h-12 rounded-full bg-surface-container/20 flex items-center justify-center text-tertiary-fixed mb-space-xs">
              <Utensils className="w-6 h-6" />
            </div>
            <h4 className="font-headline-sm text-headline-sm text-surface mb-1 font-semibold">
              Deseja reservar sua mesa para hoje?
            </h4>
            <p className="font-body-md text-body-md text-primary-fixed-dim/90 mb-space-md max-w-xs leading-snug">
              Venha desfrutar da culinária lusa em ambiente aconchegante no coração do Tatuapé.
            </p>
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-title-md rounded-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform hover:bg-tertiary-fixed-dim"
            >
              <MessageCircle className="w-5 h-5 text-on-tertiary-fixed" />
              <span>Reservar pelo WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
