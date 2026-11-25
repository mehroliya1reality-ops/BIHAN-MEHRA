import { FormEvent, useEffect, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { BRAND_INFO, SERVICES_LIST } from '../data/alphaHomesData';

interface ContactSectionProps {
  preselectedService: string;
  preselectedNote: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyDetails: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
}

export function ContactSection({
  preselectedService,
  preselectedNote,
}: ContactSectionProps) {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || SERVICES_LIST[0].title,
    propertyDetails: '',
    message: preselectedNote || '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      setSubmitted(false);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedNote) {
      setFormData((prev) => ({ ...prev, message: preselectedNote }));
      setSubmitted(false);
    }
  }, [preselectedNote]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    if (!/^\+?\d{10,13}$/.test(cleanPhone)) {
      nextErrors.phone = 'Enter a valid 10-digit phone or WhatsApp number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) {
      nextErrors.service = 'Please select a service.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    const text = [
      `Hello Alpha Homes Interiors,`,
      `Name: ${formData.name || 'Prospective Client'}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Service: ${formData.service}`,
      formData.propertyDetails ? `Property / Area: ${formData.propertyDetails}` : '',
      formData.message ? `Details: ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className="bg-[#FAF8F4] py-16 sm:py-24 border-b border-[#141413]/10"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#9A7836] mb-3">
                Studio Contact &amp; Consultation
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#141413] leading-[1.12] text-balance">
                Begin Your Interior Design Consultation
              </h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-[#141413]/75">
                Meet Founder <strong>{BRAND_INFO.founder}</strong> and Director
                Manager <strong>{BRAND_INFO.directorManager}</strong> at our
                Greater Noida West studio, or reach out directly by phone or
                WhatsApp to arrange a site visit.
              </p>

              <div className="mt-8 space-y-5 border-t border-[#141413]/12 pt-7">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#9A7836] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#141413]/55">
                      Phone &amp; Direct Line
                    </p>
                    <a
                      href={BRAND_INFO.phoneHref}
                      className="text-base font-medium text-[#141413] hover:text-[#9A7836] transition-colors tabular-nums"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageCircle className="w-4 h-4 text-[#9A7836] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#141413]/55">
                      WhatsApp Studio Desk
                    </p>
                    <a
                      href={BRAND_INFO.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium text-[#141413] hover:text-[#9A7836] transition-colors tabular-nums"
                    >
                      {BRAND_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#9A7836] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#141413]/55">
                      Email
                    </p>
                    <a
                      href={BRAND_INFO.emailHref}
                      className="text-base font-medium text-[#141413] hover:text-[#9A7836] transition-colors"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#9A7836] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#141413]/55">
                      Office Address
                    </p>
                    <p className="text-sm leading-relaxed text-[#141413]/85 mt-0.5">
                      {BRAND_INFO.officeAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#9A7836] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#141413]/55">
                      Studio Hours
                    </p>
                    <p className="text-sm text-[#141413]/85 mt-0.5 tabular-nums">
                      {BRAND_INFO.studioHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe className="w-4 h-4 text-[#9A7836] shrink-0 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#141413]/55">
                      Web
                    </p>
                    <p className="text-sm text-[#141413]/85 mt-0.5">
                      {BRAND_INFO.website}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#EDE6D9]/60 border border-[#141413]/12 p-6 sm:p-10">
              {submitted ? (
                <div className="py-8 space-y-5">
                  <div className="inline-flex items-center gap-2 text-[#141413]">
                    <CheckCircle2 className="w-6 h-6 text-[#9A7836]" />
                    <h3 className="font-display text-3xl font-medium">
                      Enquiry Recorded
                    </h3>
                  </div>

                  <p className="text-sm leading-[1.75] text-[#141413]/80 max-w-lg">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry for{' '}
                    <strong>{formData.service}</strong> has been prepared for
                    our Greater Noida West design desk. Our senior coordinator
                    will contact you at{' '}
                    <span className="tabular-nums font-medium">
                      {formData.phone}
                    </span>{' '}
                    within 1 business day.
                  </p>

                  <div className="pt-4 border-t border-[#141413]/12 flex flex-wrap items-center gap-3.5">
                    <button
                      type="button"
                      onClick={handleWhatsAppDispatch}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-wider uppercase bg-[#141413] text-[#FAF8F4] hover:bg-[#C5A059] hover:text-[#141413] transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Details on WhatsApp Now</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          service: SERVICES_LIST[0].title,
                          propertyDetails: '',
                          message: '',
                        });
                      }}
                      className="px-5 py-3 text-xs font-medium tracking-wider uppercase border border-[#141413]/25 text-[#141413] hover:bg-[#FAF8F4] transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#141413]">
                      Request a Bespoke Proposal
                    </h3>
                    <p className="text-xs text-[#141413]/65 mt-1">
                      Share your property location, area, and scope for an
                      accurate consultation and BOQ walkthrough.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div>
                      <label
                        htmlFor="enquiry-name"
                        className="block text-xs font-medium uppercase tracking-wider text-[#141413]/75 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Siddharth Verma"
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#141413]/20 text-[#141413] placeholder:text-[#141413]/40 focus:outline-none focus:border-[#C5A059]"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-phone"
                        className="block text-xs font-medium uppercase tracking-wider text-[#141413]/75 mb-2"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#141413]/20 text-[#141413] placeholder:text-[#141413]/40 focus:outline-none focus:border-[#C5A059] tabular-nums"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="enquiry-email"
                        className="block text-xs font-medium uppercase tracking-wider text-[#141413]/75 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#141413]/20 text-[#141413] placeholder:text-[#141413]/40 focus:outline-none focus:border-[#C5A059]"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-service"
                        className="block text-xs font-medium uppercase tracking-wider text-[#141413]/75 mb-2"
                      >
                        Service Required *
                      </label>
                      <select
                        id="enquiry-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#141413]/20 text-[#141413] focus:outline-none focus:border-[#C5A059]"
                      >
                        {SERVICES_LIST.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.number}. {service.title}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 text-xs text-red-700" role="alert">
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-property"
                      className="block text-xs font-medium uppercase tracking-wider text-[#141413]/75 mb-2"
                    >
                      Property Location &amp; Approximate Area
                    </label>
                    <input
                      id="enquiry-property"
                      type="text"
                      value={formData.propertyDetails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          propertyDetails: e.target.value,
                        })
                      }
                      placeholder="e.g. 3BHK Villa, Greater Noida West · 2,400 sq. ft."
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#141413]/20 text-[#141413] placeholder:text-[#141413]/40 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block text-xs font-medium uppercase tracking-wider text-[#141413]/75 mb-2"
                    >
                      Project Requirements &amp; Timeline
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your preferred style, rooms or commercial zones to design, and target handover date..."
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#141413]/20 text-[#141413] placeholder:text-[#141413]/40 focus:outline-none focus:border-[#C5A059] resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      type="submit"
                      className="px-7 py-3.5 text-xs font-medium tracking-wider uppercase bg-[#141413] text-[#FAF8F4] hover:bg-[#C5A059] hover:text-[#141413] transition-colors duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                    >
                      Submit Enquiry
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDispatch}
                      className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-medium tracking-wider uppercase border border-[#141413]/25 text-[#141413] hover:bg-[#FAF8F4] transition-colors duration-200 whitespace-nowrap cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#9A7836]" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
