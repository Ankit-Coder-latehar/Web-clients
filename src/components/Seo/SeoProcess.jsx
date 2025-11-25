import React from "react";

export default function SeoProcess() {
  const steps = [
    {
      number: "1",
      title: "On-Page SEO:",
      desc: `Optimizing your web pages to improve rankings. This includes writing tailored META 
tags for search engines to boost your ranking and optimizing your website’s content 
for better visibility.`,
    },
    {
      number: "2",
      title: "Technical SEO:",
      desc: `Technical website optimization aligned with search engine requirements. We improve 
your website’s code, enhance site speed, and ensure proper crawling, indexing, and 
rendering by search engines.`,
    },
    {
      number: "3",
      title: "Off-Page Seo:",
      desc: `White hat strategies to increase your site’s authority. We create promotable content 
(videos, guest posts, articles, infographics, PBs, etc.) to earn backlinks from other 
reputable sites.`,
    },
    {
      number: "4",
      title: "SEO Reporting:",
      desc: `Powered by our next-gen 24/7 platform, Digital Agency Dashboard. Track live Google 
rankings, site indexing, traffic, backlinks, and integrations with Google Search Console, 
Ahrefs, Mex, and more.`,
    },
  ];

  return (
    <div className="w-full py-20 bg-white flex flex-col items-center">
      
      {/* Heading Section */}
      <div className="max-w-6xl w-full mb-10">
        <h2 className="text-4xl font-bold text-black leading-snug mb-5">
          How we Help your business <br /> with our SEO Game
        </h2>

        <p className="text-gray-700 max-w-2xl">
          Our SEO experts craft data-driven strategies to boost your online visibility,
          attract quality traffic, and outrank competitors
        </p>
      </div>

      {/* Steps Section */}
      <div className="relative w-full max-w-6xl mt-10">

        {/* CENTER LINE */}
        <div className="absolute top-[22px] left-0 right-0 h-[2px] bg-[#dcdcdc]"></div>

        {/* Steps Grid */}
        <div className="grid grid-cols-4 gap-10 text-center relative z-10">

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">

              {/* Number Badge in Diamond Shape */}
              <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center font-semibold rotate-45 mb-5">
                <span className="-rotate-45">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>

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
