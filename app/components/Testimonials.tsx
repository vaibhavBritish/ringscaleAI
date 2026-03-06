import React from "react";

const Testimonials = () => {
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
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-black">
        Real Stories, <span className="text-[#FC4248]">Real Results</span>
      </h1>
      <p className="text-center text-blue-600 mt-2 max-w-2xl mx-auto font-bold">
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
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.business}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
