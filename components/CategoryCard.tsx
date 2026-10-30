import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Utensils,
  Fish,
  Anchor,
  Flame,
  Croissant,
  Wine,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Category } from '@/data/menu';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'utensils':
        return <Utensils className="w-7 h-7 text-primary-container" />;
      case 'fish':
        return <Fish className="w-7 h-7 text-primary-container" />;
      case 'anchor':
        return <Anchor className="w-7 h-7 text-primary" />;
      case 'flame':
        return <Flame className="w-7 h-7 text-secondary" />;
      case 'croissant':
        return <Croissant className="w-7 h-7 text-on-tertiary-container" />;
      case 'wine':
        return <Wine className="w-7 h-7 text-primary-container" />;
      default:
        return <Utensils className="w-7 h-7 text-primary-container" />;
    }
  };

  // 1. Featured Category (e.g. Bacalhau)
  if (category.featured) {
    return (
      <Link
        href={`/categorias/${category.slug}`}
        className="group relative flex flex-col justify-between h-full p-space-md md:p-6 rounded-xl md:rounded-2xl bg-surface-container shadow-md transition-all duration-300 active:scale-[0.99] hover:shadow-xl hover:-translate-y-1 border border-tertiary-fixed/40"
      >
        <div className="absolute -top-2.5 right-4 px-3 py-0.5 rounded-full bg-secondary text-on-secondary shadow-sm flex items-center gap-1 z-10">
          <Star className="w-3 h-3 fill-current" />
          <span className="font-label-md text-label-md font-bold uppercase tracking-wider">
            {category.badge || 'Mais Pedido'}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-space-md mt-1">
          {category.image && (
            <div className="w-20 h-20 md:w-full md:h-40 lg:w-28 lg:h-28 rounded-lg md:rounded-xl overflow-hidden shrink-0 shadow-sm bg-surface-dim relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          )}
          <div className="flex flex-col flex-1 min-w-0">
            <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold group-hover:text-secondary transition-colors">
              {category.name}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-1.5 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-space-sm pt-space-xs border-t border-outline-variant/15">
          <span className="font-label-md text-label-md text-on-primary-fixed-variant bg-primary-fixed px-2.5 py-0.5 rounded-full font-semibold">
            {category.countLabel}
          </span>
          <div className="flex items-center gap-1 text-primary-container font-label-lg text-label-lg font-bold">
            <span>Ver pratos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    );
  }

  // 2. Card with photo (e.g. Sobremesas)
  if (category.image) {
    return (
      <Link
        href={`/categorias/${category.slug}`}
        className="group flex flex-col justify-between h-full p-space-md md:p-6 rounded-xl md:rounded-2xl bg-surface-container-low transition-all duration-300 active:scale-[0.99] shadow-sm hover:shadow-xl hover:-translate-y-1 border border-outline-variant/15"
      >
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-space-md">
          <div className="w-20 h-20 md:w-full md:h-40 lg:w-28 lg:h-28 rounded-lg md:rounded-xl overflow-hidden shrink-0 shadow-sm bg-surface-dim relative">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center justify-between gap-space-xs">
              <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-semibold group-hover:text-secondary transition-colors">
                {category.name}
              </h2>
              {category.badge && (
                <span className="font-label-md text-label-md text-on-tertiary-fixed-variant bg-tertiary-fixed/60 px-2 py-0.5 rounded-full font-semibold">
                  {category.badge}
                </span>
              )}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-1.5 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-space-sm pt-space-xs border-t border-outline-variant/15">
          <span className="font-label-md text-xs text-on-surface-variant font-medium">
            {category.countLabel}
          </span>
          <div className="flex items-center gap-1 text-secondary font-label-lg text-label-lg font-bold">
            <span>Acessar</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    );
  }

  // 3. Standard category with icon box (Entradas, Peixes, Carnes, Vinhos)
  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group flex flex-col justify-between h-full p-space-md md:p-6 rounded-xl md:rounded-2xl bg-surface-container-low transition-all duration-300 active:scale-[0.99] shadow-sm hover:shadow-xl hover:-translate-y-1 border border-outline-variant/15"
    >
      <div className="flex items-start gap-space-md">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary-fixed/40 transition-colors">
          {getIcon(category.icon)}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center justify-between gap-space-xs">
            <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-semibold group-hover:text-secondary transition-colors">
              {category.name}
            </h2>
            {category.badge && (
              <span
                className={`font-label-md text-label-md px-2 py-0.5 rounded-full font-semibold ${
                  category.badgeColor === 'primary'
                    ? 'text-on-primary-fixed-variant bg-primary-fixed'
                    : 'text-on-tertiary-fixed-variant bg-tertiary-fixed/60'
                }`}
              >
                {category.badge}
              </span>
            )}
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-1.5 leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-space-sm pt-space-xs border-t border-outline-variant/15">
        <span className="font-label-md text-xs text-on-surface-variant font-medium">
          {category.countLabel}
        </span>
        <div className="flex items-center gap-1 text-secondary font-label-lg text-label-lg font-bold">
          <span>Acessar</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
