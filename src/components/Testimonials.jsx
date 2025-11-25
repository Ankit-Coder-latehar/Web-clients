import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sameer Arya",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEqZELkjwa6lQfQ-dC4VviR5ZZEYproyljxpOY7IklA7b-K5IMI-_hp4&s",
      text:
        "Tech Digitics demonstrates an incredible initiative and a strong dedication to his work and affiliate relationships. They display a unique enthusiasm and dedication to his team and responsibilities, which is crucial when assisting us. I believe that Murari & team exhibits many of the qualities that are essential for today's leadership and management and I highly recommend them.",
    },
    {
      name: "John Doe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4I_bVL6dOKBzbeju_NZzCvliFxQTeNy5q6LhQrlpZM5cyNuzmpBwZ_Js&s",
      text:
        "Their team consistently delivers high‑quality results. The professionalism and commitment they show in every project make them a valuable partner.",
    },
    {
      name: "Emily Carter",
      image: "https://media.istockphoto.com/id/1763926700/photo/portrait-of-smiling-smart-school-boy-wearing-braces-on-teeth-looking-at-camera-education.jpg?s=612x612&w=0&k=20&c=kDQg5b1no9fvjtsmdme9aB-oRd3xmXroT4577FL2pb4=",
      text:
        "Outstanding service and unmatched dedication. They understand our needs deeply and always exceed expectations.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="w-full flex flex-col items-center py-10 bg-white">
      <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
      <p className="text-gray-600 text-center mb-2">
        Elevating your Brand, empowering true stories: Our Digital Impact, as Told by Our Valued Clients.
      </p>
      <p className="text-gray-600 text-center mb-10">
        Real Results, Real Improvements, Real Testimonials.
      </p>

      <div className="w-full max-w-5xl bg-pink-50 p-8 rounded-2xl shadow flex gap-6 items-center transition-all duration-500">
        <img
          src={testimonials[current].image}
          alt="client"
          className="w-48 h-48 object-cover rounded-md"
        />

        <div className="flex-1">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{`"${testimonials[current].text}"`}</p>
          <p className="font-semibold text-gray-900 text-xl">{testimonials[current].name}</p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-5">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
