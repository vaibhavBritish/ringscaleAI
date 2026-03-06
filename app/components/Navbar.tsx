"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "How it Works", href: "/#howItWorks" },
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/careers" },
  { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative flex h-21 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="group flex items-center"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="Ringscale Media Logo"
                width={200}
                height={60}
                className="h-auto w-40 sm:w-42.5 transition-transform duration-200 group-hover:scale-[1.03]"
                priority
              />
            </Link>
          </div>

          {/* Center Nav Links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
            <div className="flex items-center gap-16 px-6 py-3 ">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="group relative text-md font-serif font-medium text-slate-700 transition-colors duration-200 hover:text-slate-950"
                >
                  <span>{l.label}</span>
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-linear-to-r from-[#FC4248] to-[#00D2FF] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#142AB5] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1c31c5] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#142AB5]/40"
            >
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-0 bg-linear-to-r from-sky-400/20 via-white/5 to-fuchsia-400/20" />
              </span>

              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={18}
                height={18}
                className="relative z-10 shrink-0"
              />
              <span className="relative z-10 font-serif">Book Free Demo</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 p-2.5 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <div className="relative h-5 w-6">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-6 rounded-full bg-slate-900 transition-all duration-300 ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <button
          type="button"
          className={`absolute inset-0 bg-black/35 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />

        {/* Drawer */}
        <div
          className={`absolute left-4 right-4 top-22 rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.22)] backdrop-blur-xl transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-800 transition-all duration-200 hover:bg-slate-50 hover:text-slate-950"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <button
              type="button"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#142AB5] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1c31c5] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#142AB5]/40"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={18}
                height={18}
              />
              <span>Book Free Demo</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;