import React from "react";

export default function ClientsSection() {
  const logos = [
    "https://techdigitics.com/wp-content/uploads/2025/08/mit-logo-1.webp",
    "https://techdigitics.com/wp-content/uploads/2025/08/image-12-1.png",
    "https://techdigitics.com/wp-content/uploads/2025/08/image-7-1.png",
    "https://techdigitics.com/wp-content/uploads/2025/08/image-13-1.png",
    "https://techdigitics.com/wp-content/uploads/2025/08/hindustan-online-1.webp",
    "https://techdigitics.com/wp-content/uploads/2025/08/sharda-logo-1.webp",
    "https://techdigitics.com/wp-content/uploads/2025/08/chitkara-logo-1.webp",
    "https://techdigitics.com/wp-content/uploads/2025/08/image-3-2.png",
    "https://techdigitics.com/wp-content/uploads/2025/08/image-16-1-1-e1761201166647.png",
    "https://techdigitics.com/wp-content/uploads/2025/08/gia-logo-1.webp",
    "https://techdigitics.com/wp-content/uploads/2025/08/the-sports-school-1.webp",
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
