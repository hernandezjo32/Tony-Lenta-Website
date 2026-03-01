"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  const scrollToMusic = () => {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 60%)'
        }}
        aria-hidden="true" 
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-[900px] mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-8 glass transition-all duration-800"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold-300 animate-pulse" />
          <span className="font-syne text-gold-300 tracking-[0.3em] uppercase text-[0.65rem] font-bold">
            • De Puerto Rico Para El Mundo •
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-gold-300 animate-pulse" />
        </div>

        {/* Main Headline */}
        <h1 className="font-syne font-extrabold uppercase leading-[0.9] mb-4" style={{ fontSize: 'clamp(4rem, 14vw, 10rem)', letterSpacing: '-0.02em' }}>
          <span 
            className="block text-white transition-all duration-900"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '150ms'
            }}
          >
            TONY
          </span>
          <span 
            className="block text-gold-gradient transition-all duration-900"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '300ms'
            }}
          >
            LENTA
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-playfair italic text-white/75 mb-3 mx-auto transition-all duration-900"
          style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '450ms'
          }}
        >
          La Evolución del Romantiqueo
        </p>

        {/* Description */}
        <p
          className="text-white/45 text-[0.9rem] max-w-[480px] mx-auto leading-[1.7] mb-10 transition-all duration-900"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '550ms'
          }}
        >
          La voz melódica que transformó el género urbano con ritmo, sentimiento y sabor global.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center transition-all duration-900"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '650ms'
          }}
        >
          <button
            onClick={scrollToMusic}
            className="btn-gold px-10 py-4 rounded-full text-[0.8rem] font-bold uppercase tracking-wider min-w-[160px]"
          >
            LISTEN NOW
          </button>
          <button
            onClick={scrollToContact}
            className="btn-outline-gold px-10 py-4 rounded-full text-[0.8rem] font-bold uppercase tracking-wider min-w-[160px]"
          >
            BOOK TONY
          </button>
        </div>

        {/* Latest Single Badge */}
        <a
          href="https://open.spotify.com/intl-es/album/6EE0Ji9Ir3nXvM6ydOKOkq?si=C9zQmV3hTgezde0hcFdz_w"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 glass px-6 py-3 rounded-full mt-10 no-underline transition-all duration-900 hover:border-gold-300/30"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '800ms'
          }}
        >
          <div>
            <div className="font-syne font-bold text-gold-300 uppercase tracking-[0.2em] text-[0.65rem]">
              🔥 NEW SINGLE
            </div>
            <div className="text-white/75 text-[0.8rem]">
              Muchacha — El momento llegó
            </div>
          </div>
          <span className="btn-gold px-5 py-2 rounded-full text-[0.65rem] uppercase font-bold tracking-wider">
            STREAM
          </span>
        </a>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMusic}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] text-gold-300/50 hover:text-gold-300 transition-colors bg-transparent border-0 text-[1.8rem] cursor-pointer"
        aria-label="Scroll down"
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        ⌄
      </button>
    </section>
  );
}
