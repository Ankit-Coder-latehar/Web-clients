import React from "react";

const services = [
  {
    img: "https://techdigitics.com/wp-content/uploads/2025/08/Google-Logo.webp",
    title: "Google Ads",
  },
  {
    img: "https://techdigitics.com/wp-content/uploads/2025/08/Meta-Logo.webp",
    title: "Meta Ads",
  },
  {
    img: "https://techdigitics.com/wp-content/uploads/2025/08/Linkedin-logo.webp",
    title: "LinkedIn Ads",
  },
  {
    img: "https://techdigitics.com/wp-content/uploads/2025/08/Microsoft-logo.webp",
    title: "Microsoft Ads",
  },
  {
    img: "https://techdigitics.com/wp-content/uploads/2025/08/Quora-logo.webp",
    title: "Quora Ads",
  },
  {
    img: "https://techdigitics.com/wp-content/uploads/2025/08/Programmatic-Ads-logo.webp",
    title: "Programmatic Ads",
  },
  {
    img: "https://techdigitics.com/wp-content/uploads/2025/08/Youtube-logo.webp",
    title: "YouTube Ads",
  },
  {
    img: "https://techdigitics.com/wp-content/uploads/2025/08/Snapchat-logo-1.webp",
    title: "Snapchat Ads",
  },
];

export default function ServicesAdsCampaign() {
  return (
    <div className="w-full py-10">
      <h2 className="text-center text-3xl font-bold mb-3">
        Services We Offer in Ads Campaign
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We are a results-driven PPC agency committed to delivering measurable
        growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-red-50 hover:bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md transition"
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-14 object-contain mb-3"
            />
            <p className="font-semibold text-gray-800 text-lg">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
