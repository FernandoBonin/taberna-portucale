import React from 'react';
import { notFound } from 'next/navigation';
import DishDetailsClient from '@/components/DishDetailsClient';
import { getDishBySlug, DISHES } from '@/data/menu';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return DISHES.map((dish) => ({
    slug: dish.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDishBySlug(slug);

  if (!dish) {
    return {
      title: 'Prato Não Encontrado - Taberna Portucale',
    };
  }

  return {
    title: `${dish.name} (${dish.priceFormatted}) - Taberna Portucale`,
    description: dish.shortDescription,
  };
}

export default async function DishDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dish = getDishBySlug(slug);

  if (!dish) {
    notFound();
  }

  return <DishDetailsClient dish={dish} />;
}
