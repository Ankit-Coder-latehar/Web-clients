import React, { useState } from "react";

export default function CaseStudySlider() {
  const slides = [
    { img: "/Screenshot 2025-11-26 155803.png" },
    { img: "/Screenshot 2025-11-26 155819.png" },
    { img: "/Screenshot 2025-11-26 155833.png" },
    { img: "/Screenshot 2025-11-26 155850.png" },
    { img: "/Screenshot 2025-11-26 155909.png" },
    { img: "/Screenshot 2025-11-26 155924.png" },
    { img: "/Screenshot 2025-11-26 155950.png" },
  ];

  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10">

      {/* Smaller Fixed Frame */}
      <div className="w-[90%] max-w-5xl h-[500px] bg-white shadow-lg border border-gray-300 relative overflow-hidden flex items-center justify-center">

        {/* Red Border Corners */}
        <div className="absolute top-0 left-0 w-14 h-2 bg-red-600"></div>
        <div className="absolute top-0 right-0 w-14 h-2 bg-red-600"></div>
        <div className="absolute bottom-0 left-0 w-14 h-2 bg-red-600"></div>
        <div className="absolute bottom-0 right-0 w-14 h-2 bg-red-600"></div>

        {/* Slide Image */}
        <img
          src={slides[index].img}
          alt="Slide"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8 mt-6">
        <button
          onClick={previous}
          className="px-4 py-2 bg-white border rounded-full shadow text-lg"
        >
          ‹
        </button>

        <div className="text-lg font-semibold">
          {index + 1} / {slides.length}
        </div>

        <button
          onClick={next}
          className="px-4 py-2 bg-white border rounded-full shadow text-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
}
