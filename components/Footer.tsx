import React from 'react';
import Link from 'next/link';
import {
  Utensils,
  MapPin,
  Clock,
  Car,
  MessageCircle,
  Heart,
  Sailboat,
  Phone,
} from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/menu';

export default function Footer() {
  return (
    <footer className="w-full bg-[#112d24] text-surface border-t border-tertiary-fixed/30 mt-auto">
      {/* Decorative Azulejo top band */}
      <div className="w-full h-3 bg-primary-container relative overflow-hidden flex items-center justify-around opacity-90 select-none">
        <div className="flex gap-4 text-tertiary-fixed text-[11px] tracking-widest font-bold">
          <span>✦</span>
          <span>◈</span>
          <span>✦</span>
          <span>◈</span>
          <span>✦</span>
          <span>◈</span>
          <span>✦</span>
          <span>◈</span>
          <span>✦</span>
          <span>◈</span>
          <span>✦</span>
          <span>◈</span>
          <span>✦</span>
          <span>◈</span>
          <span>✦</span>
          <span>◈</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="font-headline-sm text-[22px] text-surface font-semibold tracking-tight">
                {RESTAURANT_INFO.name}
              </span>
            </div>
            <p className="font-body-md text-primary-fixed-dim/90 leading-relaxed text-[14px]">
              {RESTAURANT_INFO.heroDescription}
            </p>
            <div className="flex items-center gap-2 text-tertiary-fixed font-label-md text-xs font-semibold">
              <Sailboat className="w-4 h-4 text-tertiary-fixed" />
              <span>Tradição Lusitana desde 2013</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-title-md text-surface text-base font-bold uppercase tracking-wider border-b border-primary-fixed-dim/20 pb-2">
              Cardápio & Navegação
            </h3>
            <ul className="flex flex-col gap-2 font-body-md text-primary-fixed-dim/90 text-sm">
              <li>
                <Link href="/" className="hover:text-tertiary-fixed transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="hover:text-tertiary-fixed transition-colors">
                  Todas as Categorias
                </Link>
              </li>
              <li>
                <Link href="/categorias/bacalhau" className="hover:text-tertiary-fixed transition-colors">
                  Especialidades de Bacalhau
                </Link>
              </li>
              <li>
                <Link href="/categorias/vinhos" className="hover:text-tertiary-fixed transition-colors">
                  Carta de Vinhos Portugueses
                </Link>
              </li>
              <li>
                <Link href="/destaques" className="hover:text-tertiary-fixed transition-colors">
                  Destaques da Taberna
                </Link>
              </li>
              <li>
                <Link href="/informacoes" className="hover:text-tertiary-fixed transition-colors">
                  Informações & Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Parking */}
          <div className="flex flex-col gap-3">
            <h3 className="font-title-md text-surface text-base font-bold uppercase tracking-wider border-b border-primary-fixed-dim/20 pb-2">
              Horários de Atendimento
            </h3>
            <div className="flex flex-col gap-2.5 font-body-md text-primary-fixed-dim/90 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-surface font-semibold">Sex: 19h às 23h</p>
                  <p className="text-surface font-semibold">Sáb: 12h–16h • 19h–23h</p>
                  <p className="text-surface font-semibold">Dom: 12h às 17h</p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-1">
                <Car className="w-4 h-4 text-tertiary-fixed shrink-0 mt-0.5" />
                <p className="text-xs leading-snug">
                  {RESTAURANT_INFO.parking}
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Location & WhatsApp CTA */}
          <div className="flex flex-col gap-3">
            <h3 className="font-title-md text-surface text-base font-bold uppercase tracking-wider border-b border-primary-fixed-dim/20 pb-2">
              Endereço & Reservas
            </h3>
            <div className="flex items-start gap-2 text-primary-fixed-dim/90 text-sm">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-surface font-semibold">{RESTAURANT_INFO.address}</p>
                <p className="text-xs">{RESTAURANT_INFO.neighborhood}</p>
              </div>
            </div>
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary px-4 py-3 rounded-lg font-label-lg text-sm font-bold shadow hover:bg-secondary/90 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reservar pelo WhatsApp</span>
            </a>
            <div className="flex items-center gap-1.5 text-xs text-primary-fixed-dim/80 mt-1">
              <Phone className="w-3.5 h-3.5 text-tertiary-fixed" />
              <span>{RESTAURANT_INFO.whatsappPhone}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-fixed-dim/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-fixed-dim/80">
          <p>© {new Date().getFullYear()} Taberna Portucale. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-secondary" />
            <span>Cozinha afetiva portuguesa servida com carinho e fartura</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
