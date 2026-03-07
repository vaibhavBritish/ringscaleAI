"use client";

import Image from "next/image";
import React from "react";
import Testimonials from "../components/Testimonials";
import PaymentFaq from "../components/PaymentFaq";

const Pricing = () => {
  const logos = [
    { src: "/pricing/Client-3.webp", alt: "Frenz Holidays" },
    { src: "/pricing/Client-6.webp", alt: "Desire Salon" },
    { src: "/pricing/Client-8.webp", alt: "Physioedge" },
    { src: "/pricing/Client-10.webp", alt: "Healing Through Ayurveda" },
    { src: "/pricing/Client-13.webp", alt: "Peacock Salon" },
    { src: "/pricing/Client-17.webp", alt: "Tressez" },
    // add more logos here
  ];

  // duplicate array once for seamless loop
  type Card = {
    badge: {
      leftIconSrc?: string;
      // leftText: string;
      // rightText: string;
      leftTextClassName?: string;
    };
    subtitle: string;
    imageSrc: string;
    glow: "orange" | "blue" | "green" | "amber";
  };

  const cards: Card[] = [
    {
      badge: {
        leftIconSrc: "/homepage/gbp.svg",
        // leftText: "Google Business Profile",
        // rightText: "AI Agent",
        leftTextClassName: "text-[#4285F4]",
      },
      subtitle: "Gets You More Leads from Google",
      imageSrc: "/homepage/gbp.webp",
      glow: "orange",
    },
    {
      badge: {
        leftIconSrc: "/homepage/leaad.svg",
        // leftText: "Lead Conversion",
        // rightText: "AI Agent",
        leftTextClassName: "text-[#3B82F6]",
      },
      subtitle: "Captures, Connects and Converts\nfrom leads",
      imageSrc: "/homepage/lead.webp",
      glow: "blue",
    },
    {
      badge: {
        leftIconSrc: "/homepage/whatsapp.svg",
        // leftText: "WhatsApp Chat",
        // rightText: "AI Agent",
        leftTextClassName: "text-[#22C55E]",
      },
      subtitle: "Chats With Your Customers 24/7",
      imageSrc: "/homepage/wp.webp",
      glow: "green",
    },
    {
      badge: {
        leftIconSrc: "/homepage/whatsapp-marketing.svg",
        // leftText: "WhatsApp Marketing",
        // rightText: "AI Agent",
        leftTextClassName: "text-[#22C55E]",
      },
      subtitle: "Increases Repeat Sales & Google\nReviews",
      imageSrc: "/homepage/wp-marketing.webp",
      glow: "amber",
    },
  ];

  const glowClass = {
    orange: "shadow-orange-200/50",
    blue: "shadow-blue-200/60",
    green: "shadow-green-200/60",
    amber: "shadow-yellow-200/60",
  } as const;

  const tintBg = {
    orange: "bg-orange-50/40",
    blue: "bg-blue-50/40",
    green: "bg-green-50/40",
    amber: "bg-amber-50/40",
  } as const;

  const marqueeLogos = [...logos, ...logos];

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 text-center mt-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-300 bg-white shadow-sm shadow-purple-100">
          <span className="text-[#F13836] text-lg">✨</span>
          <span className="text-[#F13836] font-bold text-sm md:text-base">
            Marketing AI Platform
          </span>
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Everything You Need to{" "}
          <span className="bg-linear-to-r from-[#5F40EB] via-[#6C4BFF] to-[#F13836] text-transparent bg-clip-text">
            Grow Your
          </span>
          <br />
          <span className="bg-linear-to-r from-[#5F40EB] via-[#6C4BFF] to-[#F13836] text-transparent bg-clip-text">
            Business
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          One simple pricing for all AI Agents for maximum revenue.
          <br />
          Automate, engage, and grow – starting today.
        </p>
      </section>

      <section className="bg-transparent scroll-smooth" id="howItWorks">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
          <div className="mb-6 text-center">
            <p className="text-xl uppercase tracking-[0.2em] text-indigo-500 font-semibold">
              HOW IT WORKS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c) => (
              <div
                key={c.badge.leftIconSrc}
                className={`group rounded-3xl border border-black/5 bg-white/90 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:-translate-x-0.5 transition-all duration-300 transform-gpu ${
                  glowClass[c.glow]
                } overflow-hidden`}
              >
                <div
                  className={`p-6 ${tintBg[c.glow]} transition-colors duration-300`}
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    {c.badge.leftIconSrc ? (
                      <Image
                        src={c.badge.leftIconSrc}
                        alt="image"
                        width={230}
                        height={230}
                        className="shrink-0"
                      />
                    ) : (
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-linear-to-br from-blue-500 to-purple-500" />
                    )}

                    {/* <span
                      className={
                        c.badge.leftTextClassName ??
                        "text-blue-600 group-hover:text-blue-700 transition-colors"
                      }
                    >
                      {c.badge.leftIconSrc}
                    </span> */}
                  </div>

                  <p className="mt-4 text-base sm:text-lg font-medium text-black/70 whitespace-pre-line">
                    {c.subtitle}
                  </p>

                  <div className="mt-6 rounded-2xl bg-white/80 border border-black/5 overflow-hidden">
                    <div className="relative w-full aspect-4/3">
                      <Image
                        src={c.imageSrc}
                        alt="image"
                        fill
                        className="object-cover transform-gpu group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="h-2 w-full bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-12">
        <div className="bg-linear-to-r from-[#7E2CFF] via-[#4355FF] to-[#00D2FF] rounded-3xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 text-white">
          <div>
            <p className="text-lg font-semibold">
              Quarterly Subscription Price
            </p>
            <p className="mt-4 text-4xl md:text-5xl font-extrabold">₹15,000</p>
            <p className="mt-4 text-base md:text-lg">
              Yearly Subscription ₹60,000 (GST exclusive)
            </p>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-white text-[#4355FF] font-semibold text-lg shadow hover:bg-gray-50 transition">
              Buy Now
            </button>

            <button className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-white text-[#4355FF] font-semibold text-lg shadow hover:bg-gray-50 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          Trusted by Business Owners
          <br className="hidden md:block text-[#F13836]" />
          <span className="text-[#F13836]">from Various Industry</span>
        </h2>

        <div className="mt-12 relative overflow-hidden">
          <div className="flex items-center gap-16 animate-marquee">
            {marqueeLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-16 md:h-20 object-contain"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <p className="text-lg text-gray-800 font-bold">
            Ready to get started? Get Connect with Ringscale Media Agent
          </p>
          <button className="mt-6 px-10 py-3 rounded-xl bg-[#4F6BFF] text-white text-lg font-semibold hover:bg-[#3f57cc] transition">
            Book Free Demo
          </button>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>
      <section>
        <PaymentFaq />
      </section>
    </>
  );
};

export default Pricing;
