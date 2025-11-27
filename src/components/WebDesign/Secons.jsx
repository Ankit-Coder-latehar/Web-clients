import React from "react";
import {
  FaPlus,
  FaStar,
  FaLaptopCode,
  FaHeadset,
  FaBuilding,
} from "react-icons/fa";

export default function MaximizeROI() {
  const stats = [
    { icon: <FaPlus className="text-red-500 text-2xl" />, value: "16+", label: "Years Experience" },
    { icon: <FaStar className="text-red-500 text-2xl" />, value: "100+", label: "Clients" },
    { icon: <FaLaptopCode className="text-red-500 text-2xl" />, value: "80+", label: "Website Delivered" },
    { icon: <FaHeadset className="text-red-500 text-2xl" />, value: "24/7", label: "Support" },
    { icon: <FaBuilding className="text-red-500 text-2xl" />, value: "3", label: "Offices" },
  ];

  return (
    <section className="w-full flex justify-center py-16 bg-white px-4">
      {/* MAIN CARD */}
      <div className="w-full max-w-[1400px] rounded-3xl bg-[#ffeaea] shadow-[0_0_80px_rgba(255,0,0,0.08)] p-6 sm:p-10 md:p-12">

        {/* ICON */}
        <div className="text-red-500 text-3xl mb-3 sm:mb-4">✨</div>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
          Maximize Your ROI with{" "}
          <span className="text-red-600">Strategic Web Design</span> That Works
        </h2>

        {/* PARAGRAPH BLOCK */}
        <div className="mt-6 text-gray-700 space-y-5 text-[15px] leading-relaxed max-w-[900px]">
          <p>
            At Tech Digitics, we believe a website should be more than just a
            digital business card—it should be your most powerful marketing
            asset...
          </p>

          <p>
            That’s where we come in. Our approach to web design goes far beyond
            aesthetics...
          </p>

          <p>
            Whether you want to attract new customers, capture leads,
            increase admissions, or expand your global presence...
          </p>
        </div>

        {/* INFO BOX */}
        <div className="mt-10 flex justify-center">
          <div className="
            bg-white w-full max-w-[1200px] rounded-2xl 
            shadow-[0_20px_50px_rgba(255,0,0,0.1)]
            p-6 sm:p-8 
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8
            text-gray-800
          ">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3">
                {item.icon}
                <div>
                  <p className="text-lg sm:text-xl font-bold">{item.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
