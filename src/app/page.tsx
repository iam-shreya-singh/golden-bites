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
    name: "Signature Dry Cakes",
    desc: 'Soft, spongey and scrumptious. Available in 450gms, 1kg.',
    image: '/signature.jpg',
  },
  {
    id: 'sattu-ladoo',
    name: 'Desi Flax Sattu Ladoo',
    desc: 'Handcrafted with pure gud and desi ghee. Available per-gram.',
    image: '/flaxsattuladdoo.png', 
  },

  {
    id: 'nutty-treats',
    name: 'Nutty Date & Chocolate Treats',
    desc: 'Wholesome dates blended with cashews and almonds, topped with a rich dark chocolate coating and crunchy nuts.',
    image: '/nutty-treats.jpg', 
  },
  {
    id: 'dark-chocolate',
    name: 'Homemade Dark Chocolate Bar',
    desc: 'Rich, velvety dark chocolate handcrafted with premium cocoa. Pure and indulgent.',
    image: '/dark-chocolate.jpg', 
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
    <header className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 px-1 sm:px-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-full overflow-hidden shadow-md border-2 border-[#1B4332] bg-white shrink-0">
            <Image src="/logo2.png" alt="Golden Bites Logo" fill className="object-contain p-0.5" />
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-[#1B4332] leading-none">GOLDEN BITES</h1>
            <p className="text-[9px] sm:text-xs font-semibold text-[#52796F] tracking-wider uppercase mt-1">
              Ghar Ka Swad <span className="hidden sm:inline">• Harmu, Ranchi</span>
            </p>
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
          className="bg-[#1B4332] hover:bg-[#143225] text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg transition-all active:scale-95 shrink-0"
        >
          <span className="hidden sm:inline">Direct</span> WhatsApp
        </button>
      </header>

      {/* Bento Grid */}
      <main className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
        
        {/* Card 1: Hero */}
        <section className="lg:col-span-8 bg-[#F4B251] rounded-[36px] p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[400px] sm:min-h-[460px] text-[#281806] shadow-md hover:shadow-xl transition-shadow">
          <div className="z-10 relative">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 bg-[#1B4332] text-white px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wide shadow mb-4 sm:mb-5">
              <span>100% PURE & HOMEMADE</span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#F4B251]"></span>
              <span>RANCHI</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tight uppercase relative z-20">
              GOLDEN<br /><span className="text-[#203D2A]">BITES!</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-xl font-medium text-[#46280E] max-w-[240px] sm:max-w-md leading-relaxed relative z-20">
              Experience authentic taste and premium quality! Freshly baked dry cakes & handcrafted ladoos made to order.
            </p>
          </div>

          <div className="z-10 relative flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-end justify-between gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#df9b34]/50 sm:border-[#df9b34]">
            
            {/* CLICKABLE GOOGLE BADGE */}
            <a href="https://maps.app.goo.gl/RXaNTDx6rei5FewG9" target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl shadow-sm border border-white hover:scale-105 transition-transform flex flex-col justify-center">
              <div className="flex items-center gap-1 text-[#F59E0B]">
                <span className="text-sm sm:text-base">★★★★★</span>
                <span className="text-[#203D2A] font-bold text-xs sm:text-sm ml-1">5.0 / 5</span>
              </div>
              <p className="text-[9px] sm:text-[11px] font-bold text-gray-600 uppercase tracking-wider mt-0.5">Google Verified Baker</p>
            </a>

            <a
              href="#quick-order"
              className="bg-[#1B4332] hover:bg-[rgb(18,46,34)] text-white w-full sm:w-auto text-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-lg font-bold shadow-xl transition-all hover:scale-105"
            >
              Order In Ranchi →
            </a>
          </div>

          {/* Hero Image - Adjusted for Mobile */}
          <div className="absolute -right-20 top-12 sm:-right-8 sm:-top-8 md:top-6 w-[220px] sm:w-[360px] md:w-[440px] pointer-events-none z-0 opacity-40 sm:opacity-100">
            <div className="relative w-full aspect-square">
            <Image
              src="/logo2.png" 
              alt="Freshly baked homemade dry cake in Ranchi"
              fill
              priority
              sizes="(max-width: 640px) 220px, (max-width: 768px) 360px, 440px"
              className="object-cover rounded-full border-[6px] sm:border-[10px] md:border-[14px] border-[#F4B251] shadow-2xl"
            />
            </div>
          </div>
        </section>
        {/* Card 2: Kitchen Story */}
        <section id="story" className="lg:col-span-4 bg-[#C8D5B9] rounded-[36px] p-8 flex flex-col justify-between text-[#203D2A] min-h-[280px] shadow-md">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#3B5945] block mb-1">Our Ranchi Story</span>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight uppercase">Baked by a Mother-Daughter Duo</h3>
            <p className="text-sm font-medium text-[#203D2A] mt-3 leading-normal">
              Perfect for daily tea-time, family gatherings, or corporate gifting! All our treats are made to order ensuring maximum freshness. We are constantly experimenting, so keep an eye out for new items being added to the menu soon!
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#A8BCA1] flex items-center justify-between">
            <div>
              <span className="block text-xl font-bold text-[#1B4332]">Harmu Colony</span>
              <span className="text-xs font-semibold text-[#3B5945]">Baking Mon–Sat: 9 AM - 5 PM</span>
            </div>
            <a href="tel:09631572949" className="w-10 h-10 bg-white text-[#1B4332] rounded-full flex items-center justify-center font-bold shadow">
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
              Roasted Chana Sattu + Roasted Flaxseeds (Tisi). Made purely in Gud (Jaggery) and Desi Ghee. High protein & authentic flavor!
            </p>
          </div>
          
          {/* BULLETPROOF IMAGE CONTAINER */}
          <div className="absolute right-[-15px] bottom-[-15px] w-48 h-48 sm:w-56 sm:h-56 z-0">
            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-[#F28E53] shadow-2xl bg-[#D97706]">
              <Image
                src="/flaxsattuladdoo.png" 
                alt="Nutritious Desi Flax Sattu Protein Laddoo in Ranchi"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover object-center"
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
                      <Image src={item.image} alt={item.name} fill sizes="64px" className="object-cover object-center" />
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

          {/* Form & Trust Badge */}
          <div id="quick-order" className="mt-8 pt-6 border-t border-gray-100 bg-[#F8FAF7] -mx-4 md:-mx-6 -mb-4 md:-mb-6 p-6 rounded-b-[36px]">
            
            {/* CUTE DELIVERY NOTE */}
            <div className="mb-5 bg-[#FFF8E7] border border-[#F4B251]/30 p-4 rounded-2xl flex gap-3 items-start shadow-sm">
              <div className="text-2xl mt-0.5">🛵</div>
              <div>
                <p className="text-sm font-bold text-[#46280E] mb-1">Delivery & Shipping Info</p>
                <p className="text-xs text-[#46280E]/80 font-medium leading-relaxed">
                  We offer fast hyperlocal delivery across Ranchi! For shipping outside our immediate zones, a minimum order of ₹500 is required (shipping charges discussed upon request). To ensure the highest quality and security, we currently process <strong>prepaid orders only</strong>. 💛
                </p>
              </div>
            </div>

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
                className="w-full sm:w-auto bg-[#1B4332] hover:bg-[#122e22] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md transition active:scale-95"
              >
                Send Order on WhatsApp
              </button>
            </div>
          </div>
        </section>
        {/* ========================================= */}
        {/* WALL OF LOVE / SOCIAL PROOF SECTION */}
        {/* ========================================= */}
        <section id="reviews" className="lg:col-span-12 bg-white rounded-[36px] p-8 md:p-10 shadow-md border border-gray-100 flex flex-col justify-between">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#52796F]">Wall of Love</span>
            <h3 className="text-3xl md:text-4xl font-bold uppercase text-[#1B4332] mt-1">Happy Ranchi Customers</h3>
            <p className="text-sm font-medium text-gray-500 mt-2">Real feedback and WhatsApp messages from our amazing Golden Bites family!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Review 1: Text-based (Google/Verbal) */}
            <div className="bg-[#F8FAF7] p-6 rounded-[28px] border border-[#d8e0d6] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-[#F59E0B] text-lg">★★★★★</div>
              <p className="text-sm text-[#46280E] italic flex-grow leading-relaxed">
                "I ordered laddus from here for gifting it to someone and got good reviews from them regarding taste and quality. Also the owners are very polite and friendly ✨"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#d8e0d6]">
                <div className="w-10 h-10 rounded-full bg-[#1B4332] flex items-center justify-center font-bold text-white text-sm">
                  P
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#1B4332]">Anupama</span>
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Google Review</span>
                </div>
              </div>
            </div>

                {/* Review 2: Stacked WhatsApp Cropped Messages */}
            <div className="bg-[#F8FAF7] p-5 rounded-[28px] border border-[#d8e0d6] flex flex-col shadow-sm hover:shadow-md transition-shadow">
              
              <div className="flex-grow flex flex-col gap-3 justify-center">
                {/* Cropped Message 1 */}
                <div className="relative w-full h-16 sm:h-20 rounded-[16px] overflow-hidden shadow-sm border border-gray-100 bg-white">
                  <Image 
                    src="/wa-msg-1.jpg" 
                    alt="WhatsApp Review 1" 
                    fill 
                    className="object-cover object-left" 
                  />
                </div>
               {/* Cropped Message 2 (Taller for longer text) */}
               <div className="relative w-[90%] self-end h-35 sm:h-55 rounded-[16px] overflow-hidden shadow-sm border border-gray-100 bg-white">
                  <Image 
                    src="/wa-msg-2.jpg" 
                    alt="WhatsApp Review 2" 
                    fill 
                    className="object-contain sm:object-cover object-top" 
                  />
                </div>

                {/* Cropped Message 3 */}
                <div className="relative w-full h-16 sm:h-20 rounded-[16px] overflow-hidden shadow-sm border border-gray-100 bg-white">
                  <Image 
                    src="/wa-msg-3.jpg" 
                    alt="WhatsApp Review 3" 
                    fill 
                    className="object-cover object-left" 
                  />
                </div>

                {/* Optional 4th Message (Uncomment to use) */}
                {/* 
                <div className="relative w-[90%] self-end h-16 sm:h-20 rounded-[16px] overflow-hidden shadow-sm border border-gray-100 bg-white">
                  <Image src="/wa-msg-4.jpg" alt="WhatsApp Review 4" fill className="object-cover object-left" />
                </div> 
                */}
              </div>

              <div className="mt-5 pt-4 border-t border-[#d8e0d6] flex justify-between items-center">
                <span className="text-xs font-bold text-[#1B4332] flex items-center gap-1.5">
                  <span className="text-green-500 text-base">💬</span> WhatsApp DMs
                </span>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                  Verified Buyers
                </span>
              </div>
            </div>

            {/* Review 3: Text-based (Google/Verbal) */}
            <div className="bg-[#F8FAF7] p-6 rounded-[28px] border border-[#d8e0d6] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex text-[#F59E0B] text-lg">★★★★★</div>
              <p className="text-sm text-[#46280E] italic flex-grow leading-relaxed">
                "Loved their laddoos ❤️ Made with nutritious flaxseeds and wholesome dry fruits, they’re a perfect combination of health and taste. A wonderful option for mindful snacking without compromising on flavour. And their newly introduced Nutty Treat is a 100/10.Highly recommended! 😇✨"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#d8e0d6]">
                <div className="w-10 h-10 rounded-full bg-[#F4B251] flex items-center justify-center font-bold text-white text-sm">
                  R
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#1B4332]">Richa S.</span>
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Google Review</span>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* ========================================= */}

        {/* Card 5: Social Banner */}
        <section className="lg:col-span-12 bg-[#1B4332] rounded-[36px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-md">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold uppercase tracking-wide">Follow Our Daily Bakes</h3>
            <p className="text-[#A8BCA1] text-sm mt-1 font-medium">Join the Golden Bites community for fresh updates, new flavors, and behind-the-scenes!</p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/goldenbites_ranchi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl backdrop-blur-sm transition-colors border border-white/20 flex items-center gap-2"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-bold text-sm tracking-wide">Instagram</span>
            </a>
            
            <a 
              href="https://www.facebook.com/people/Golden-Bites-Ranchi/61550094075723/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-2xl backdrop-blur-sm transition-colors border border-white/20 flex items-center gap-2"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              <span className="font-bold text-sm tracking-wide">Facebook</span>
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full mt-10 py-6 px-4 border-t border-[#d8e0d6] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div className="text-center md:text-left">
          <p className="font-bold text-[#1B4332] text-sm">Golden Bites — Homemade Treats, Ladoos, Dry Cakes, Muffins & Chocolates in Ranchi</p>
          <p className="mt-1">Harmu Housing Colony, Ranchi, Jharkhand 834002 | Mon-Sat, 9:00 AM – 5:00 PM</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a href="https://maps.app.goo.gl/RXaNTDx6rei5FewG9" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1B4332] hover:underline flex items-center gap-1">
            Google Reviews ↗
          </a>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <a href="https://www.instagram.com/goldenbites_ranchi" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1B4332] hover:underline flex items-center gap-1">
            Instagram ↗
          </a>
          <span className="text-gray-300 hidden sm:ink">|</span>
          <a href="https://www.facebook.com/people/Golden-Bites-Ranchi/61550094075723/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1B4332] hover:underline flex items-center gap-1">
            Facebook ↗
          </a>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <span className="font-semibold text-gray-700">Phone: +91 96315 72949</span>
        </div>
      </footer>
    </div>
  );
}