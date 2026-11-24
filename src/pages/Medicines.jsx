import React, { useState } from "react";
import { Search, FileText, CheckCircle2, ShoppingBag, MessageCircle } from "lucide-react";

const FALLBACK_MED_IMG =
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80";

const WHATSAPP_NUMBER = "923241282633";

export default function Medicines() {
  const [searchQuery, setSearchQuery] = useState("");

  const medicines = [
    {
      id: 1,
      name: "Daily Multivitamin Capsules",
      prescription: "Routine daily wellness option; follow general label or doctor guidance.",
      advantages: "Helps support everyday energy, immunity, and daily nutritional balance.",
      price: "$18.00",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "Pain & Fever Relief Tablets",
      prescription: "Use as directed on pack or per pharmacist/doctor advice.",
      advantages: "Helps ease everyday headaches, body aches, and general fever comfort.",
      price: "$12.50",
      img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Herbal Throat & Cough Syrup",
      prescription: "Measure dose carefully with dosing cup; consult if symptoms persist.",
      advantages: "Soothes throat irritation and supports comfortable breathing during seasonal shifts.",
      price: "$14.00",
      img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Hydrating Skin Barrier Cream",
      prescription: "For external topical application on clean, dry skin areas.",
      advantages: "Helps calm dry, sensitive skin and keeps everyday moisture locked in.",
      price: "$19.50",
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      name: "Digestive & Gut Care Capsules",
      prescription: "Take with water before or after meals as advised.",
      advantages: "Supports smooth digestion and helps ease everyday stomach heaviness.",
      price: "$16.00",
      img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      name: "Home First-Aid & Wound Box",
      prescription: "General home care kit; seek clinical care for deep wounds.",
      advantages: "Keeps essential bandages, antiseptic care, and basic supplies ready at home.",
      price: "$24.00",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 7,
      name: "Zinc & Vitamin C Defense Pack",
      prescription: "Daily supplement pack; avoid exceeding recommended daily intake.",
      advantages: "Supports seasonal immune defense and everyday cellular recovery.",
      price: "$15.00",
      img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 8,
      name: "Respiratory Relief Nasal Drops",
      prescription: "Use only as directed; avoid prolonged unsupervised use.",
      advantages: "Helps clear nasal comfort and supports easier breathing.",
      price: "$11.00",
      img: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 9,
      name: "Joint & Muscle Comfort Formula",
      prescription: "Follow daily usage instructions or physician guidance.",
      advantages: "Used to ease stiffness and support active daily movement.",
      price: "$22.00",
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 10,
      name: "Pediatric Wellness Syrup",
      prescription: "Dose strictly by child age/weight or pediatrician instruction.",
      advantages: "Gentle daily support formulated for growing children's routine care.",
      price: "$13.50",
      img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 11,
      name: "Omega-3 Daily Softgels",
      prescription: "Take with a meal containing healthy fats for smooth absorption.",
      advantages: "Helps support heart, brain, and general everyday wellness.",
      price: "$21.00",
      img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 12,
      name: "Allergy & Sinus Relief Pack",
      prescription: "Check drowsiness guidance before driving or operating machinery.",
      advantages: "Helps calm seasonal sneezing, runny nose, and mild sinus discomfort.",
      price: "$14.50",
      img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 13,
      name: "Soothing Eye & Vision Drops",
      prescription: "Sterile ophthalmic care; do not touch dropper tip to any surface.",
      advantages: "Refreshes tired eyes from screen time and everyday dryness.",
      price: "$12.00",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 14,
      name: "Sleep & Evening Calm Blend",
      prescription: "Take about 30 minutes before bedtime when wind-down is needed.",
      advantages: "Supports relaxed evenings and restful nighttime sleep routines.",
      price: "$17.50",
      img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 15,
      name: "Travel & Motion Care Kit",
      prescription: "Keep handy for trips; review active ingredients before use.",
      advantages: "Compact essentials for trips, road travel, and sudden discomfort.",
      price: "$19.00",
      img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 16,
      name: "Vitamin D3 & Calcium Tablets",
      prescription: "Follow recommended daily dose or healthcare provider advice.",
      advantages: "Supports bone strength, muscle function, and daily mineral balance.",
      price: "$16.50",
      img: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 17,
      name: "Probiotic Daily Balance",
      prescription: "Store properly as indicated and take consistently each day.",
      advantages: "Helps maintain healthy gut flora and digestive comfort.",
      price: "$23.00",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 18,
      name: "Gentle Antacid Relief Liquid",
      prescription: "Shake well before use; follow label directions between meals.",
      advantages: "Helps relieve everyday acidity, heartburn, and indigestion.",
      price: "$10.50",
      img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 19,
      name: "Soothing Muscle Rub Gel",
      prescription: "Apply a thin layer to intact skin; wash hands after use.",
      advantages: "Provides cooling/soothing comfort after workouts or strain.",
      price: "$13.00",
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 20,
      name: "Iron & B-Complex Support",
      prescription: "Consult a doctor or pharmacist if taking other supplements.",
      advantages: "Supports red blood cell health and helps reduce everyday fatigue.",
      price: "$17.00",
      img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 21,
      name: "Oral Rehydration & Electrolyte Pack",
      prescription: "Mix powder completely with clean water as instructed.",
      advantages: "Helps restore fluids and electrolytes after heat or dehydration.",
      price: "$9.50",
      img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 22,
      name: "Daily Sunscreen & UV Shield",
      prescription: "Apply generously before sun exposure and reapply as needed.",
      advantages: "Protects skin from daily UV rays and supports healthy skin tone.",
      price: "$20.00",
      img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 23,
      name: "Magnesium Night Relax Tablets",
      prescription: "Take as directed on label; consult if on regular medication.",
      advantages: "Supports muscle relaxation and calm evening recovery.",
      price: "$18.50",
      img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 24,
      name: "Herbal Immunity Tea Blend",
      prescription: "Steep in hot water for 5–7 minutes; enjoy warm daily.",
      advantages: "Offers comforting botanical warmth and seasonal wellness support.",
      price: "$11.50",
      img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 25,
      name: "Complete Family Care Bundle",
      prescription: "Review individual item notes inside the bundle before use.",
      advantages: "Combines daily essentials for convenient household readiness.",
      price: "$34.00",
      img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const filteredMedicines = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.advantages.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.prescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGiveOrder = (med) => {
    const text = `Hello Pharmacy Team! I would like to place an order for:\n• Medicine: ${med.name}\n• Price: ${med.price}\n• Prescription Note: ${med.prescription}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-20 bg-[#EEF6FF] text-[#051836] min-h-screen">
      {/* Top Blue Header */}
      <section className="py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-sky-300">
            25 Medicines Lineup
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2">
            Medicines, Prescription & Advantages
          </h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-sm sm:text-base leading-relaxed">
            Browse all 25 medicines with prescription guidance, key advantages, and prices—and tap Give Order to message our team directly on WhatsApp.
          </p>

          {/* Search Input */}
          <div className="relative max-w-md mt-7">
            <Search className="w-4 h-4 text-sky-300 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by medicine name or benefit..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#07214A] border border-sky-300/35 text-sm text-white placeholder:text-blue-200/60 focus:outline-none focus:border-sky-300"
            />
          </div>
        </div>
      </section>

      {/* 25 Medicines Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="rounded-3xl bg-[#F4F9FF] border border-blue-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <img
                      src={med.img}
                      alt={med.name}
                      onError={(e) => {
                        if (e.currentTarget.src !== FALLBACK_MED_IMG) {
                          e.currentTarget.src = FALLBACK_MED_IMG;
                        }
                      }}
                      className="w-full h-52 object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#051836]/90 text-sky-200 text-xs font-extrabold">
                      #{med.id}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-xl font-extrabold text-[#051836] leading-snug">
                        {med.name}
                      </h2>
                      <span className="px-3 py-1 rounded-full bg-[#DCEEFF] text-[#051836] font-extrabold text-sm shrink-0">
                        {med.price}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <FileText className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-1" />
                      <span>
                        <strong className="text-[#051836]">Prescription:</strong>{" "}
                        {med.prescription}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-1" />
                      <span>
                        <strong className="text-[#051836]">Advantages:</strong>{" "}
                        {med.advantages}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tea Green "Give Order" Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => handleGiveOrder(med)}
                    style={{ backgroundColor: "#5E9E8B" }}
                    className="w-full py-3.5 px-5 rounded-xl text-white font-extrabold text-sm shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Give Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom WhatsApp Section */}
      <section className="py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Need Direct Help With Your Medicine Order?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-blue-100">
              Tap the WhatsApp button to message our team directly for quick assistance and order confirmation.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello Pharmacy Team! I would like to connect regarding medicine orders."
            )}`}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: "#5E9E8B" }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-extrabold text-sm sm:text-base shadow-xl hover:opacity-95 transition shrink-0"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Our Team
          </a>
        </div>
      </section>
    </div>
  );
}