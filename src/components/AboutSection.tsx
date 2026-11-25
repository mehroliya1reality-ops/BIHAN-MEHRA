import { BRAND_INFO } from '../data/alphaHomesData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#EDE6D9]/55 border-b border-[#141413]/10 py-16 sm:py-24"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9A7836] mb-3">
                About Alpha Homes Interiors
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#141413] leading-[1.12] text-balance">
                Architectural Rigour Meets Bespoke Residential Warmth
              </h2>
              <p className="mt-5 text-[15px] leading-[1.75] text-[#141413]/78">
                Established in <span className="tabular-nums font-medium text-[#141413]">2016</span>,{' '}
                <strong className="font-semibold text-[#141413]">ALPHA HOMES</strong>{' '}
                was founded with a clear conviction: luxury interiors must marry
                timeless material beauty with disciplined site engineering. From
                our design studio in Greater Noida West, we guide homeowners,
                developers, and corporate leaders from initial spatial concept to
                turnkey handover.
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#141413]/78">
                Every commission is executed under single-window accountability—pairing
                custom millwork, imported stone finishes, sculpted false ceilings,
                and precision lighting schematics crafted specifically for your space.
              </p>
            </div>

            <div className="mt-8 pt-7 border-t border-[#141413]/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#9A7836]">
                  Founder
                </p>
                <p className="font-display text-2xl font-medium text-[#141413] mt-1">
                  {BRAND_INFO.founder}
                </p>
                <p className="text-xs leading-relaxed text-[#141413]/68 mt-1.5">
                  Leads architectural direction, spatial planning, and bespoke material
                  curation across flagship residences and commercial mandates.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#9A7836]">
                  Director Manager
                </p>
                <p className="font-display text-2xl font-medium text-[#141413] mt-1">
                  {BRAND_INFO.directorManager}
                </p>
                <p className="text-xs leading-relaxed text-[#141413]/68 mt-1.5">
                  Oversees turnkey project engineering, vendor craftsmanship quality,
                  and milestone-driven execution across Greater Noida &amp; NCR.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            <div className="sm:col-span-7 min-h-[280px] sm:min-h-[420px] overflow-hidden bg-[#1D1C1A]">
              <ResilientImage
                src="/src/assets/images/portfolio_penthouse_dining_1795598814565.jpg"
                alt="Double-height luxury dining atrium designed by Alpha Homes Interiors"
                fallbackTitle="Penthouse Dining Atrium"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="sm:col-span-5 flex flex-col justify-between bg-[#141413] text-[#FAF8F4] p-6 sm:p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#C5A059]">
                  Studio Headquarters
                </p>
                <h3 className="font-display text-2xl font-medium text-[#FAF8F4] mt-2 leading-snug">
                  Visit Our Greater Noida West Studio
                </h3>
                <p className="text-sm leading-relaxed text-[#DFD5C5]/80 mt-3">
                  {BRAND_INFO.officeAddress}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#FAF8F4]/12 space-y-2.5 text-xs text-[#DFD5C5]/80">
                <div className="flex items-center justify-between gap-2">
                  <span>Heritage</span>
                  <span className="text-[#FAF8F4] tabular-nums">Est. 2016</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Region Served</span>
                  <span className="text-[#FAF8F4]">Greater Noida &amp; NCR</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span>Consultation</span>
                  <span className="text-[#C5A059]">By Appointment &amp; Walk-in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
