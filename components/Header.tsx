'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Utensils, ChevronLeft, MessageCircle, Clock, BookOpen } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menu';

interface HeaderProps {
  variant?: 'home' | 'subpage';
  title?: string;
  subtitle?: string;
  backHref?: string;
}

export default function Header({
  variant = 'home',
  title = 'Início',
  subtitle,
  backHref,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  const navLinks = [
    { label: 'Início', href: '/', isActive: pathname === '/' },
    { label: 'Categorias', href: '/categorias', isActive: pathname.startsWith('/categoria') },
    { label: 'Destaques', href: '/destaques', isActive: pathname === '/destaques' },
    { label: 'Informações', href: '/informacoes', isActive: pathname === '/informacoes' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-primary-container/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(24,63,50,0.14)] border-b border-primary-fixed/20 pt-safe">
      {/* ============================================================== */}
      {/* 1. MOBILE HEADER (< 768px): Preserved exact original layout     */}
      {/* ============================================================== */}
      <div className={`md:hidden px-margin-mobile flex items-center justify-between ${variant === 'home' ? 'h-20' : 'h-16'}`}>
        {variant === 'home' ? (
          <Link href="/" className="flex flex-col justify-center text-left group">
            <div className="flex items-center gap-space-xs">
              <Utensils className="w-4 h-4 text-tertiary-fixed shrink-0" />
              <span className="font-headline-sm text-[19px] sm:text-headline-sm text-surface tracking-tight font-semibold">
                {RESTAURANT_INFO.name}
              </span>
            </div>
            <div className="flex items-center gap-space-xs mt-0.5">
              <p className="font-label-md text-label-md text-primary-fixed-dim/90">
                {RESTAURANT_INFO.subname}
              </p>
              <span className="inline-block w-1 h-1 rounded-full bg-tertiary-fixed"></span>
              <span className="font-label-md text-label-md text-tertiary-fixed font-semibold">
                {title}
              </span>
            </div>
          </Link>
        ) : (
          <div className="flex items-center gap-space-sm">
            <button
              onClick={handleBack}
              aria-label="Voltar"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-surface-container-low hover:bg-surface/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex flex-col">
              <h1 className="font-headline-sm text-headline-sm text-surface leading-tight font-semibold">
                {title}
              </h1>
              <span className="font-label-md text-label-md text-primary-fixed-dim/90">
                {subtitle || 'Taberna Portucale'}
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-space-sm">
          {variant === 'home' && (
            <div className="hidden sm:flex items-center gap-1.5 bg-primary/40 px-2.5 py-1 rounded-full text-surface-container-low">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
              <span className="font-label-md text-label-md">{RESTAURANT_INFO.statusText}</span>
            </div>
          )}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-tertiary-fixed/40 shrink-0">
            <Image
              src={RESTAURANT_INFO.avatarImage}
              alt="Perfil Taberna Portucale"
              width={32}
              height={32}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. DESKTOP & TABLET HEADER (>= 768px): Horizontal restaurant bar */}
      {/* ============================================================== */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-6">
          {/* Brand zone */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-md group-hover:scale-105 transition-transform">
              <Utensils className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-[21px] text-surface font-semibold tracking-tight leading-tight">
                {RESTAURANT_INFO.name}
              </span>
              <span className="font-label-md text-xs text-primary-fixed-dim/90">
                A Nossa Casa • Tatuapé • {RESTAURANT_INFO.established}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg font-label-lg text-sm transition-all whitespace-nowrap ${
                  link.isActive
                    ? 'text-tertiary-fixed font-bold bg-primary/40 shadow-sm border border-tertiary-fixed/30'
                    : 'text-primary-fixed-dim hover:text-surface hover:bg-surface/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions zone */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Status indicator */}
            <div className="hidden lg:flex items-center gap-2 bg-primary/50 px-3 py-1.5 rounded-full border border-primary-fixed/20 text-xs text-surface-container-low">
              <Clock className="w-3.5 h-3.5 text-tertiary-fixed" />
              <span>{RESTAURANT_INFO.statusText}</span>
            </div>

            {/* "Ver Cardápio" CTA */}
            <Link
              href="/categorias"
              className="inline-flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-lg font-label-lg text-sm font-bold shadow-md hover:bg-tertiary-fixed-dim active:scale-95 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Cardápio</span>
            </Link>

            {/* WhatsApp reservations */}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-secondary text-on-secondary px-3.5 py-2 rounded-lg font-label-lg text-sm font-bold shadow hover:bg-secondary/90 active:scale-95 transition-all"
              title="Reservar mesa via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">Reservar</span>
            </a>

            {/* Avatar thumbnail */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-tertiary-fixed/50 shrink-0">
              <Image
                src={RESTAURANT_INFO.avatarImage}
                alt="Perfil Taberna Portucale"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
