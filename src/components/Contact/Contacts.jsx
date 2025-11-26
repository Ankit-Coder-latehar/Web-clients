import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center">Want to Increase Admissions</h1>
      <p className="text-center mt-2 max-w-2xl text-gray-600">
        Ready to transform your business with immersive technology? Get in touch with our experts today.
      </p>

      {/* Main Container */}
      <div className="w-full max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Card */}
        <div className="bg-gradient-to-b from-[#ffe8e8] to-white rounded-3xl shadow-md p-10 border border-gray-200">
          <div className="space-y-8 text-gray-700">
            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <span>digital@techdigistics.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <span>+91 99908-13304</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6" />
              <div>
                <span className="text-red-500 font-semibold">Chandigarh</span> - <span className="font-semibold">Delhi - Haryana</span>
                <p className="text-gray-700 text-sm">
                  407, 4th Floor, Jubilee Walk, Sector 70, Chandigarh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-center mb-6">Connect With Us</h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border rounded-md px-4 py-3 w-full"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border rounded-md px-4 py-3 w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex border rounded-md overflow-hidden">
                <span className="px-4 py-3 border-r bg-gray-100">+91</span>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="px-4 py-3 w-full"
                />
              </div>

              <input
                type="text"
                placeholder="Your Website Link"
                className="border rounded-md px-4 py-3 w-full"
              />
            </div>

            <select className="border rounded-md px-4 py-3 w-full text-gray-600">
              <option>Select Service Type</option>
              <option>SEO</option>
              <option>Performance Marketing</option>
              <option>Branding</option>
            </select>

            <textarea
              placeholder="Comment"
              className="border rounded-md px-4 py-3 w-full h-32"
            ></textarea>

            {/* Fake Captcha Box */}
            <div className="border rounded-md p-3 w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border"></div>
                <span>I'm not a robot</span>
              </div>
              <div className="text-xs text-gray-500">reCAPTCHA<br />Privacy · Terms</div>
            </div>

            <button className="bg-[#ff8f8f] text-white px-8 py-2 rounded-full block mx-auto hover:bg-[#ff7b7b] transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}