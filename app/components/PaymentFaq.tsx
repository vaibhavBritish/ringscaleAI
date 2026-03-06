import React, { useState } from "react";

const faqs = [
  {
    question: "What is included in the Ringscale Media AI Subscription?",
    answer:
      "The subscription includes access to all core AI agents, campaign automation, analytics dashboard, standard integrations, and ongoing product updates."
  },
  {
    question: "How much does the Ringscale Media AI Subscription cost?",
    answer:
      "Our standard pricing is ₹15,000 per quarter or ₹60,000 per year (GST exclusive). Custom pricing is available for larger teams or multi-location businesses."
  },
  {
    question: "Are there any long-term contracts or commitments?",
    answer:
      "No long-term lock-ins. You can choose quarterly or yearly billing. You’re free to cancel at the end of your current billing cycle."
  },
  {
    question: "Do I need to pay separately for updates or new features?",
    answer:
      "No. All regular product updates and improvements are included in your active subscription at no extra cost."
  },
  {
    question: "What if I want to upgrade or downgrade my plan later?",
    answer:
      "You can upgrade or downgrade at any time. Changes are applied from your next billing cycle, and charges are adjusted accordingly."
  },
  {
    question: "Is there a free trial or demo available?",
    answer:
      "Yes. You can book a free demo with our team to see Ringscale Media in action and clarify all your questions before subscribing."
  },
  {
    question: "Can multiple team members use the same subscription?",
    answer:
      "Yes. You can add multiple team members under the same business account with role-based access controls."
  },
  {
    question: "How do I make the payment for my subscription?",
    answer:
      "We accept UPI, credit/debit cards, net banking, and most major payment gateways. Invoices are emailed after every successful payment."
  }
];

const PaymentFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-blue-600 md:text-4xl font-bold text-center mb-10">
        Payment Frequently Asked Questions
      </h2>

      <div className="border-t border-b border-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-b-0 border-gray-200">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <span className="text-base md:text-lg text-gray-700">
                {faq.question}
              </span>

              <span className="ml-4 text-gray-500">
                <svg
                  className={`h-5 w-5 text-[#FD3C3B] transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            {openIndex === index && (
              <div className="pb-5 pr-10 text-sm md:text-base text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentFaq;