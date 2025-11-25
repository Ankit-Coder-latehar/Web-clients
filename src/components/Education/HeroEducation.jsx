import React from "react";

export default function HeroEducation() {
  // Background squares (light red translucent blocks)
  const squares = [
    "top-10 left-10", "top-20 left-60",
    "top-40 left-1/4", "top-5 left-1/3",
    "top-24 left-1/2", "top-10 right-40",
    "top-32 right-20", "bottom-40 left-20",
    "bottom-32 left-1/3", "bottom-20 left-1/2",
    "bottom-48 right-1/4", "bottom-20 right-10",
  ];

  return (
    <div className="relative w-full py-24 overflow-hidden bg-white">

      {/* Background Blocks */}
      {squares.map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-20 h-20 bg-red-200/20`}
        ></div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">

        {/* Hashtag line */}
        <p className="text-sm mb-4">
          <span className="text-red-600 font-semibold">#Grow Admissions.</span>{" "}
          <span className="text-gray-700">Build a Trusted Brand. Stay Ahead in 2026</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-black leading-tight">
       Growth-Focused Digital Marketing for Education
        </h1>

        {/* Description */}
        <p className="text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
       Struggling to get more student inquiries or fill seats consistently? You’re not alone the education space is more competitive than ever. At Tech Digitics, we specialize in digital marketing for schools, colleges, coaching institutes, and edtech brands that need more than just visibility they need results. 
        </p>

      <div className="mt-10">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition">
            Get Free Quote
          </button>
        </div>

      </div>
    </div>
  );
}
