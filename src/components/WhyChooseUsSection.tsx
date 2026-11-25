import { CLIENT_TESTIMONIALS, WHY_CHOOSE_PILLARS } from '../data/alphaHomesData';

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="bg-[#EDE6D9]/65 border-b border-[#141413]/10 py-16 sm:py-24"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9A7836] mb-3">
              Why Choose Alpha Homes Interiors
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#141413] leading-[1.12] text-balance">
              Disciplined Craftsmanship Built to Endure Since 2016
            </h2>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#141413]/75">
              Luxury interiors depend on what lies beneath the surface—seasoned
              timber framing, moisture-resistant substrates, crisp electrical
              routing, and direct site supervision.
            </p>

            <div className="mt-10 space-y-6">
              {CLIENT_TESTIMONIALS.map((item) => (
                <blockquote
                  key={item.clientName}
                  className="bg-[#FAF8F4] border border-[#141413]/12 p-6"
                >
                  <p className="text-sm leading-[1.75] text-[#141413]/85 italic">
                    “{item.quote}”
                  </p>
                  <footer className="mt-4 pt-3 border-t border-[#141413]/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-[#141413]">
                      {item.clientName}
                    </span>
                    <span className="text-[#141413]/60 tabular-nums">
                      {item.projectRole} · {item.location}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
            {WHY_CHOOSE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#FAF8F4] border border-[#141413]/12 p-7 flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <span className="text-xs font-medium tracking-[0.14em] text-[#9A7836] tabular-nums">
                    {pillar.number}.
                  </span>
                  <h3 className="font-display text-2xl sm:text-[26px] font-medium text-[#141413] mt-3">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-[#141413]/75">
                    {pillar.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#141413]/10">
                  <p className="text-xs font-medium text-[#141413] tabular-nums">
                    {pillar.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
