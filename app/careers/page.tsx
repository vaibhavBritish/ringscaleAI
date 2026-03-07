"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Career = () => {
  const cultureValues = [
    {
      title: "Innovation First",
      desc: "We build boldly, execute fast, and solve real problems with first-principles thinking.",
    },
    {
      title: "Get Things Done",
      desc: "We value speed, action, and momentum — progress over perfection, always.",
    },
    {
      title: "Clarity, Integrity & Accountability",
      desc: "We communicate simply and honestly. We own outcomes — good or bad.",
    },
    {
      title: "Growth Through Ownership",
      desc: "Everyone thinks like an owner — of the product, the customer, and the mission.",
    },
  ];

  const perks = [
    { id: 1, desc: "Competitive salary with performance bonuses" },
    { id: 2, desc: "Flexible hours and WFH options" },
    { id: 3, desc: "Unlimited coffee. Always brewing" },
    { id: 4, desc: "Ownership, not micromanagement" },
    { id: 5, desc: "Early team advantage, grow faster" },
    { id: 6, desc: "Team outings, offsites, and retreats" },
  ];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
  return (
   <div className="max-w-6xl mx-auto overflow-hidden">
      {/* Hero Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-rose-50/30 to-slate-50"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-[#FF3F41]/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-[#FF3F41]/20 bg-white/70 backdrop-blur px-4 py-2 text-sm font-medium text-[#FF3F41] shadow-sm mb-6"
          >
            Build the future of local business growth
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900"
          >
            Create Real Impact. At Scale.{" "}
            <span className="relative inline-block text-[#FF3F41]">
              With AI
              <span className="absolute left-0 -bottom-2 h-3 w-full rounded-full bg-[#FF3F41]/20 -z-10"></span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Help local businesses grow, thrive, and compete using cutting-edge
            AI that delivers real results where it matters most.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed"
          >
            At{" "}
            <span className="font-semibold text-[#FF3F41]">Ringscale AI</span>,
            your work powers the success of thousands.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex justify-center"
          >
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#FF3F41] to-pink-500 rounded-full shadow-md shadow-[#FF3F41]/30"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center py-14 md:py-20 px-4"
      >
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100 p-8 md:p-12">
          <h2 className="font-bold text-[#FF3F41] text-3xl md:text-4xl">
            Our Mission
          </h2>
          <p className="text-slate-700 mt-5 text-lg md:text-2xl md:text-center font-semibold leading-relaxed">
            To empower every local business with AI-driven marketing that
            delivers real growth — without the complexity, cost, or need for
            agencies.
          </p>
        </div>
      </motion.section>

      {/* Culture Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="max-w-7xl mx-auto px-4 py-10 md:py-20"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-indigo-700 to-cyan-500 rounded-[2rem] p-8 md:p-16 text-white shadow-2xl">
          <div className="absolute top-0 right-0 h-56 w-56 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 bg-pink-400/10 rounded-full blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Culture</h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              We believe that great work happens when talented people are
              empowered to do their best. Our culture is built on collaboration,
              innovation, and mutual respect.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.25em] mb-6 text-white/70">
                Core Values
              </p>

              <div className="space-y-5">
                {cultureValues.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="group border border-white/15 bg-white/10 backdrop-blur-md rounded-2xl p-5 hover:bg-white/15 hover:border-white/30"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      <span className="text-cyan-200 mr-2">0{index + 1}.</span>
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/85 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20"
            >
              <Image
                src="/careers/our-culture.webp"
                alt="Team working"
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Join Team CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-4 py-10 md:py-16"
      >
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] p-10 md:p-16 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Join Our Team and Make an Impact
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re always looking for passionate individuals who want to
            make a difference. If you&apos;re excited about our mission and
            culture, we&apos;d love to hear from you.
          </p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 inline-flex items-center rounded-full bg-[#FF3F41] px-6 py-3 text-white font-semibold shadow-lg shadow-[#FF3F41]/30 hover:bg-[#ff2f32] transition-colors"
          >
            Explore Opportunities
          </motion.button>
        </div>
      </motion.section>

      {/* Perks Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="text-center px-4 py-10 md:py-16"
      >
        <motion.h2
          variants={fadeUp}
          className="font-bold text-3xl md:text-4xl text-slate-900"
        >
          Perks and <span className="text-[#FF3F41]">Benefits</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-slate-600 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          We offer competitive salaries, comprehensive health benefits,
          flexible work arrangements, and a culture that values growth and
          impact.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto"
        >
          {perks.map((perk) => (
            <motion.div
              key={perk.id}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-100 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF3F41] via-pink-500 to-orange-400" />
              <div className="mb-4 h-12 w-12 mx-auto rounded-2xl bg-[#FF3F41]/10 flex items-center justify-center text-[#FF3F41] font-bold text-lg group-hover:rotate-6 transition-transform">
                {perk.id}
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};


export default Career;
