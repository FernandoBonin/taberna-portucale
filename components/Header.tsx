'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Utensils, ChevronLeft } from 'lucide-react';
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

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-primary-container/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(24,63,50,0.12)] pt-safe">
      <div className={`px-margin-mobile flex items-center justify-between ${variant === 'home' ? 'h-20' : 'h-16'}`}>
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
    </header>
  );
}
