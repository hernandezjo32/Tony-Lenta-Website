"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Mail, Instagram, Facebook, Twitter, Music, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "fan",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".fade-up")
              .forEach((el, i) => {
                setTimeout(() => el.classList.add("visible"), i * 100);
              });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Integrate with form backend (Formspree, etc.) here
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      aria-label="Contact Tony Lenta"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(139,0,0,0.2) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="section-header fade-up">
          <span className="inline-block text-gold-300 font-syne tracking-[0.3em] uppercase text-xs mb-4 font-bold">
            📬 Contact
          </span>
          <h2 className="text-gold-gradient">Get in Touch</h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking CTA */}
          <div className="space-y-8 fade-up">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-syne font-extrabold text-white text-2xl uppercase tracking-wide mb-2">
                Bring the Legend to Your Stage
              </h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed mb-6">
                Available for festivals, concerts, private events, and
                collaborations worldwide.
              </p>
              <a
                href="mailto:Info@tonylenta.com"
                className="inline-flex items-center gap-3 btn-gold px-6 py-3 rounded-full text-sm font-syne tracking-widest hover-gold-glow"
              >
                <Mail size={16} aria-hidden="true" />
                <span>Request Booking</span>
              </a>
            </div>

            {/* Direct Contact */}
            <div>
              <h4 className="font-syne font-bold text-gold-300 tracking-widest uppercase text-xs mb-4">
                Direct Contact
              </h4>
              <a
                href="mailto:Info@tonylenta.com"
                className="flex items-center gap-3 text-white/70 hover:text-gold-300 transition-colors font-inter text-sm"
              >
                <Mail size={16} className="text-gold-300" aria-hidden="true" />
                Info@tonylenta.com
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-syne font-bold text-gold-300 tracking-widest uppercase text-xs mb-4">
                Follow Tony
              </h4>
              <div className="flex gap-3 flex-wrap">
                {[
                  {
                    Icon: Instagram,
                    url: "https://www.instagram.com/tonylenta/",
                    label: "Instagram",
                  },
                  {
                    Icon: Facebook,
                    url: "https://www.facebook.com/TonyLentaOfficial",
                    label: "Facebook",
                  },
                  {
                    Icon: Twitter,
                    url: "https://twitter.com/tonylenta",
                    label: "Twitter/X",
                  },
                  {
                    Icon: Music,
                    url: "https://open.spotify.com/artist/16lcPccJgIjtOWEwVMyA6Z",
                    label: "Spotify",
                  },
                ].map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={label}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-up">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 space-y-5"
                noValidate
              >
                <h3 className="font-syne font-bold text-white tracking-wider uppercase text-sm mb-6">
                  Send a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white/50 text-xs font-syne tracking-wider uppercase mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-gold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white/50 text-xs font-syne tracking-wider uppercase mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-gold"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white/50 text-xs font-syne tracking-wider uppercase mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-gold appearance-none cursor-pointer"
                  >
                    <option value="fan">Fan Message</option>
                    <option value="booking">Booking / Event</option>
                    <option value="press">Press / Media</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/50 text-xs font-syne tracking-wider uppercase mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Tony what's on your mind..."
                    className="input-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold py-4 rounded-xl text-sm font-syne tracking-widest flex items-center justify-center gap-2 hover-gold-glow disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && <Send size={16} aria-hidden="true" />}
                </button>
              </form>
            ) : (
              <div className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gold-300/20 border border-gold-300/40 flex items-center justify-center">
                  <Check size={28} className="text-gold-300" />
                </div>
                <div>
                  <h3 className="font-syne font-extrabold text-white text-xl uppercase tracking-wide mb-2">
                    Message Sent! 🔥
                  </h3>
                  <p className="text-white/50 font-inter text-sm">
                    Tony's team will be in touch soon. ¡Gracias, Lentático!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
