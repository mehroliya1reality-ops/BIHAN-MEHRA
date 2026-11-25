import { Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { BRAND_INFO, SERVICES_LIST } from '../data/alphaHomesData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141413] text-[#FAF8F4] pt-14 pb-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F4]/12">
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-semibold tracking-wide text-[#FAF8F4]">
              {BRAND_INFO.brandTitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#DFD5C5]/75 max-w-sm">
              A bespoke interior architecture and turnkey execution firm by{' '}
              <span className="text-[#FAF8F4]">{BRAND_INFO.companyName}</span>,
              crafting enduring residential and commercial environments across
              Greater Noida and Delhi NCR since{' '}
              <span className="tabular-nums">{BRAND_INFO.established}</span>.
            </p>
            <p className="mt-4 text-xs text-[#DFD5C5]/70">
              Founder: {BRAND_INFO.founder} · Director Manager:{' '}
              {BRAND_INFO.directorManager}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#C5A059] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm text-[#DFD5C5]/80">
              <li>
                <a href="#top" className="hover:text-[#FAF8F4] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF8F4] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF8F4] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FAF8F4] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FAF8F4] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF8F4] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#C5A059] mb-4">
              Services
            </p>
            <ul className="space-y-2 text-sm text-[#DFD5C5]/80">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-[#FAF8F4] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#C5A059] mb-4">
              Greater Noida Studio
            </p>
            <div className="space-y-2.5 text-sm text-[#DFD5C5]/80">
              <p className="leading-relaxed">{BRAND_INFO.officeAddress}</p>
              <p>
                <a
                  href={BRAND_INFO.phoneHref}
                  className="hover:text-[#FAF8F4] transition-colors tabular-nums"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={BRAND_INFO.emailHref}
                  className="hover:text-[#FAF8F4] transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
              </p>
              <p className="text-[#C5A059]">{BRAND_INFO.website}</p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={BRAND_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpha Homes Interiors WhatsApp"
                className="w-10 h-10 border border-[#FAF8F4]/15 flex items-center justify-center text-[#DFD5C5] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`https://instagram.com`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpha Homes Interiors Instagram"
                className="w-10 h-10 border border-[#FAF8F4]/15 flex items-center justify-center text-[#DFD5C5] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://facebook.com`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpha Homes Interiors Facebook"
                className="w-10 h-10 border border-[#FAF8F4]/15 flex items-center justify-center text-[#DFD5C5] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://linkedin.com`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alpha Homes Interiors LinkedIn"
                className="w-10 h-10 border border-[#FAF8F4]/15 flex items-center justify-center text-[#DFD5C5] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DFD5C5]/55">
          <p className="tabular-nums">
            © {currentYear} {BRAND_INFO.companyName} ({BRAND_INFO.brandTitle}). All rights reserved.
          </p>
          <p>Greater Noida West · Sector 16B · NCR</p>
        </div>
      </div>
    </footer>
  );
}
