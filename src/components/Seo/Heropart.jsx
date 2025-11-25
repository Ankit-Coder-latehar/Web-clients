import React from "react";

export default function HeroPart() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Background Blocks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Generate multiple floating blocks */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-200/70 border border-red-200"
            style={{
              width: `${80 + (i % 3) * 20}px`,
              height: `${80 + (i % 3) * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-black text-white text-xs px-4 py-1 rounded-full mb-5">
          <span className="opacity-80">Powered</span>
          <span className="bg-red-500 text-white px-2 py-0.5 rounded-full">SEO</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-5xl mb-6">
          AI-Powered SEO: Maximize Your Rankings & Traffic Growth
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl text-lg mb-10">
          Smart SEO is essential for online success. We use AI-powered strategies to boost your rankings and drive traffic, no matter your business size or industry.
          Our experts combine advanced algorithms with tailored planning to optimize your website inside and out. With guaranteed results and flexible packages, we help you grow with confidence.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow">
            Get Free Audit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow">
            About
          </button>
        </div>
      </div>
    </div>
  );
}