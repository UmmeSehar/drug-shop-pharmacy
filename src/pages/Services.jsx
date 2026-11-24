import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Pill,
  Truck,
  RefreshCw,
  Clock,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const FALLBACK_PHARMACY =
  "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80";

const FALLBACK_MED =
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80";

export default function Services() {
  const [selectedService, setSelectedService] = useState("Prescription & Refill Care");

  const handleImgError = (e, fallback = FALLBACK_MED) => {
    if (e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  const servicesList = [
    {
      name: "Prescription & Refill Care",
      tag: "Everyday Care",
      surface: "bg-white border-blue-200 text-black",
      badge: "bg-[#E6F2FF] text-[#082A5E]",
      desc: "Simple, caring prescription handling and timely monthly refills so you do not have to wait in long pharmacy lines.",
      points: [
        "Easy prescription & refill requests",
        "Friendly pharmacist assistance",
        "Organized monthly medicine tracking",
      ],
      img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Doorstep Medicine Delivery",
      tag: "Fast & Careful",
      surface: "bg-[#EEF9F7] border-teal-300/70 text-black",
      badge: "bg-[#DDF2EE] text-[#144D47]",
      desc: "Medicines packed neatly and brought straight to your home or workplace at a time that fits your schedule.",
      points: [
        "Scheduled delivery windows",
        "Neat & protective packaging",
        "Direct updates without confusion",
      ],
      img: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Vitamins & Daily Wellness",
      tag: "Daily Support",
      surface: "bg-[#EBF6FF] border-blue-200 text-black",
      badge: "bg-[#DCEEFF] text-[#082A5E]",
      desc: "Everyday vitamins, minerals, and wellness essentials curated for energy, immunity, and routine health.",
      points: [
        "Daily nutritional support options",
        "Clear guidance on general use",
        "Suitable for home & family routines",
      ],
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Herbal & Soothing Care",
      tag: "Tea-Green Calm",
      surface: "bg-[#EEF9F7] border-teal-300/70 text-black",
      badge: "bg-[#DDF2EE] text-[#144D47]",
      desc: "Gentle herbal syrups, soothing blends, and calming formulas for seasonal comfort and daily relaxation.",
      points: [
        "Seasonal throat & comfort care",
        "Calm, gentle everyday options",
        "Easy-to-understand usage notes",
      ],
      img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Skin & First-Aid Essentials",
      tag: "Home Ready",
      surface: "bg-white border-blue-200 text-black",
      badge: "bg-[#E6F2FF] text-[#082A5E]",
      desc: "Everyday skincare creams, barrier care, and home first-aid supplies kept ready for sudden needs.",
      points: [
        "Dry & sensitive skin care",
        "Bandages & basic first-aid items",
        "Practical family readiness",
      ],
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Family & Senior Care Support",
      tag: "Caring Service",
      surface: "bg-[#EBF6FF] border-blue-200 text-black",
      badge: "bg-[#DCEEFF] text-[#082A5E]",
      desc: "Thoughtful support for families and seniors who value personal attention, clear reminders, and reliable care.",
      points: [
        "Helpful guidance for family care",
        "Consistent refill reminders",
        "Human, friendly communication",
      ],
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const promisePillars = [
    {
      word: "Faster",
      line: "Skip waiting in line. Get clear help and smooth ordering without hassle.",
      bg: "bg-white border-blue-200 text-black",
      accent: "text-[#0B5ED7]",
    },
    {
      word: "Caring",
      line: "Friendly support focused on people and real everyday needs—not rushed queues.",
      bg: "bg-[#EEF9F7] border-teal-300/80 text-black",
      accent: "text-[#1B5E57]",
    },
    {
      word: "Smarter",
      line: "Stay organized with easy refill tracking and clear medicine guidance.",
      bg: "bg-[#EBF6FF] border-blue-200 text-black",
      accent: "text-[#082A5E]",
    },
    {
      word: "Reliable",
      line: "Consistent quality, timely updates, and dependable support whenever you reach out.",
      bg: "bg-white border-teal-300/70 text-black",
      accent: "text-[#1B5E57]",
    },
  ];

  return (
    <div className="pt-20 bg-white text-black min-h-screen">
      {/* 1. HERO BAND (Deep Blue + Tea-Green Accent Mix, White & Sky Text) */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#071E42] via-[#0B428A] to-[#1B5E57] text-white border-b border-teal-300/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2E7D72]/40 border border-teal-200/40 text-teal-100 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              Pharmacy Services
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black leading-tight text-white">
              A Friendlier Way to Get{" "}
              <span className="text-teal-200">Everyday Pharmacy Care.</span>
            </h1>
            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed max-w-2xl">
              From prescription refills and doorstep delivery to daily vitamins and family wellness—explore services designed with a clean blue, tea-green, and white balance.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#service-cards"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#EBF6FF] text-black font-extrabold text-sm sm:text-base transition shadow-lg"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/923241282633?text=Hello%20Pharmacy!%20I%20would%20like%20to%20ask%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2E7D72] hover:bg-[#23635A] text-white font-extrabold text-sm sm:text-base border border-teal-200/40 transition"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/15 backdrop-blur-sm border border-teal-200/35 p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80"
                alt="Pharmacy Care & Support"
                onError={(e) => handleImgError(e, FALLBACK_PHARMACY)}
                className="w-full h-72 sm:h-80 object-cover rounded-2xl slowmo-3d-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPSULE-INSPIRED 4-PILLAR GRID (Blue, Tea-Green & White + Black Text) */}
      <section className="py-20 bg-[#EEF9F7] text-black border-b border-teal-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1B5E57]">
              How We Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black mt-1">
              More Caring. Less Waiting.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {promisePillars.map((item) => (
              <div
                key={item.word}
                className={`rounded-3xl p-7 border shadow-sm ${item.bg}`}
              >
                <h3 className={`text-3xl font-black mb-3 ${item.accent}`}>
                  {item.word}
                </h3>
                <p className="text-sm font-medium text-black leading-relaxed">
                  {item.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN SERVICES GRID (Mix of White, Blue & Tea-Green Cards + Black Text) */}
      <section id="service-cards" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Complete Care Lineup
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-black mt-2">
              Pharmacy Services Built Around You
            </h2>
            <p className="mt-3 text-sm sm:text-base text-black/80 leading-relaxed">
              Every service card combines clean pharmacy visuals with clear, easy-to-read details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((srv) => (
              <div
                key={srv.name}
                className={`rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between ${srv.surface}`}
              >
                <div>
                  <img
                    src={srv.img}
                    alt={srv.name}
                    onError={(e) => handleImgError(e, FALLBACK_MED)}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 sm:p-7">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3 ${srv.badge}`}
                    >
                      {srv.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-black mb-2.5">
                      {srv.name}
                    </h3>
                    <p className="text-sm text-black/85 leading-relaxed mb-4">
                      {srv.desc}
                    </p>
                    <ul className="space-y-2">
                      {srv.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-xs sm:text-sm font-bold text-black"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#1B5E57] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedService(srv.name)}
                    className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#0B5ED7] hover:text-[#1B5E57] transition"
                  >
                    Ask About This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXTRA BENEFITS STRIP (24/7 Support, Quality, Free Guidance — Light Blue & Tea-Green + Black Text) */}
      <section className="py-20 bg-[#EBF6FF] text-black border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-7">
          <div className="rounded-3xl bg-white border border-blue-200 p-7 shadow-sm">
            <Clock className="w-7 h-7 text-[#0B5ED7] mb-3" />
            <h3 className="text-xl font-black text-black mb-2">24/7 Support</h3>
            <p className="text-sm text-black/80 leading-relaxed">
              Reach out anytime for general questions, refill requests, or help getting started.
            </p>
          </div>
          <div className="rounded-3xl bg-[#EEF9F7] border border-teal-300/80 p-7 shadow-sm">
            <ShieldCheck className="w-7 h-7 text-[#1B5E57] mb-3" />
            <h3 className="text-xl font-black text-black mb-2">Quality & Care</h3>
            <p className="text-sm text-black/80 leading-relaxed">
              Careful attention to detail across every medicine pack, delivery step, and client interaction.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-blue-200 p-7 shadow-sm">
            <HeartHandshake className="w-7 h-7 text-[#0B5ED7] mb-3" />
            <h3 className="text-xl font-black text-black mb-2">Free Guidance</h3>
            <p className="text-sm text-black/80 leading-relaxed">
              Clear, friendly guidance in plain language so choosing and managing care feels effortless.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SELECT SERVICE + WHATSAPP ACTION BAND (Blue & Tea-Green Mix) */}
      <section className="py-20 bg-gradient-to-r from-[#071E42] via-[#0B428A] to-[#1B5E57] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="rounded-3xl bg-white/10 border border-teal-200/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <label
                htmlFor="pharmacyServiceSelect"
                className="block text-xs font-extrabold uppercase tracking-wider text-teal-200 mb-2"
              >
                Choose a Service to Inquire
              </label>
              <select
                id="pharmacyServiceSelect"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 rounded-xl bg-[#071E42] border border-teal-200/40 text-white text-sm font-bold focus:outline-none"
              >
                {servicesList.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#EBF6FF] text-black font-extrabold text-sm transition"
              >
                Continue With {selectedService} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/923241282633?text=Hello%20Pharmacy!%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
                  selectedService
                )}.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#2E7D72] hover:bg-[#23635A] text-white font-extrabold text-sm border border-teal-200/40 transition"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[#EEF9F7] text-black border border-teal-300/80 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#DDF2EE] text-[#1B5E57] flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-black">
                  Need Quick Help With a Prescription or Order?
                </h3>
                <p className="text-sm text-black/80 mt-1">
                  Message us on WhatsApp (+92 324 1282633) or open the Contact page for direct assistance.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/923241282633?text=Hello%20Pharmacy!%20I%20need%20help%20with%20an%20order."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#071E42] hover:bg-[#0B428A] text-white font-extrabold text-sm transition shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-teal-200" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}