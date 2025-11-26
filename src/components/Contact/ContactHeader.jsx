import React from "react";

export default function ContactHeader() {
  return (
    <div
      className="
        w-full 
        h-[280px] 
        flex flex-col 
        items-center 
        justify-center 
        text-center 
        text-white
        bg-[linear-gradient(135deg,#d4161f_0%,#e33942_40%,#f45a62_100%)]
      "
    >
      <h1 className="text-5xl font-bold mb-4">
        Contact Us
      </h1>

      <p className="text-lg max-w-3xl">
        Ready to transform your business with immersive technology? 
        Get in touch with our experts today.
      </p>
    </div>
  );
}
