import React from "react";

export default function WebDesignHero() {
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
          <span className="text-red-600 font-semibold">#Website Designing.</span>{" "}
          <span className="text-gray-700">That Drive Revenue</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl font-bold text-black leading-tight">
          Website Design & Development Company
        </h1>

        {/* Description */}
        <p className="text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
          At Tech Digitics, we don’t just build good websites we create platforms 
          that drive real results. Every page, button, and line of code is designed 
          with purpose: to attract the right audience, guide them seamlessly, and 
          turn interest into admissions or leads. It’s not just design; it’s your 
          digital growth engine.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition">
            Get Free Quote
          </button>
        </div>

      </div>
    </div>
  );
}
