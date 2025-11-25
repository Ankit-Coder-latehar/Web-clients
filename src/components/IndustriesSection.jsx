import React from "react";

export default function IndustriesSection() {
  const industries = ["Education", "Healthcare", "Real Estate", "Tech", "Retail"];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-8">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white px-6 py-4 rounded-lg shadow">
              <span className="text-lg font-medium text-gray-800">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
