import React from 'react';
import Link from 'next/link';
import { Star, Sparkles, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import AzulejoBand from '@/components/AzulejoBand';
import DishCard from '@/components/DishCard';
import { getFeaturedDishes, RESTAURANT_INFO } from '@/data/menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pratos em Destaque - Taberna Portucale',
  description: 'Os pratos mais pedidos e tradicionais da Taberna Portucale no Tatuapé.',
};

export default function DestaquesPage() {
  const featuredDishes = getFeaturedDishes();

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header variant="home" title="Destaques" />

      <main className="flex-1 flex flex-col relative w-full pb-8">
        <AzulejoBand />

        <div className="px-margin-mobile pt-space-md pb-space-sm flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-tertiary-container shadow-sm self-start">
            <Star className="w-3.5 h-3.5 fill-current text-secondary" />
            <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">
              Seleção do Chef
            </span>
          </div>

          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight mt-1 font-bold">
            Destaques da Casa
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            As receitas mais aclamadas pelos nossos clientes: do legítimo bacalhau à posta farta aos pastéis de nata que perfumam a Rua Cantagalo.
          </p>
        </div>

        {/* Featured Dish List */}
        <section className="px-margin-mobile flex flex-col gap-space-md py-space-sm">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </section>

        {/* Action card */}
        <section className="px-margin-mobile pt-space-md pb-space-lg">
          <div className="bg-primary-container text-surface p-4 rounded-xl shadow-md flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-inner">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-title-md text-title-md font-bold text-surface">
                Experimente o Melhor de Portugal
              </h4>
              <p className="font-body-md text-body-md text-primary-fixed-dim/90 mt-1 max-w-xs leading-snug">
                Reserve sua mesa antecipada para finais de semana ou peça para retirar quentinho.
              </p>
            </div>
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-surface text-primary-container px-4 py-3 rounded-lg font-label-lg text-label-lg font-bold shadow hover:bg-surface-container-low active:scale-[0.98] transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
              <span>Chamar no WhatsApp • {RESTAURANT_INFO.whatsappPhone}</span>
            </a>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
