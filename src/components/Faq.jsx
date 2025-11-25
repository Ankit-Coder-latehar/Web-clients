import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How can Tech Digitics help increasing student admissions?",
      a: "We create targeted campaigns across Google, Meta, and LinkedIn to reach students and parents actively searching for courses, boosting inquiries and conversions for your institution.",
    },
    {
      q: "What makes Tech Digitics different from other education marketing agencies?",
      a: "We offer data-backed strategies, real-time optimization, multi-channel targeting, and full-funnel tracking for maximized results.",
    },
    {
      q: "How long does it take to see results from digital marketing?",
      a: "PPC results can begin within days, while SEO and brand-building efforts typically take a few months for strong long-term growth.",
    },
    {
      q: "Do you work with businesses of all sizes?",
      a: "Yes, from small institutes to large universities, we customize strategies that suit your goals and budget.",
    },
    {
      q: "How do you measure campaign success?",
      a: "We track leads, conversions, CPL, ROI, user behavior, and platform-specific metrics with transparent reporting.",
    },
    {
      q: "What is included in your free audit?",
      a: "We analyze your online presence, ad accounts, website performance, competitors, and growth opportunities.",
    },
    {
      q: "Can you handle seasonal admission campaigns with urgency?",
      a: "Absolutely. We specialize in fast, high-impact campaigns designed to meet seasonal admission peaks.",
    },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(i === openIndex ? -1 : i);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-14 bg-white text-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Frequently Asked Questions
      </h2>

      <p className="text-center max-w-3xl text-gray-600 text-sm md:text-base mb-10">
        Whether you’re curious about our services, pricing, or process – our FAQs cover it all.
        Find quick, clear answers to help you make informed decisions about partnering with Tech Digitics.
      </p>

      <div className="w-full max-w-5xl flex flex-col gap-3">
        {faqs.map((item, i) => (
          <div key={i} className="w-full border rounded-xl overflow-hidden bg-white shadow-sm">
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-medium hover:bg-gray-50 transition"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl font-bold">{openIndex === i ? "−" : "+"}</span>
                {item.q}
              </span>
            </button>

            {/* Answer */}
            {openIndex === i && (
              <div className="px-12 pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}