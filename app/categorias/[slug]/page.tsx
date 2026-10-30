import React from 'react';
import { notFound } from 'next/navigation';
import CategoryMenuClient from '@/components/CategoryMenuClient';
import { getCategoryBySlug, getDishesByCategory, CATEGORIES } from '@/data/menu';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Categoria Não Encontrada - Taberna Portucale',
    };
  }

  return {
    title: `${category.name} - Taberna Portucale`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const dishes = getDishesByCategory(slug);

  return <CategoryMenuClient category={category} dishes={dishes} />;
}
