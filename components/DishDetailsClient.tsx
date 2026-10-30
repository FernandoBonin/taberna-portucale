'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Flame,
  ShieldCheck,
  Users,
  Clock,
  Fish,
  Utensils,
  Wine,
  Info,
  Sailboat,
  ChevronRight,
} from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import AzulejoBand from '@/components/AzulejoBand';
import DishActions, { DishBottomCTAs } from '@/components/DishActions';
import { Dish, RESTAURANT_INFO } from '@/data/menu';

interface DishDetailsClientProps {
  dish: Dish;
}

export default function DishDetailsClient({ dish }: DishDetailsClientProps) {
  const router = useRouter();

  const heroImage =
    dish.image ||
    dish.cardImage ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAj9PCoa1Pmpg9kFXOjaXBlAvKgyJmlg947AUTsjawOxn3snOs-i64lCeVXRrHdmSPuW-NaIvx9-ydekuMxmYzRYgYBAF99HxVYgmrn4IslEi6Pmo253s9NHu_WHnU7edXHXd2RIU5DM2KCbxj51dYROKz5NpRJ-Skul3tfSa_taFGf9QAwScmlHPlI090L-SIiM66gW3BwRWuaIbbphOM0fYNmumejWO8RuFghys';

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header
        variant="subpage"
        title="Detalhes Do Prato"
        subtitle={RESTAURANT_INFO.name}
        backHref={`/categorias/${dish.category}`}
      />

      <main className="flex-1 flex flex-col relative w-full pb-12">
        <AzulejoBand />

        <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-8 py-4 md:py-8">
          {/* Sub-header navigation row with Breadcrumbs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 py-3 rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/20 mb-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push(`/categorias/${dish.category}`)}
                className="inline-flex items-center gap-1.5 text-primary font-label-lg text-sm hover:text-primary-container transition-colors py-1 px-2.5 rounded-lg hover:bg-surface-container"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para {dish.categoryName}</span>
              </button>

              <div className="hidden md:flex items-center gap-1.5 text-xs text-on-surface-variant pl-2 border-l border-outline-variant/30">
                <Link href="/" className="hover:underline">Início</Link>
                <ChevronRight className="w-3 h-3 text-outline-variant" />
                <Link href={`/categorias/${dish.category}`} className="hover:underline">{dish.categoryName}</Link>
                <ChevronRight className="w-3 h-3 text-outline-variant" />
                <span className="text-secondary font-semibold truncate max-w-[200px]">{dish.name}</span>
              </div>
            </div>

            <DishActions dishName={dish.name} priceFormatted={dish.priceFormatted} />
          </div>

          {/* ========================================================== */}
          {/* Main Dish Content: Stacked on Mobile / 2 Columns on Desktop */}
          {/* ========================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Food Photography & Wine Pairing */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Hero Food Card */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest border border-outline-variant/20">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden group">
                  <Image
                    src={heroImage}
                    alt={dish.name}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent"></div>

                  {/* Top-left tag/badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-secondary text-on-secondary rounded-full font-label-md text-xs font-bold shadow-md">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      <span>{dish.badge || 'Mais Pedido • Receita Tradicional'}</span>
                    </span>
                  </div>

                  {/* Bottom row overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-on-primary">
                    <div className="flex items-center gap-1.5 bg-primary/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-primary-fixed/20 shadow-md">
                      <ShieldCheck className="w-4 h-4 text-tertiary-fixed-dim shrink-0" />
                      <span className="font-label-md text-xs font-semibold text-primary-fixed">
                        Autêntica Taberna Tatuapé
                      </span>
                    </div>
                    <span className="bg-surface-container-lowest/95 backdrop-blur-md text-secondary px-4 py-2 rounded-xl font-price-display text-lg lg:text-xl shadow-lg font-extrabold border border-secondary/20">
                      {dish.priceFormatted}
                    </span>
                  </div>
                </div>
              </div>

              {/* Wine Pairing Sommelier Section (Desktop & Tablet) */}
              {dish.winePairing && (
                <div className="bg-surface-container-high rounded-2xl p-5 md:p-6 shadow-sm flex flex-col gap-4 border border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wine className="w-5 h-5 text-secondary" />
                      <span className="font-label-lg text-sm text-secondary uppercase font-bold tracking-wide">
                        Harmonização Lusitana
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-xs font-bold">
                      Sugestão Sommelier
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/15">
                    <div className="relative w-24 h-28 sm:w-20 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-surface-dim">
                      <Image
                        src={dish.winePairing.image}
                        alt={dish.winePairing.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0 text-center sm:text-left">
                      <h4 className="font-title-md text-base text-primary font-bold">
                        {dish.winePairing.name}
                      </h4>
                      <p className="font-label-md text-xs text-on-surface-variant font-medium">
                        {dish.winePairing.type}
                      </p>
                      <p className="font-body-md text-sm text-on-surface leading-snug">
                        {dish.winePairing.notes}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 border-t border-outline-variant/15">
                    <span className="font-label-md text-xs text-on-surface-variant flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-primary shrink-0" />
                      <span>Disponível em garrafa ou taça</span>
                    </span>
                    <Link
                      href="/categorias/vinhos"
                      className="px-3.5 py-2 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container font-label-md text-xs font-bold transition-colors text-center"
                    >
                      Ver Carta de Vinhos
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Title, Story, Specs, Notes & CTAs */}
            <div className="lg:col-span-5 flex flex-col gap-5 lg:sticky lg:top-24">
              {/* Title and Storytelling Section */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col gap-4 border border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="font-label-md text-xs text-on-tertiary-container uppercase tracking-wider font-bold">
                    {dish.tag || 'Especialidade da Casa'}
                  </span>
                  <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl lg:text-3xl text-primary font-bold leading-tight mt-1">
                    {dish.name}
                  </h1>
                  {dish.subtitle && (
                    <p className="font-body-md text-sm text-on-surface-variant italic mt-1">
                      {dish.subtitle}
                    </p>
                  )}
                </div>

                {/* Key Specs Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-xs font-medium border border-outline-variant/15">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    <span>{dish.serves}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-xs font-medium border border-outline-variant/15">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span>Tempo: {dish.prepTime}</span>
                  </div>
                  {dish.cut && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-xs font-medium border border-outline-variant/15">
                      <Fish className="w-3.5 h-3.5 text-surface-tint" />
                      <span>{dish.cut}</span>
                    </div>
                  )}
                </div>

                {/* Separator */}
                <div className="h-0.5 w-20 bg-tertiary-fixed-dim my-1 rounded-full"></div>

                {/* Description */}
                <p className="font-body-lg text-sm sm:text-base text-on-surface leading-relaxed">
                  {dish.description}
                </p>

                {/* Price display row */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/15 mt-2">
                  <span className="font-label-md text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Valor por porção
                  </span>
                  <span className="font-price-display text-xl text-secondary font-extrabold">
                    {dish.priceFormatted}
                  </span>
                </div>
              </div>

              {/* Notes from the Kitchen / Avisos da Casa */}
              <div className="bg-surface-container rounded-2xl p-5 shadow-sm flex items-start gap-3.5 border border-outline-variant/15">
                <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary">
                  <Utensils className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-title-md text-sm text-on-secondary-fixed font-bold">
                    Avisos da Casa
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    {RESTAURANT_INFO.policyNotice}
                  </p>
                </div>
              </div>

              {/* Portuguese Heritage Banner */}
              <div className="bg-primary-container text-on-primary-container rounded-2xl p-4 shadow-sm flex items-center justify-between border border-tertiary-fixed/30">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-lg text-surface font-semibold">
                    Tradição & Afeto
                  </span>
                  <span className="font-label-md text-xs text-primary-fixed-dim">
                    {RESTAURANT_INFO.address} • Tatuapé
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed shadow-inner">
                  <Sailboat className="w-5 h-5" />
                </div>
              </div>

              {/* Actions / Order CTA Section */}
              <DishBottomCTAs
                dishName={dish.name}
                priceFormatted={dish.priceFormatted}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
