import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#9b3b3b] to-[#c62828] text-white py-14 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="font-bold text-lg mb-4">Tech Digitics</h2>
          <p className="text-sm leading-6">
            Tech Digitics committed to deliver measurable growth with focused &
            proven strategies for education brands. Helping businesses to generate
            quality leads, increase application, boost admissions.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About us</a></li>
            <li><a href="/contact" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h2 className="font-bold text-lg mb-4">Solutions</h2>
          <ul className="space-y-2 text-sm">
            <li>PPC</li>
            <li>SEO</li>
            <li>Web Design</li>
            <li>SMO</li>
          </ul>
        </div>

        {/* Partner With */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg mb-4 text-center">Partner With</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <img
              src="https://techdigitics.com/wp-content/uploads/2025/08/Google-Ads-1.webp"
              alt="partner1"
              className="w-32  bg-white p-2 rounded shadow"
            />
            <img
              src="https://techdigitics.com/wp-content/uploads/2025/08/Meta-Ads.webp"
              alt="partner2"
              className="w-32  bg-white p-2 rounded shadow"
            />
            <img
              src="https://techdigitics.com/wp-content/uploads/2025/08/Linkedin-ads.webp"
              alt="partner3"
              className="w-32 bg-white p-2 rounded shadow"
            />
            <img
              src="https://techdigitics.com/wp-content/uploads/2025/08/Microsoft-Ads.webp"
              alt="partner4"
              className="w-32 bg-white p-2 rounded shadow"
            />
          </div>

          <h2 className="font-bold text-lg text-center mb-4">Follow us</h2>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="#" className="hover:text-gray-300">🔗</a>
            <a href="#" className="hover:text-gray-300">📸</a>
            <a href="#" className="hover:text-gray-300">📘</a>
            <a href="#" className="hover:text-gray-300">▶️</a>
          </div>
        </div>
      </div>
    </footer>
  );
}