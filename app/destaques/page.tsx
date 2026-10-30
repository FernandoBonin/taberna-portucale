import React from 'react';
import Link from 'next/link';
import { Star, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
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

      <main className="flex-1 flex flex-col relative w-full pb-12">
        <AzulejoBand />

        <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-8 py-6 md:py-12">
          {/* Header intro */}
          <div className="flex flex-col gap-space-xs mb-8 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container text-tertiary-container shadow-sm self-start border border-tertiary-fixed/30">
              <Star className="w-4 h-4 fill-current text-secondary" />
              <span className="font-label-md text-xs font-bold uppercase tracking-wider text-secondary">
                Seleção do Chef • Mais Pedidos
              </span>
            </div>

            <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight font-bold mt-1">
              Destaques da Taberna
            </h1>

            <p className="font-body-md md:font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
              As receitas mais aclamadas pelos nossos clientes: do legítimo bacalhau Gadus morhua assado lentamente aos pastéis de nata que perfumam a Rua Cantagalo.
            </p>
          </div>

          {/* Featured Dishes: Mobile 1 Col / Tablet 2 Cols / Desktop 3 Cols */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-12">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </section>

          {/* Bottom Action Card */}
          <section className="pb-8">
            <div className="bg-primary-container text-surface p-6 md:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-tertiary-fixed/30">
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0 shadow-lg">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-xl md:text-2xl font-bold text-surface">
                    Experimente o Melhor de Portugal no Tatuapé
                  </h4>
                  <p className="font-body-md text-sm text-primary-fixed-dim/90 mt-1 max-w-xl leading-relaxed">
                    Reserve sua mesa antecipada para o almoço ou jantar de fim de semana, ou solicite atendimento para encomendas sob medida.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface text-primary-container px-6 py-3.5 rounded-xl font-label-lg text-sm font-bold shadow-md hover:bg-surface-container-low active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
                  <span>WhatsApp • {RESTAURANT_INFO.whatsappPhone}</span>
                </a>
                <Link
                  href="/categorias"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary/60 border border-primary-fixed/30 text-surface px-5 py-3.5 rounded-xl font-label-lg text-sm font-semibold hover:bg-primary/80 transition-all"
                >
                  <span>Ver Cardápio Completo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
