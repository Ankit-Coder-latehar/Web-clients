import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";

// Global timers for smooth delay
let openTimeout;
let closeTimeout;

export default function Navbar() {
  const [openIndustry, setOpenIndustry] = useState(false);
  const [openAgencyDeck, setOpenAgencyDeck] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white py-2 shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between relative">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-4">
          <img
            src="/Screenshot 2025-11-29 103601.png"
            alt="Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] text-gray-800 font-medium relative">

          <a href="/" className="relative">
            <li className="hover:text-red-500 cursor-pointer">
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full"></span>
              )}
            </li>
          </a>

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

          {/* Industries (Smooth Dropdown) */}
          <li
            className="relative"
            onMouseEnter={() => {
              clearTimeout(closeTimeout);
              openTimeout = setTimeout(() => setOpenIndustry(true), 120);
            }}
            onMouseLeave={() => {
              clearTimeout(openTimeout);
              closeTimeout = setTimeout(() => setOpenIndustry(false), 150);
            }}
          >
            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
              Industries <IoIosArrowDown className="text-[18px]" />
            </div>

            {openIndustry && (
              <div
                className="absolute top-7 left-0 w-44 bg-white shadow-lg border rounded-md py-2 z-20
                         transition-all duration-200 ease-out transform opacity-100 translate-y-0"
                style={{ animation: "fadeSlide 0.22s ease-out" }}
              >
                <a
                  href="/education"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Education
                </a>
              </div>
            )}
          </li>

          {/* Agency Deck (Smooth Dropdown) */}
          <li
            className="relative"
            onMouseEnter={() => {
              clearTimeout(closeTimeout);
              openTimeout = setTimeout(() => setOpenAgencyDeck(true), 120);
            }}
            onMouseLeave={() => {
              clearTimeout(openTimeout);
              closeTimeout = setTimeout(() => setOpenAgencyDeck(false), 150);
            }}
          >
            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer">
              Agency Deck <IoIosArrowDown className="text-[18px]" />
            </div>

            {openAgencyDeck && (
              <div
                className="absolute top-7 left-0 w-52 bg-white shadow-lg border rounded-md py-2 z-20
                         transition-all duration-200 ease-out transform opacity-100 translate-y-0"
                style={{ animation: "fadeSlide 0.22s ease-out" }}
              >
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

        {/* CONTACT BUTTON (DESKTOP) */}
        <a href="/contact" className="hidden md:block">
          <button className="px-7 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 transition">
            Contact us
          </button>
        </a>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden text-3xl" onClick={() => setMobileMenu(true)}>
          <IoMenu />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg p-6 z-50 flex flex-col gap-6 animate-slide-left">

            {/* Close Button */}
            <button className="text-3xl self-end" onClick={() => setMobileMenu(false)}>
              <IoClose />
            </button>

            {/* Mobile Links */}
            <a href="/" className="py-2 text-lg border-b">Home</a>
            <a href="/ppc" className="py-2 text-lg border-b">PPC</a>
            <a href="/seo" className="py-2 text-lg border-b">SEO</a>
            <a href="/webdesign" className="py-2 text-lg border-b">Web Design</a>
            <a href="/solutions" className="py-2 text-lg border-b">Solutions</a>

            {/* Industries Accordion */}
            <div>
              <button
                onClick={() => setOpenIndustry(!openIndustry)}
                className="w-full flex justify-between py-2 text-lg border-b"
              >
                Industries <IoIosArrowDown />
              </button>
              {openIndustry && (
                <div className="pl-4 py-2">
                  <a href="/education" className="block py-1">Education</a>
                </div>
              )}
            </div>

            {/* Agency Deck Accordion */}
            <div>
              <button
                onClick={() => setOpenAgencyDeck(!openAgencyDeck)}
                className="w-full flex justify-between py-2 text-lg border-b"
              >
                Agency Deck <IoIosArrowDown />
              </button>
              {openAgencyDeck && (
                <div className="pl-4 py-2">
                  <a href="/regular" className="block py-1">Regular Program</a>
                  <a href="/online" className="block py-1">Online Program</a>
                </div>
              )}
            </div>

            <a href="/contact">
              <button className="w-full mt-4 px-7 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-red-500 to-pink-500">
                Contact us
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

