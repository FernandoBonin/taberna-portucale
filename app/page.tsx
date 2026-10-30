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
  ShieldCheck,
  MapPin,
  ArrowRight,
  Sailboat,
} from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import AzulejoBand from '@/components/AzulejoBand';
import DishCard from '@/components/DishCard';
import { RESTAURANT_INFO, getFeaturedDishes, DISHES } from '@/data/menu';

export default function HomePage() {
  const featuredDishes = getFeaturedDishes();
  const topDishes = DISHES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header variant="home" title="Início" />

      <main className="flex-1 flex flex-col relative w-full">
        {/* Decorative Azulejo band */}
        <AzulejoBand />

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): Exact original approved mobile layout   */}
        {/* ============================================================== */}
        <div className="md:hidden flex flex-col w-full pb-8">
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

            <div className="grid grid-cols-1 gap-2.5">
              <Link
                href="/categorias/bacalhau"
                className="group bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex items-start gap-3 border border-outline-variant/15 hover:shadow-md transition-all active:scale-[0.99]"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-primary-fixed/50 transition-colors">
                  <Fish className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-title-md text-[16px] text-on-surface font-bold truncate group-hover:text-primary transition-colors">
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

              <Link
                href="/categorias/vinhos"
                className="group bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex items-start gap-3 border border-outline-variant/15 hover:shadow-md transition-all active:scale-[0.99]"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-secondary-fixed/50 transition-colors">
                  <Wine className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-title-md text-[16px] text-on-surface font-bold truncate group-hover:text-secondary transition-colors">
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

              <Link
                href="/categorias/sobremesas"
                className="group bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex items-start gap-3 border border-outline-variant/15 hover:shadow-md transition-all active:scale-[0.99]"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-tertiary-fixed/40 transition-colors">
                  <Croissant className="w-6 h-6 text-on-tertiary-container" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-title-md text-[16px] text-on-surface font-bold truncate group-hover:text-on-tertiary-container transition-colors">
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

            <div className="flex items-center justify-center gap-1.5 py-2 text-on-surface-variant font-label-md text-label-md text-center opacity-85">
              <Heart className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Cozinha afetiva portuguesa servida com carinho e fartura</span>
            </div>
          </section>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): Dedicated 2-Column Restaurant */}
        {/* ============================================================== */}
        <div className="hidden md:flex flex-col w-full">
          {/* Desktop Hero Section: 2 Columns */}
          <section className="w-full bg-gradient-to-b from-primary-container/10 via-surface to-surface border-b border-outline-variant/15">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Brand, Headline, Copy & CTAs */}
                <div className="lg:col-span-7 flex flex-col items-start gap-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-tertiary-container shadow-sm border border-tertiary-fixed/30">
                    <Sparkles className="w-4 h-4 text-on-tertiary-container" />
                    <span className="font-label-md text-xs tracking-wider uppercase font-bold text-on-tertiary-container">
                      Tradição Lusitana • {RESTAURANT_INFO.established} • Tatuapé
                    </span>
                  </div>

                  <h1 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-primary font-bold tracking-tight leading-[1.15]">
                    {RESTAURANT_INFO.tagline}
                  </h1>

                  <p className="font-body-lg text-base lg:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                    {RESTAURANT_INFO.heroDescription}
                  </p>

                  {/* Highlights Pill Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold text-primary">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/20">
                      <Fish className="w-4 h-4 text-primary" />
                      <span>Bacalhau Gadus morhua da Noruega</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/20">
                      <Car className="w-4 h-4 text-secondary" />
                      <span>BioPark conveniado ao lado</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/20">
                      <Wine className="w-4 h-4 text-primary" />
                      <span>Adega com Douro & Vinhos Verdes</span>
                    </div>
                  </div>

                  {/* Desktop CTA Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
                    <Link
                      href="/categorias"
                      className="inline-flex items-center justify-center gap-2 bg-primary-container text-surface px-6 py-3.5 rounded-xl font-label-lg text-sm font-bold shadow-md hover:bg-primary transition-all active:scale-95"
                    >
                      <BookOpen className="w-4 h-4 text-tertiary-fixed" />
                      <span>Explorar o Cardápio</span>
                    </Link>

                    <a
                      href={RESTAURANT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary px-6 py-3.5 rounded-xl font-label-lg text-sm font-bold shadow-md hover:bg-secondary/90 transition-all active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Reservar Mesa via WhatsApp</span>
                    </a>

                    <Link
                      href="/destaques"
                      className="inline-flex items-center justify-center gap-2 bg-surface-container-high text-on-surface px-5 py-3.5 rounded-xl font-label-lg text-sm font-bold shadow-sm hover:bg-surface-dim transition-all"
                    >
                      <Star className="w-4 h-4 text-secondary" />
                      <span>Ver Destaques</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Hero Portuguese Food Photography */}
                <div className="lg:col-span-5 relative">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-tertiary-fixed/40 group">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj9PCoa1Pmpg9kFXOjaXBlAvKgyJmlg947AUTsjawOxn3snOs-i64lCeVXRrHdmSPuW-NaIvx9-ydekuMxmYzRYgYBAF99HxVYgmrn4IslEi6Pmo253s9NHu_WHnU7edXHXd2RIU5DM2KCbxj51dYROKz5NpRJ-Skul3tfSa_taFGf9QAwScmlHPlI090L-SIiM66gW3BwRWuaIbbphOM0fYNmumejWO8RuFghys"
                      alt="Bacalhau à Lagareiro na travessa de barro"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>

                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-on-secondary rounded-full font-label-md text-xs font-bold shadow-md">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Prato Mais Pedido da Taberna
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-surface">
                      <div>
                        <p className="font-label-md text-xs text-tertiary-fixed font-semibold uppercase tracking-wider">
                          Receita Tradicional da Beira Alta
                        </p>
                        <h3 className="font-headline-sm text-xl text-surface font-semibold">
                          Bacalhau à Lagareiro
                        </h3>
                      </div>
                      <span className="bg-surface-container-lowest/95 backdrop-blur-sm text-secondary px-3.5 py-1.5 rounded-lg font-price-display text-base font-extrabold shadow-md">
                        R$ 142,50
                      </span>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 hidden xl:flex items-center gap-2.5 bg-surface-container-lowest p-3 rounded-xl shadow-xl border border-tertiary-fixed/30">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-label-md text-xs font-bold text-primary">Autêntica Taberna Lusitana</p>
                      <p className="font-body-md text-[11px] text-on-surface-variant">Rua Cantagalo, 856 • Tatuapé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: A Alma da Nossa Cozinha (3 Columns on Desktop) */}
          <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-outline-variant/15">
              <div>
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <UtensilsCrossed className="w-5 h-5" />
                  <span className="font-label-md text-xs font-bold uppercase tracking-wider">
                    Nossos Pilares Culinários
                  </span>
                </div>
                <h2 className="font-headline-lg text-3xl text-primary font-bold">
                  A Alma da Nossa Cozinha
                </h2>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-md mt-2 md:mt-0 text-sm">
                Da seleção nobre dos lombos à doçaria artesanal com gemas ricas, cada receita expressa o calor e afeto de Portugal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Bacalhau */}
              <Link
                href="/categorias/bacalhau"
                className="group bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-tertiary-fixed transition-colors">
                      <Fish className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-secondary bg-secondary-fixed/50 px-2.5 py-1 rounded-full">
                      1–2 Pessoas
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary font-bold group-hover:text-secondary transition-colors mb-2">
                    Especialidades de Bacalhau
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Lombos nobres de bacalhau da Noruega cozidos em azeite de oliva, com batatas ao murro, alho confitado e brócolis frescos.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-primary font-label-lg text-sm font-bold mt-6 pt-4 border-t border-outline-variant/10">
                  <span>Conhecer 10 receitas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 2: Vinhos */}
              <Link
                href="/categorias/vinhos"
                className="group bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                      <Wine className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-tertiary-fixed-dim bg-tertiary-container px-2.5 py-1 rounded-full text-surface">
                      Carta Lusitana
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary font-bold group-hover:text-secondary transition-colors mb-2">
                    Adega & Vinhos Verdes
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Rótulos selecionados das regiões do Douro, Alentejo e Minho para a harmonização perfeita com nossos pratos de peixe e carnes.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-secondary font-label-lg text-sm font-bold mt-6 pt-4 border-t border-outline-variant/10">
                  <span>Ver carta de vinhos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 3: Doçaria */}
              <Link
                href="/categorias/sobremesas"
                className="group bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center text-on-tertiary-container group-hover:bg-tertiary-container group-hover:text-tertiary-fixed transition-colors">
                      <Croissant className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-on-tertiary-container bg-surface-container-high px-2.5 py-1 rounded-full">
                      Artesanal
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary font-bold group-hover:text-on-tertiary-container transition-colors mb-2">
                    Doçaria Conventual
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Pastéis de Nata genuínos polvilhados com canela e açúcar refinado, além da autêntica Baba de Camelo, saídos da fornada do dia.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-on-tertiary-container font-label-lg text-sm font-bold mt-6 pt-4 border-t border-outline-variant/10">
                  <span>Ver sobremesas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </section>

          {/* Section: Featured Dishes Grid */}
          <section className="w-full bg-surface-container-low py-16 border-y border-outline-variant/15">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-wider mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Sugestões da Casa</span>
                  </div>
                  <h2 className="font-headline-lg text-3xl text-primary font-bold">
                    Pratos Mais Pedidos
                  </h2>
                </div>
                <Link
                  href="/destaques"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-label-lg text-sm font-bold transition-colors"
                >
                  <span>Ver todos os destaques</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topDishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            </div>
          </section>

          {/* Section: Atmosphere & Location Showcase */}
          <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 p-6 lg:p-8">
              {/* Facade Image */}
              <div className="lg:col-span-6 relative h-72 lg:h-96 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={RESTAURANT_INFO.facadeImage}
                  alt="Fachada Taberna Portucale"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-surface">
                  <span className="inline-block px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold uppercase mb-1">
                    {RESTAURANT_INFO.address}
                  </span>
                  <h3 className="font-headline-sm text-xl font-semibold">
                    Taberna Típica & Empório Lusitano
                  </h3>
                </div>
              </div>

              {/* Story & Practical info */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 self-start text-tertiary-fixed-dim bg-primary-container px-3 py-1 rounded-full text-xs font-bold">
                  <Sailboat className="w-3.5 h-3.5" />
                  <span>Um pedacinho de Portugal no Tatuapé</span>
                </div>

                <h3 className="font-headline-lg text-2xl lg:text-3xl text-primary font-bold leading-tight">
                  Hospitalidade familiar e o aroma inconfundível do azeite português.
                </h3>

                <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                  Fundada em 2013, a Taberna Portucale nasceu do desejo de reunir as memórias afetivas da culinária lusa em São Paulo. Aqui, cada prato é preparado sob medida, respeitando o tempo de forno e a fartura que marcam as melhores mesas de Portugal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/15 flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-label-md text-xs font-bold text-on-surface">Estacionamento</p>
                      <p className="font-body-md text-[11px] text-on-surface-variant">BioPark conveniado no Nº 906</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/15 flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-label-md text-xs font-bold text-on-surface">Horários</p>
                      <p className="font-body-md text-[11px] text-on-surface-variant">Sex 19h–23h • Sáb/Dom almoço e jantar</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/informacoes"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-secondary font-label-lg text-sm font-bold transition-colors"
                  >
                    <span>Mais informações e mapa de acesso</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Full-width Reservation Banner */}
          <section className="w-full bg-primary-container text-surface py-12 px-6 lg:px-8 shadow-xl">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0 shadow-lg">
                  <Calendar className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-2xl font-bold text-surface">
                    Garanta a sua mesa para hoje
                  </h3>
                  <p className="font-body-md text-primary-fixed-dim/90 text-sm mt-0.5 max-w-xl">
                    Nossos pratos recebem preparo artesanal sob medida (30 a 45 min) para máxima suculência. Atendimento direto pelo WhatsApp para reservas e pedidos.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-surface text-primary-container px-6 py-3.5 rounded-xl font-label-lg text-sm font-bold shadow-lg hover:bg-surface-container-low active:scale-95 transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <span>Reservar via WhatsApp • {RESTAURANT_INFO.whatsappPhone}</span>
                </a>
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
