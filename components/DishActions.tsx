'use client';

import React, { useState } from 'react';
import { Share2, Heart, MessageCircle, Check } from 'lucide-react';

interface DishActionsProps {
  dishName: string;
  priceFormatted: string;
}

export default function DishActions({ dishName, priceFormatted }: DishActionsProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setToastMessage(!isFavorite ? 'Salvo nos seus favoritos!' : 'Removido dos favoritos.');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2400);
  };

  const handleShare = async () => {
    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `${dishName} - Taberna Portucale`,
          text: `Confira este autêntico ${dishName} (${priceFormatted}) na Taberna Portucale no Tatuapé!`,
          url: window.location.href,
        });
      } catch {
        // Ignored if cancelled
      }
    } else if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setToastMessage('Link copiado para a área de transferência!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2400);
      } catch {
        // Fallback
      }
    }
  };

  const encodedMsg = encodeURIComponent(
    `Olá! Gostaria de pedir o ${dishName} (${priceFormatted}) na Taberna Portucale.`
  );
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMsg}`;

  return (
    <>
      {/* Subheader Share & Favorite actions */}
      <div className="flex items-center gap-space-xs">
        <button
          onClick={handleShare}
          aria-label="Compartilhar prato"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
        >
          <Share2 className="w-5 h-5" />
        </button>
        <button
          onClick={toggleFavorite}
          aria-label="Favoritar prato"
          className={`w-10 h-10 flex items-center justify-center rounded-full bg-surface-container transition-colors ${
            isFavorite ? 'text-secondary' : 'text-on-surface hover:text-secondary'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Toast Feedback */}
      {showToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-primary-container text-surface px-4 py-2 rounded-full shadow-xl text-xs font-semibold flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4 text-tertiary-fixed" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}

export function DishBottomCTAs({
  dishName,
  priceFormatted,
}: {
  dishName: string;
  priceFormatted: string;
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2400);
  };

  const encodedMsg = encodeURIComponent(
    `Olá! Gostaria de pedir o ${dishName} (${priceFormatted}) na Taberna Portucale.`
  );
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodedMsg}`;

  return (
    <div className="flex flex-col gap-space-sm pt-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3.5 px-space-md rounded-xl bg-primary text-surface font-label-lg text-label-lg shadow-md hover:bg-primary-container active:scale-[0.99] transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        <span>Pedir pelo WhatsApp / Chamar Garçom</span>
      </a>
      <button
        type="button"
        onClick={toggleFavorite}
        className="w-full flex items-center justify-center gap-2 py-3 px-space-md rounded-xl bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-dim transition-colors"
      >
        <Heart className={`w-4 h-4 text-secondary ${isFavorite ? 'fill-current' : ''}`} />
        <span>{isFavorite ? 'Salvo nos Favoritos' : 'Adicionar aos Favoritos'}</span>
      </button>

      {showToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-primary-container text-surface px-4 py-2 rounded-full shadow-xl text-xs font-semibold flex items-center gap-2">
          <Check className="w-4 h-4 text-tertiary-fixed" />
          <span>{isFavorite ? 'Adicionado aos Favoritos!' : 'Removido dos Favoritos!'}</span>
        </div>
      )}
    </div>
  );
}
