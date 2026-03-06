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
    {id:1,desc:"Competitive salary with performance bonuses"},
    {id:2,desc:"Flexible hours and WFH options"},
    {id:3,desc:"Unlimited coffee. Always brewing"},
    {id:4,desc:"Ownership, not micromanagement"},
    {id:5,desc:"Early team advantage, grow faster"},
    {id:6,desc:"Team outings, offsites, and retreats"}
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-center py-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Create Real Impact. At Scale.{" "}
          <span className="text-[#FF3F41]">With AI.</span>
        </h1>
        <p className="font-medium text-xl md:text-sm text-justify md:text-center px-4 mt-5">
          Help local businesses grow, thrive, and compete using cutting-edge AI
          that delivers real results where it matters most.
        </p>
        <p className="font-medium text-xl md:text-md text-justify md:text-center px-4">
          At <span className="font-bold text-[#FF3F41]">Ringscale AI</span>,
          your work powers the success of thousands.
        </p>
      </section>

      <section className="text-center py-10">
        <h2 className="font-bold text-[#FF3F41] text-3xl">Our Mission</h2>
        <p className="text-gray-700 text-justify px-4 mt-4 md:text-2xl md:text-center md:text-gray-700 md:max-w-4xl md:mx-auto font-bold">
          To empower every local business with AI-driven marketing that delivers
          real growth - without the complexity, cost, or need for agencies.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-linear-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-3xl p-10 md:p-16 text-white">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-lg opacity-90">
              We believe that great work happens when talented people are
              empowered to do their best. Our culture is built on collaboration,
              innovation, and mutual respect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider mb-6 opacity-80">
                Core Values
              </p>

              <div className="space-y-6">
                {cultureValues.map((item, index) => (
                  <div key={index} className="border-b border-white/20 pb-5">
                    <h3 className="text-xl font-semibold mb-1">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-sm opacity-90">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/careers/our-culture.webp"
                alt="Team working"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-100 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Team and Make an Impact
          </h2>
          <p className="text-lg opacity-90 mb-8">
            We're always looking for passionate individuals who want to make a difference. If you're excited about our mission and culture, we'd love to hear from you!
          </p>
        </div>

        <div className="text-center mt-10">
          <h1 className="font-bold text-2xl font-serif">Perks and <span className="text-[#FF3F41]">Benefits</span></h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            We offer competitive salaries, comprehensive health benefits, flexible work arrangements, and a culture that values growth and impact. Join us and be part of something big!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            {perks.map((perk) => (
              <div key={perk.id} className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-700 font-serif font-medium">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;