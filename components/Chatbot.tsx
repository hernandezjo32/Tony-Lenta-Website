"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_QUESTIONS = [
  "What's Tony's latest song?",
  "How can I book Tony?",
  "Where can I stream his music?",
  "Tell me about Tony Lenta",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Qué lo que! 🔥 I'm Lenta Bot, your guide to all things Tony Lenta. Want to know about his music, book him for an event, or just chat? I got you, Lentático!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || loading) return;

    const userMessage: Message = { role: "user", content };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.slice(-10), // Keep last 10 for context
        }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.message },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Ay, lo siento! Something went wrong. Try again or email tonylenta@gmail.com for direct help! 🙏",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="chatbot-container" role="region" aria-label="Fan chatbot">
      {/* Chat Window */}
      <div
        className={`mb-4 transition-all duration-400 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="glass-dark rounded-2xl w-80 md:w-96 flex flex-col overflow-hidden border border-gold-300/20"
          style={{ height: "480px", boxShadow: "0 25px 50px rgba(0,0,0,0.6)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gold-300/10 bg-gradient-to-r from-gold-300/5 to-crimson/5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gold-300/20 border border-gold-300/30 flex items-center justify-center">
                <Bot size={18} className="text-gold-300" aria-hidden="true" />
              </div>
              <div>
                <p className="font-syne font-bold text-white text-sm tracking-wider uppercase">
                  Lenta Bot
                </p>
                <p className="text-green-400 text-xs font-inter flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/40 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm font-inter leading-relaxed ${
                    msg.role === "user"
                      ? "chat-message-user"
                      : "chat-message-bot"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="chat-message-bot px-4 py-3">
                  <div className="flex gap-1.5 items-center h-4">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-gold-300/60 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-1.5">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-gold-300/30 text-gold-300/80 hover:border-gold-300 hover:text-gold-300 transition-all font-inter"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-gold-300/10"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 bg-transparent text-white/80 text-sm font-inter placeholder-white/30 outline-none disabled:opacity-50"
              aria-label="Chat message input"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl bg-gold-300/20 border border-gold-300/30 flex items-center justify-center text-gold-300 hover:bg-gold-300/30 transition-colors disabled:opacity-30"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full btn-gold flex items-center justify-center ml-auto hover-gold-glow transition-transform hover:scale-105 active:scale-95"
        aria-label={isOpen ? "Close chat" : "Open fan chat"}
        aria-expanded={isOpen}
      >
        <span className="relative z-10">
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </span>
      </button>
    </div>
  );
}
