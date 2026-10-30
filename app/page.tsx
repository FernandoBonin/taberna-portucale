import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Star,
  Car,
  Clock,
  Fish,
  Wine,
  Croissant,
  Calendar,
  MessageCircle,
  Heart,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import AzulejoBand from '@/components/AzulejoBand';
import { RESTAURANT_INFO } from '@/data/menu';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header variant="home" title="Início" />

      <main className="flex-1 flex flex-col relative w-full pb-8">
        {/* Subtle decorative Azulejo band */}
        <AzulejoBand />

        {/* Hero Header & Welcome */}
        <section className="px-margin-mobile pt-space-lg pb-space-md flex flex-col items-start gap-space-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-tertiary-container shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-on-tertiary-container" />
            <span className="font-label-md text-label-md tracking-wider uppercase font-bold text-on-tertiary-container">
              Tradição Lusitana • {RESTAURANT_INFO.established}
            </span>
          </div>

          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight mt-1">
            {RESTAURANT_INFO.tagline}
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {RESTAURANT_INFO.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-space-xs w-full pt-1">
            <Link
              href="/categorias"
              className="flex-1 flex items-center justify-center gap-2 bg-primary-container text-surface px-4 py-3 rounded-lg shadow-md active:scale-[0.98] hover:bg-primary transition-all"
            >
              <BookOpen className="w-4 h-4 text-tertiary-fixed shrink-0" />
              <span className="font-label-lg text-label-lg font-bold">Ver categorias</span>
            </Link>

            <Link
              href="/destaques"
              className="flex-1 flex items-center justify-center gap-2 bg-surface-container-high text-on-surface px-4 py-3 rounded-lg shadow-sm active:scale-[0.98] hover:bg-surface-dim transition-all"
            >
              <Star className="w-4 h-4 text-secondary shrink-0" />
              <span className="font-label-lg text-label-lg font-bold">Ver destaques</span>
            </Link>
          </div>
        </section>

        {/* Authentic Tavern Facade Card */}
        <section className="px-margin-mobile py-space-sm">
          <div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-md border border-outline-variant/20">
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={RESTAURANT_INFO.facadeImage}
                alt="Fachada acolhedora da Taberna Portucale iluminada à noite na Rua Cantagalo no Tatuapé"
                fill
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-surface">
                <span className="inline-block px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold uppercase mb-1">
                  {RESTAURANT_INFO.address}
                </span>
                <h2 className="font-headline-sm text-headline-sm leading-tight text-surface font-semibold">
                  Taberna Típica & Empório Lusitano
                </h2>
              </div>
            </div>

            <div className="p-3.5 bg-surface-container-low flex flex-col gap-2">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                <Car className="w-4 h-4 text-primary shrink-0" />
                <span>{RESTAURANT_INFO.parking}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span>{RESTAURANT_INFO.openingHours}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Experience Highlights */}
        <section className="px-margin-mobile pt-space-md pb-space-sm flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-secondary" />
              <h3 className="font-title-md text-title-md text-primary font-bold">
                A Alma da Nossa Cozinha
              </h3>
            </div>
            <span className="font-label-md text-label-md text-on-tertiary-container font-semibold">
              Tudo fresco
            </span>
          </div>

          {/* Highlight Cards Grid */}
          <div className="grid grid-cols-1 gap-2.5">
            {/* Card 1: Bacalhau */}
            <Link
              href="/categorias/bacalhau"
              className="group bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex items-start gap-3 border border-outline-variant/15 hover:shadow-md transition-all active:scale-[0.99]"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-primary-fixed/50 transition-colors">
                <Fish className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-title-md text-[16px] sm:text-title-md text-on-surface font-bold truncate group-hover:text-primary transition-colors">
                    Especialidades de Bacalhau
                  </h4>
                  <span className="text-xs font-bold text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded shrink-0">
                    1-2 Pessoas
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 leading-snug">
                  Lombos nobres cozidos em azeite de oliva, com batatas ao murro, alho confitado e brócolis frescos.
                </p>
              </div>
            </Link>

            {/* Card 2: Adega & Vinhos */}
            <Link
              href="/categorias/vinhos"
              className="group bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex items-start gap-3 border border-outline-variant/15 hover:shadow-md transition-all active:scale-[0.99]"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-secondary-fixed/50 transition-colors">
                <Wine className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-title-md text-[16px] sm:text-title-md text-on-surface font-bold truncate group-hover:text-secondary transition-colors">
                    Adega & Vinhos Verdes
                  </h4>
                  <span className="text-xs font-bold text-tertiary-fixed-dim bg-tertiary-container px-2 py-0.5 rounded shrink-0 text-surface">
                    Carta Lusitana
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 leading-snug">
                  Rótulos selecionados das regiões do Douro, Alentejo e Minho para harmonização perfeita.
                </p>
              </div>
            </Link>

            {/* Card 3: Doçaria Conventual */}
            <Link
              href="/categorias/sobremesas"
              className="group bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex items-start gap-3 border border-outline-variant/15 hover:shadow-md transition-all active:scale-[0.99]"
            >
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-tertiary-fixed/40 transition-colors">
                <Croissant className="w-6 h-6 text-on-tertiary-container" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-title-md text-[16px] sm:text-title-md text-on-surface font-bold truncate group-hover:text-on-tertiary-container transition-colors">
                    Doçaria Conventual
                  </h4>
                  <span className="text-xs font-bold text-on-tertiary-container bg-surface-container-high px-2 py-0.5 rounded shrink-0">
                    Artesanal
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5 leading-snug">
                  Pastéis de Nata genuínos polvilhados com canela e açúcar refinado, saídos quentinhos da fornada.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Reservation & Notice Banner */}
        <section className="px-margin-mobile pt-space-sm pb-space-lg flex flex-col gap-space-xs">
          <div className="bg-primary-container text-surface p-4 rounded-xl shadow-md flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0 shadow-inner">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-title-md text-title-md font-bold text-surface">
                  Garanta a sua mesa
                </h4>
                <p className="font-body-md text-body-md text-primary-fixed-dim/90 mt-0.5 leading-snug">
                  Nossos pratos recebem preparo artesanal sob medida (30 a 45 min) para máxima suculência.
                </p>
              </div>
            </div>

            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-surface text-primary-container px-4 py-3 rounded-lg font-label-lg text-label-lg font-bold shadow hover:bg-surface-container-low active:scale-[0.98] transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
              <span>Reservar Mesa via WhatsApp • {RESTAURANT_INFO.whatsappPhone}</span>
            </a>
          </div>

          {/* Craftsmanship guarantee badge */}
          <div className="flex items-center justify-center gap-1.5 py-2 text-on-surface-variant font-label-md text-label-md text-center opacity-85">
            <Heart className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>Cozinha afetiva portuguesa servida com carinho e fartura</span>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
