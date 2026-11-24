import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hello%20${SITE_CONFIG.pharmacyName}!%20I%20would%20like%20to%20ask%20about%20medicines%20and%20delivery.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden">
          <div className="bg-pharmaDark text-white p-4 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm">{SITE_CONFIG.pharmacyName} Care Desk</h4>
              <p className="text-xs text-emerald-200">Online • Replies in minutes</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-emerald-200 hover:text-white"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 bg-pharmaSoft/60 text-sm text-slate-700">
            <div className="bg-white p-3.5 rounded-xl shadow-sm border border-emerald-100">
              Hi there! Need help finding a medicine or uploading your prescription? Chat directly with our pharmacist on WhatsApp.
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 rounded-xl shadow-md transition"
            >
              <Send className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold px-5 py-3.5 rounded-full shadow-xl transition"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-sm">Ask Pharmacist</span>
      </button>
    </div>
  );
}