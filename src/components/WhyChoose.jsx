import React from "react";
import { FaLightbulb, FaCommentDots, FaBullseye,  FaGripHorizontal } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaLightbulb className="text-4xl text-red-500" />,
      title: "Strategic Innovation",
      desc: `We design student-centric marketing strategies powered by data insights and creative storytelling. From Google Ads and SEO to social campaigns, our approach ensures your institution stands out and attracts the right students.`,
    },
    {
      icon: <FaCommentDots className="text-4xl text-red-500" />,
      title: "Clear Communication",
      desc: `We provide transparent reports, frequent updates, and direct communication with your dedicated account manager so you always know how your campaigns are performing to get maximum numbers as per seats.`,
    },
    {
      icon: <FaBullseye className="text-4xl text-red-500" />,
      title: "Advance Technology",
      desc: `With the latest marketing tools, AI-powered analytics, and automation to maximize your campaign performance and efficiency. Track student behavior, optimize campaigns in real time, and maximize your admissions ROI.`,
    },
    {
      icon: <FaGripHorizontal className="text-4xl text-red-500" />,
      title: "Proven Track Record",
      desc: `With 10Cr+ monthly ad spend managed and 100+ education clients served, our results speak for themselves. We’ve helped universities, schools, and ed-tech platforms achieve record-high admission numbers.`,
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At Tech Digictis, we specialize in education marketing that drives real admissions
          growth. From schools and universities to ed-tech platforms, we create campaigns
          that speak to students and parents, ensuring you stay ahead in a competitive
          landscape. Our blend of creativity, data, and transparency makes us the trusted
          partner for 100+ education brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-8 text-center border border-red-100 hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-50 p-4 rounded-xl">{item.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
