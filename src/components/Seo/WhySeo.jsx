import React from "react";

export default function WhySeoServices() {
  return (
    <div className="w-full py-20 bg-white flex flex-col items-center overflow-hidden">

      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-4">
        Why Businesses Need SEO Services
      </h2>
      <p className="text-gray-700 text-center max-w-3xl mb-20">
        We don’t just optimize – we engineer growth. Our AI-powered SEO systems are built to adapt, scale, and deliver
        performance that goes beyond rankings.
      </p>

      {/* Background Circles */}
      <div className="relative w-full max-w-[1500px] h-[520px] flex items-center justify-center">

        {/* LEFT CIRCLE */}
        <div className="absolute left-10 w-[500px] h-[500px] rounded-full bg-red-100 opacity-70"></div>

        {/* CENTER CIRCLE */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-red-100 opacity-70"></div>

        {/* RIGHT CIRCLE */}
        <div className="absolute right-10 w-[500px] h-[500px] rounded-full bg-red-100 opacity-70"></div>

        {/* LEFT DASHED ARC */}
        <div className="absolute left-[33%] top-10 w-[350px] h-[350px] rounded-full border-[6px] border-dashed border-red-200"></div>

        {/* RIGHT DASHED ARC */}
        <div className="absolute right-[33%] top-10 w-[350px] h-[350px] rounded-full border-[6px] border-dashed border-red-200"></div>

        {/* TEXT CONTENT */}
        <div className="absolute flex w-full justify-between px-20">

          {/* LEFT TEXT */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <h3 className="text-xl font-semibold mb-3">Powered by Intelligence</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We use advanced algorithms to decode search behavior, uncover gaps, and spot
              opportunities before your competitors do.
            </p>
          </div>

          {/* CENTER TEXT */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <h3 className="text-xl font-semibold mb-3">Optimized to Perform</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              From content to code, every element is carefully refined and optimized to align
              with what both users seek and search engines.
            </p>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <h3 className="text-xl font-semibold mb-3">Built to Scale</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              With strategies that evolve alongside your business, we ensure growth that’s
              sustainable and measurable.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
