import React from "react";

export default function HeroOnlineProgram() {
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
        {/* <p className="text-sm mb-4">
          <span className="text-red-600 font-semibold">#Website Designing.</span>{" "}
          <span className="text-gray-700">That Drive Revenue</span>
        </p> */}

        {/* Main Heading */}
        <h1 className="text-6xl font-bold text-black leading-tight">
           Agency Deck for Online Programs
        </h1>

        {/* Description */}
        {/* <p className="text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
        At Tech Digitics, we don’t believe in one-size-fits-all marketing. Every industry has its own challenges, audience behavior, and growth opportunities. That’s why our strategies are tailored to your niche—so you don’t just get clicks, you get results that move the needle. Explore how we help different industries scale with performance-driven SEO, PPC, social media, and digital campaigns.
        </p> */}


      </div>
    </div>
  );
}
