"use client";

import React, { useState } from "react";
import { FiArrowUpRight, FiSend, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:code.with.foyjur@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="basics relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-125 w-125 rounded-full bg-orange/10 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full bg-orange/5 blur-[140px]" />

      <div className="container relative z-10 mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-orange">
            / Let's Connect
          </span>
          <span className="text-xs tracking-widest text-white/30">
            05 — CONTACT
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Content */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Available for new opportunities
              </span>
            </div>

            <h2 className="text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-7xl xl:text-8xl">
              Let's
              <br />
              make it
              <br />
              <span className="font-semibold text-orange">
                happen.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/45 sm:text-base">
              Have an idea, a project, or just want to say hello? I'm always
              open to meaningful conversations and exciting opportunities. Drop
              me a message.
            </p>

            {/* Contact Info */}
            <div className="mt-14 space-y-6">
              <div>
                <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Reach me directly
                </span>
                <a
                  href="mailto:code.with.foyjur@gmail.com"
                  className="text-sm text-white transition-colors hover:text-orange sm:text-base"
                >
                  code.with.foyjur@gmail.com
                </a>
              </div>

              <div>
                <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Location
                </span>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <FiMapPin className="text-orange" />
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative rounded-3xl border border-white/10 bg-white/2.5 p-6 sm:p-9 lg:p-10">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-orange">
                  Get in touch
                </span>
                <h3 className="mt-3 text-2xl font-medium text-white sm:text-3xl">
                  Send a message
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-orange">
                <FiSend size={20} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block text-xs text-white/50">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-orange"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-xs text-white/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-orange"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-3 block text-xs text-white/50">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-orange"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 block text-xs text-white/50">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  required
                  className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-orange"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-between text-center rounded-full bg-orange px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white hover:text-orange"
              >
                <span>Send Message</span>
                <FiArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </form>

            <p className="mt-5 text-center text-[10px] tracking-wide text-white/25">
              I'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/25 sm:flex-row">
          <span>Designed & Developed for business purposes.</span>
          <span>©2026 Foyjur Rafee. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
