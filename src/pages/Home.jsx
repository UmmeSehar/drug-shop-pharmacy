import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plus,
  Minus,
  Star,
  Clock,
  ShieldCheck,
  HeartHandshake,
  MessageCircle,
} from "lucide-react";

const FALLBACK_MED =
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80";

const FALLBACK_PHARMACY =
  "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80";

function BeWellLogo({ className = "w-9 h-9" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Be Well Pharmacy Logo"
    >
      {/* Left Green Leaf */}
      <path
        d="M16 14C42 14 57 32 55 58C38 56 22 42 16 14Z"
        fill="#14803C"
      />
      <path
        d="M27 25C36 31 42 39 46 49C36 45 30 37 27 25Z"
        fill="#0D5C2B"
      />
      {/* Right Green Leaf */}
      <path
        d="M108 6C82 10 66 28 65 56C83 54 99 38 108 6Z"
        fill="#14803C"
      />
      {/* Pestle */}
      <path
        d="M74 56L84 34C85 31 89 30 92 31C95 33 96 37 94 40L84 58L74 56Z"
        fill="#F39200"
      />
      <circle cx="91" cy="34" r="5" fill="#F39200" />
      {/* Mortar Bowl + Wave */}
      <path
        d="M24 62H102L96 71C93 75 88 77 83 77H68L59 86L56 76H36C31 76 26 72 24 62Z"
        fill="#F39200"
      />
      <path
        d="M29 77C39 87 56 91 74 87L68 93C53 96 38 92 29 77Z"
        fill="#F39200"
      />
    </svg>
  );
}

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Share Prescription",
      desc: "Send your prescription or medicine list in a simple message without any confusion.",
    },
    {
      num: "02",
      title: "Verify & Prepare",
      desc: "Each medicine is checked carefully for clean packaging and proper handling.",
    },
    {
      num: "03",
      title: "Confirm Schedule",
      desc: "Choose a convenient delivery slot that matches your daily routine.",
    },
    {
      num: "04",
      title: "Safe Doorstep Drop",
      desc: "Your medicines arrive neatly packed right at your home or workplace.",
    },
    {
      num: "05",
      title: "Timely Refill Care",
      desc: "Stay reminded for regular monthly medicines so you never run out unexpectedly.",
    },
  ];

  // Just 6 medicine items as requested
  const availableMedicines = [
    {
      name: "Daily Multivitamin Blister Pack",
      useFor: "Helps support everyday energy, immunity, and daily nutritional balance.",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1100&q=80",
    },
    {
      name: "Pain & Fever Relief Tablets",
      useFor: "Used for everyday headaches, body aches, and general fever comfort.",
      img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1100&q=80",
    },
    {
      name: "Herbal Throat & Cough Syrup",
      useFor: "Soothes throat irritation and supports comfortable breathing during seasonal changes.",
      img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1100&q=80",
    },
    {
      name: "Hydrating Skin Barrier Cream",
      useFor: "Helps calm dry, sensitive skin and keeps everyday moisture locked in.",
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1100&q=80",
    },
    {
      name: "Digestive & Gut Care Capsules",
      useFor: "Supports smooth digestion and helps ease everyday stomach heaviness.",
      img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=1100&q=80",
    },
    {
      name: "Home First-Aid & Wound Box",
      useFor: "Keeps essential bandages, antiseptic care, and basic supplies ready at home.",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1100&q=80",
    },
  ];

  const overstockItems = [
    {
      name: "Daily Vitamin C & Zinc",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Pain & Fever Relief",
      img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Herbal Cough Syrup",
      img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Skin Barrier Cream",
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Gut Care Capsules",
      img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "First-Aid Care Box",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Omega-3 Softgels",
      img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Travel Care Kit",
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const reviews = [
    {
      name: "Dr. Farhan Raza",
      role: "Clinic & Pharmacy Partner",
      quote: "The clean step flow and large medicine sections make the Be Well Pharmacy experience easy to understand.",
    },
    {
      name: "Sadia Tariq",
      role: "Retail Wellness Consultant",
      quote: "The white brick wall motion showcase and clear medicine descriptions give a strong modern look.",
    },
    {
      name: "Kamran Siddiqui",
      role: "Healthcare Operations",
      quote: "Simple layout, readable colors, and direct WhatsApp access make inquiries effortless.",
    },
  ];

  const faqs = [
    {
      q: "How can I place an order or ask about a specific medicine?",
      a: "You can reach out directly via WhatsApp or use the Contact page to share what you are looking for.",
    },
    {
      q: "Are prices and stock counts displayed on the medicine cards?",
      a: "No, each card focuses on the medicine name and what it is commonly used for.",
    },
    {
      q: "Why does each medicine item appear large on its own row?",
      a: "Large visuals and clear descriptions let visitors examine one medicine item at a time comfortably.",
    },
    {
      q: "How do the 5 steps work when clicked?",
      a: "Clicking any step highlights it with a fresh color so you can follow the process step by step.",
    },
    {
      q: "What happens in the Overstock section?",
      a: "Medicine visuals move smoothly from right to left across a white brick wall backdrop.",
    },
    {
      q: "Do you offer guidance and support for everyday questions?",
      a: "Yes, we provide 24/7 support, quality care, and free guidance for general questions.",
    },
    {
      q: "Can I customize the Be Well Pharmacy brand name and logo for a client?",
      a: "Yes, the sample uses Be Well Pharmacy and the custom leaf-and-mortar mark so you can present a clean client sample right away.",
    },
    {
      q: "Does this page work smoothly on mobile screens?",
      a: "Yes, all sections adapt cleanly across phones, tablets, and desktops.",
    },
    {
      q: "How do I get quick help before the footer?",
      a: "Right above the footer, you can tap the WhatsApp button to start a conversation immediately.",
    },
  ];

  const handleMedError = (e) => {
    if (e.currentTarget.src !== FALLBACK_MED) {
      e.currentTarget.src = FALLBACK_MED;
    }
  };

  return (
    <div className="bg-white text-[#051836]">
      {/* 1. HERO SECTION (Light Tea-Green Tint Like Footer + Clear Visible Background Photo) */}
      <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-[#E7F6F2] border-b border-teal-200/80">
        <img
          src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1600&q=80"
          alt="Be Well Pharmacy Care Showcase"
          onError={(e) => {
            if (e.currentTarget.src !== FALLBACK_PHARMACY) {
              e.currentTarget.src = FALLBACK_PHARMACY;
            }
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-85 slowmo-3d-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8F7F3]/85 via-[#DFF2EC]/60 to-[#D2ECE4]/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl bg-[#EBF7F4]/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-teal-300/70 shadow-xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/95 border border-teal-200 text-black text-xs sm:text-sm font-extrabold mb-4 shadow-sm">
              <BeWellLogo className="w-7 h-7 shrink-0" />
              <span>Be Well Pharmacy • Care Sample</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black leading-tight text-black">
              Everyday Medicines & Care Made Simple.
            </h1>
            <p className="mt-4 text-base sm:text-lg font-bold text-black/90 leading-relaxed">
              Welcome to Be Well Pharmacy—explore clear medicine uses, interactive steps, moving overstock visuals, and easy ways to connect with our team.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#available-medicines"
                className="px-7 py-3.5 rounded-full bg-[#146C5E] hover:bg-[#0F5449] text-white font-extrabold text-sm sm:text-base transition shadow-md"
              >
                Available Medicines
              </a>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-[#E7F6F2] text-black font-extrabold text-sm sm:text-base border border-teal-300 transition"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 5 MOVABLE STEPS (Click to Change Color) */}
      <section className="py-20 bg-[#EEF6FF] border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] mt-1">
              5 Simple Steps — Click Any Step
            </h2>
            <p className="text-slate-700 mt-2 text-sm sm:text-base">
              Tap or click on any step card below to highlight it and change its active color.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((st, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left rounded-2xl p-6 border transition-all duration-300 slowmo-3d-card ${
                    isSelected
                      ? "bg-[#0B5ED7] text-white border-[#084298] shadow-xl scale-[1.02]"
                      : "bg-white text-[#051836] border-blue-200 hover:border-[#0B5ED7] shadow-sm"
                  }`}
                >
                  <span
                    className={`text-2xl font-extrabold block mb-2 ${
                      isSelected ? "text-sky-200" : "text-[#0B5ED7]"
                    }`}
                  >
                    {st.num}
                  </span>
                  <h3 className="text-lg font-extrabold mb-2">{st.title}</h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isSelected ? "text-blue-50" : "text-slate-700"
                    }`}
                  >
                    {st.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. AVAILABLE MEDICINES (6 Items — Large Single Focus Row With Name & Benefit/Use) */}
      <section id="available-medicines" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Medicine Guide
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#051836] mt-2">
              Available Medicines
            </h2>
            <p className="text-slate-700 mt-3 text-sm sm:text-base leading-relaxed">
              6 medicine and care items displayed one at a time in a large format with what each item is used for.
            </p>
          </div>

          <div className="space-y-16">
            {availableMedicines.map((med, idx) => (
              <div
                key={med.name}
                className="rounded-3xl bg-[#F4F9FF] border border-blue-200 p-6 sm:p-10 shadow-md grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7">
                  <img
                    src={med.img}
                    alt={med.name}
                    onError={handleMedError}
                    className="w-full h-72 sm:h-96 lg:h-[430px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#DCEEFF] text-[#082A5E] text-xs font-extrabold uppercase tracking-wider">
                    Medicine {idx + 1} of {availableMedicines.length}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#051836] leading-snug">
                    {med.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {med.useFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICE HIGHLIGHTS (24/7 Support, Quality, Free Guidance) */}
      <section className="py-20 bg-[#DCEEFF] text-[#051836] border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-7">
          <div className="bg-white rounded-3xl p-7 border border-blue-200 shadow-sm">
            <Clock className="w-8 h-8 text-[#0B5ED7] mb-4" />
            <h3 className="text-xl font-extrabold text-[#051836] mb-2">24/7 Support</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Round-the-clock support so you can reach out whenever you have questions or need assistance.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-7 border border-blue-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#0B5ED7] mb-4" />
            <h3 className="text-xl font-extrabold text-[#051836] mb-2">Trusted Quality</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Carefully checked items and clean presentation focused on everyday reliability.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-7 border border-blue-200 shadow-sm">
            <HeartHandshake className="w-8 h-8 text-[#0B5ED7] mb-4" />
            <h3 className="text-xl font-extrabold text-[#051836] mb-2">Free Guidance</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Friendly, easy-to-follow guidance to help you understand general care options clearly.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OVERSTOCK SHOWCASE (White Brick Wall + Right-to-Left Auto Motion) */}
      <section className="py-24 overstock-wall text-[#051836] border-b border-blue-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#051836] tracking-tight">
              Overstock
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium">
              Medicine visuals moving continuously from right to left across our wall showcase.
            </p>
          </div>

          <div className="overflow-hidden py-4">
            <div className="overstock-track gap-6 px-2">
              {[...overstockItems, ...overstockItems].map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="w-64 sm:w-72 shrink-0 rounded-2xl bg-white border border-blue-200 shadow-lg overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    onError={handleMedError}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#051836] truncate">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT REVIEWS SECTION */}
      <section className="py-20 bg-white text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Client Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] mt-1">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {reviews.map((rev) => (
              <div
                key={rev.name}
                className="rounded-3xl bg-[#F4F9FF] border border-blue-200 p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    "{rev.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-extrabold text-[#051836] text-base">{rev.name}</p>
                  <p className="text-xs font-bold text-[#0B5ED7]">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 9 QUESTIONS (FAQ SECTION) */}
      <section className="py-20 bg-[#EEF6FF] text-[#051836]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <div
                key={item.q}
                className="rounded-2xl bg-white border border-blue-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#051836]"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-sm text-slate-700 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LARGE PHARMACY PEOPLE BANNER ABOVE FOOTER + WHATSAPP BUTTON */}
      <section className="relative py-24 bg-[#071E42] text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1600&q=80"
          alt="People Getting Medicines at Be Well Pharmacy"
          onError={(e) => {
            if (e.currentTarget.src !== FALLBACK_PHARMACY) {
              e.currentTarget.src = FALLBACK_PHARMACY;
            }
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051836]/90 via-[#082A5E]/80 to-[#051836]/85" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Need Help Getting Any Medicine or Placing an Order?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            For getting anything or placing an order with Be Well Pharmacy, contact us directly on WhatsApp and our team will assist you right away.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/923241282633?text=Hello%20Be%20Well%20Pharmacy!%20I%20would%20like%20to%20order%20or%20ask%20about%20medicines."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base shadow-xl transition"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold text-sm sm:text-base transition"
            >
              Send Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}