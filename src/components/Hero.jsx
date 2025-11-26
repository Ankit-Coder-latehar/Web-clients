import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-[#d83434] text-white py-20 md:py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          #1 Performance Driven
          <br />
          Digital Marketing Agency for
          <br />
          Education
        </h1>

        {/* Paragraph */}
        <p className="mt-8 text-lg md:text-xl leading-relaxed opacity-95 max-w-3xl mx-auto">
          Tech Digitics committed to deliver measurable growth with focused &
          proven strategies for education brands. Helping businesses to generate
          quality leads, increase application, boost admissions. Partner with
          Google Ads certified marketing agency who turn strategy into real
          admissions. From Google Ads and Meta campaigns to SEO & landing pages,
          our team delivers full-funnel marketing solutions designed to convert
          prospects into admissions.
        </p>
      </div>
    </section>
  );
}

