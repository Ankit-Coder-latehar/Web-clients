import React, { useState } from "react";

export default function KPISection() {
  const tabs = [
    "Traffic",
    "Branding",
    "Cut Down CPL",
    "Turn Clicks Into Leads",
    "Increase ROI/ROAS",
    "Track What Matter",
  ];

  const content = {
    Traffic: {
      title: "Boost your website traffic and visibility",
      desc: "If no one’s visiting your site, no one’s converting either. Our SEO, paid ads, and content strategies are designed to drive high-quality traffic from Google, Meta, and beyond so your brand gets discovered by the right audience.",
      button: "Enhance Traffic →",
      image: "https://techdigitics.com/wp-content/uploads/2025/08/PPC-1.webp",
      items: [
        "Boost your presence with PPC & SEO services",
        "Reach active searchers who are interested in your brand",
        "Drive organic traffic from social media channels",
        "Your brand gets discovered & get more traffic",
      ],
    },

    Branding: {
      title: "Grow your brand visibility & awareness",
      desc: "We help your brand become memorable by improving visibility across search, social, and paid campaigns. From consistent messaging to impactful visuals, branding ensures long-term recognition.",
      button: "Boost Branding →",
      image: "https://techdigitics.com/wp-content/uploads/2025/08/seo-1.webp",
      items: [
        "Strengthen your brand credibility",
        "Reach wider audiences with strategic campaigns",
        "Build recognition across major platforms",
        "Position your business as an industry leader",
      ],
    },

    "Cut Down CPL": {
      title: "Reduce cost per lead & get better results",
      desc: "Smart targeting, continuous optimization, and refined messaging help your campaigns perform better at a lower cost. Get quality leads without overspending.",
      button: "Reduce CPL →",
      image: "https://techdigitics.com/wp-content/uploads/2025/08/SMO.webp",
      items: [
        "Lower your acquisition cost",
        "Target only high-intent prospects",
        "Reduce ad wastage significantly",
        "Improve conversion rate effectively",
      ],
    },

    "Turn Clicks Into Leads": {
      title: "Convert visitors into high-quality leads",
      desc: "Clicks don’t matter unless they convert. We optimize funnels, landing pages, and customer journeys to turn your traffic into real business.",
      button: "Increase Leads →",
      image: "https://techdigitics.com/wp-content/uploads/2025/08/New-Project-1-1.webp",
      items: [
        "Improve lead quality dramatically",
        "Optimize your landing pages for conversions",
        "Reduce user drop-off rates",
        "Increase form submissions & inquiries",
      ],
    },

    "Increase ROI/ROAS": {
      title: "Maximize your ROI & ad profitability",
      desc: "We make sure every rupee spent delivers measurable results. With data-driven strategies, we increase your revenue while lowering costs.",
      button: "Boost ROI →",
      image: "https://techdigitics.com/wp-content/uploads/2025/08/New-Project-2-1.webp",
      items: [
        "Achieve higher returns from ad spend",
        "Scale campaigns profitably",
        "Target audiences most likely to convert",
        "Optimize performance using real-time data",
      ],
    },

    "Track What Matter": {
      title: "Track KPIs that matter to your business",
      desc: "We set up advanced analytics, conversion tracking, and reporting dashboards so you always know how your campaigns are performing.",
      button: "Track Performance →",
      image: "https://techdigitics.com/wp-content/uploads/2025/08/PPC-1.webp",
      items: [
        "Track real business-impact metrics",
        "Custom-built dashboards & reports",
        "Monitor conversions in real-time",
        "Make data-driven decisions confidently",
      ],
    },
  };

  const [active, setActive] = useState("Traffic");

  return (
    <div className="w-full bg-white py-12 px-4 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-snug">
        Improve the KPIs That Matter Most to your Business
      </h2>

      <p className="text-gray-600 text-center max-w-3xl mt-3 mb-8 text-sm sm:text-base px-2">
        If your website lacks consistent traffic, you’re missing valuable leads and sales. Our strategic PPC campaigns boost visibility, target high-intent users, and drive qualified traffic—maximizing clicks, conversions, and ROI.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center border border-gray-200 rounded-lg overflow-hidden mb-10 w-full max-w-3xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium border-r last:border-0 transition w-1/2 sm:w-auto text-center
              ${active === tab
                ? "text-red-500 border-b-2 border-red-500 bg-white"
                : "text-gray-600 hover:bg-gray-50"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-red-100/50 to-red-50 shadow-xl rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-10">

        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
            {content[active].title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            {content[active].desc}
          </p>

          <button className="bg-gradient-to-r from-red-500 to-red-400 hover:opacity-90 text-white px-5 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base">
            {content[active].button}
          </button>
        </div>

        {/* MIDDLE IMAGE */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={content[active].image}
            alt="illustration"
            className="w-full max-w-xs sm:max-w-sm rounded-xl"
          />
        </div>

        {/* RIGHT BOXES */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {content[active].items.map((text, index) => (
            <div key={index} className="p-4 bg-white rounded-xl border text-gray-700 shadow-sm text-sm sm:text-base">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}