"use client"

import Image from "next/image";
import React from "react";
import { motion, cubicBezier } from "framer-motion";

const AboutUs = () => {
  const team = [
    {
      name: "Ashutosh Kumar",
      role: "CEO",
      desc1: "IITB Class of 2012",
      desc2: "Built Testbook Team: 0 to 1000+ Employees",
      img: "/team/ashutosh.png", // replace with your image path
    },
    {
      name: "Narendra Agrawal",
      role: "CMO",
      desc1: "IITB Class of 2012",
      desc2: "Grew Testbook Revenue from 0 to $30Mn ARR",
      img: "/team/narendra.png",
    },
    {
      name: "Ayush Varshney",
      role: "CTO",
      desc1: "IITK Class of 2014",
      desc2: "Led 100+ Tech team for Testbook & Classplus",
      img: "/team/ayush.png",
    },
    {
      name: "Arpit Oswal",
      role: "CPO",
      desc1: "IITB Class of 2012",
      desc2: "Built and scaled Testbook App – 10mn+ Downloads",
      img: "/team/arpit.png",
    },
  ];

  const problems = [
    {
      number: "1.",
      title: "No Marketing Skills",
      desc: "Local business owners are great at what they do — but digital marketing feels confusing and out of reach.",
    },
    {
      number: "2.",
      title: "High Agency Costs",
      desc: "Good agencies charge ₹2–8L/month, which most small businesses simply can’t afford.",
    },
    {
      number: "3.",
      title: "Unreliable Budget Options",
      desc: "Low-cost freelancers often disappear, underdeliver, or don’t get how local businesses work.",
    },
    {
      number: "4.",
      title: "Tools Not Built for Them",
      desc: "Most tools are made for big teams — not for owners handling everything on their own.",
    },
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    }),
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    }),
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    }),
  };
  return (
 <div className="max-w-6xl mx-auto px-4">
      <motion.section
        className="text-center mt-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          variants={fadeUp}
          custom={0.1}
        >
          Helping Local Business&apos;
          <br />
          Grow{" "}
          <motion.span
            className="bg-linear-to-r from-[#5F40EB] to-[#FC4248] text-transparent bg-clip-text bg-[length:200%_200%]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Effortlessly
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-8 md:mt-10 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto"
          variants={fadeUp}
          custom={0.2}
        >
          We are an all-in-one Marketing AI platform that delivers actual
          revenue growth for small business owners, all on auto-pilot.
        </motion.p>
      </motion.section>

      <motion.section
        className="text-center mt-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p
          className="text-sm md:text-base font-medium text-indigo-500 tracking-[0.18em] uppercase"
          variants={fadeUp}
          custom={0}
        >
          About Ringscale AI
        </motion.p>

        <motion.h1
          className="mt-6 font-bold text-3xl md:text-4xl text-gray-900"
          variants={fadeUp}
          custom={0.1}
        >
          We&apos;re building for small business owners
        </motion.h1>

        <div className="max-w-6xl mx-auto mt-12 md:mt-16">
          <motion.p
            className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-5xl mx-auto"
            variants={fadeUp}
            custom={0.2}
          >
            93% of small business owners struggle to manage their marketing.
            They are losing customers to bigger brands and chains. Ringscale
            Media empowers them with the tech advantage they’ve never had, to
            grow and compete with confidence.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-16">
            {[
              {
                value: "2.3+ Crore",
                text: "Micro Businesses in India",
              },
              {
                value: "32%+",
                text: "Contribution to India&apos;s GDP",
              },
              {
                value: "90%+",
                text: "Never tried Digital Marketing",
              },
            ].map((item, index) => (
              <motion.div
                key={item.value}
                className="rounded-3xl border border-black/5 bg-white shadow-sm p-6 group"
                variants={fadeUp}
                custom={0.15 * index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-4xl font-bold bg-linear-to-r from-[#5F40EB] to-[#2BC3FF] text-transparent bg-clip-text">
                  {item.value}
                </h3>
                <p
                  className="text-lg text-gray-700 mt-2"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
                <motion.div
                  className="mt-4 h-1 w-16 bg-linear-to-r from-[#5F40EB] to-[#2BC3FF] rounded-full"
                  whileHover={{ width: 96 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto px-4 mt-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        custom={0}
      >
        <motion.div
          className="rounded-[36px] bg-linear-to-br from-[#5F40EB] via-[#5863F8] to-[#00C2FF] p-6 md:p-10 lg:p-14 text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)]"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.35 }}
        >
          <div className="text-center mb-10">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              variants={fadeUp}
              custom={0.1}
            >
              Why We Started <span>Ringscale Media AI</span>
            </motion.h2>

            <motion.p
              className="mt-4 text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-white/90"
              variants={fadeUp}
              custom={0.2}
            >
              Every local business deserves to compete and grow — with the right
              tools, clear results, and zero complexity.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeLeft}
              custom={0.2}
            >
              <p className="text-xs md:text-sm font-medium mb-4 uppercase tracking-[0.18em] text-white/80">
                The problem we witnessed
              </p>

              <div className="space-y-6">
                {problems.map((item, index) => (
                  <motion.div
                    key={item.number}
                    className="pb-4 border-b border-white/15 last:border-b-0"
                    variants={fadeLeft}
                    custom={0.2 + index * 0.1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ x: 8 }}
                  >
                    <h3 className="text-base md:text-lg font-semibold mb-1 flex items-start gap-2">
                      <motion.span
                        className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold"
                        whileHover={{ scale: 1.12 }}
                      >
                        {item.number}
                      </motion.span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-white/90">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeRight}
              custom={0.3}
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/about-us/founding-story1.webp"
                alt="Problem Illustration"
                width={500}
                height={300}
                className="mt-2 rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto px-4 text-center mt-24 mb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0}
      >
        <motion.div
          className="inline-flex flex-col items-center gap-4 rounded-[2rem] border border-black/5 bg-white/80 backdrop-blur-md px-6 md:px-10 py-10 md:py-14 shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ duration: 0.35 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900"
            variants={fadeUp}
            custom={0.1}
          >
            We’re Hiring Builders, Doers, and Believers.
          </motion.h2>

          <motion.p
            className="mt-2 text-lg text-gray-700 max-w-2xl"
            variants={fadeUp}
            custom={0.2}
          >
            We’re solving real problems — come make it happen with us.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.3}>
            <motion.a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white text-lg font-medium bg-blue-600 shadow-md"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              View All Openings
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
