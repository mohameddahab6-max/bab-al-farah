/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Flower, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Menu, 
  X,
  Heart,
  Star,
  Clock
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 border-brand-sand shadow-sm" : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center" id="nav-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-baseline gap-3"
          id="logo"
        >
          <div className="flex flex-col items-baseline">
            <span className="font-serif text-3xl font-light tracking-[0.1em] text-brand-sage leading-none uppercase">Bab Al-Farah</span>
            <span className="font-serif text-xl font-light tracking-widest text-brand-sage/60 mt-1">باب الفرح</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-sage/40 font-sans font-medium hidden lg:block ml-4">Fine Floristry</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10" id="desktop-nav">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-[10px] uppercase tracking-[0.2em] font-sans font-semibold transition-all hover:opacity-100 ${
                isScrolled ? "text-brand-text opacity-100" : "text-brand-text opacity-70"
              }`}
            >
              <span className="pb-1 hover:border-b-2 hover:border-brand-sage transition-all">{link.name}</span>
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand-sage text-brand-cream px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-sans font-bold shadow-sm transition-colors hover:bg-brand-sage/90"
          >
            Inquire
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-green"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-cream overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-brand-green hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-green text-brand-cream w-full py-4 rounded-xl font-bold mt-4">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto px-12 relative z-10 grid lg:grid-cols-12 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-brand-sage"></div>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-sage font-bold">Est. 2012 • Premium Floristry</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-brand-text font-light leading-[1.1] mb-10">
            Arranging <span className="italic text-brand-sage">Beauty</span> <br />
            for your Life's <br />
            <span className="italic">Purest Moments.</span>
          </h1>
          <p className="text-sm font-sans text-brand-text/70 max-w-md leading-relaxed mb-12 uppercase tracking-wide">
            Bab Al-Farah (The Door of Joy) specializes in bespoke floral architecture for high-end weddings and gala events. We blend seasonal textures with organic movement to tell your unique story.
          </p>
          <div className="flex items-center gap-12 mb-12">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-light italic text-brand-sage">450+</span>
              <span className="font-sans text-[10px] uppercase tracking-widest opacity-60 font-bold">Weddings Styled</span>
            </div>
            <div className="w-[1px] h-10 bg-brand-sand"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-light italic text-brand-sage">18</span>
              <span className="font-sans text-[10px] uppercase tracking-widest opacity-60 font-bold">Global Awards</span>
            </div>
          </div>
          <button className="bg-brand-sage text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-sans font-bold transition-all hover:bg-brand-moss active:scale-95 shadow-lg shadow-brand-sage/10">
            View Collections
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="bg-brand-sand rounded-t-[200px] aspect-[4/5] overflow-hidden border border-brand-sand shadow-inner relative">
            <img 
              src="https://images.unsplash.com/photo-1549416878-b9ca95e2690d?auto=format&fit=crop&q=80&w=800" 
              alt="Premium bridal bouquet"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-95 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-12 inset-x-0 text-center">
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-sage font-bold opacity-40">The Heritage Suite</p>
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-brand-sand shadow-2xl max-w-[200px]"
          >
            <div className="w-10 h-[1px] bg-brand-text mb-4"></div>
            <p className="text-xl font-serif font-light leading-tight text-brand-text italic">White Lilies & <br/>Wild Petals</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Wedding Floral Art",
      desc: "Comprehensive decoration for your big day, from grand arches to delicate table settings.",
      icon: <Calendar />,
      img: "/src/assets/images/regenerated_image_1778258879362.png",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Bridal Bouquets",
      desc: "Tailored bouquets that perfectly complement your dress and style.",
      icon: <Flower />,
      img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=600",
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Event Styling",
      desc: "Corporate events or private celebrations, we bring nature's beauty to any venue.",
      icon: <Star />,
      img: "/src/assets/images/regenerated_image_1778258874760.png",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <section id="services" className="py-40 bg-[#FAF9F6] border-y border-brand-sand">
      <div className="max-w-7xl mx-auto px-12">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 border border-brand-sage/20 rounded-full text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-brand-sage mb-6">Our Craft</div>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-text font-light italic">Artisanal Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[3/4] rounded-[60px] overflow-hidden mb-10 border border-brand-sand grayscale transition-all duration-700 group-hover:grayscale-0">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="max-w-xs">
                <h3 className="text-2xl font-serif text-brand-text mb-4 italic font-light tracking-wide">{item.title}</h3>
                <p className="text-brand-text/60 text-xs font-sans uppercase tracking-[0.15em] leading-loose">{item.desc}</p>
                <div className="w-8 h-[1px] bg-brand-sage mx-auto mt-8 transition-all duration-500 group-hover:w-24"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section id="gallery" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-12 mb-24 text-center">
        <div className="inline-block px-4 py-1.5 border border-brand-sage/20 rounded-full text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-brand-sage mb-6">Our Work</div>
        <h2 className="text-5xl md:text-6xl font-serif text-brand-text mb-8 font-light italic">Purest Moments</h2>
        <p className="text-brand-text/50 max-w-2xl mx-auto font-sans text-xs uppercase tracking-widest leading-loose">
          A selection of our bespoke floral architecture. We blend seasonal textures with organic movement.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 px-12 max-w-7xl mx-auto" id="gallery-grid">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="mb-12 rounded-[40px] overflow-hidden group relative cursor-pointer border border-brand-sand/50 shadow-sm"
          >
            <img 
              src={img} 
              alt={`Floral work ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-sage/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center p-8">
                <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold block mb-4">View Case Study</span>
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center mx-auto">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-brand-cream relative overflow-hidden border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start font-sans">
          <div>
            <div className="inline-block px-4 py-1.5 border border-brand-sage/20 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold text-brand-sage mb-8">Inquire</div>
            <h2 className="text-5xl md:text-7xl font-serif text-brand-text mb-10 font-light italic leading-tight">Begin your <br />Studio Session</h2>
            <p className="text-brand-text/60 text-sm leading-relaxed mb-16 max-w-sm uppercase tracking-widest">
              Ready to transform your space with Bab Al-Farah? Our studio is open for bespoke consultations.
            </p>

            <div className="space-y-12" id="contact-info">
              <div className="flex items-start gap-10">
                <div className="w-16 h-[1px] bg-brand-sage mt-3"></div>
                <div>
                  <h4 className="text-brand-sage font-bold text-[10px] uppercase tracking-[0.4em] mb-4">The Studio</h4>
                  <p className="text-lg font-serif italic text-brand-text">Al-Maksarat Street, Qurban, Madinah</p>
                </div>
              </div>
              
              <div className="flex items-start gap-10">
                <div className="w-16 h-[1px] bg-brand-sage mt-3"></div>
                <div>
                  <h4 className="text-brand-sage font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Contact</h4>
                  <p className="text-lg font-serif italic text-brand-text">+966 56 514 3323</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[60px] p-12 md:p-16 text-brand-text border border-brand-sand shadow-2xl relative"
          >
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full border border-brand-sand/50 -z-0"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-12 italic font-light">The Inquiry</h3>
              <form className="space-y-10" id="quote-form">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3 border-b border-brand-sand pb-4">
                    <label className="text-[10px] font-bold uppercase text-brand-sage tracking-widest">Your Name</label>
                    <input type="text" className="bg-transparent border-none p-0 focus:ring-0 outline-none text-brand-text placeholder:text-brand-text/20 font-serif italic" placeholder="Enter your name" />
                  </div>
                  <div className="flex flex-col gap-3 border-b border-brand-sand pb-4">
                    <label className="text-[10px] font-bold uppercase text-brand-sage tracking-widest">Email Address</label>
                    <input type="email" className="bg-transparent border-none p-0 focus:ring-0 outline-none text-brand-text placeholder:text-brand-text/20 font-serif italic" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-b border-brand-sand pb-4">
                  <label className="text-[10px] font-bold uppercase text-brand-sage tracking-widest">Event Type</label>
                  <select className="bg-transparent border-none p-0 focus:ring-0 outline-none text-brand-text font-serif italic appearance-none cursor-pointer">
                    <option>Wedding Celebration</option>
                    <option>Corporate Gala</option>
                    <option>Engagement Party</option>
                    <option>Other Event</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3 border-b border-brand-sand pb-4">
                  <label className="text-[10px] font-bold uppercase text-brand-sage tracking-widest">Your Message</label>
                  <textarea rows={3} className="bg-transparent border-none p-0 focus:ring-0 outline-none text-brand-text placeholder:text-brand-text/20 font-serif italic resize-none" placeholder="Tell us about your vision..." />
                </div>
                <button className="bg-brand-sage text-white w-full py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-brand-moss active:scale-95 shadow-xl shadow-brand-sage/20 mt-6">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-serif text-xl font-light tracking-widest text-brand-sage uppercase">Bab Al-Farah</span>
            </div>
            <p className="text-brand-text/40 text-[10px] uppercase tracking-widest max-w-xs text-center md:text-left font-sans font-bold">
              Fine Floristry for Exceptional Moments.
            </p>
          </div>

          <div className="flex space-x-12 font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-brand-text/60">
            <a href="https://www.instagram.com/doorhappiness.sa?igsh=MWo3cTZhMmt5cWc2NQ==" target="_blank" rel="noopener noreferrer" className="hover:text-brand-sage transition-colors">Instagram / doorhappiness.sa</a>
            <a href="https://www.tiktok.com/@doorhappiness.sa?lang=ar&is_from_webapp=1&sender_device=mobile&sender_web_id=7636416381672605204" target="_blank" rel="noopener noreferrer" className="hover:text-brand-sage transition-colors">TikTok / doorhappiness.sa</a>
          </div>

          <div className="text-center md:text-right font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text/40">
            © 2024 Bab Al-Farah Events Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-brand-cream selection:bg-brand-sage selection:text-white" id="app-root">
      <Navbar />
      <main>
        <Hero />
        
        {/* Quote Tape */}
        <div className="bg-brand-sage/5 py-6 overflow-hidden whitespace-nowrap border-y border-brand-sand">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-40 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="text-brand-sage font-serif italic text-2xl font-light">Arranging Joy</span>
                <div className="w-12 h-[1px] bg-brand-sage/30"></div>
                <span className="text-brand-text/40 font-sans font-bold uppercase tracking-[0.4em] text-xs">The Door of Joy</span>
                <div className="w-12 h-[1px] bg-brand-sage/30"></div>
              </div>
            ))}
          </motion.div>
        </div>

        <Services />

        {/* Stats Section with Recipe 8 Minimal influence */}
        <section className="bg-brand-sage text-brand-cream py-32 border-y border-brand-sand/10">
          <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-4 gap-16 text-center">
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-serif font-light italic">500+</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold opacity-60">Weddings Orchestrated</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-serif font-light italic">10k+</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold opacity-60">Handcrafted Designs</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-serif font-light italic">15+</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold opacity-60">Design Accolades</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-serif font-light italic">12</span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold opacity-60">Years of Heritage</span>
            </div>
          </div>
        </section>

        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Floating Action (Recipe 4 influence) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-gold text-white rounded-full shadow-2xl flex items-center justify-center z-40 md:hidden"
      >
        <Phone size={24} />
      </motion.button>
    </div>
  );
}
