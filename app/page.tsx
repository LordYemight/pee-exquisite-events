'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  CheckCircle, 
  Palette, 
  Shield, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Menu, 
  X, 
  Clock, 
  Heart, 
  Feather,
  Quote,
  ImageOff,
  Send
} from 'lucide-react';
import Image from 'next/image';

// --- Types ---
interface Product {
  name: string;
  description: string;
  price: string;
  image_url: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  name: string;
  text: string;
  role: string;
}

interface Stat {
  number: string;
  label: string;
  icon: string;
}

// --- Safe Image Component ---
function SafeImage({ src, alt, fill, width, height, className, priority }: any) {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`flex items-center justify-center bg-stone-100 ${className}`}>
        <ImageOff size={32} className="text-stone-300" />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}

// --- Hooks ---
const useScrollReveal = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
};

// --- Icons Helper ---
const IconMap: any = {
  Star: Star,
  CheckCircle: CheckCircle,
  Palette: Palette,
  Shield: Shield,
  FeatherPoint: Feather,
  Clock: Clock,
  Heart: Heart
};

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  const brand = {
    name: "Pee Exquisite Events",
    tagline: "Crafting Moments of Unforgettable Grandeur.",
    description: "Lagos' premier event planning hub specializing in turning ambitious visions into flawlessly executed, exquisite celebrations—from opulent weddings to high-stakes corporate galas."
  };

  const images = [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2070&auto=format&fit=crop"
  ];

  const products: Product[] = [
    { name: "Platinum Wedding Package", description: "Full-service, luxury wedding planning from venue sourcing to post-event management across Nigeria.", price: "₦1,850,000+", image_url: images[1] },
    { name: "Corporate Gala Blueprint", description: "End-to-end management for large-scale corporate events, product launches, and annual dinners.", price: "₦950,000+", image_url: images[2] },
    { name: "Social Celebration Design", description: "Bespoke planning for milestone birthdays, anniversaries, and high-end social gatherings.", price: "₦450,000+", image_url: images[3] },
    { name: "Kiddies Extravaganza", description: "Themed, fully managed parties ensuring a magical and stress-free experience for children and parents.", price: "₦220,000+", image_url: images[4] }
  ];

  const features: Feature[] = [
    { title: "End-to-End Management", description: "From initial concept to final breakdown, we handle every intricate detail so you can enjoy your day.", icon: "Star" },
    { title: "Vendor Curation", description: "Access to our exclusive, vetted network of Lagos' finest caterers, decorators, and entertainers.", icon: "CheckCircle" },
    { title: "Bespoke Design", description: "Every event is a unique canvas; our designs are tailored precisely to your vision and brand.", icon: "Palette" },
    { title: "Contingency Planning", description: "Flawless execution guaranteed through rigorous risk assessment and backup strategies.", icon: "Shield" }
  ];

  const stats: Stat[] = [
    { number: "3,000+", label: "Dreams Made Happen", icon: "FeatherPoint" },
    { number: "12", label: "Years of proven excellence", icon: "Clock" },
    { number: "98%", label: "Client Satisfaction Rate", icon: "Heart" }
  ];

  const testimonials: Testimonial[] = [
    { name: "Mr. & Mrs. Adebayo", text: "The wedding décor exceeded every expectation. The Plum and Gold accents were breathtaking. Flawless execution!", role: "Platinum Wedding Clients" },
    { name: "Zenith Bank HR", text: "Pee Exquisite handled our Annual Gala with the utmost professionalism. Seamless logistics and stunning ambiance.", role: "Corporate Client" },
    { name: "Tola M.", text: "They made my 40th birthday feel like royalty. Absolute professionals from start to finish.", role: "Social Event Client" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const heroReveal = useScrollReveal();
  const featuresReveal = useScrollReveal();
  const productsReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const testimonialReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  return (
    <main className="relative overflow-x-hidden">
      {/* Navbar Pattern H4 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Style L2 */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="font-heading text-3xl font-black text-secondary tracking-tighter group-hover:text-accent transition-colors">
              PE
            </span>
            <span className={`text-xs font-bold tracking-[0.2em] uppercase hidden sm:block ${scrolled ? 'text-secondary' : 'text-secondary/80'}`}>
              {brand.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold text-secondary hover:text-accent tracking-wide transition-colors uppercase">
                {link}
              </a>
            ))}
            <a href="#contact" className="bg-secondary text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-lg">
              BOOK CONSULTATION
            </a>
          </div>

          <button onClick={() => setMenuOpen(true)} className="lg:hidden text-secondary p-2">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-secondary p-10 flex flex-col shadow-2xl animate-slideIn">
            <button onClick={() => setMenuOpen(false)} className="self-end text-white mb-12">
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-heading font-bold text-white hover:text-accent"
                >
                  {link}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="mt-10 bg-accent text-secondary py-4 rounded-xl font-black text-center text-lg"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section Pattern HR-C */}
      <section id="home" className="min-h-screen grid lg:grid-cols-2 items-center bg-white pt-20">
        <div className="px-6 md:px-12 lg:px-20 py-16 order-2 lg:order-1">
          <div className={`transition-all duration-1000 ${heroReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} ref={heroReveal.ref}>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-secondary leading-[0.95] tracking-tight mb-8">
              Crafting Lagos Luxe <span className="text-accent italic">Celebrations</span>
            </h1>
            <p className="text-secondary/70 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium">
              Your vision, executed with exquisite precision. Specializing in unforgettable weddings and impactful corporate events across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent transition-all animate-glow shadow-xl flex items-center gap-3 group">
                REDEFINE YOUR SATISFACTION <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-[60vh] lg:h-screen order-1 lg:order-2 overflow-hidden">
          <SafeImage 
            src={images[0]} 
            alt="Luxury Wedding Event" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white lg:hidden" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent hidden lg:block" />
        </div>
      </section>

      {/* Divider A6b */}
      <div className="py-16 flex items-center gap-6 px-8 max-w-6xl mx-auto">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase whitespace-nowrap">
          {brand.tagline}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      {/* Features Section */}
      <section id="services" ref={featuresReveal.ref} className="py-24 bg-stone-50 overflow-hidden">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${featuresReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">Our Exquisite Suites</h2>
            <p className="text-secondary/60 max-w-2xl mx-auto">Select the experience that matches your dream celebration. Sharp execution, nationwide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = IconMap[feature.icon] || Star;
              return (
                <div key={idx} className="bg-white p-10 rounded-2xl border border-stone-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-secondary mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
                  <p className="text-secondary/60 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="portfolio" ref={productsReveal.ref} className="py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${productsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">Signature Packages</h2>
            <p className="text-secondary/60 max-w-2xl mx-auto">Transparent pricing for unparalleled service quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {products.map((product, idx) => (
              <div key={idx} className="flex flex-col md:flex-row bg-stone-50 rounded-3xl overflow-hidden group border border-stone-100 hover:border-accent transition-colors duration-500">
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <SafeImage src={product.image_url} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">{product.name}</h3>
                    <p className="text-secondary/60 mb-6 text-sm md:text-base leading-relaxed">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-accent font-bold text-xl">{product.price}</span>
                    <a href="#contact" className="text-secondary font-black text-sm tracking-widest flex items-center gap-2 group/btn uppercase">
                      INQUIRE <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutReveal.ref} className="py-24 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className={`flex-1 transition-all duration-1000 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-tight">The Pee Exquisite Difference</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Founded on the principle that every major life event deserves grandeur, Pee Exquisite Events has established itself as the gold standard in Nigerian event architecture. We blend global standards with local finesse, ensuring every celebration reflects true opulence and meticulous organization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => {
                const Icon = IconMap[stat.icon] || Heart;
                return (
                  <div key={i} className="text-center lg:text-left">
                    <Icon size={24} className="text-accent mb-4 mx-auto lg:mx-0" />
                    <p className="text-4xl font-heading font-bold text-accent">{stat.number}</p>
                    <p className="text-white/50 text-xs uppercase tracking-widest mt-2">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`flex-1 relative w-full aspect-square max-w-md transition-all duration-1000 delay-300 ${aboutReveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="absolute inset-0 border-2 border-accent/30 translate-x-6 translate-y-6 rounded-3xl" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
              <SafeImage src={images[5]} alt="Our Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Masonry */}
      <section ref={testimonialReveal.ref} className="py-24 bg-white">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          </div>
          <div className="columns-1 md:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="break-inside-avoid bg-stone-50 p-8 rounded-3xl border border-stone-100 relative group hover:border-accent transition-colors duration-500">
                <Quote size={40} className="text-accent/20 mb-6 group-hover:text-accent/40 transition-colors" />
                <p className="text-secondary/80 text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4 border-t border-stone-200 pt-6">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary font-heading">{t.name}</h4>
                    <p className="text-secondary/40 text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Pattern C2 */}
      <section id="contact" ref={contactReveal.ref} className="py-24 bg-stone-50">
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${contactReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-stone-100">
            <div className="lg:w-2/5 bg-secondary p-12 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="font-heading text-4xl font-bold mb-6">Book Your Exquisite Consultation</h2>
                <p className="text-white/70 mb-12">Ready to start planning your landmark event? Reach out today to begin designing your masterpiece.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Call/WhatsApp</p>
                      <p className="text-lg font-bold">+234 8054525738</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Email Us</p>
                      <p className="text-lg font-bold">inquiry@peeexquisite.ng</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Office</p>
                      <p className="text-lg font-bold">Apapa GRA, Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a href="https://instagram.com/pee.xquisite_events" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 lg:p-16">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-scaleIn">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-secondary mb-4">Request Received</h3>
                  <p className="text-secondary/60">An exquisite events specialist will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-secondary/40 uppercase tracking-widest mb-2">Full Name</label>
                      <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-secondary focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-secondary/40 uppercase tracking-widest mb-2">Email Address</label>
                      <input required type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-secondary focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-secondary/40 uppercase tracking-widest mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-secondary focus:outline-none focus:border-accent transition-colors" placeholder="+234..." />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-secondary/40 uppercase tracking-widest mb-2">Event Type</label>
                    <select className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-secondary focus:outline-none focus:border-accent transition-colors">
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Social Celebration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-secondary/40 uppercase tracking-widest mb-2">Tell us about your dream</label>
                    <textarea required rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-secondary focus:outline-none focus:border-accent transition-colors" placeholder="How can we help make it exquisite?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-secondary text-white py-5 rounded-xl font-bold text-lg hover:bg-accent transition-all shadow-xl flex items-center justify-center gap-3">
                    SEND REQUEST <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Pattern F2 */}
      <footer className="bg-white pt-24 pb-12 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <a href="#home" className="flex items-center gap-3 mb-8">
                <span className="font-heading text-3xl font-black text-secondary tracking-tighter">PE</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary/60">{brand.name}</span>
              </a>
              <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">
                Crafting moments of unforgettable grandeur. Lagos' premier planning hub for bespoke celebrations.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'Services', 'Portfolio', 'About'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-secondary/60 hover:text-accent transition-colors text-sm font-medium">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-8">Contact</h4>
              <ul className="space-y-4 text-sm text-secondary/60">
                <li>Apapa GRA, Lagos, Nigeria</li>
                <li>+234 8054525738</li>
                <li>inquiry@peeexquisite.ng</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-8">Connect</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/pee.xquisite_events" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-secondary/40 hover:text-accent hover:border-accent transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-secondary/30 text-xs tracking-widest font-bold uppercase">
              © {new Date().getFullYear()} {brand.name}. All Rights Reserved.
            </p>
            <p className="text-secondary/30 text-xs tracking-widest font-bold uppercase">
              Quality wey go loud.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}