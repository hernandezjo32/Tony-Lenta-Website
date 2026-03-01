"use client";

import { useEffect, useRef } from "react";
import { Instagram, Facebook, Twitter, Youtube, Music, ExternalLink } from "lucide-react";

const SOCIAL_LINKS = [
  {
    platform: "Instagram",
    handle: "@tonylenta",
    url: "https://www.instagram.com/tonylenta/",
    icon: Instagram,
    color: "#E1306C",
    bg: "rgba(225,48,108,0.1)",
    followers: "Follow for exclusives",
  },
  {
    platform: "Spotify",
    handle: "Tony Lenta",
    url: "https://open.spotify.com/artist/16lcPccJgIjtOWEwVMyA6Z",
    icon: Music,
    color: "#1DB954",
    bg: "rgba(29,185,84,0.1)",
    followers: "499K+ Monthly Listeners",
  },
  {
    platform: "YouTube",
    handle: "TonyLentaOfficial",
    url: "https://www.youtube.com/@TonyLentaOfficial",
    icon: Youtube,
    color: "#FF0000",
    bg: "rgba(255,0,0,0.1)",
    followers: "Videos & Performances",
  },
  {
    platform: "Facebook",
    handle: "TonyLentaOfficial",
    url: "https://www.facebook.com/TonyLentaOfficial",
    icon: Facebook,
    color: "#1877F2",
    bg: "rgba(24,119,242,0.1)",
    followers: "Stay updated",
  },
  {
    platform: "Twitter / X",
    handle: "@tonylenta",
    url: "https://twitter.com/tonylenta",
    icon: Twitter,
    color: "#1DA1F2",
    bg: "rgba(29,161,242,0.1)",
    followers: "120K followers",
  },
  {
    platform: "Apple Music",
    handle: "Tony Lenta",
    url: "https://music.apple.com/us/artist/tony-lenta/184025724",
    icon: Music,
    color: "#FC3C44",
    bg: "rgba(252,60,68,0.1)",
    followers: "Stream on Apple Music",
  },
];

const LIVE_PERFORMANCES = [
  {
    title: "Bambaye Concert",
    url: "https://www.youtube.com/watch?v=vSnpie5jedA",
    youtubeId: "vSnpie5jedA",
  },
];

export default function Media() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".fade-up")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 80);
              });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="media"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      aria-label="Media and social media"
    >
      {/* Gold accent right */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #D4AF37, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="section-header fade-up">
          <span className="inline-block text-gold-300 font-syne tracking-[0.3em] uppercase text-xs mb-4 font-bold">
            📱 Media
          </span>
          <h2 className="text-gold-gradient">Follow the Journey</h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="text-white/50 mt-4 font-inter max-w-md mx-auto text-sm">
            Stay connected with Tony Lenta across all platforms
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 flex items-center gap-4 hover-gold-glow group transition-all duration-300 hover:border-gold-300/30 fade-up"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: social.bg }}
                >
                  <Icon
                    size={26}
                    style={{ color: social.color }}
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-syne font-bold text-white text-sm tracking-wider uppercase">
                    {social.platform}
                  </p>
                  <p className="text-gold-300 text-xs mt-0.5 truncate">
                    {social.handle}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{social.followers}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-white/20 group-hover:text-gold-300 transition-colors ml-auto flex-shrink-0"
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 glass rounded-2xl p-8 text-center fade-up">
          <div className="text-4xl mb-4" aria-hidden="true">📸</div>
          <h3 className="font-syne font-extrabold text-white text-2xl mb-2 uppercase tracking-wide">
            Follow on Instagram
          </h3>
          <p className="text-white/50 font-inter text-sm mb-6 max-w-sm mx-auto">
            Behind-the-scenes, new music previews, and exclusive content for
            Lentáticos
          </p>
          <a
            href="https://www.instagram.com/tonylenta/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-gold px-8 py-3 rounded-full text-sm font-syne tracking-widest"
          >
            <Instagram size={16} aria-hidden="true" />
            <span>@tonylenta</span>
          </a>
        </div>
      </div>
    </section>
  );
}
