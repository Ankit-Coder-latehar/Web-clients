import React, { useState } from "react";

export default function SeoExpertise() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Research", "Optimization", "Technical", "Local/Global", "Analytics"];

  // Default reusable card content (you will replace for each tab later)
  const cardContents = [
    {
      title: "AI-Powered Keyword Research",
      description:
        "We use AI-driven tools to discover keywords that bring real traffic and match user intent, ensuring your content reaches the right audience.",
      points: [
        "Identify high-traffic, low-competition keywords",
        "Analyze competitor keyword strategies",
        "Align keyword selection with search trends",
      ],
      image: "https://techdigitics.com/wp-content/uploads/2025/09/Seo-Page.webp", // replace later
    },

    // Optimization Tab Content
    {
      title: "Smart On-Page & Content Optimization",
      description:
        "We fine-tune your content structure, meta elements, and media to ensure maximum visibility on search engines.",
      points: [
        "Optimize meta tags, headings, and internal links",
        "Enhance content quality with semantic keywords",
        "Improve site speed and mobile responsiveness",
      ],
      image: "https://techdigitics.com/wp-content/uploads/2025/09/Seo-Page-1.webp", // replace later
    },

    // Other tabs (same card initially—you will update later)
    {
      title: "Technical SEO Enhancements",
      description:
        "Improve crawling, indexing, site performance, and overall technical health for better search visibility.",
      points: [
        "Fix indexing & crawl issues",
        "Implement structured data",
        "Boost Core Web Vitals",
      ],
      image: "https://techdigitics.com/wp-content/uploads/2025/09/Seo-Page-2.webp",
    },
    {
      title: "Local & Global SEO Strategy",
      description:
        "Boost your presence in local searches while building global authority for wider reach.",
      points: [
        "Optimize Google Business Profile",
        "Strengthen local citations",
        "Develop geo-targeted content",
      ],
      image: "https://techdigitics.com/wp-content/uploads/2025/09/Seo-Page-3.webp",
    },
    {
      title: "Advanced SEO Analytics",
      description:
        "Track performance with AI insights and optimize every step backed by real data.",
      points: [
        "Monitor keyword rankings",
        "Analyze user behavior",
        "Measure ROI & conversions",
      ],
      image: "https://techdigitics.com/wp-content/uploads/2025/08/Flux_Dev_Two_sleek_website_dashboards_positioned_side_by_side__1-1.png",
    },
  ];

  const card = cardContents[activeTab];

  return (
    <div className="w-full py-14 flex flex-col items-center bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-2">
        Our Expertise in SEO
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Driving results through data, strategy, and AI-powered precision.
      </p>

      {/* Tabs */}
      <div className="flex gap-0 border rounded-xl overflow-hidden shadow-sm mb-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-10 py-3 text-sm font-semibold transition 
              ${
                activeTab === index
                  ? "bg-white text-black border-b-2 border-red-400"
                  : "bg-red-50 text-gray-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white shadow-[0_8px_40px_rgba(255,0,0,0.08)] rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE CONTENT */}
        <div className="flex-1">
          <div className="text-red-500 mb-3 text-xl">✦</div>

          <h3 className="text-3xl font-bold mb-4">{card.title}</h3>

          <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
            {card.description}
          </p>

          <ul className="space-y-3">
            {card.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700">
                <span className="text-red-500 text-lg">✔</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1">
          <img
            src={card.image}
            alt="SEO"
            className="rounded-xl w-full h-full object-cover shadow"
          />
        </div>
      </div>
    </div>
  );
}
