import React from "react";

export default function StatsSection() {
  const stats = [
    { label: "Years of Experience", value: "16+" },
    { label: "Monthly Ad Spend", value: "10 Cr+" },
    { label: "Leads Delivered", value: "20 M+" },
    { label: "Education Brands Scaled", value: "100+" },
    { label: "Offices", value: "3 (Chandigarh | Delhi | Gurugram)" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
