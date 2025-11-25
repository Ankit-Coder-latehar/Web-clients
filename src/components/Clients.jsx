import React from "react";

export default function ClientsSection() {
  // Replace these with image URLs
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
    "/logos/logo12.png",
    "/logos/logo13.png",
    "/logos/logo14.png",
    "/logos/logo15.png",
    "/logos/logo16.png",
    "/logos/logo17.png",
    "/logos/logo18.png",
  ];

  return (
    <section className="w-full py-20 bg-white">
      {/* Heading */}
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">
          Key Education Clients
        </h2>

        <p className="text-gray-700 leading-relaxed">
          We build long-term partnerships, delivering consistent results with a
          client-first mindset. We’re all about collaboration, shared success,
          and treating your business like our own. Expert edu agency scaling
          admissions & optimising budget. We specialize in helping educational
          institutions achieve sustainable growth through strategic digital
          marketing. As a Google Partner Agency, we leverage advanced analytics,
          automation, and campaign optimization to ensure every click counts.
        </p>
      </div>

      {/* Logos Container */}
      <div className="max-w-7xl mx-auto mt-12 bg-[#ffd6d6] rounded-3xl p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-4 flex justify-center items-center border"
            >
              <img
                src={logo}
                alt="client logo"
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
