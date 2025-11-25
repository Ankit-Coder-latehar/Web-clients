import React from "react";
import {
  FaPlus,
  FaStar,
  FaLaptopCode,
  FaHeadset,
  FaBuilding,
} from "react-icons/fa";

export default function MaximizeROI() {
  return (
    <section className="w-full flex justify-center py-20 bg-white">
      {/* MAIN CARD */}
      <div className="w-[90%] max-w-[1400px] rounded-3xl bg-[#ffeaea] shadow-[0_0_80px_rgba(255,0,0,0.08)] p-12">

        {/* ICON */}
        <div className="text-red-500 text-3xl mb-4">✨</div>

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-black leading-snug">
          Maximize Your ROI with{" "}
          <span className="text-red-600">Strategic Web Design</span> That Works
        </h2>

        {/* PARAGRAPH BLOCK */}
        <div className="mt-6 text-gray-700 space-y-6 leading-relaxed text-[15px] max-w-[95%]">

          <p>
            At Tech Digitics, we believe a website should be more than just a
            digital business card—it should be your most powerful marketing
            asset. In today’s digital-first world, customers don’t just judge
            you by your products or services, they judge you by the experience
            your website delivers. A slow, cluttered, or outdated site can cost
            you credibility and revenue, while a well-designed, strategically
            built website can generate leads, drive sales, and build long-term
            customer trust.
          </p>

          <p>
            That’s where we come in. Our approach to web design goes far beyond
            aesthetics. While we ensure your website looks modern, creative, and
            aligned with your brand identity, we also focus on the deeper layers
            that truly impact performance—user experience (UX), search engine
            optimization (SEO), responsiveness, and conversion-driven layouts.
            Every pixel and line of code is designed with a purpose: to help
            your business grow.
          </p>

          <p>
            Whether you want to attract new customers, capture leads, increase
            admissions, or expand your global presence, our team designs
            websites that deliver measurable results. We use proven design
            principles combined with advanced analytics and customer journey
            mapping to build sites that not only look stunning but also guide
            visitors toward taking meaningful actions—filling out a form,
            booking a consultation, or making a purchase.
          </p>
        </div>

        {/* INFO BOX */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white w-full max-w-[1200px] rounded-2xl shadow-[0_20px_50px_rgba(255,0,0,0.1)] p-8 flex items-center justify-between text-gray-800">

            {/* ITEM 1 */}
            <div className="flex items-center space-x-4">
              <FaPlus className="text-red-500 text-2xl" />
              <div>
                <p className="text-xl font-bold">16+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-center space-x-4">
              <FaStar className="text-red-500 text-2xl" />
              <div>
                <p className="text-xl font-bold">100+</p>
                <p className="text-sm text-gray-600">Clients</p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-center space-x-4">
              <FaLaptopCode className="text-red-500 text-2xl" />
              <div>
                <p className="text-xl font-bold">80+</p>
                <p className="text-sm text-gray-600">Website Delivered</p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div classname="flex items-center space-x-4">
              <FaHeadset className="text-red-500 text-2xl" />
              <div>
                <p className="text-xl font-bold">24/7</p>
                <p className="text-sm text-gray-600">Support</p>
              </div>
            </div>

            {/* ITEM 5 */}
            <div className="flex items-center space-x-4">
              <FaBuilding className="text-red-500 text-2xl" />
              <div>
                <p className="text-xl font-bold">3</p>
                <p className="text-sm text-gray-600">Offices</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
