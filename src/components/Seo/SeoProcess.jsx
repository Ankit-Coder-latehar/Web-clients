import React from "react";

export default function SeoProcess() {
  const steps = [
    {
      number: "1",
      title: "On-Page SEO:",
      desc: `Optimizing your web pages to improve rankings. This includes writing tailored META\ntags for search engines to boost your ranking and optimizing your website’s content\nfor better visibility.`,
    },
    {
      number: "2",
      title: "Technical SEO:",
      desc: `Technical website optimization aligned with search engine requirements. We improve\nyour website’s code, enhance site speed, and ensure proper crawling, indexing, and\nrendering by search engines.`,
    },
    {
      number: "3",
      title: "Off-Page SEO:",
      desc: `White hat strategies to increase your site’s authority. We create promotable content\n(videos, guest posts, articles, infographics, PBs, etc.) to earn backlinks from other\nreputable sites.`,
    },
    {
      number: "4",
      title: "SEO Reporting:",
      desc: `Powered by our next-gen 24/7 platform, Digital Agency Dashboard. Track live Google\nrankings, site indexing, traffic, backlinks, and integrations with Google Search Console,\nAhrefs, Mex, and more.`,
    },
  ];

  return (
    <div className="w-full py-16 sm:py-20 bg-white flex flex-col items-center px-4 overflow-hidden">
      {/* Heading Section */}
      <div className="max-w-6xl w-full mb-10 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
          How we Help your business <br className="hidden sm:block" /> with our SEO Game
        </h2>
        <p className="text-gray-700 max-w-2xl text-sm sm:text-base mx-auto sm:mx-0">
          Our SEO experts craft data-driven strategies to boost your online visibility,
          attract quality traffic, and outrank competitors.
        </p>
      </div>

      {/* Steps Section */}
      <div className="relative w-full max-w-6xl mt-10">
        {/* CENTER LINE — desktop only */}
        <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[2px] bg-[#dcdcdc]"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-white border border-gray-100"
            >
              {/* Number Badge Diamond */}
              <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center font-semibold rotate-45 mb-5 shadow-md">
                <span className="-rotate-45 text-lg">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}