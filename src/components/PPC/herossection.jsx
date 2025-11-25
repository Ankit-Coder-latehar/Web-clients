import React from "react";

export default function TopPPCSection() {
  const partners = [
    { img: "/images.png", name: "Google Ads" },
    { img: "/Meta-Logo.png", name: "Meta" },
    { img: "/LinkedIn-Ads-logo-3.webp", name: "LinkedIn Ads" },
    { img: "/blob.png", name: "Microsoft Advertising" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-24 bg-white">

      {/* Background Squares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-100/30 border border-red-100"></div>
        <div className="absolute top-0 left-52 w-48 h-48 bg-red-100/20 border"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-red-100/30 border"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-red-100/30 border"></div>
        <div className="absolute bottom-20 right-40 w-48 h-48 bg-red-100/20 border"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <p className="text-lg text-gray-600 mb-2">
          Struggling to Fullfilling Seats & Leads Online?
        </p>
        <p className="text-lg text-gray-600 mb-6">Try Our Expert PPC Services!</p>

        <h1 className="text-5xl font-bold leading-tight mb-4">
          India's Top PPC Management <br /> Company
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          We craft high-converting campaigns on Google, Microsoft, and social
          media to reach the right audience at the right time. With full
          transparency and regular reports, we ensure every rupee delivers
          maximum ROI.
        </p>

        <button className="mt-8 hover:bg-red-600  text-black px-8 py-3 rounded-full text-lg transition">
          Get Free Audit
        </button>

        {/* Partners Section */}
        <div className="mt-14">
          <h2 className="text-2xl font-semibold text-red-500 mb-6">
            Our Partners
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((p, index) => (
              <div
                key={index}
                className="border rounded-2xl px-8 py-4 shadow-sm bg-white"
              >
                <img src={p.img} alt={p.name} className="h-10 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
