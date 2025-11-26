import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MarketingSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.4", "end 0.2"],
  });

  // This controls the sticky overlap movement
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white text-black px-4 py-20 md:py-32"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Goal-Oriented Digital Marketing Services
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 mt-4">
          Every business has its own journey and its own set of goals…
        </p>
      </div>

      {/* STACKING CARDS CONTAINER */}
      <div className="relative w-full max-w-6xl mx-auto space-y-20">
        {/* CARD 1 */}
        <motion.div
          style={{ y }}
          className="sticky top-28 border border-red-200 rounded-3xl p-10 bg-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 border rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                PPC / Paid Marketing Solutions
              </h3>
              <p className="text-gray-700">
                Looking to drive quick, measurable results? Our PPC and paid advertising services are designed to do just that. From Google Ads including Search, Display, and Shopping to high-impact Facebook, Instagram, Bing, and YouTube campaigns, we help your brand get seen by the right people at the right time. We also offer programmatic advertising for broader, AI-powered reach across the web. Every campaign we run is backed by smart, ROI-focused budget allocation, ensuring your ad spend goes further. With us, it’s not just about clicks it’s about driving real business growth.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://techdigitics.com/wp-content/uploads/2025/08/PPC-1.webp"
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          style={{ y }}
          className="sticky top-28 border border-red-200 rounded-3xl p-10 bg-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://techdigitics.com/wp-content/uploads/2025/08/seo-1.webp"
                className="w-full max-w-md rounded-xl"
              />
            </div>

            <div className="w-full md:w-1/2 border rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                SEO / Search Engine Optimization
              </h3>
              <p className="text-gray-700">
                Want to rank higher and get found by the right audience? Our SEO services cover everything from smart keyword research and on-page fixes to powerful backlinks and local SEO that puts you on the map. We handle technical SEO to keep your site fast and search-friendly, and optimize for voice search and schema so you stay ahead of the curve. We don’t just improve rankings we drive real, measurable growth. And because search behavior is constantly evolving, we stay ahead with voice search optimization, AI-driven content strategies, so your brand ranks higher.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SAME LOGIC FOR ALL OTHER CARDS — you just wrap each card in the same motion.div */}
          <motion.div
          style={{ y }}
          className="sticky top-28 border border-red-200 rounded-3xl p-10 bg-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 border rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
                Social Media Solutions
              </h3>
              <p className="text-gray-700">
In today’s digital world, students don’t just search for universities they follow, watch, and engage with them. That’s where our education-focused social media marketing services come in. At Tech Digitics, we help universities, colleges, and edtech institutions build powerful social media identities that connect with students, parents, and educators across platforms like Instagram, Facebook, LinkedIn, and YouTube. Whether it’s increasing applications, highlighting campus life, or building thought leadership, every piece of content we create aligns with your admission and branding goals.              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://techdigitics.com/wp-content/uploads/2025/08/SMO.webp"
                className="w-full max-w-md rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          style={{ y }}
          className="sticky top-28 border border-red-200 rounded-3xl p-10 bg-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://techdigitics.com/wp-content/uploads/2025/08/New-Project-1-1.webp"
                className="w-full max-w-md rounded-xl"
              />
            </div>

            <div className="w-full md:w-1/2 border rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">
Web Design & Development Solutions              </h3>
              <p className="text-gray-700">
Your website is your digital storefront, and we make sure it leaves a great first impression. From custom designs to WordPress and Shopify development, we build sites that look good and work even better. With a focus on user experience, conversion optimization, and mobile responsiveness, we create fast-loading websites that turn visitors into customers. And we don’t stop at launch we continuously analyze performance, track visitor behavior, and refine user journeys to maximize impact. Because at Tech Digitics, we believe a great website isn’t just built it’s strategically engineered for growth.              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

