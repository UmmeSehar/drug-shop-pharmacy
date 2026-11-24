import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Lightbulb,
  Award,
  Users,
  TrendingUp,
  ShieldCheck,
  Globe,
  Headphones,
  Cpu,
  Sparkles,
  MessageCircle,
  Wallet,
  CalendarCheck,
  Truck,
} from "lucide-react";

const FALLBACK_PHARMACY =
  "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80";

const FALLBACK_MED =
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80";

export default function About() {
  const handleImgError = (e, fallback = FALLBACK_PHARMACY) => {
    if (e.currentTarget.src !== fallback) {
      e.currentTarget.src = fallback;
    }
  };

  const careHighlights = [
    "24/7 Friendly Support",
    "Fast Home Delivery",
    "Clear & Caring Guidance",
    "Timely Refill Reminders",
    "Neat & Safe Packaging",
    "Budget-Conscious Care",
    "Family & Everyday Support",
    "Direct WhatsApp Assistance",
    "Honest & Reliable Service",
  ];

  const pillars = [
    {
      title: "Clear & Simple Process",
      desc: "We keep communication straightforward and friendly so you always know what to expect.",
    },
    {
      title: "Caring Home Delivery",
      desc: "Everyday essentials and care packs are handled neatly and brought right to your door.",
    },
    {
      title: "Reliable Ongoing Support",
      desc: "Our team stays available to answer general questions and support your routine needs.",
    },
  ];

  const coreValues = [
    {
      icon: <Truck className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Home Delivery",
      desc: "Convenient doorstep delivery that saves you time and helps you avoid waiting in long queues.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#0B5ED7]" />,
      title: "24/7 Support",
      desc: "Helpful assistance whenever you need quick answers, order updates, or guidance.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Caring Service",
      desc: "We treat every visitor and family like a neighbor—with warmth, patience, and genuine care.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Everyday Reliability",
      desc: "Consistent service you can count on for daily wellness routines and household care.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Trust & Transparency",
      desc: "Clear communication, honest commitments, and zero confusion at every step.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Helpful Guidance",
      desc: "Easy-to-understand information that makes everyday pharmacy care simple for everyone.",
    },
  ];

  const partnerReasons = [
    {
      icon: <Headphones className="w-7 h-7 text-[#051836]" />,
      title: "24/7 Support",
      desc: "Always-on help via WhatsApp and message whenever you need guidance or updates.",
    },
    {
      icon: <Truck className="w-7 h-7 text-[#051836]" />,
      title: "Home Delivery",
      desc: "Neatly packed orders delivered smoothly to your home or workplace.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-[#051836]" />,
      title: "Modern Experience",
      desc: "Clean, fast, and stress-free ordering designed around busy everyday lives.",
    },
    {
      icon: <Award className="w-7 h-7 text-[#051836]" />,
      title: "Caring Standards",
      desc: "Focused on kindness, clarity, and dependable service every single day.",
    },
  ];

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      {/* 1. TOP HERO & STATS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-[#F0F7FF] to-[#DCEEFF] text-[#051836] border-b border-blue-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B5ED7]/10 border border-[#0B5ED7]/25 text-[#0B5ED7] text-xs sm:text-sm font-extrabold mb-5">
            <Sparkles className="w-4 h-4" /> Caring Pharmacy & Everyday Support
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#051836] tracking-tight leading-tight">
            About <span className="text-[#0B5ED7]">Pharmacy Care</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-extrabold text-[#051836]">Pharmacy Care</span>, we bring together{" "}
            <span className="font-bold text-[#0B5ED7]">caring support, home delivery, and everyday guidance</span>. Based in{" "}
            <span className="font-extrabold text-[#051836]">Lahore, Pakistan</span>, we focus on making pharmacy care friendly, clear, and convenient for families and individuals.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-7 border border-blue-200/90 shadow-md">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">24/7</p>
              <p className="text-sm font-bold text-slate-600 mt-2">
                Friendly Support & Guidance
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-blue-200/90 shadow-md">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">Fast</p>
              <p className="text-sm font-bold text-slate-600 mt-2">
                Convenient Home Delivery
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-blue-200/90 shadow-md">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">100%</p>
              <p className="text-sm font-bold text-slate-600 mt-2">
                Caring & Customer-First Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY, MISSION & LONG-TERM TRUST WITH ATTRACTIVE PHARMACY IMAGES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-sm">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-3">
              A New Kind of Caring Pharmacy
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
              We believe pharmacy care should feel welcoming, calm, and easy—never rushed or confusing. With home delivery and friendly support, getting everyday care fits naturally into your day.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              From daily wellness items to helpful guidance, we focus on comfort, clarity, and dependable follow-through.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80"
              alt="Modern Pharmacy Interior"
              onError={(e) => handleImgError(e, FALLBACK_PHARMACY)}
              className="w-full h-64 sm:h-72 object-cover rounded-xl slowmo-3d-card"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#082A5E] text-white rounded-2xl p-6 sm:p-8 border border-sky-300/20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-300 mb-3">
              Home Delivery & Everyday Comfort
            </h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Whether you are at home with family or managing a busy schedule, our doorstep delivery and 24/7 support help keep your routine simple and worry-free.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
              alt="Daily Wellness & Capsule Care"
              onError={(e) => handleImgError(e, FALLBACK_MED)}
              className="w-full h-64 sm:h-72 object-cover rounded-xl slowmo-3d-card"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#CFE6FF] text-[#051836] rounded-2xl p-6 sm:p-8 border border-blue-300">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80"
              alt="Pharmacy Care & Trust"
              onError={(e) => handleImgError(e, FALLBACK_MED)}
              className="w-full h-64 sm:h-72 object-cover rounded-xl slowmo-3d-card"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-3">
              Long-Term Trust & Positive Care
            </h2>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-4">
              We build lasting trust through attentive support, neat home delivery, and clear communication whenever you reach out.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-bold text-[#082A5E]">
              {careHighlights.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm"
            >
              <h3 className="text-lg font-extrabold text-[#051836] mb-2">{p.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. WHO WE ARE / CARING SERVICE SECTION */}
      <section className="py-20 bg-white text-[#051836] border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-md bg-[#DCEEFF] p-2">
            <img
              src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1000&q=80"
              alt="Friendly Pharmacy Guidance"
              onError={(e) => handleImgError(e, FALLBACK_PHARMACY)}
              className="w-full h-72 sm:h-80 object-cover rounded-xl slowmo-3d-card"
            />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] mt-2 mb-4 leading-tight">
              More Caring. Less Waiting. Always Helpful.
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We focus on friendly service, clear answers, and smooth home delivery so people feel supported rather than rushed.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Whether you need quick help over WhatsApp or want to explore everyday wellness options, our team is ready to assist.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#082A5E] hover:bg-[#0B428A] text-white font-extrabold text-sm transition shadow-md"
            >
              Get Started <ArrowRight className="w-4 h-4 text-sky-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. OUR MISSION & OUR VISION CARDS */}
      <section className="py-20 bg-[#DCEEFF] text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#DCEEFF] flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-[#0B5ED7]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#051836] mb-3">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              To make everyday pharmacy care simpler, kinder, and more accessible with 24/7 support, clear guidance, and convenient home delivery.
            </p>
          </div>

          <div className="bg-[#082A5E] text-white rounded-2xl p-8 border border-sky-300/20 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-sky-400/15 border border-sky-300/30 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-sky-300" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">Our Vision</h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              To be a trusted, community-focused pharmacy experience known for warmth, reliability, and stress-free care for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OUR CORE VALUES */}
      <section className="py-20 bg-white text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836]">
              Our Core <span className="text-[#0B5ED7]">Values</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Positive habits and caring standards that guide how we serve every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-[#F1F5F9] hover:bg-[#DCEEFF]/70 transition rounded-2xl p-7 border border-blue-200 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center mb-4 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-lg font-extrabold text-[#051836] mb-2">{val.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY PARTNER WITH US */}
      <section className="py-20 bg-gradient-to-br from-[#051836] via-[#09295B] to-[#0E3A7A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/15 border border-sky-300/30 text-sky-200 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" /> Caring & Dependable
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Why <span className="text-sky-300">Choose Us?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-100">
              Supportive care, home delivery, and clear communication built around you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerReasons.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 border border-sky-300/20 rounded-2xl p-7 text-center flex flex-col items-center hover:border-sky-300 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-400 flex items-center justify-center mb-5 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRUST & COMMITMENT SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#DCEEFF] via-[#EBF4FF] to-white text-[#051836] border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-blue-200 shadow-xl p-8 sm:p-12 lg:p-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B5ED7]/10 border border-[#0B5ED7]/25 text-[#0B5ED7] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" /> Our Promise
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#051836] leading-tight">
                We Fulfill Every <span className="text-[#0B5ED7]">Commitment</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                Tailored to your <span className="font-bold text-[#051836]">requirements and budget</span>—we focus on honest communication, dependable home delivery, and caring support without hidden surprises.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-200/80">
                <Wallet className="w-7 h-7 text-[#0B5ED7] mb-3" />
                <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">
                  Budget-Friendly Care
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Clear, practical options that respect your budget and everyday household needs.
                </p>
              </div>

              <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-200/80">
                <CheckCircle2 className="w-7 h-7 text-[#0B5ED7] mb-3" />
                <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">
                  Attentive Requirement Care
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Every detail is checked carefully so your experience stays smooth and reliable.
                </p>
              </div>

              <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-200/80">
                <CalendarCheck className="w-7 h-7 text-[#0B5ED7] mb-3" />
                <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">
                  Timely & Ongoing Support
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  24/7 support and punctual delivery so you always feel looked after.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#051836]">
                  Have a question or want to connect with us?
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Reach out directly via WhatsApp or the Contact page for helpful assistance.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                <a
                  href="https://wa.me/923241282633?text=Hello%20Pharmacy!%20I%20would%20like%20to%20chat%20with%20your%20team."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B5ED7] hover:bg-[#051836] text-white font-extrabold text-sm shadow-md transition"
                >
                  Go to Contact <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}