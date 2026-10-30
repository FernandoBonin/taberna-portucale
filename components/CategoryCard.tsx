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

  if (category.featured) {
    return (
      <Link
        href={`/categorias/${category.slug}`}
        className="group relative block p-space-md rounded-xl bg-surface-container shadow-md transition-all duration-200 active:scale-[0.99] hover:shadow-lg border border-tertiary-fixed/30"
      >
        <div className="absolute -top-2.5 right-4 px-3 py-0.5 rounded-full bg-secondary text-on-secondary shadow-sm flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          <span className="font-label-md text-label-md font-bold uppercase tracking-wider">
            {category.badge || 'Mais Pedido'}
          </span>
        </div>
        <div className="flex items-start gap-space-md mt-1">
          {category.image && (
            <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 shadow-sm bg-surface-dim relative">
              <Image
                src={category.image}
                alt={category.name}
                width={80}
                height={80}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          )}
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center gap-space-xs">
              <h2 className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold group-hover:text-secondary transition-colors">
                {category.name}
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-1">
              {category.description}
            </p>
            <div className="flex items-center justify-between mt-space-xs">
              <span className="font-label-md text-label-md text-on-primary-fixed-variant bg-primary-fixed px-2 py-0.5 rounded-full font-semibold">
                {category.countLabel}
              </span>
              <div className="flex items-center gap-1 text-primary-container font-label-lg text-label-lg font-bold">
                <span>Ver pratos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Card with thumbnail image (like Sobremesas)
  if (category.image) {
    return (
      <Link
        href={`/categorias/${category.slug}`}
        className="group block p-space-md rounded-xl bg-surface-container-low transition-all duration-200 active:scale-[0.99] shadow-sm hover:shadow-md"
      >
        <div className="flex items-start gap-space-md">
          <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 shadow-sm bg-surface-dim relative">
            <Image
              src={category.image}
              alt={category.name}
              width={80}
              height={80}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-1">
              {category.description}
            </p>
            <div className="flex items-center gap-1 mt-space-xs text-secondary font-label-lg text-label-lg font-bold">
              <span>{category.countLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Standard category with icon box
  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group block p-space-md rounded-xl bg-surface-container-low transition-all duration-200 active:scale-[0.99] shadow-sm hover:shadow-md"
    >
      <div className="flex items-start gap-space-md">
        <div className="w-14 h-14 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 shadow-inner">
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
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-1">
            {category.description}
          </p>
          <div className="flex items-center gap-1 mt-space-xs text-secondary font-label-lg text-label-lg font-bold">
            <span>{category.countLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
