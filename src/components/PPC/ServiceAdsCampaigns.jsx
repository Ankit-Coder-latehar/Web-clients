import React from "react";

const services = [
  {
    img: "/google.png",
    title: "Google Ads",
  },
  {
    img: "/meta.png",
    title: "Meta Ads",
  },
  {
    img: "/linkedin.png",
    title: "LinkedIn Ads",
  },
  {
    img: "/microsoft.png",
    title: "Microsoft Ads",
  },
  {
    img: "/quora.png",
    title: "Quora Ads",
  },
  {
    img: "/programmatic.png",
    title: "Programmatic Ads",
  },
  {
    img: "/youtube.png",
    title: "YouTube Ads",
  },
  {
    img: "/snapchat.png",
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
            className="bg-red-50 rounded-xl shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md transition"
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
