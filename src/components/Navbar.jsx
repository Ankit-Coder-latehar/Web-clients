import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [openIndustry, setOpenIndustry] = useState(false);
  const [openAgencyDeck, setOpenAgencyDeck] = useState(false);

  const location = useLocation(); // <-- get current URL path

  // helper function for active check  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white py-2 shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between relative">
        
        {/* LEFT LOGO SECTION */}
        <div className="flex items-center gap-4">
          <img
            src="/TM.png"
            alt="Google Partner"
            className="h-20 object-contain"
          />
        </div>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-8 text-[16px] text-gray-800 font-medium relative">

          <a href="/ppc" className="relative">
            <li className="hover:text-red-500 cursor-pointer">
              PPC
              {isActive("/ppc") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full"></span>
              )}
            </li>
          </a>

          <a href="/seo" className="relative">
            <li className="hover:text-red-500 cursor-pointer">
              SEO
              {isActive("/seo") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full"></span>
              )}
            </li>
          </a>

          <a href="/webdesign" className="relative">
            <li className="hover:text-red-500 cursor-pointer">
              Web Design
              {isActive("/webdesign") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full"></span>
              )}
            </li>
          </a>

          <a href="/solutions" className="relative">
            <li className="hover:text-red-500 cursor-pointer">
              Solutions
              {isActive("/solutions") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full"></span>
              )}
            </li>
          </a>

          {/* Industries Dropdown */}
          <li
            className="relative flex items-center gap-1 hover:text-red-500 cursor-pointer"
            onMouseEnter={() => setOpenIndustry(true)}
            onMouseLeave={() => setOpenIndustry(false)}
          >
            Industries <IoIosArrowDown className="text-[18px]" />

            {isActive("/education") && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full"></span>
            )}

            {openIndustry && (
              <div className="absolute top-7 left-0 bg-white shadow-lg border rounded-md w-44 py-2 z-20">
                <a
                  href="/education"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Education
                </a>
              </div>
            )}
          </li>

          {/* Agency Deck Dropdown */}
          <li
            className="relative flex items-center gap-1 hover:text-red-500 cursor-pointer"
            onMouseEnter={() => setOpenAgencyDeck(true)}
            onMouseLeave={() => setOpenAgencyDeck(false)}
          >
            Agency Deck <IoIosArrowDown className="text-[18px]" />

            {(isActive("/regular") || isActive("/online")) && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full"></span>
            )}

            {openAgencyDeck && (
              <div className="absolute top-7 left-0 bg-white shadow-lg border rounded-md w-52 py-2 z-20">
                <a
                  href="/regular"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Regular Program
                </a>
                <a
                  href="/online"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Online Program
                </a>
              </div>
            )}
          </li>
        </ul>

        {/* CONTACT BUTTON */}
        <a href="/contact">
          <button className="px-7 py-2 text-white font-semibold rounded-full 
            bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 transition">
            Contact us
          </button>
        </a>
      </div>
    </nav>
  );
}
