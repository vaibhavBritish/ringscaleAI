// components/LeadForm.tsx
"use client";

import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consent: boolean;
};

const LeadForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setIsSuccess(null);

    try {
      const res = await fetch("/api/leadform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsSuccess(false);
        setResponseMessage(data.message || "Submission failed.");
        return;
      }

      setIsSuccess(true);
      setResponseMessage(data.message || "Lead submitted successfully.");

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      setIsSuccess(false);
      setResponseMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#FB3A37] md:text-3xl">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Fill out the form and we will contact you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
            />
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-4">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-300"
              required
            />
            <label htmlFor="consent" className="text-sm text-slate-600">
              I agree to the collection and processing of my personal data for
              contact and business communication purposes. *
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit "}
          </button>

          {responseMessage && (
            <p
              className={`text-sm ${
                isSuccess ? "text-green-600" : "text-red-600"
              }`}
            >
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default LeadForm;