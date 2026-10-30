'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Star, Store } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Início',
      href: '/',
      icon: Home,
      isActive: pathname === '/',
    },
    {
      label: 'Categorias',
      href: '/categorias',
      icon: BookOpen,
      isActive: pathname.startsWith('/categoria'),
    },
    {
      label: 'Destaques',
      href: '/destaques',
      icon: Star,
      isActive: pathname === '/destaques',
    },
    {
      label: 'Informações',
      href: '/informacoes',
      icon: Store,
      isActive: pathname === '/informacoes',
    },
  ];

  return (
    <nav className="sticky bottom-0 w-full z-50 pb-safe bg-surface-container-low/95 backdrop-blur-xl shadow-[0_-2px_12px_rgba(31,27,15,0.06)] border-t border-outline-variant/20">
      <div className="flex justify-around items-center h-16 px-space-xs">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[64px] min-h-[44px] px-2.5 py-1 rounded-full transition-colors ${
                active
                  ? 'text-primary-container font-bold bg-primary-fixed/40'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <Icon className="w-5 h-5 leading-none" />
              <span className="font-label-md text-label-md mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
