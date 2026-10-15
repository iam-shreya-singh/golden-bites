'use client';

import { useState } from 'react';
import Image from 'next/image';

const deliveryLocalities = [
  'Harmu Housing Colony',
  'Ashok Nagar',
  'Kadru',
  'Doranda / Hinoo',
  'Lalpur',
  'Morabadi',
  'Kanke Road',
  'Ratu Road',
  'Other Area in Ranchi',
];

const menuItems = [
  {
    id: 'dry-cake',
    name: "Maa's Signature Dry Cake",
    desc: 'Soft, aromatic, made for morning & evening chai. No soggy icings.',
    image: '/images/signature-cake.jpg', // MUST MATCH FILE NAME
  },
  {
    id: 'sattu-ladoo',
    name: 'Desi Roasted Flax Sattu Ladoo',
    desc: 'Pure ghee, roasted chana sattu, flax seeds. Nutritious & traditional.',
    image: '/images/sattu-ladoo.jpg', // MUST MATCH FILE NAME
  },
  {
    id: 'gift-box',
    name: 'Festive & Family Gift Box',
    desc: 'Assorted dry cake slices + sattu ladoos packaged for family visits & puja gifts.',
    image: '/images/gift-box.jpg', // MUST MATCH FILE NAME
  },
];

export default function GoldenBitesLanding() {
  const [custName, setCustName] = useState('');
  const [custArea, setCustArea] = useState(deliveryLocalities[0]);
  const [selectedProduct, setSelectedProduct] = useState(menuItems[0].name);

  const handleWhatsAppRedirect = () => {
    const name = custName.trim() || 'Customer';
    const message =
      `Namaste Golden Bites! 🌸\n\n` +
      `My Name: *${name}*\n` +
      `Delivery Area in Ranchi: *${custArea}*\n` +
      `I want to order: *${selectedProduct}*\n\n` +
      `Please let me know availability and delivery timing. Dhanyawad!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919631572949?text=${encoded}`, '_blank');
  };

  const selectProductAndScroll = (prodName: string) => {
    setSelectedProduct(prodName);
    document.getElementById('quick-order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#EBF0E9] text-[#2D2D2D] p-3 sm:p-6 md:p-10 flex flex-col justify-between font-sans">
      {/* Navigation */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 px-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#1B4332] text-[#F3B55B] font-bold text-2xl rounded-2xl flex items-center justify-center shadow-md">
            GB
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#1B4332] leading-none">GOLDEN BITES</h1>
            <p className="text-xs font-semibold text-[#52796F] tracking-wider uppercase mt-1">Ghar Ka Swad • Harmu, Ranchi</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-[#2D2D2D]">
          <a href="#menu" className="hover:text-[#1B4332] transition">Menu & Specialties</a>
          <a href="#story" className="hover:text-[#1B4332] transition">Our Story</a>
          <a
            href="https://maps.app.goo.gl/RXaNTDx6rei5FewG9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1B4332] transition flex items-center gap-1 text-[#D97706]"
          >
            ★ 5.0 Google Reviews
          </a>
        </nav>

        <button
          onClick={handleWhatsAppRedirect}
          className="bg-[#1B4332] hover:bg-[#143225] text-white px-5 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg transition-all active:scale-95"
        >
          Direct WhatsApp
        </button>
      </header>

      {/* Bento Grid */}
      <main className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
        {/* Card 1: Hero */}
        <section className="lg:col-span-8 bg-[#F4B251] rounded-[36px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[460px] text-[#281806] shadow-md hover:shadow-xl transition-shadow">
          <div className="z-10 relative">
            <div className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wide shadow mb-5">
              <span>100% PURE & HOMEMADE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B251]"></span>
              <span>HARMU, RANCHI</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight uppercase">
              GOLDEN<br /><span className="text-[#203D2A]">BITES!</span>
            </h2>
            <p className="mt-4 text-base md:text-xl font-medium text-[#46280E] max-w-md leading-relaxed">
              Maa ke haath ka swad! Freshly baked, wholesome dry cakes & traditional flax sattu ladoos made with love in Ranchi.
            </p>
          </div>

          <div className="z-10 relative flex flex-wrap items-end justify-between gap-4 mt-8 pt-6 border-t border-[#df9b34]">
            <div className="bg-white/90 backdrop-blur px-4 py-2.5 rounded-2xl shadow-sm border border-white">
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {'★★★★★'}
                <span className="text-[#203D2A] font-bold text-sm ml-1.5">5.0 / 5</span>
              </div>
              <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider mt-0.5">Google Verified Ranchi Baker</p>
            </div>

            <a
              href="#quick-order"
              className="bg-[#1B4332] hover:bg-[#122e22] text-white px-7 py-3.5 rounded-full text-lg font-bold shadow-xl transition-all hover:scale-105"
            >
              Order In Ranchi →
            </a>
          </div>

          {/* Hero Image */}
          <div className="absolute -right-16 md:-right-8 -top-8 md:top-6 w-[280px] sm:w-[360px] md:w-[440px] pointer-events-none z-0">
            <div className="relative w-full aspect-square">
              <Image
                src="/images/hero-cake.jpg" // MUST MATCH FILE NAME
                alt="Freshly baked homemade dry cake in Ranchi"
                fill
                priority
                className="object-cover rounded-full border-[10px] md:border-[14px] border-[#F4B251] shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Card 2: Kitchen Story */}
        <section id="story" className="lg:col-span-4 bg-[#89CFF0] rounded-[36px] p-8 flex flex-col justify-between text-[#0E2C3E] min-h-[280px] shadow-md">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#1B4B68] block mb-1">Our Ranchi Story</span>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight uppercase">Maa's Kitchen, Pure Recipes</h3>
            <p className="text-sm font-medium text-[#1E3A4C] mt-3 leading-normal">
              What started as baking treats for our colony neighbors and family friends in Harmu is now Ranchi's favorite homemade snack stop. No preservatives or shortcuts—just pure home goodness.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#76bee0] flex items-center justify-between">
            <div>
              <span className="block text-xl font-bold text-[#0A2231]">Harmu Colony</span>
              <span className="text-xs font-semibold text-[#1B4B68]">Baking Mon–Sat: 9 AM - 5 PM</span>
            </div>
            <a href="tel:09631572949" className="w-10 h-10 bg-white text-[#0E2C3E] rounded-full flex items-center justify-center font-bold shadow">
              📞
            </a>
          </div>
        </section>

        {/* Card 3: Specialty Highlight */}
        <section className="lg:col-span-4 bg-[#F28E53] rounded-[36px] p-8 flex flex-col justify-between text-[#381602] relative overflow-hidden min-h-[340px] shadow-md">
          <div className="relative z-10">
            <span className="bg-[#203D2A] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Superfood Desi Sweet</span>
            <h3 className="text-4xl font-bold uppercase mt-3 leading-none text-white">Flax Sattu<br /><span className="text-[#381602]">Ladoo</span></h3>
            <p className="text-sm font-semibold text-[#481E05] mt-2 max-w-[210px]">
              Roasted Chana Sattu + Roasted Flaxseeds (Tisi) + Desi Ghee. High protein, fiber-rich, authentic flavor.
            </p>
          </div>

          <div className="absolute right-[-25px] bottom-[-20px] w-48 h-48 sm:w-56 sm:h-56 z-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/sattu-ladoo.jpg" // MUST MATCH FILE NAME
                alt="Nutritious Desi Flax Sattu Ladoo in Ranchi"
                fill
                className="object-cover rounded-full shadow-2xl border-4 border-[#F28E53]"
              />
            </div>
          </div>

          <div className="relative z-10 mt-6">
            <button
              onClick={() => selectProductAndScroll('Desi Flax Sattu Ladoo')}
              className="bg-white hover:bg-gray-50 text-[#381602] text-xs font-extrabold uppercase px-4 py-2.5 rounded-full shadow-md transition-all active:scale-95"
            >
              Order Ladoos →
            </button>
          </div>
        </section>

        {/* Card 4: Menu & Order Form */}
        <section id="menu" className="lg:col-span-8 bg-white rounded-[36px] p-8 md:p-10 text-[#2D2D2D] shadow-md flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#52796F]">Colony Favorites</span>
                <h3 className="text-3xl md:text-4xl font-bold uppercase text-[#1B4332]">Golden Bites Top Menu</h3>
              </div>
              <span className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                Freshly prepared upon pre-order
              </span>
            </div>

            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-stone-50 transition border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden shrink-0 border border-stone-200">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg text-gray-900">{item.name}</h4>
                      <p className="text-xs md:text-sm text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => selectProductAndScroll(item.name)}
                    className="bg-[#1B4332] text-white hover:bg-[#122e22] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition active:scale-95 shrink-0"
                  >
                    <span>Add</span>
                    <span>+</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div id="quick-order" className="mt-8 pt-6 border-t border-gray-100 bg-[#F8FAF7] -mx-4 md:-mx-6 -mb-4 md:-mb-6 p-6 rounded-b-[36px]">
            <h4 className="font-bold text-base text-[#1B4332] mb-3">⚡ Quick Ranchi Order / Inquiry Form</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={custName}
                onChange={(e) => setCustName(e.target.value)}
                placeholder="Your Name (Aapka Naam)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B4332] bg-white"
              />

              <select
                value={custArea}
                onChange={(e) => setCustArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B4332] bg-white"
              >
                {deliveryLocalities.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>

              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B4332] bg-white font-medium"
              >
                {menuItems.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
                <option value="Custom Order / Bulk Party Inquiry">Custom Order / Bulk Party Inquiry</option>
              </select>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-gray-500 font-medium">Clicking dispatches your order directly into WhatsApp with no login required.</p>
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md transition active:scale-95"
              >
                Send Order on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full mt-10 py-6 px-4 border-t border-[#d8e0d6] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div>
          <p className="font-bold text-[#1B4332] text-sm">Golden Bites — Homemade Treats & Traditional Ladoos</p>
          <p>Harmu Housing Colony, Ranchi, Jharkhand 834002 | Mon-Sat, 9:00 AM – 5:00 PM</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://maps.app.goo.gl/RXaNTDx6rei5FewG9" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1B4332] hover:underline">
            View Google Profile ↗
          </a>
          <span>|</span>
          <span className="font-semibold text-gray-700">Phone: +91 96315 72949</span>
        </div>
      </footer>
    </div>
  );
}