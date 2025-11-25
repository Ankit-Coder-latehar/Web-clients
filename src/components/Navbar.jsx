import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-3 shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT LOGO SECTION */}
        <div className="flex items-center gap-4">
        
          <img
            src="/google.png"
            alt="Google Partner"
            className="h-7 object-contain"
          />
        </div>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-8 text-[16px] text-gray-800 font-medium">
          <a href="/ppc"><li className="hover:text-red-500 cursor-pointer">PPC</li></a>
          <a href="/seo"><li className="hover:text-red-500 cursor-pointer">SEO</li></a>
          <a href="/webdesign"><li className="hover:text-red-500 cursor-pointer">Web Design</li></a>
          <li className="hover:text-red-500 cursor-pointer">Solutions</li>

          {/* Industries Dropdown */}
          <li className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
            Industries <IoIosArrowDown className="text-[18px]" />
          </li>

          {/* Agency Deck Dropdown */}
          <li className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
            Agency Deck <IoIosArrowDown className="text-[18px]" />
          </li>
        </ul>

        {/* CONTACT BUTTON */}
        <button className="px-7 py-2 text-white font-semibold rounded-full 
            bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 transition">
          Contact us
        </button>
      </div>
    </nav>
  );
}
