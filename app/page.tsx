"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { text } from "stream/consumers";

export default function Home() {
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

  const businessTypes = [
    {
      id: 1,
      name: "GYM & Fitness Centers",
      link: "#",
      img: "/homepage/business/gtm.webp",
    },
    {
      id: 2,
      name: "Doctors & Health Clinics",
      link: "#",
      img: "/homepage/business/doctor.webp",
    },
    {
      id: 3,
      name: "Bakers and Cafe shops",
      link: "#",
      img: "/homepage/business/bakery.webp",
    },
    {
      id: 4,
      name: "Salon Owners",
      link: "#",
      img: "/homepage/business/salon.webp",
    },
    {
      id: 5,
      name: "Restaurants & Bars",
      link: "#",
      img: "/homepage/business/bars.webp",
    },
    {
      id: 6,
      name: "Pest Control & Businesses",
      link: "#",
      img: "/homepage/business/pest.webp",
    },
    {
      id: 7,
      name: "Car Garages & Mechanics",
      link: "#",
      img: "/homepage/business/car.webp",
    },
    {
      id: 8,
      name: "Tours & Travels",
      link: "#",
      img: "/homepage/business/tour.webp",
    },
    {
      id: 9,
      name: "Yoga & Wellness",
      link: "#",
      img: "/homepage/business/yoga.webp",
    },
    {
      id: 10,
      name: "Handyman Services",
      link: "#",
      img: "/homepage/business/handyman.webp",
    },
  ];

  const aiCards = [
    {
      id: 1,
      title: "AI Agent to Get You More Leads from Google",
      image: "/homepage/gbp.webp",
      bg: "bg-[#FAF7FF]",
      btn: "Book Free Demo",
      features: [
        { id: 1, text: "Finds the best SEO keywords for your business" },
        { id: 2, text: "Rewrites SEO-optimised GBP content and services" },
        { id: 3, text: "Crafts SEO-rich replies to all Google reviews" },
        { id: 4, text: "Auto-publishes SEO-powered GBP posts" },
        { id: 5, text: "Crafts SEO-rich replies to all Google reviews" },
      ],
    },
    {
      id: 2,
      title: "AI Agent to Capture, Connect & Convert More Leads",
      image: "/homepage/lead.webp",
      bg: "bg-[#F4F9FF]",
      btn: "Book Free Demo",
      features: [
        { id: 1, text: "Collects every lead's details and interests" },
        { id: 2, text: "Connects with customers in real-time via AI chat." },
        {
          id: 3,
          text: "Converts leads into paying customers with automated follow-ups.",
        },
        { id: 4, text: "Shares product info & testimonials to build trust" },
      ],
    },
    {
      id: 3,
      title: "Your Personal Assistant Who Chats With Customers 24/7",
      image: "/homepage/wp.webp",
      bg: "bg-[#F1FFF9]",
      btn: "Book Free Demo",
      features: [
        { id: 1, text: "Exclusively trained for your business" },
        { id: 2, text: "Can chat with any number of customers at a time" },
        { id: 3, text: "Know everything about your business" },
        { id: 4, text: "Remembers every customer's purchase history" },
      ],
    },
    {
      id: 4,
      title: "AI Agent to Increase Repeat Sales & Google Reviews",
      image: "/homepage/wp-marketing.webp",
      bg: "bg-[#FFF7E8]",
      btn: "Book Free Demo",
      features: [
        {
          id: 1,
          text: "Sends personalized marketing messages to customers on WhatsApp.",
        },
        {
          id: 2,
          text: "Encourages repeat business with timely promotions and offers.",
        },
        {
          id: 3,
          text: "Boosts your online reputation by requesting Google reviews from satisfied customers.",
        },
        { id: 4, text: "Analyses purchase data to pick the right customers" },
      ],
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      business: "Doe's Gym",
      feedback:
        "Ringscale AI transformed my gym's online presence! The Google Business Profile AI Agent optimized my listing, leading to a 40% increase in leads. The WhatsApp Chat Agent engages customers 24/7, boosting conversions. Highly recommend for small businesses!",
    },
    {
      id: 2,
      name: "Jane Smith",
      business: "Smith's Bakery",
      feedback:
        "Since using Ringscale AI, my bakery has seen incredible growth! The Lead Conversion Agent captures and converts leads effortlessly, while the WhatsApp Marketing Agent keeps customers coming back with personalized offers. It's like having a full marketing team at a fraction of the cost!",
    },
  ];

  const faqs = [
    {
      question: "Will it work if I’m not tech-savvy?",
      answer:
        "Yes! The system is built for beginners. You don’t need any technical skills.",
    },
    {
      question: "How soon will I see results?",
      answer:
        "Most users start seeing improvements within the first few days of using Ringscale Media.",
    },
    {
      question: "Is my customer data secure?",
      answer:
        "Absolutely. Your data is encrypted and stored on secure servers.",
    },
    {
      question: "Is there someone to help me if I get stuck?",
      answer: "Yes, our support team is available to assist you anytime.",
    },
    {
      question: "Does Ringscale Media work for all types of businesses?",
      answer: "Yes, Ringscale Media is built to help businesses across all industries.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i: any) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="relative bg-linear-to-b from-white via-slate-50 to-slate-100/60 text-gray-900 overflow-hidden">
      {/* Soft background blobs */}
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden="true"
      />

    
      <section className="bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl  p-7 sm:p-10 text-center transition-all duration-500 ">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/90 px-4 py-1 text-xs sm:text-sm font-medium text-[#FC4248] shadow-sm shadow-purple-100 animate-[fadeIn_0.6s_ease-out]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#FC4248] opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FC4248]" />
              </span>
              <span>Grow Faster with AI</span>
            </div>

            <h1 className="mt-6 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-gray-900 animate-[fadeInUp_0.7s_ease-out]">
              Your All-in-One Marketing AI Platform{" "}
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#5F40EB] to-[#FC4248]">
                that Delivers Real Revenue
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-600 animate-[fadeInUp_0.8s_ease-out]">
              Trusted by{" "}
              <span className="font-semibold text-gray-900">
                60,000+ business owners
              </span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.9s_ease-out]">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#142AB5] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-2xl hover:-translate-y-0.5 hover:bg-blue-600 active:scale-95 transition-all duration-300"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                <span>Free AI Google Profile Booster</span>
              </Link>

              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#142AB5] bg-white px-6 py-3 text-sm sm:text-base font-semibold text-[#142AB5] hover:bg-[#f1f4ff] hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all duration-300"
              >
                <span>Book Free Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS CARDS */}
      <section className="bg-transparent scroll-smooth" id="howItWorks">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
          <div className="mb-6 text-center">
            <p className="text-xl uppercase tracking-[0.2em] text-[#FC4248] font-semibold">
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
                        alt=""
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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-[28px] p-px bg-linear-to-r from-[#5F40EB] via-[#7C5CFF] to-[#FC4248]-[0_18px_65px_rgba(15,23,42,0.35)]">
          <div className="w-full bg-linear-to-r from-[#5F40EB] via-[#4A33D5] to-[#FC4248] border-2 border-[#5F40EB]/70 rounded-[26px] p-8 sm:p-10 md:p-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.45)]">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
             
              <div className="text-center md:text-left md:max-w-lg">
                <p className="text-xs uppercase tracking-[0.25em] text-indigo-200/80 mb-3 font-semibold">
                  AI AGENTS FOR YOUR GROWTH
                </p>
                <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug mt-1">
                  Team of AI Agents <br /> that{" "}
                  <span className="underline  decoration-white/40 decoration-2 underline-offset-4">
                    work for your <br /> business growth
                  </span>
                </h1>

                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/95 px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-lg hover:shadow-2xl hover:-translate-y-0.5 hover:bg-white active:scale-95 transition-all duration-300 mt-8"
                >
                  {/* <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="shrink-0"
                  /> */}
                  <span>Book Free Demo</span>
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-purple-400/30 rounded-full -z-10" />
                <Image
                  src="/homepage/CTA.svg"
                  alt="CTA Image"
                  width={320}
                  height={260}
                  className="mx-auto md:mx-0 drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-black">
              Built For Small <span className="text-[#FC4248]">Business Owners</span>
            </h1>
            <p className="text-black mt-2 text-lg max-w-2xl mx-auto">
              You focus on your craft and leave the hassle of growth marketing
              with Ringscale AI.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {businessTypes.map((b) => (
              <Link
                key={b.id}
                href={b.link}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-black/5 p-6 bg-white/80 hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:-translate-x-0.5 transition-all duration-300 transform-gpu"
              >
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors duration-300">
                  <Image
                    src={b.img}
                    alt={b.name}
                    width={74}
                    height={74}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-center text-sm font-medium text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                  {b.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="w-full bg-linear-to-r from-[#5F40EB] via-[#4330C5] to-[#272168] border-2 border-[#5F40EB] rounded-3xl p-6 sm:p-8 mt-10 shadow-[0_18px_60px_rgba(15,23,42,0.38)]">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              And many more businesses like yours
              <button className="bg-white cursor-pointer text-[#5F40EB] text-base sm:text-xl px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                Book Free Demo
              </button>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-center text-black">
            Meet Your{" "}
            <span className="text-[#FC4248]">Digital Marketing AI Team</span>
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          {aiCards.map((card) => (
            <div
              key={card.id}
              className={`group  rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:-translate-x-0.5 transition-all duration-300 transform-gpu bg-white/90 ${card.bg}`}
            >
              <img
                src={card.image}
                className="rounded-xl mb-4 w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />

              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span>{card.title}</span>
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </h2>
              <ul className="list-disc list-inside mb-4 space-y-1">
                {card.features.map((feature) => (
                  <li key={feature.id} className="text-gray-700">
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button className="bg-[#4F46E5] text-white px-6 py-3 rounded-xl mt-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-black">
          Real Stories, <span className="text-[#FC4248]">Real Results</span>
        </h1>
        <p className="text-center text-sky-600 mt-2 max-w-2xl mx-auto">
          See how Ringscale AI has helped business owners like you grow their
          businesses.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border rounded-2xl p-6 shadow-lg bg-white/95 border-gray-200 hover:shadow-2xl hover:-translate-y-1 hover:-translate-x-0.5 transition-all duration-300 transform-gpu"
            >
              <p className="text-gray-800 italic leading-relaxed">
                "{t.feedback}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / ACCORDION */}
      <section className="bg-white/70 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-200 py-5 cursor-pointer last:border-b-0 transition-colors duration-200 hover:bg-gray-50/60 rounded-xl px-3 -mx-3"
            >
              <div
                className="flex justify-between items-center gap-4"
                onClick={() => toggle(i)}
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-800">
                  {faq.question}
                </h3>

                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  <IoChevronDown
                    className={`text-xl text-[#FC4248] transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {openIndex === i && (
                <div className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed animate-[fadeIn_0.2s_ease-out]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
