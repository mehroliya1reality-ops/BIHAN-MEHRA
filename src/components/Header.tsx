import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookConsultation: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ onBookConsultation }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const handleMobileCta = () => {
    setMobileOpen(false);
    onBookConsultation();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#141413]/10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between gap-8">
        <a
          href="#top"
          className="font-display text-xl sm:text-2xl font-semibold tracking-wide text-[#141413] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
        >
          ALPHA HOMES INTERIORS
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#141413]/75"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 hover:text-[#141413] transition-colors duration-200 whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookConsultation}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-wider uppercase bg-[#141413] text-[#FAF8F4] hover:bg-[#C5A059] hover:text-[#141413] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
          >
            Book Consultation
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#141413] hover:bg-[#EDE6D9] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A059]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#FAF8F4] border-b border-[#141413]/12 px-5 py-5">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-3 text-base font-medium text-[#141413] border-b border-[#141413]/8 hover:text-[#9A7836] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={handleMobileCta}
            className="mt-5 w-full py-3.5 px-5 text-xs font-medium tracking-wider uppercase bg-[#141413] text-[#FAF8F4] hover:bg-[#C5A059] hover:text-[#141413] transition-colors cursor-pointer"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}
