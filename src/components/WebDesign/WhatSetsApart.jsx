import React from "react";

export default function WhatSetsApart() {
  return (
    <div className="w-full flex justify-center py-20 px-6 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
            What Sets Tech Digitics Apart
          </h1>

          <p className="text-gray-700 mt-6 leading-relaxed text-[16px]">
            At the end of the day, your website should work as hard as you do.
            It should attract the right audience, engage them with compelling
            experiences, and drive them to take action. With Tech Digitics, you
            don’t just get a website you get a powerful growth engine designed
            to maximize your ROI.
          </p>

          {/* SECTIONS */}
          <div className="mt-10 space-y-8">
            
            {/* Row 1 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Custom, Not Cookie-Cutter
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Every business is unique, and so should be its website. 
                We build fully customized designs tailored to your goals 
                and audience.
              </p>
            </div>

            {/* Row 2 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Blend of Creativity & Strategy
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Our designers and digital strategists work hand-in-hand 
                to create designs that are visually appealing and 
                business-driven.
              </p>
            </div>

            {/* Row 3 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Performance Obsessed
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                From lightning-fast load speeds to seamless navigation, 
                we obsess over performance because even a one-second delay 
                can hurt conversions.
              </p>
            </div>

            {/* Row 4 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Proven Results
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                We’ve helped 100+ businesses transform their websites into 
                revenue engines, some achieving 3x more conversions within 
                months.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="grid grid-cols-1 gap-8">

          {/* Top Left (Tall Image) */}
          <img
            src="https://techdigitics.com/wp-content/uploads/2025/09/Untitled-design-1.webp"
            alt="Team Working"
            className="w-full h-[310px] object-cover rounded-md"
          />

          {/* Right Column Grid */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://techdigitics.com/wp-content/uploads/2025/09/Untitled-design-1.webp"
              alt="Responsive Design"
              className="w-full h-[180px] object-contain rounded-md"
            />
            <img
              src="https://techdigitics.com/wp-content/uploads/2025/09/Untitled-design-1.webp"
              alt="Team Collaboration"
              className="w-full h-[180px] object-cover rounded-md"
            />
          </div>

          {/* Bottom Wide Image */}
          <img
            src="https://techdigitics.com/wp-content/uploads/2025/09/Untitled-design-1.webp"
            alt="Web Design Workstation"
            className="w-full h-[230px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
