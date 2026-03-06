import Image from "next/image";
import React from "react";

const ringscaleFor = [
  "Salon Owners",
  "Gym & Fitness Centres",
  "Bakers and Cake Shops",
  "Doctors & Health Clinics",
];

const Footer = () => {
  return (
    <footer className=" text-black pt-10">
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="bg-linear-to-r from-[#FC4248] to-[#00D2FF] rounded-[36px] px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready for Real Growth?
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8">
              Marketing that brings leads, closes deals, and brings customers
              back – all on autopilot.
            </p>

            <button className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20b659] transition">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>Connect on WhatsApp</span>
            </button>
          </div>

          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/footer/bottom-card.svg"
              alt="Ringscale Media Google Business Profile performance"
              className="max-h-96 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ringscale Media Logo"
                width={160}
                height={10}
                className=" w-42 h-auto"
              />
            </div>
            <p className="text-sm text-black/70 leading-relaxed">
              Marketing AI Platform for Small Businesses that Delivers Real
              Revenue
            </p>

            <button className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20b659] transition">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>Connect on WhatsApp</span>
            </button>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-black/70 mb-4 uppercase">
              Ringscale Media For
            </h4>
            <ul className="space-y-2 text-sm text-black">
              {ringscaleFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-sm text-black">
            <div>
              <h4 className="text-xs font-semibold tracking-wide text-black/70 mb-2 uppercase">
                Featured Tool
              </h4>
              <p>GBP Booster - WhatsApp AI Agent</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wide text-black mb-2 uppercase">
                Company
              </h4>
              <ul className="space-y-1">
                <li>About us</li>
                <li>Pricing</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>

          <div className="text-sm text-black space-y-2">
            <h4 className="text-xs font-semibold tracking-wide text-black/70 mb-2 uppercase">
              Contact Us
            </h4>
            <p>
              Address: BSEL Tech Park, B 906, Sector 30A, Vashi, Navi Mumbai,
              Maharashtra 400703
            </p>
            <p>Contact Number: +91 84336 62884</p>
            <p>Email: support@Ringscale Media.ai</p>
          </div>
        </div>

        <div className="border-t  border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-400 flex flex-col md:flex-row items-center justify-center gap-6">
            <span>
              © {new Date().getFullYear()} Ringscale Media. All rights reserved.
            </span>
            <span>Terms &amp; Conditions · Privacy Policy</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
