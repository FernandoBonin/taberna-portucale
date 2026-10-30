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
  Calendar,
} from 'lucide-react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import AzulejoBand from '@/components/AzulejoBand';
import { RESTAURANT_INFO } from '@/data/menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Informações, Horários & Reservas - Taberna Portucale',
  description: 'Localização, horários e reservas da Taberna Portucale no Tatuapé.',
};

export default function InformacoesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header variant="home" title="Informações" />

      <main className="flex-1 flex flex-col relative w-full pb-12">
        <AzulejoBand />

        <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-8 py-6 md:py-12">
          {/* Header intro */}
          <div className="flex flex-col gap-space-xs mb-8 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container text-tertiary-container shadow-sm self-start border border-tertiary-fixed/30">
              <Sailboat className="w-4 h-4 text-primary" />
              <span className="font-label-md text-xs font-bold uppercase tracking-wider text-primary">
                Nossa Casa no Tatuapé
              </span>
            </div>

            <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight font-bold mt-1">
              Informações & Reservas
            </h1>

            <p className="font-body-md md:font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Venha vivenciar a autêntica hospitalidade portuguesa em um ambiente familiar e aconchegante na Rua Cantagalo, com estacionamento conveniado e preparo artesanal.
            </p>
          </div>

          {/* Desktop 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Facade photo & Heritage Story */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Facade photo */}
              <div className="relative w-full h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20">
                <Image
                  src={RESTAURANT_INFO.facadeImage}
                  alt="Fachada Taberna Portucale"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-surface">
                  <span className="font-label-md text-xs text-tertiary-fixed font-bold uppercase tracking-wider">
                    {RESTAURANT_INFO.established}
                  </span>
                  <h2 className="font-headline-sm text-xl lg:text-2xl font-semibold">
                    Taberna Portucale
                  </h2>
                  <p className="font-body-md text-xs text-primary-fixed-dim/90 mt-0.5">
                    {RESTAURANT_INFO.address} • Tatuapé
                  </p>
                </div>
              </div>

              {/* Tradition & Kitchen Policy Card */}
              <div className="bg-surface-container p-6 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center shrink-0 text-secondary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-title-md text-base text-on-secondary-fixed font-bold">
                    Preparo Artesanal & Tradição
                  </h3>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {RESTAURANT_INFO.policyNotice}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-secondary pt-1 border-t border-outline-variant/15">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Tempo de forno e preparo sob medida: 30 a 45 minutos</span>
                </div>
              </div>
            </div>

            {/* Right Column: Practical Info Grid (Address, Hours, Parking, WhatsApp) */}
            <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
              {/* Address card */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-title-md text-base text-primary font-bold">
                    Endereço & Localização
                  </h3>
                  <p className="font-body-md text-sm text-on-surface mt-1 font-medium">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="font-label-md text-xs text-on-surface-variant">
                    {RESTAURANT_INFO.neighborhood}
                  </p>
                </div>
              </div>

              {/* Parking card */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
                  <Car className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-title-md text-base text-primary font-bold">
                    Estacionamento Conveniado
                  </h3>
                  <p className="font-body-md text-sm text-on-surface mt-1 font-medium">
                    BioPark Conveniado (Nº 906)
                  </p>
                  <p className="font-label-md text-xs text-on-surface-variant">
                    Conveniado ao lado da taberna para total comodidade e segurança dos clientes.
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-title-md text-base text-primary font-bold">
                    Dias & Horários de Funcionamento
                  </h3>
                  <div className="font-body-md text-sm text-on-surface mt-2 space-y-1.5">
                    <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                      <span className="font-semibold text-on-surface">Sexta-feira:</span>
                      <span className="text-on-surface-variant">19h às 23h (Jantar)</span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/10 pb-1">
                      <span className="font-semibold text-on-surface">Sábado:</span>
                      <span className="text-on-surface-variant">12h às 16h (Almoço) • 19h às 23h (Jantar)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-on-surface">Domingo:</span>
                      <span className="text-on-surface-variant">12h às 17h (Almoço em Família)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Card */}
              <div className="bg-primary-container text-surface p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-tertiary-fixed/30 mt-2">
                <div className="flex items-center gap-3.5 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0 shadow-inner">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-title-md text-lg font-bold text-surface">
                      Reservas & Atendimento
                    </h4>
                    <p className="font-body-md text-xs text-primary-fixed-dim/90 mt-0.5">
                      Fale conosco no WhatsApp para reservas antecipadas e encomendas.
                    </p>
                  </div>
                </div>

                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface text-primary-container px-5 py-3 rounded-xl font-label-lg text-sm font-bold shadow hover:bg-surface-container-low active:scale-95 transition-all shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-secondary shrink-0" />
                  <span>WhatsApp • {RESTAURANT_INFO.whatsappPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
