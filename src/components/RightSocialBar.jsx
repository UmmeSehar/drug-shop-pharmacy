import React, { useState } from "react";
import { X, Send } from "lucide-react";

export default function RightSocialBar() {
  const [waOpen, setWaOpen] = useState(false);

  const waLogo = (
    <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current shrink-0">
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.71 6.404L3.1 29.02l6.79-1.78a12.74 12.74 0 0 0 6.114 1.56h.005c7.058 0 12.796-5.74 12.796-12.8 0-3.42-1.332-6.635-3.75-9.053A12.715 12.715 0 0 0 16.004 3.2zm0 23.437h-.004a10.61 10.61 0 0 1-5.41-1.482l-.388-.23-4.03 1.057 1.076-3.928-.253-.403a10.596 10.596 0 0 1-1.627-5.65c0-5.864 4.772-10.636 10.64-10.636 2.84 0 5.51 1.107 7.518 3.116a10.566 10.566 0 0 1 3.114 7.523c0 5.865-4.773 10.633-10.636 10.633zm5.834-7.966c-.32-.16-1.892-.934-2.185-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.012 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.778-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.54-.72-.55h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.307c.16.213 2.256 3.445 5.466 4.83.763.33 1.36.527 1.824.674.766.244 1.464.21 2.015.127.615-.092 1.892-.773 2.159-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
    </svg>
  );

  const socialItems = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/arxolontechnologies/",
      bg: "bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600",
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61596798540089",
      bg: "bg-[#1877F2]",
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arxolon-technologies-430625451",
      bg: "bg-[#0A66C2]",
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-2">
      <div className="relative">
        <button
          type="button"
          onClick={() => setWaOpen(!waOpen)}
          aria-label="WhatsApp"
          className="group h-11 w-12 hover:w-36 rounded-l-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-start pl-3.5 shadow-lg transition-all duration-300 overflow-hidden"
        >
          {waLogo}
          <span className="ml-2.5 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            WhatsApp
          </span>
        </button>

        {waOpen && (
          <div className="fixed right-14 top-1/2 -translate-y-1/2 w-72 sm:w-80 rounded-2xl bg-[#0A2E2A] text-white shadow-2xl border border-emerald-300/35 overflow-hidden">
            <div className="bg-emerald-500 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {waLogo}
                <span className="font-extrabold text-sm">Pharmacy WhatsApp</span>
              </div>
              <button
                type="button"
                onClick={() => setWaOpen(false)}
                aria-label="Close WhatsApp Box"
                className="p-1 rounded-full hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <p className="text-xs text-emerald-100 leading-relaxed">
                Chat directly on WhatsApp (+92 324 1282633) for medicine availability, orders, or sample inquiries.
              </p>
              <a
                href="https://wa.me/923241282633?text=Hello%20Pharmacy!%20I%20would%20like%20to%20chat%20with%20you."
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <Send className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>

      {socialItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
          className={`group h-11 w-12 hover:w-36 rounded-l-full ${item.bg} text-white flex items-center justify-start pl-3.5 shadow-lg transition-all duration-300 overflow-hidden`}
        >
          {item.svg}
          <span className="ml-2.5 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
}