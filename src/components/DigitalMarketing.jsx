import React from "react";
import { motion } from "framer-motion";

export default function MarketingSection() {
  return (
    <div className="w-full bg-white text-black flex flex-col items-center px-4 py-10 md:py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Goal-Oriented Digital Marketing Services
      </h2>

      {/* Description */}
      <p className="text-center max-w-4xl text-sm md:text-base text-gray-700 leading-relaxed">
        Every business has its own journey and its own set of goals. We offer a
        flexible mix of digital services designed to meet your specific needs,
        whether that means getting more traffic, generating quality leads, or
        increasing sales. Need quick results? Our PPC team creates
        high-performing campaigns on Google and Bing to get your brand in front
        of the right people fast. Want to grow your presence on social? We run
        targeted Meta Ads across Facebook and Instagram that actually connect.
        Our Social Media Optimization (SMO) keeps your brand active, engaging,
        and top-of-mind. And when it comes to long-term growth, our SEO
        strategies help you move up the search rankings and stay ahead.
      </p>

      {/* ------------------------ CARD 1 (PPC) ------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full mt-12 border border-red-200 rounded-3xl p-6 md:p-10 bg-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Left - Text Box */}
        <div className="w-full md:w-1/2 border rounded-2xl p-6 shadow-sm bg-white">
          <h3 className="text-2xl font-semibold mb-4">
            PPC/ Paid Marketing Solutions
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Looking to drive quick, measurable results? Our PPC and paid
            advertising services are designed to do just that. From Google Ads
            including Search, Display, and Shopping to high-impact Facebook,
            Instagram, Bing, and YouTube campaigns, we help your brand get seen
            by the right people at the right time. We also offer programmatic
            advertising for broader, AI-powered reach across the web. Every
            campaign is backed by smart, ROI-focused budget allocation, ensuring
            your ad spend goes further. With us, it’s not just about clicks—it's
            about driving real business growth.
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/mnt/data/Screenshot 2025-11-24 221603.png"
            alt="online advertising"
            className="w-full max-w-md rounded-xl"
          />
        </div>
      </motion.div>

      {/* ------------------------ CARD 2 (SEO) ------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full mt-12 border border-red-200 rounded-3xl p-6 md:p-10 bg-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Left - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/mnt/data/e5a9f541-2e56-4fc2-956a-a5284569c6d3.png"
            alt="seo optimization"
            className="w-full max-w-md rounded-xl"
          />
        </div>

        {/* Right - Text Box */}
        <div className="w-full md:w-1/2 border rounded-2xl p-6 shadow-sm bg-white">
          <h3 className="text-2xl font-semibold mb-4">
            SEO / Search Engine Optimization
          </h3>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Want to rank higher and get found by the right audience? Our SEO
            services cover everything from smart keyword research and on-page
            fixes to powerful backlinks and local SEO that puts you on the map.
            We handle technical SEO to keep your site fast and search-friendly,
            and optimize for voice search and schema so you stay ahead of the
            curve. We don’t just improve rankings — we drive real, measurable
            growth. And because search behavior is constantly evolving, we stay
            ahead with voice search optimization and AI-driven content
            strategies so your brand ranks higher.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
