import React from "react";

export default function EducationMarketing() {
  return (
    <div className="w-full flex justify-center py-20 bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Text Section */}
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-8">
            Specializing in Education Marketing
          </h1>

          <div className="bg-red-100 p-8 rounded-3xl shadow-sm">
            <div className="text-red-600 text-2xl mb-4">📍</div>
            <h2 className="text-xl font-semibold mb-4">Education Industry</h2>
            <p className="text-gray-700 leading-relaxed">
              We’ve worked with a wide range of sectors, but education is where we truly
              shine. From schools and colleges to coaching institutes and edtech
              platforms, we understand how to reach and engage students, parents, and
              decision-makers. Whether it’s increasing student inquiries, building a
              strong online presence, or running high-converting admission campaigns,
              we’ve helped countless institutions achieve their enrollment goals.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src="https://techdigitics.com/wp-content/uploads/2025/08/Untitled-design-7.webp"
            alt="Education Illustration"
            className="w-[420px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
