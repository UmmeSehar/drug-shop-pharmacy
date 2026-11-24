import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const quickCategories = [
    "Prescription & Clinical Care",
    "Vitamins & Daily Supplements",
    "Herbal & Wellness Formulas",
    "Skincare & Dermocosmetics",
    "Overstock Medicine Deals",
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white border-b border-emerald-400/20 ${
        scrolled
          ? "bg-[#062320]/90 backdrop-blur-xl shadow-lg py-2.5"
          : "bg-[#062320] py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.png"
            alt="Pharmacy"
            className="h-11 sm:h-13 w-auto object-contain"
          />
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
            Pharmacy
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-bold transition ${
                isActive ? "text-emerald-300" : "text-white hover:text-emerald-200"
              }`
            }
          >
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-sm font-bold text-white hover:text-emerald-200 py-2"
            >
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            {dropdownOpen && (
              <div className="absolute left-0 top-full w-64 rounded-2xl bg-[#09322E] border border-emerald-300/25 shadow-2xl p-2 space-y-1">
                {quickCategories.map((cat) => (
                  <Link
                    key={cat}
                    to="/services"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-50 hover:bg-emerald-500/20 hover:text-emerald-300 transition"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/medicines"
            className={({ isActive }) =>
              `text-sm font-bold transition ${
                isActive ? "text-emerald-300" : "text-white hover:text-emerald-200"
              }`
            }
          >
            Medicines
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-bold transition ${
                isActive ? "text-emerald-300" : "text-white hover:text-emerald-200"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-bold transition ${
                isActive ? "text-emerald-300" : "text-white hover:text-emerald-200"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href="https://wa.me/923241282633?text=Hello%20Pharmacy!%20I%20would%20like%20to%20inquire."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-300/40 text-emerald-200 font-bold text-xs transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" /> WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#051816] font-extrabold text-xs transition"
          >
            Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#062320] border-t border-emerald-400/20 px-5 py-5 space-y-2.5">
          {[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: "Medicines", to: "/medicines" },
            { label: "About", to: "/about" },
            { label: "Contact", to: "/contact" },
          ].map((nav) => (
            <Link
              key={nav.to}
              to={nav.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-bold text-white border-b border-white/10"
            >
              {nav.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}