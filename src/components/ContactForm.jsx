"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! Your message has been noted (demo only).");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wide text-white/70">Name</label>
          <input
            required
            name="name"
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c22126]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-white/70">Email</label>
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c22126]"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wide text-white/70">Message</label>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#c22126]"
          placeholder="Tell me about your project..."
        />
      </div>
      <button type="submit" className="inline-flex items-center rounded-full bg-[#c22126] px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-black">
        Send Message
      </button>
      {status && <p className="text-sm text-white/70">{status}</p>}
    </form>
  );
}
