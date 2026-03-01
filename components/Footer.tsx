import { Instagram, Facebook, Twitter, Music } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-gold-300/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-16 w-auto"
                aria-hidden="true"
              >
                <source src="/logo-animated.webm" type="video/webm" />
                <source src="/logo-animated.mp4" type="video/mp4" />
              </video>
              <span className="font-syne font-bold text-gold-300 tracking-[0.2em] uppercase text-sm">
                Tony Lenta
              </span>
            </div>
            <p className="text-white/30 text-xs font-inter">
              The Melodic King of Romantiqueo
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, url: "https://www.instagram.com/tonylenta/", label: "Instagram" },
              { Icon: Facebook, url: "https://www.facebook.com/TonyLentaOfficial", label: "Facebook" },
              { Icon: Twitter, url: "https://twitter.com/tonylenta", label: "Twitter" },
              { Icon: Music, url: "https://open.spotify.com/artist/16lcPccJgIjtOWEwVMyA6Z", label: "Spotify" },
            ].map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={`Tony Lenta on ${label}`}
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gold-300/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs font-inter">
          <p>© {currentYear} Tony Lenta. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="mailto:Info@tonylenta.com"
              className="hover:text-gold-300 transition-colors"
            >
              Info@tonylenta.com
            </a>
            <a
              href="https://joewebworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-colors"
            >
              joewebworks.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
