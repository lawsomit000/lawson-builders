"use client";

import { useState } from "react";

const projectTypes = [
  "General Contracting",
  "Bathroom Remodel",
  "Back Deck",
  "Patio",
  "Barndominium",
  "Outdoor Living Space",
  "Home Addition",
  "Renovation / Repair",
  "Other",
];

const inputClass =
  "w-full border-b border-zinc-200 bg-transparent px-0 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-24">
        <div className="w-12 h-12 border border-zinc-900 flex items-center justify-center mb-8">
          <svg className="w-6 h-6 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-semibold text-zinc-950 mb-3">
          Message Received
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
          Thanks for reaching out, {form.name.split(" ")[0]}. We&apos;ll review your project
          details and get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-zinc-950 mb-10">
        Tell Us About Your Project
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <label htmlFor="name" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 mb-1">
            Full Name <span className="text-warm-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 mb-1">
            Email Address <span className="text-warm-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 mb-1">
            Project Type <span className="text-warm-accent">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={form.projectType}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="message" className="block text-[10px] font-medium tracking-[0.2em] uppercase text-zinc-400 mb-1">
          Project Details <span className="text-warm-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe what you have in mind — scope, timeline, location, and any questions you have. The more detail, the better we can help."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p className="text-xs text-zinc-400">
          We respond within 1 business day. Your info is never shared.
        </p>
        <button
          type="submit"
          className="shrink-0 text-xs font-semibold tracking-widest uppercase bg-zinc-950 text-white px-10 py-4 hover:bg-warm-accent transition-colors duration-300 focus-visible:outline-none"
        >
          Send Request
        </button>
      </div>
    </form>
  );
}
