"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus("Thanks! Your message has been noted (demo only).");
      setLoading(false);
    }, 900);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 card card--accent"
      autoComplete="on"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs uppercase tracking-wide text-muted"
          >
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
          <label
            htmlFor="contact-email"
            className="block text-xs uppercase tracking-wide text-muted"
          >
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
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-wide text-muted"
        >
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
        className="btn btn-secondary rounded-xl disabled:opacity-70"
        disabled={loading}
        aria-busy={loading ? "true" : "false"}
      >
        {loading ? (
          <span className="spinner" aria-hidden="true" />
        ) : (
          <svg
            className="btn-ico-move"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        )}
        <span>{loading ? "Sending..." : "Send Message"}</span>
      </button>
      {status && (
        <p className="text-sm text-muted" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
}
