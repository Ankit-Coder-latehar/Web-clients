import React from "react";

export default function EducationCards() {
  const cards = [
    {
      title: "Universities",
      icon: "📚",
      text: "We help universities to fill all empty seats with result driven digital marketing strategies that connects.",
    },
    {
      title: "Colleges",
      icon: "🏢",
      text: "Driving high-quality inquiries and building strong brand presence for faster property conversions.",
    },
    {
      title: "Schools",
      icon: "👜",
      text: "Boosting brand visibility & scale admissions of your school with our targeted digital marketing campaigns.",
    },
    {
      title: "Institutes",
      icon: "✈️",
      text: "Inspiring more bookings with data-driven campaigns that reach travelers across their journey.",
    },
    {
      title: "Online Programs",
      icon: "💡",
      text: "Helping online programs grow visibility, leads, and user acquisition through smart digital strategies.",
    },
    {
      title: "Boarding Schools",
      icon: "🏫",
      text: "Maximizing no. of admissions with performance-led marketing designed for boarding schools.",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-white py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-6 flex gap-4 items-start transition-all duration-300 hover:bg-red-300 hover:text-white cursor-pointer"
          >
            <div className="text-red-600 text-3xl hover:text-white transition-all duration-300">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}