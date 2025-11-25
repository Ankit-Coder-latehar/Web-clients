import React from "react";

export default function ExpertiseInAds() {
  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Our Expertise in Ads
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE TEXT SECTION */}
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold">Industry-Leading PPC Specialists</h3>
            <p className="text-gray-600 mt-1">
              We stay ahead of trends, algorithm updates, and platform changes ensuring your
              campaigns are always optimised for maximum ROI.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Strategic Campaign Planners</h3>
            <p className="text-gray-600 mt-1">
              We don’t just run ads, we build long-term PPC strategies that align with your long
              term goals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Channel-Specific Experts</h3>
            <p className="text-gray-600 mt-1">
              From Google Search to Meta Ads and LinkedIn, our team specialises in crafting
              channel-specific campaigns that drive qualified leads for education brands.
            </p>
          </div>

          {/* Bottom Red Links */}
          <div className="flex gap-8 text-red-600 font-semibold">
            <a href="#" className="hover:underline text-red-600">About Us →</a>
            <a href="#" className="hover:underline">Our Results →</a>
            <a href="#" className="hover:underline">100+ Clients →</a>
          </div>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-red-200 rounded-3xl p-6 bg-white">
              <h3 className="text-xl font-semibold">16-Years</h3>
              <p className="text-gray-600 text-sm">Track Record</p>
            </div>
            <div className="border border-red-200 rounded-3xl p-6 bg-white">
              <h3 className="text-xl font-semibold">10 Cr+</h3>
              <p className="text-gray-600 text-sm">Monthly PPC Budget Management</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-red-200 rounded-3xl p-6 bg-white">
              <h3 className="text-xl font-semibold">90% +</h3>
              <p className="text-gray-600 text-sm">Client Retention Rate</p>
            </div>
            <div className="border border-red-200 rounded-3xl p-6 bg-white">
              <h3 className="text-xl font-semibold">Office Presence</h3>
              <p className="text-gray-600 text-sm">Chandigarh | Delhi | Gurugram</p>
            </div>
          </div>

          {/* Partners Bar */}
          <div className="bg-red-50 border border-red-100 rounded-3xl py-4 px-6 flex justify-center gap-8 items-center">
            <img src="/images.png" alt="Google Ads" className="h-8" />
            <img src="/Meta-Logo.png" alt="Meta" className="h-8" />
            <img src="/blob.png" alt="Microsoft" className="h-8" />
            <img src="/LinkedIn-Ads-logo-3.webp" alt="LinkedIn" className="h-8" />
          </div>

          <p className="text-center text-gray-700 mt-4">Partner with</p>
        </div>
      </div>
    </section>
  );
}
