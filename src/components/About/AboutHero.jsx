import React from "react";
import { FaUserTie, FaRupeeSign, FaStar, FaChartLine, FaBuilding } from "react-icons/fa";

export default function AboutHero() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CONTENT  */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mb-6">
            Maximize ROI with Strategic Digital Marketing <br /> Service
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Tech Digitics, we say – just showing up online isn’t enough without end result.
            You need every click, scroll, and impression to actually do something for your 
            business. That’s where we come in.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We’ve helped over 100+ businesses. How? With personalized game plans that turn
            browsers into buyers and clicks into customers. Whether it’s ads, search, social,
            email, or display we know how to connect your brand with the people who matter.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            We craft smart ROI-driven digital marketing strategies built around your goals. 
            No fluff just focused execution that gets results. Everything we do is backed 
            by real data & constant optimization. No guesswork, just performance.
          </p>
        </div>

        {/* RIGHT STATS BOX */}
        <div className="bg-red-50 rounded-3xl p-10 shadow-md">
          <div className="space-y-10">

            {/* Stat 1 */}
            <div className="flex items-center gap-6">
              <FaUserTie className="text-red-500 text-4xl" />
              <div>
                <h3 className="text-4xl font-bold text-red-600">16+</h3>
                <p className="text-gray-700 text-lg">Years Of Experience</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-6">
              <FaRupeeSign className="text-red-500 text-4xl" />
              <div>
                <h3 className="text-4xl font-bold text-red-600">10Cr+</h3>
                <p className="text-gray-700 text-lg">Monthly Ad Spend</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-6">
              <FaStar className="text-red-500 text-4xl" />
              <div>
                <h3 className="text-4xl font-bold text-red-600">20M+</h3>
                <p className="text-gray-700 text-lg">Leads Delivered</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-6">
              <FaChartLine className="text-red-500 text-4xl" />
              <div>
                <h3 className="text-4xl font-bold text-red-600">100+</h3>
                <p className="text-gray-700 text-lg">Education Brands Scaled</p>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-6">
              <FaBuilding className="text-red-500 text-4xl" />
              <div>
                <h3 className="text-3xl font-bold text-red-600">3 Offices</h3>
                <p className="text-gray-700 text-lg">
                  Chandigarh | Delhi | Gurugram
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
