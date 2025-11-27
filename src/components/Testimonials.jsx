import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sameer Arya",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEqZELkjwa6lQfQ-dC4VviR5ZZEYproyljxpOY7IklA7b-K5IMI-_hp4&s",
      text:
        "Tech Digitics demonstrates an incredible initiative and a strong dedication to his work and affiliate relationships...",
    },
    {
      name: "John Doe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4I_bVL6dOKBzbeju_NZzCvliFxQTeNy5q6LhQrlpZM5cyNuzmpBwZ_Js&s",
      text:
        "Their team consistently delivers high-quality results. The professionalism and commitment they show in every project make them a valuable partner.",
    },
    {
      name: "Emily Carter",
      image:
        "https://media.istockphoto.com/id/1763926700/photo/portrait-of-smiling-smart-school-boy-wearing-braces-on-teeth-looking-at-camera-education.jpg?s=612x612&w=0&k=20&c=kDQg5b1no9fvjtsmdme9aB-oRd3xmXroT4577FL2pb4=",
      text:
        "Outstanding service and unmatched dedication. They understand our needs deeply and always exceed expectations.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
        Testimonials
      </h2>

      <p className="text-gray-600 text-center text-sm sm:text-base max-w-2xl mb-1">
        Elevating your Brand, empowering true stories.
      </p>
      <p className="text-gray-600 text-center text-sm sm:text-base max-w-2xl mb-10">
        Real Results. Real Improvements. Real Testimonials.
      </p>

      {/* Testimonial Card */}
      <div
        className={`
          w-full max-w-4xl bg-pink-50 p-6 sm:p-8 rounded-3xl shadow-xl 
          flex flex-col sm:flex-row gap-6 sm:gap-10 items-center 
          transition-all duration-500 transform 
          ${fade ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* IMAGE */}
        <img
          src={testimonials[current].image}
          alt="client"
          className="w-36 h-36 sm:w-48 sm:h-48 object-cover rounded-xl shadow-md"
        />

        {/* TEXT */}
        <div className="flex-1 text-center sm:text-left px-2">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {`"${testimonials[current].text}"`}
          </p>
          <p className="font-semibold text-gray-900 text-lg sm:text-xl">
            {testimonials[current].name}
          </p>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              w-3 h-3 rounded-full transition-all 
              ${current === index ? "bg-red-500 scale-110" : "bg-gray-400"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
