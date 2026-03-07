"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const companyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Pricing", href: "/pricing" },
  { name: "Careers", href: "/careers" },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-10 text-black">
      {/* Background blobs */}
      <div className="pointer-events-none absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-[#FC4248]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />

      {/* CTA Section */}
      <section className="relative z-10 mx-auto mb-12 max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-[36px] bg-gradient-to-r from-[#FC4248] via-[#ff5a60] to-[#00D2FF] px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:px-12 md:py-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_30%)]" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col items-center justify-between gap-10 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="max-w-xl text-white"
            >
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm">
                Grow with Ringscale AI
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                Ready for Real Growth?
              </h2>

              <p className="mb-8 mt-4 text-sm leading-relaxed text-white/90 md:text-base">
                Marketing that brings leads, closes deals, and brings customers
                back — all on autopilot.
              </p>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#20b659] hover:shadow-xl"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                  className="shrink-0"
                />
                <span>Connect on WhatsApp</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ y: -6, rotate: -1 }}
              className="flex w-full justify-center md:w-1/3"
            >
              <Image
                src="/footer/bottom-card.svg"
                alt="Ringscale Media Google Business Profile performance"
                width={420}
                height={360}
                className="h-auto max-h-96 w-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Footer */}
      <section className="relative z-10 border-t border-black/10 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-3 md:py-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link href="/" className="inline-block">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/logo.png"
                  alt="Ringscale Media Logo"
                  width={170}
                  height={60}
                  className="h-auto w-44"
                />
              </motion.div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-black/70">
              Marketing AI Platform for Small Businesses that Delivers Real
              Revenue.
            </p>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#20b659] hover:shadow-xl"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>Connect on WhatsApp</span>
            </motion.button>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-black/70">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-black">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#FC4248] opacity-70 transition group-hover:scale-125 group-hover:opacity-100" />
                    <span className="transition duration-200 group-hover:translate-x-1 group-hover:text-[#FC4248]">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 text-sm text-black"
          >
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-black/70">
              Contact Us
            </h4>

            <div className="space-y-3 leading-relaxed text-black/75">
              <p>
                C-9, First Floor Near Janakpuri West Metro Station New Krishna
                Park, Janakpuri, Vikaspuri, New Delhi, Delhi 110018
              </p>

              <p>
                <span className="font-semibold text-black">Contact Number:</span>{" "}
                011 4350 6868
              </p>

              <p>
                <span className="font-semibold text-black">Email:</span>{" "}
                support@RingscaleAi.com
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 text-center text-xs text-black/55 md:flex-row"
          >
            <span>
              © {new Date().getFullYear()} Ringscale Media. All rights reserved.
            </span>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition hover:text-[#FC4248]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;