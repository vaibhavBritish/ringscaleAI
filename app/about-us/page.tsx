import React from "react";

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
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* HERO / INTRO */}
      <section className="text-center mt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight animate-[fadeInUp_0.6s_ease-out]">
          Helping Local Business'
          <br />
          Grow{" "}
          <span className="bg-linear-to-r from-[#5F40EB]  to-[#FC4248] text-transparent bg-clip-text">
            Effortlessly
          </span>
        </h1>

        <p className="mt-8 md:mt-10 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto animate-[fadeInUp_0.7s_ease-out]">
          We are an all-in-one Marketing AI platform that delivers actual
          revenue growth for small business owners, all on auto-pilot.
        </p>
      </section>

      {/* ABOUT RINGSCALE / GROWTH STORY */}
      <section className="text-center mt-20">
        <p className="text-sm md:text-base font-medium text-indigo-500 tracking-[0.18em] uppercase animate-[fadeIn_0.6s_ease-out]">
          About Ringscale AI
        </p>
        <h1 className="mt-6 font-bold text-3xl md:text-4xl text-gray-900 animate-[fadeInUp_0.6s_ease-out]">
          We're building for small business owners
        </h1>

        <div className="max-w-6xl mx-auto mt-12 md:mt-16">
          <p className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-5xl mx-auto">
            93% of small business owners struggle to manage their marketing.
            They are losing customers to bigger brands and chains. Ringscale Media
            empowers them with the tech advantage they’ve never had, to grow and
            compete with confidence.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-16">
            <div className="rounded-3xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
              <h3 className="text-4xl font-bold bg-linear-to-r from-[#5F40EB] to-[#2BC3FF] text-transparent bg-clip-text">
                2.3+ Crore
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Micro Businesses in India
              </p>
              <div className="mt-4 h-1 w-16 bg-linear-to-r from-[#5F40EB] to-[#2BC3FF] rounded-full group-hover:w-20 transition-all" />
            </div>

            <div className="rounded-3xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
              <h3 className="text-4xl font-bold bg-linear-to-r from-[#5F40EB] to-[#2BC3FF] text-transparent bg-clip-text">
                32%+
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Contribution to India&apos;s GDP
              </p>
              <div className="mt-4 h-1 w-16 bg-linear-to-r from-[#5F40EB] to-[#2BC3FF] rounded-full group-hover:w-20 transition-all" />
            </div>

            <div className="rounded-3xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
              <h3 className="text-4xl font-bold bg-linear-to-r from-[#5F40EB] to-[#2BC3FF] text-transparent bg-clip-text">
                90%+
              </h3>
              <p className="text-lg text-gray-700 mt-2">
                Never tried Digital Marketing
              </p>
              <div className="mt-4 h-1 w-16 bg-linear-to-r from-[#5F40EB] to-[#2BC3FF] rounded-full group-hover:w-20 transition-all" />
            </div>
          </div>
        </div>
      </section>



      {/* WHY WE STARTED SECTION */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="rounded-[36px] bg-linear-to-br from-[#5F40EB] via-[#5863F8] to-[#00C2FF] p-6 md:p-10 lg:p-14 text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Why We Started <span className="text-[#FC4248]  bg-clip-text">Ringscale Media</span>
            </h2>
            <p className="mt-4 text-sm md:text-base lg:text-lg max-w-3xl mx-auto text-white/90">
              Every local business deserves to compete and grow — with the right
              tools, clear results, and zero complexity.
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-12">
            {/* Left: Problem list */}
            <div className="flex-1">
              <p className="text-xs md:text-sm font-medium mb-4 uppercase tracking-[0.18em] text-white/80">
                The problem we witnessed
              </p>

              <div className="space-y-6">
                {problems.map((item) => (
                  <div
                    key={item.number}
                    className="pb-4 border-b border-white/15 last:border-b-0"
                  >
                    <h3 className="text-base md:text-lg font-semibold mb-1 flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                        {item.number}
                      </span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-white/90">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIRING SECTION */}
      <section className="max-w-6xl mx-auto px-4 text-center mt-24 mb-24">
        <div className="inline-flex flex-col items-center gap-4 rounded-4xl border border-black/5 bg-white/80 px-6 md:px-10 py-10 md:py-14 shadow-[0_18px_60px_rgba(15,23,42,0.12)] hover:shadow-[0_24px_85px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-2">

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            We’re Hiring Builders, Doers, and Believers.
          </h2>

     
          <p className="mt-2 text-lg text-gray-700 max-w-2xl">
            We’re solving real problems — come make it happen with us.
          </p>

          
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-white text-lg font-medium bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              View All Openings
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
