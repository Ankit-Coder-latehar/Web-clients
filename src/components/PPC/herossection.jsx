import React from "react";

export default function TopPPCSection() {
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
          <span className="text-red-600 font-semibold">Struggling to Fullfilling Seats & Leads Online?</span>{" "}
          <span className="text-gray-700">Try Our Expert PPC Services!</span>
        </p>

        {/* Main Heading */}
        <h1 className="text-6xl font-bold text-black leading-tight">
         India's Top PPC Management Company
        </h1>

        {/* Description */}
        <p className="text-gray-700 mt-6 max-w-3xl mx-auto leading-relaxed">
          We craft high-converting campaigns on Google, Microsoft, and social media to reach the right audience at the
right time. With full transparency and regular reports, we ensure every rupee delivers maximum ROI.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition">
            Get Free Quote
          </button>
        </div>

        {/* OUR PARTNERS SECTION */}
<div className="relative z-10 w-full mt-20 flex items-center justify-center gap-8 flex-wrap">

  {/* Google Ads */}
  <div className="border border-gray-300 rounded-xl px-10 py-4 bg-white shadow-sm flex items-center justify-center">
    <img
      src="https://techdigitics.com/wp-content/uploads/2025/08/Google-Ads-1.webp"
      alt="Google Ads"
      className="h-8 object-contain"
    />
  </div>

  {/* Meta */}
  <div className="border border-gray-300 rounded-xl px-10 py-4 bg-white shadow-sm flex items-center justify-center">
    <img
      src="https://techdigitics.com/wp-content/uploads/2025/08/Meta-Ads.webp"
      alt="Meta"
      className="h-8 object-contain"
    />
  </div>

  {/* Our Partners text */}
  <h2 className="text-red-600 font-semibold text-xl">
    Our Partners
  </h2>

  {/* LinkedIn Ads */}
  <div className="border border-gray-300 rounded-xl px-10 py-4 bg-white shadow-sm flex items-center justify-center">
    <img
      src="https://techdigitics.com/wp-content/uploads/2025/08/Linkedin-ads.webp"
      alt="LinkedIn Ads"
      className="h-8 object-contain"
    />
  </div>

 

</div>


      </div>
    </div>
  );
}