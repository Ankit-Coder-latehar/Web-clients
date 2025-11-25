import { useState } from "react";

export default function EducationTabs() {
  const tabs = [
    { id: "ppc", label: "PPC" },
    { id: "seo", label: "SEO" },
    { id: "web", label: "Web Design & Development" },
    { id: "smm", label: "Social Media Marketing" },
    { id: "content", label: "Content Marketing" },
  ];

  const content = {
    ppc: {
      title: "PPC for Education",
      text: `Need fast, measurable results? Our PPC and paid advertising campaigns are designed to get your institution noticed by the right people at the right time. Whether it's Google Search, Display, or YouTube ads, or highly targeted campaigns on Facebook, Instagram, and Bing, we create ads that drive student inquiries and increase enrollments. We also offer programmatic advertising to extend your reach efficiently. Every rupee you spend is carefully planned to deliver maximum return helping you turn clicks into campus visitors.`,
      image: "https://techdigitics.com/wp-content/uploads/2025/08/New-Project.webp",
    },
    seo: {
      title: "SEO for Education",
      text: `Want your school, college, or edtech platform to rank higher and be easily found by prospective students and parents? Our SEO services cover it all – from thorough keyword research and on-page optimization to building quality backlinks and local SEO that puts your institution on the map. We also take care of technical SEO to ensure your website is fast, user-friendly, and optimized for the latest trends like voice search and schema markup. The goal? Not just better rankings, but attracting the right audience that turns into real inquiries and admissions.`,
      image: "https://techdigitics.com/wp-content/uploads/2025/08/SEO.webp",
    },
    web: {
      title: "Web Design & Development",
      text: `Your website is often the first impression families get of your institution we make sure it’s a good one. From custom designs to user friendly development on platforms like WordPress and Shopify, we build fast, mobile-responsive sites focused on converting visitors into applicants. With clear navigation and optimized layouts, your website becomes a powerful tool to capture leads and support admissions growth.`,
      image: "https://techdigitics.com/wp-content/uploads/2025/08/Web-Design.webp",
    },
    smm: {
      title: "Social Media Marketing",
      text: `We help your institution build a meaningful presence on social media through smart, consistent strategies. From organic content and paid campaigns to partnerships with influencers and community engagement, we keep your brand active and relatable. Whether your goal is to raise awareness or drive admissions, our social media marketing fosters genuine connections that grow your student base.`,
      image: "https://techdigitics.com/wp-content/uploads/2025/08/New-Project-2.webp",
    },
    content: {
      title: "Content Marketing",
      text: `Quality content is key to building trust and attracting students. We create engaging blogs, website copy, video scripts, and email campaigns tailored to your education audience. Our content isn’t just well-written it’s crafted to answer questions, build your authority, and guide prospects through their decision-making journey, ultimately boosting enrollment numbers.`,
      image: "https://techdigitics.com/wp-content/uploads/2025/08/New-Project-4.webp",
    },
  };

  const [active, setActive] = useState("ppc");

  return (
    <div className="w-full py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-3">
        Complete Digital Growth Solutions for Educational Institutions
      </h1>
      <p className="text-gray-600 max-w-4xl mx-auto mb-10">
        Whether your goal is boosting inquiries, increasing campus visits, or filling classrooms, our strategies
        align with your admission targets. With data-driven insights and proven frameworks, we help education
        brands move students smoothly from discovery to decision maximizing ROI and long-term growth.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-6 py-2 rounded-full border transition-all text-sm font-medium
              ${active === tab.id ? "bg-red-500 text-white border-red-500" : "bg-white text-black border-gray-300 hover:bg-gray-100"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-10 flex items-center justify-between gap-10">
        <div className="w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4">{content[active].title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content[active].text}</p>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            src={content[active].image}
            alt="illustration"
            className="max-w-xs object-contain"
          />
        </div>
      </div>
    </div>
  );
}