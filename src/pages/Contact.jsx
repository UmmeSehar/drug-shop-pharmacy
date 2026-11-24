import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Prescription & Refill Care",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const isValidPhone = (rawPhone) => {
    const digits = rawPhone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) return false;
    if (/^(\d)\1+$/.test(digits)) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!isValidPhone(form.phone)) {
      setStatus({
        type: "error",
        text: "Please enter a valid phone or WhatsApp number.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info.arxolontech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Pharmacy Inquiry - ${form.service} (${form.name})`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Service: form.service,
          Message: form.message,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus({
          type: "success",
          text: "Thank you! Your message has been sent to info.arxolontech@gmail.com.",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "Prescription & Refill Care",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          text: "Could not send message right now. Please try again or contact us on WhatsApp.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Get In Touch Card */}
          <div className="lg:col-span-5 bg-[#051836] text-white rounded-3xl p-7 sm:p-8 border border-sky-300/20 shadow-xl space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Get In Touch</h1>
              <p className="text-sm text-blue-100 mt-2 leading-relaxed">
                Have a question about medicines, home delivery, refills, or pharmacy services? Send us your details anytime.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Email Us</p>
                  <a
                    href="mailto:info.arxolontech@gmail.com"
                    className="text-blue-200 hover:text-sky-300 break-all"
                  >
                    info.arxolontech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Location</p>
                  <p className="text-blue-200">Model Town Link Road, Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Quick Response</p>
                  <p className="text-blue-200">Direct WhatsApp & Email support available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Send Us a Message Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-blue-200 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-1">
              Send Us a Message
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Share your requirements in simple words and our team will reply soon.
            </p>

            {status.text && (
              <div
                className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm font-bold ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                )}
                <span>{status.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#0B5ED7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#0B5ED7] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+92 324 1282633"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#0B5ED7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                    Select Service *
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:border-[#0B5ED7] focus:outline-none"
                  >
                    <option>Prescription & Refill Care</option>
                    <option>Doorstep Medicine Delivery</option>
                    <option>Vitamins & Daily Wellness</option>
                    <option>Herbal & Soothing Care</option>
                    <option>Skin & First-Aid Essentials</option>
                    <option>Family & Senior Care Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                  Project Details *
                </label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us briefly what you need..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#0B5ED7] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#051836] hover:bg-[#082A5E] text-white font-extrabold text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-md"
              >
                {loading ? "Sending Message..." : "Send Inquiry"}
                <Send className="w-4 h-4 text-sky-300" />
              </button>

              <a
                href="https://wa.me/923241282633?text=Hello%20Pharmacy!%20I%20would%20like%20to%20chat%20with%20you%20directly."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}