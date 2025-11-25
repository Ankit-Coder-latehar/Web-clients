import React from "react";

export default function Goal() {
  const services = [
    {
      title: "Performance-Driven PPC Campaigns",
      text: "Need quick visibility and results? Our paid search experts craft high-converting PPC campaigns across Google and Bing that get your institution in front of the right students and parents instantly.",
    },
    {
      title: "Year-Round Social Media Optimization",
      text: "Stay top-of-mind all year. Our SMO services keep your institution’s presence consistent, relevant, and engaging—turning passive followers into active applicants.",
    },
    {
      title: "Smart Social Media Advertising",
      text: "Need quick visibility and results? Our paid search experts craft high-converting PPC campaigns across Google and Bing that get your institution in front of the right students and parents instantly.",
    },
    {
      title: "Long-Term SEO Growth",
      text: "Need quick visibility and results? Our paid search experts craft high-converting PPC campaigns across Google and Bing that get your institution in front of the right students and parents instantly.",
    },
  ];

  return (
    <div className="w-full flex justify-center py-20 bg-white">
      <div className="max-w-7xl w-full px-6">
        {/* Heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <h1 className="text-4xl font-bold leading-snug">
            Goal-Oriented Digital Marketing for  Education
          </h1>

          <p className="text-gray-700 leading-relaxed max-w-xl">
            Every institution has unique goals. We tailor our digital marketing services – SEO, PPC, Meta Ads, and SMO – to help you attract more students, increase enrollments, and grow your brand online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-red-50 transition-all duration-300 hover:bg-white shadow-sm border border-transparent hover:border-gray-300"
            >
              <div className="text-red-600 text-2xl mb-3">📍</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}