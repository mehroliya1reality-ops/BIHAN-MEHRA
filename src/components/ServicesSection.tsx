import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/alphaHomesData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onEnquireService: (serviceTitle: string) => void;
}

export function ServicesSection({ onEnquireService }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES_LIST[0]);

  return (
    <section
      id="services"
      className="bg-[#141413] text-[#FAF8F4] py-16 sm:py-24 border-b border-[#FAF8F4]/10"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#FAF8F4]/12">
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#C5A059] mb-3">
              Design &amp; Build Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#FAF8F4] leading-[1.1] text-balance max-w-2xl">
              Eight Specialized Disciplines Under One Roof
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#DFD5C5]/75 max-w-md">
            Select any discipline below to inspect deliverables, typical timelines,
            and architectural specifications—or request a tailored project estimate.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 bg-[#1D1C1A] border border-[#FAF8F4]/10 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#141413]">
                <ResilientImage
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  fallbackTitle={activeService.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 text-xs text-[#C5A059] tracking-[0.12em] uppercase">
                  <span className="tabular-nums">Service {activeService.number}</span>
                  <span className="tabular-nums text-[#DFD5C5]/75">
                    Timeline: {activeService.timeline}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#FAF8F4] mt-3">
                  {activeService.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.7] text-[#DFD5C5]/82">
                  {activeService.description}
                </p>

                <div className="mt-6 pt-5 border-t border-[#FAF8F4]/10 space-y-2.5">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#DFD5C5]/60">
                    Key Deliverables
                  </p>
                  {activeService.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#FAF8F4]/90"
                    >
                      <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <button
                type="button"
                onClick={() => onEnquireService(activeService.title)}
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-medium tracking-wider uppercase bg-[#C5A059] text-[#141413] hover:bg-[#D6B87A] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF8F4]"
              >
                <span>Enquire About {activeService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES_LIST.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveService(service)}
                  className={`text-left p-5 sm:p-6 border transition-colors duration-200 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A059] ${
                    isSelected
                      ? 'bg-[#1D1C1A] border-[#C5A059]'
                      : 'bg-[#141413] border-[#FAF8F4]/12 hover:border-[#C5A059]/55 hover:bg-[#1D1C1A]/70'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-medium tracking-[0.14em] text-[#C5A059] tabular-nums">
                        {service.number}.
                      </span>
                      <span className="text-[11px] text-[#DFD5C5]/60">
                        {service.shortTag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-[22px] font-medium text-[#FAF8F4] leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#DFD5C5]/75 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#FAF8F4]/8 flex items-center justify-between text-xs">
                    <span className="text-[#DFD5C5]/65 tabular-nums">
                      {service.timeline}
                    </span>
                    <span
                      className={
                        isSelected
                          ? 'text-[#C5A059] font-medium'
                          : 'text-[#FAF8F4]/70'
                      }
                    >
                      {isSelected ? 'Viewing Details' : 'Inspect Scope'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
