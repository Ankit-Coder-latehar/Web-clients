import React from "react";

export default function WhySeoServices() {
  return (
    <div className="w-full py-16 sm:py-20 bg-white flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-4 px-4">
        Why Businesses Need SEO Services
      </h2>
      <p className="text-gray-700 text-center max-w-2xl mb-12 sm:mb-20 text-sm sm:text-base px-4">
        We don’t just optimize – we engineer growth. Our AI-powered SEO systems are built to adapt,
        scale, and deliver performance that goes beyond rankings.
      </p>

      {/* Container */}
      <div className="relative w-full max-w-[1500px] h-[680px] sm:h-[520px] flex items-center justify-center px-4">

        {/* BG Circles (hidden on mobile for clarity) */}
        <div className="hidden sm:block absolute left-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-red-100 opacity-70"></div>
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-[420px] h-[420px] md:w-[600px] md:h-[600px] rounded-full bg-red-100 opacity-70"></div>
        <div className="hidden sm:block absolute right-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-red-100 opacity-70"></div>

        {/* Dashed Arcs (hidden on mobile) */}
        <div className="hidden sm:block absolute left-[26%] md:left-[33%] top-10 w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full border-[4px] md:border-[6px] border-dashed border-red-200"></div>
        <div className="hidden sm:block absolute right-[26%] md:right-[33%] top-10 w-[260px] h-[260px] md:w-[350px] md:h-[350px] rounded-full border-[4px] md:border-[6px] border-dashed border-red-200"></div>

        {/* TEXT CONTENT */}
        <div className="absolute w-full flex flex-col sm:flex-row justify-center sm:justify-between gap-10 sm:gap-0 px-4 sm:px-20">

          {/* LEFT TEXT */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Powered by Intelligence</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We use advanced algorithms to decode search behavior, uncover gaps, and spot
              opportunities before your competitors do.
            </p>
          </div>

          {/* CENTER TEXT */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Optimized to Perform</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              From content to code, every element is carefully refined and optimized to align
              with what both users seek and search engines.
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Built to Scale</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              With strategies that evolve alongside your business, we ensure growth that’s
              sustainable and measurable.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
