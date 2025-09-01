"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! Your message has been noted (demo only).");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 card card--accent"
      autoComplete="on"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            required
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            inputMode="text"
            className="mt-1 w-full rounded-lg border border-themic bg-soft px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-50)] focus:outline-none focus:ring-2 focus:ring-[#c22126]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-xs uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            required
            type="email"
            id="contact-email"
            name="email"
            autoComplete="email"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            className="mt-1 w-full rounded-lg border border-themic bg-soft px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-50)] focus:outline-none focus:ring-2 focus:ring-[#c22126]"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-xs uppercase tracking-wide text-muted">
          Message
        </label>
        <textarea
          required
          id="contact-message"
          name="message"
          rows={5}
          autoComplete="on"
          className="mt-1 w-full rounded-lg border border-themic bg-soft px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-50)] focus:outline-none focus:ring-2 focus:ring-[#c22126]"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-[#c22126] px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#141414]"
      >
        Send Message
      </button>
      {status && (
        <p className="text-sm text-muted" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
}
