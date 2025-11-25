import React from "react";

export default function Growth() {
  const cards = [
    {
      title: "Hyper-Targeted Campaigns",
      text: "Reach students and parents who are actively searching for your courses, programs, or institution.",
    },
    {
      title: "Results That Matter",
      text: "Our focus is on the metrics that impact admissions leads, applications, and confirmed enrollments.",
    },
    {
      title: "Optimized for ROI",
      text: "Every ad is data-driven and conversion-focused to ensure you get the most out of every rupee spent.",
    },
  ];

  return (
    <div className="w-full flex justify-center py-20 bg-white">
      <div className="max-w-7xl w-full bg-red-50 rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <div className="text-red-600 text-2xl mb-4">📍</div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Focus on the <br /> Metrics That Drive
          </h1>
          <h1 className="text-4xl font-bold text-red-600 mb-6">
            Admissions & Growth
          </h1>

          <p className="text-gray-700 leading-relaxed max-w-lg">
            Smart digital advertising isn’t just about getting clicks ,It’s about attracting the
            right students, generating qualified inquiries, and increasing enrollments.
            With targeted PPC campaigns across Google, YouTube, and social
            platforms, we ensure your institution appears exactly where and when it
            matters most.
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="flex flex-col gap-6">
          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl max-w-xl"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}