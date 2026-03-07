"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";


export default function Home() {
  type Card = {
    badge: {
      leftIconSrc: string;
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
      answer:
        "Yes, Ringscale Media is built to help businesses across all industries.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i: any) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 text-gray-900">
      {/* Background blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -top-40 -right-32 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
      />

      {/* HERO SECTION */}
      <section className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 pt-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-7 text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-sm font-medium text-[#FC4248]"
            >
              Grow Faster with AI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-3xl md:text-5xl font-semibold"
            >
              Your All-in-One Marketing AI Platform
              <span className="block bg-gradient-to-r from-[#5F40EB] to-[#FC4248] bg-clip-text text-transparent">
                that Delivers Real Revenue
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-5 text-gray-600"
            >
              Trusted by{" "}
              <span className="font-semibold text-black">
                60,000+ business owners
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -3 }}>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-xl bg-[#142AB5] px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-600"
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="whatsapp"
                    width={20}
                    height={20}
                  />
                  Free AI Google Profile Booster
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -3 }}>
                <Link
                  href="#"
                  className="rounded-xl border border-[#142AB5] px-6 py-3 font-semibold text-[#142AB5] hover:bg-[#f1f4ff]"
                >
                  Book Free Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howItWorks" className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-xl font-semibold text-[#FC4248]"
          >
            HOW IT WORKS
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {cards.map((c: Card, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`rounded-3xl border bg-white shadow-xl ${glowClass[c.glow]}`}
              >
                <div className={`p-6 ${tintBg[c.glow]}`}>
                  {c.badge.leftIconSrc && (
                    <Image
                      src={c.badge.leftIconSrc}
                      alt=""
                      width={200}
                      height={200}
                    />
                  )}

                  <p className="mt-4 text-lg text-black/70">{c.subtitle}</p>

                  <div className="mt-6 rounded-2xl overflow-hidden">
                    <Image
                      src={c.imageSrc}
                      alt="image"
                      width={400}
                      height={300}
                      className="group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-3xl font-bold"
          >
            Built For Small{" "}
            <span className="text-[#FC4248]">Business Owners</span>
          </motion.h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {businessTypes.map((b: any, i: number) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <Link
                  href={b.link}
                  className="flex flex-col items-center gap-4 rounded-2xl border p-6 bg-white shadow hover:shadow-xl"
                >
                  <Image src={b.img} alt={b.name} width={60} height={60} />

                  <span>{b.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center text-3xl font-bold">
            Real Stories <span className="text-[#FC4248]">Real Results</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {testimonials.map((t: any, i: number) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="border rounded-2xl p-6 bg-white shadow-lg"
              >
                <p className="italic">"{t.feedback}"</p>

                <div className="flex items-center gap-3 mt-4">
                  <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-white/70">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="border-b py-5 cursor-pointer"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggle(i)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>

                <IoChevronDown
                  className={`text-xl text-[#FC4248] transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
  