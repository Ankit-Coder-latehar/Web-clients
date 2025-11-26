import React from "react";

export default function AgencyCardsUI() {
  const cards = [
    {
      img: "https://images.pexels.com/photos/4754141/pexels-photo-4754141.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Agency Deck",
    },
    {
      img: "https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Agency Deck Regular Programs",
    },
    {
      img: "https://images.pexels.com/photos/7972549/pexels-photo-7972549.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Agency Deck Online Programs",
    },
    {
      img: "https://images.pexels.com/photos/1001916/pexels-photo-1001916.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Agency Deck Schools",
    },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center bg-white py-10 px-6">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {cards.map((c, index) => (
          <div key={index} className="w-full text-center">
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-[330px] object-cover rounded-lg shadow-md"
            />
            <h2 className="mt-4 text-xl font-semibold underline">{c.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
