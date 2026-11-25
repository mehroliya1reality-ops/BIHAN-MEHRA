import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { BRAND_INFO, HERO_IMAGE } from '../data/alphaHomesData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onBookConsultation: () => void;
  onExplorePortfolio: () => void;
}

const PROOF_METRICS = [
  { label: 'Established', value: 'Since 2016' },
  { label: 'Delivered Spaces', value: '180+ Projects' },
  { label: 'Studio Presence', value: 'Greater Noida & NCR' },
  { label: 'Execution Model', value: 'Design to Turnkey' },
];

export function Hero({ onBookConsultation, onExplorePortfolio }: HeroProps) {
  return (
    <section
      id="top"
      className="bg-[#FAF8F4] border-b border-[#141413]/10 overflow-x-clip"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between py-2 lg:py-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.14em] uppercase text-[#9A7836] mb-5">
                <span>Greater Noida West</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">Established 2016</span>
              </div>

              <h1
                className="font-display font-medium text-[#141413] leading-[1.06] tracking-[-0.015em] text-balance"
                style={{ fontSize: 'clamp(2.5rem, 4.1vw, 3.85rem)' }}
              >
                Tailored Luxury Interiors Crafted for Modern Living
              </h1>

              <p className="mt-6 text-[15px] sm:text-base leading-[1.7] text-[#141413]/75 max-w-[48ch]">
                Alpha Homes Interiors conceives and builds refined residential,
                modular kitchen, and executive commercial spaces across Greater Noida
                and Delhi NCR—uniting architectural precision with enduring
                craftsmanship.
              </p>
            </div>

            <div className="mt-9 pt-7 border-t border-[#141413]/10">
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-medium tracking-wider uppercase bg-[#141413] text-[#FAF8F4] hover:bg-[#C5A059] hover:text-[#141413] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                >
                  <span>Enquire for a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={BRAND_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-medium tracking-wider uppercase border border-[#141413]/25 text-[#141413] hover:border-[#141413] hover:bg-[#EDE6D9] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                >
                  <MessageCircle className="w-4 h-4 text-[#9A7836]" />
                  <span>WhatsApp Studio</span>
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#141413]/65">
                <a
                  href={BRAND_INFO.phoneHref}
                  className="inline-flex items-center gap-1.5 hover:text-[#141413] transition-colors tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9A7836]" />
                  <span>{BRAND_INFO.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={onExplorePortfolio}
                  className="underline underline-offset-4 decoration-[#C5A059]/60 hover:text-[#141413] transition-colors cursor-pointer"
                >
                  View Completed Works
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 min-h-[320px] sm:min-h-[420px] lg:min-h-[540px]">
            <div className="relative w-full h-full overflow-hidden bg-[#1D1C1A]">
              <ResilientImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                loading="eager"
                fallbackTitle="ALPHA HOMES INTERIORS"
                className="w-full h-full lg:h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#141413]/70 via-[#141413]/25 to-transparent"
              />
              <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#FAF8F4]/90">
                <span>Featured Residence · Jaypee Greens, Greater Noida</span>
                <span className="text-[#D6B87A]">Travertine &amp; Walnut Collection</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#141413]/12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROOF_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="text-xs uppercase tracking-[0.12em] text-[#141413]/55">
                {metric.label}
              </p>
              <p className="font-display text-2xl sm:text-[26px] font-medium text-[#141413] tabular-nums">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
