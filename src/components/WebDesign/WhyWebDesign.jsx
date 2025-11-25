import React from "react";

export default function WebDesignExactUI() {
  return (
    <div className="w-full flex justify-center bg-[#fdeaea] py-20 px-6">
      <div className="max-w-7xl w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl p-10 border border-[#ffdddd]">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Illustration */}
          <div>
            <img
              src="https://techdigitics.com/wp-content/uploads/2025/09/three-e1756815697462.png"
              alt="Illustration"
              className="w-full rounded-xl"
            />
          </div>

          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Goal-Oriented Web Design <br /> Services That Drive Results
            </h1>

            <p className="text-gray-700 mt-5 leading-relaxed text-[15px]">
              Every brand has its own story and your website should reflect that. At
              Tech Digitics, we don’t believe in cookie-cutter templates or generic
              designs. Instead, we craft websites that are built around your
              specific business goals whether that’s attracting more leads,
              boosting engagement, or driving sales. From strategic layouts and
              clear calls-to-action to seamless navigation and integrated lead
              capture, every element is planned to support real growth. Whether
              you’re launching something new or revamping an old site, we’ll help
              you create a digital experience that works hard for your business,
              day and night.
            </p>

            <button className="mt-8 bg-[#ff5c5c] hover:bg-[#ff4242] text-white px-10 py-3 rounded-full text-lg font-medium shadow-md transition-all">
              Get Quote
            </button>
          </div>
        </div>

        {/* CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md border border-[#ffdede] p-6">
            <h3 className="text-xl font-bold text-gray-900">
              Web Design & Development
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed text-[15px]">
              Your website is more than just a digital presence—it’s often the
              first impression people have of your business. Whether you’re
              starting from scratch or need a redesign, we focus on clean design,
              smooth navigation, and strong calls to action that turn visitors
              into leads or customers. Every site we create is responsive,
              fast-loading, and built to match your brand’s personality and
              goals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md border border-[#ffdede] p-6">
            <h3 className="text-xl font-bold text-gray-900">Landing Pages That Convert</h3>
            <p className="text-gray-700 mt-2 leading-relaxed text-[15px]">
              Need a page that sells, signs up, or generates leads? We create
              focused landing pages that guide your visitors toward taking action.
              Simple layouts, attention-grabbing headlines, persuasive content,
              and strong calls-to-action all come together to deliver better
              results without distractions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md border border-[#ffdede] p-6">
            <h3 className="text-xl font-bold text-gray-900">
              Site Speed & Performance Optimization
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed text-[15px]">
              A slow site is a deal-breaker. We make sure your site runs fast on
              all devices by compressing files, optimizing images, and improving
              technical elements that affect load times. Better performance means
              a better experience and better results.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md border border-[#ffdede] p-6">
            <h3 className="text-xl font-bold text-gray-900">
              Website Maintenance & Ongoing Support
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed text-[15px]">
              Once your site is live, we’re still here. Whether it’s updates,
              backups, or quick fixes, we offer reliable support to keep your site
              safe, secure, and running without issues. No technical headaches—just
              peace of mind.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

