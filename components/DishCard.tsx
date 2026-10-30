import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Users, ArrowRight } from 'lucide-react';
import { Dish } from '@/data/menu';

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  const imageUrl = dish.cardImage || dish.image;

  if (imageUrl) {
    return (
      <article className="menu-item bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col transition-transform active:scale-[0.99] border border-outline-variant/20 hover:shadow-lg">
        <Link href={`/pratos/${dish.slug}`} className="block relative w-full h-44 overflow-hidden group">
          <Image
            src={imageUrl}
            alt={dish.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          {dish.tag && (
            <div className="absolute top-3 left-3 bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-md font-label-md font-bold tracking-wide shadow-sm flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{dish.tag}</span>
            </div>
          )}
        </Link>
        <div className="p-space-md flex flex-col">
          <div className="flex items-start justify-between gap-space-xs mb-1">
            <Link href={`/pratos/${dish.slug}`}>
              <h3 className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors font-semibold">
                {dish.name}
              </h3>
            </Link>
            <span className="font-price-display text-price-display text-secondary whitespace-nowrap">
              {dish.priceFormatted}
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm leading-relaxed">
            {dish.shortDescription}
          </p>
          <div className="flex items-center justify-between pt-space-xs border-t border-outline-variant/10">
            <span className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary font-medium">
              <Users className="w-4 h-4 text-secondary shrink-0" />
              <span>
                {dish.serves}
                {dish.prepTime ? ` • ${dish.prepTime}` : ''}
              </span>
            </span>
            <Link
              href={`/pratos/${dish.slug}`}
              className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors py-1 px-1.5 rounded-md hover:bg-surface-container-high"
            >
              <span>Ver Detalhes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Text-only card
  return (
    <article className="menu-item bg-surface-container rounded-xl p-space-md shadow-sm flex flex-col transition-transform active:scale-[0.99] border border-outline-variant/10 hover:shadow-md">
      <div className="flex items-start justify-between gap-space-xs mb-1">
        <Link href={`/pratos/${dish.slug}`}>
          <h3 className="font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors font-semibold">
            {dish.name}
          </h3>
        </Link>
        <span className="font-price-display text-price-display text-secondary whitespace-nowrap">
          {dish.priceFormatted}
        </span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm leading-relaxed">
        {dish.shortDescription}
      </p>
      <div className="flex items-center justify-between pt-space-xs border-t border-outline-variant/10">
        <span className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary font-medium">
          <Users className="w-4 h-4 text-secondary shrink-0" />
          <span>
            {dish.serves}
            {dish.prepTime ? ` • ${dish.prepTime}` : ''}
          </span>
        </span>
        <Link
          href={`/pratos/${dish.slug}`}
          className="inline-flex items-center gap-1 font-label-md text-label-md font-bold text-primary hover:text-primary-container transition-colors py-1 px-1.5 rounded-md hover:bg-surface-container-high"
        >
          <span>Ver Detalhes</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
