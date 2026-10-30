import React from 'react';
import Image from 'next/image';
import {
  MapPin,
  Car,
  Clock,
  Phone,
  MessageCircle,
  ShieldCheck,
  Sailboat,
  Heart,
} from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import AzulejoBand from '@/components/AzulejoBand';
import { RESTAURANT_INFO } from '@/data/menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informações & Horários - Taberna Portucale',
  description: 'Localização, horários e reservas da Taberna Portucale no Tatuapé.',
};

export default function InformacoesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header variant="home" title="Informações" />

      <main className="flex-1 flex flex-col relative w-full pb-8">
        <AzulejoBand />

        <div className="px-margin-mobile pt-space-md pb-space-sm flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-tertiary-container shadow-sm self-start">
            <Sailboat className="w-3.5 h-3.5 text-primary" />
            <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-primary">
              Nossa Casa no Tatuapé
            </span>
          </div>

          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tight mt-1 font-bold">
            Informações & Reservas
          </h1>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Venha vivenciar a autêntica hospitalidade portuguesa em um ambiente familiar e aconchegante na Rua Cantagalo.
          </p>
        </div>

        {/* Facade image */}
        <div className="px-margin-mobile py-space-xs">
          <div className="relative w-full h-44 rounded-xl overflow-hidden shadow-md border border-outline-variant/20">
            <Image
              src={RESTAURANT_INFO.facadeImage}
              alt="Fachada Taberna Portucale"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-surface">
              <span className="font-label-md text-label-md text-tertiary-fixed font-bold uppercase">
                {RESTAURANT_INFO.established}
              </span>
              <h2 className="font-headline-sm text-headline-sm font-semibold">
                Taberna Portucale
              </h2>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="px-margin-mobile flex flex-col gap-space-sm pt-space-sm">
          {/* Endereço */}
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-title-md text-[16px] text-primary font-bold">
                Endereço
              </h3>
              <p className="font-body-md text-body-md text-on-surface mt-0.5">
                {RESTAURANT_INFO.address}
              </p>
              <p className="font-label-md text-label-md text-on-surface-variant">
                {RESTAURANT_INFO.neighborhood}
              </p>
            </div>
          </div>

          {/* Estacionamento */}
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
              <Car className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-title-md text-[16px] text-primary font-bold">
                Estacionamento
              </h3>
              <p className="font-body-md text-body-md text-on-surface mt-0.5">
                BioPark Conveniado
              </p>
              <p className="font-label-md text-label-md text-on-surface-variant">
                Localizado logo ao lado no Nº 906 da Rua Cantagalo
              </p>
            </div>
          </div>

          {/* Horários */}
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-title-md text-[16px] text-primary font-bold">
                Dias & Horários
              </h3>
              <div className="font-body-md text-body-md text-on-surface mt-1 space-y-1">
                <div className="flex justify-between">
                  <span className="font-semibold">Sexta-feira:</span>
                  <span className="text-on-surface-variant">19h às 23h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sábado:</span>
                  <span className="text-on-surface-variant">12h às 16h • 19h às 23h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Domingo:</span>
                  <span className="text-on-surface-variant">12h às 17h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Política da Cozinha */}
          <div className="bg-surface-container p-4 rounded-xl shadow-sm border border-outline-variant/15 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-title-md text-[16px] text-on-secondary-fixed font-bold">
                Preparo & Tradição
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-snug">
                Nossos pratos são preparados sob medida na hora do pedido ({RESTAURANT_INFO.estimatedTime}). Não retiramos ou trocamos itens do prato para manter a harmonia das receitas seculares.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-primary-container text-surface p-4 rounded-xl shadow-md flex flex-col gap-3 mt-space-xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0 shadow-inner">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-title-md text-title-md font-bold text-surface">
                  Reservas & Encomendas
                </h4>
                <p className="font-body-md text-body-md text-primary-fixed-dim/90 mt-0.5 leading-snug">
                  Atendimento direto pelo WhatsApp para reservas de mesa e pedidos especiais.
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
              <span>Chamar no WhatsApp • {RESTAURANT_INFO.whatsappPhone}</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 py-4 text-on-surface-variant font-label-md text-label-md text-center opacity-85">
            <Heart className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>Desde 2013 acolhendo famílias com o melhor da culinária portuguesa</span>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
