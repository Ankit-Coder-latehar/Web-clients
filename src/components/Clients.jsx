import React from "react";

export default function ClientsSection() {
  const logos = [
    "/Screenshot 2025-11-23 175211.png",
    "/Screenshot 2025-11-23 175224.png",
    "/Screenshot 2025-11-23 175238.png",
    "/Screenshot 2025-11-23 175249.png",
    "/Screenshot 2025-11-23 175258.png",
    "/Screenshot 2025-11-23 175322.png",
    "/Screenshot 2025-11-23 175333.png",
    "/Screenshot 2025-11-23 175343.png",
    "/Screenshot 2025-11-23 175352.png",
    "/Screenshot 2025-11-23 175343.png",
    "/Screenshot 2025-11-23 175404.png",
  ];

  // Duplicate array for smooth infinite effect
  const scrollingLogos = [...logos, ...logos];

  return (
    <section className="w-full py-20 bg-white">
      {/* Heading */}
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">Key Education Clients</h2>

        <p className="text-gray-700 leading-relaxed">
          We build long-term partnerships, delivering consistent results with a
          client-first mindset. We specialize in helping educational institutions
          achieve sustainable growth through strategic digital marketing.
        </p>
      </div>

      {/* Infinite Scrolling Logo Slider */}
      <div className="max-w-[1600px] mx-auto mt-12 bg-[#ffd6d6] rounded-3xl p-10 overflow-hidden relative">

        {/* Slider Track */}
        <div className="flex gap-10 animate-scroll-right">
          {scrollingLogos.map((logo, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white rounded-2xl shadow-sm p-4 flex justify-center items-center border"
            >
              <img src={logo} alt="client logo" className="h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation styles */}
      <style>{`
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scrollRight 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
