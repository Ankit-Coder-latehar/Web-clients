import React, { useState } from "react";

export default function CaseStudySlider() {
  const slides = [
    { img: "https://www.slideegg.com/image/catalog/22324-digital-marketing-ppt-download.png" },
    { img: "https://www.slideegg.com/image/catalog/41244-digital-marketing-services-ppt.png" },
    { img: "https://www.collidu.com/media/catalog/product/img/2/6/26294c7a4cf31325e60fe552f64be0de9d30e5599cae195efa068d7bafbf51cb/digital-marketing-strategy-slide1.png" },
    { img: "https://www.slideteam.net/media/catalog/product/cache/1280x720/d/i/digital_marketing_techniques_powerpoint_presentation_slides_Slide40.jpg" },
    { img: "https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/8/8/8843f1a418dc189ecbf7a8dad03696dde6b23b23e3bf5c4cf966554bbde5b471/career-options-in-digital-marketing-mc-slide1.png" },
    { img: "https://www.collidu.com/media/catalog/product/img/1/a/1a3c3649d48c8ba01ecd1611ec8e08fbf80b9c572f126ca784fbb121e5a3f34d/benefits-of-digital-marketing-slide1.png" },
    { img: "https://www.slidegeeks.com/media/catalog/product/cache/1280x720/A/d/Advantages_Of_Digital_Marketing_Improves_Brand_Loyalty_Ppt_PowerPoint_Presentation_Icon_Layouts_Slide_1_1.jpg" },
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
