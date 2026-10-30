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
} from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
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

      <main className="flex-1 flex flex-col relative w-full pb-8">
        {/* Sub-header navigation row */}
        <div className="flex items-center justify-between px-margin-mobile py-space-sm bg-surface-container-low shadow-sm border-b border-outline-variant/20">
          <button
            onClick={() => router.push(`/categorias/${dish.category}`)}
            className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg hover:text-primary-container transition-colors py-1.5 px-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para {dish.categoryName}</span>
          </button>

          <DishActions dishName={dish.name} priceFormatted={dish.priceFormatted} />
        </div>

        <div className="p-margin-mobile flex flex-col gap-space-md">
          {/* Hero Food Card */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-surface-container-lowest border border-outline-variant/20">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={heroImage}
                alt={dish.name}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>

              {/* Top-left tag/badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-on-secondary rounded-full font-label-md text-label-md shadow-sm font-semibold">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>{dish.badge || 'Mais Pedido • Receita Tradicional'}</span>
                </span>
              </div>

              {/* Bottom row overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-on-primary">
                <div className="flex items-center gap-1.5 bg-primary/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-tertiary-fixed-dim shrink-0" />
                  <span className="font-label-md text-label-md text-primary-fixed">
                    Autêntica Taberna Tatuapé
                  </span>
                </div>
                <span className="bg-surface-container-lowest/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-lg font-price-display text-price-display shadow-sm font-extrabold">
                  {dish.priceFormatted}
                </span>
              </div>
            </div>
          </div>

          {/* Title and Storytelling Section */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm border border-outline-variant/20">
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-wider font-semibold">
                {dish.tag || 'Especialidade da Casa'}
              </span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary font-bold leading-tight mt-0.5">
                {dish.name}
              </h2>
              {dish.subtitle && (
                <p className="font-body-md text-body-md text-on-surface-variant italic mt-0.5">
                  {dish.subtitle}
                </p>
              )}
            </div>

            {/* Key Specs Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
                <Users className="w-4 h-4 text-primary" />
                <span>{dish.serves}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Tempo: {dish.prepTime}</span>
              </div>
              {dish.cut && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md">
                  <Fish className="w-4 h-4 text-surface-tint" />
                  <span>{dish.cut}</span>
                </div>
              )}
            </div>

            {/* Separator / Accent */}
            <div className="h-0.5 w-16 bg-tertiary-fixed-dim my-1 rounded-full"></div>

            {/* Description */}
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Notes from the Kitchen / Avisos da Casa */}
          <div className="bg-surface-container rounded-xl p-space-md shadow-sm flex items-start gap-space-sm border border-outline-variant/15">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary">
              <Utensils className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-title-md text-title-md text-on-secondary-fixed font-bold">
                Avisos da Casa
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-normal">
                {RESTAURANT_INFO.policyNotice}
              </p>
            </div>
          </div>

          {/* Wine Pairing Sommelier Section */}
          {dish.winePairing && (
            <div className="bg-surface-container-high rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm border border-outline-variant/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wine className="w-5 h-5 text-secondary" />
                  <span className="font-label-lg text-label-lg text-secondary uppercase font-bold tracking-wide">
                    Harmonização Lusitana
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-semibold">
                  Sugestão Sommelier
                </span>
              </div>

              <div className="flex gap-space-sm items-center bg-surface-container-lowest p-space-sm rounded-lg shadow-sm border border-outline-variant/10">
                <div className="relative w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-dim">
                  <Image
                    src={dish.winePairing.image}
                    alt={dish.winePairing.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <h4 className="font-title-md text-title-md text-primary font-bold truncate">
                    {dish.winePairing.name}
                  </h4>
                  <p className="font-label-md text-label-md text-on-surface-variant font-medium">
                    {dish.winePairing.type}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface leading-snug line-clamp-2">
                    {dish.winePairing.notes}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                  <Info className="w-4 h-4 text-primary" />
                  <span>Disponível em garrafa ou taça</span>
                </span>
                <Link
                  href="/categorias/vinhos"
                  className="px-3 py-1.5 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container font-label-md text-label-md transition-colors font-semibold"
                >
                  Ver Carta de Vinhos
                </Link>
              </div>
            </div>
          )}

          {/* Portuguese Heritage Highlight Banner */}
          <div className="bg-primary-container text-on-primary-container rounded-xl p-space-md shadow-sm flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-surface font-semibold">
                Tradição & Afeto
              </span>
              <span className="font-label-md text-label-md text-primary-fixed-dim">
                {RESTAURANT_INFO.address} • Tatuapé
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-tertiary-fixed shadow-inner">
              <Sailboat className="w-6 h-6" />
            </div>
          </div>

          {/* Actions / Order CTA Section */}
          <DishBottomCTAs
            dishName={dish.name}
            priceFormatted={dish.priceFormatted}
          />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
