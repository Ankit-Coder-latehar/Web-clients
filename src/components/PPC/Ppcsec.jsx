import React from "react";

export default function PPCSection() {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabItems = [
    // Tab 1
    [
      {
        title: "Specialists, Not Generalists –",
        text: "Running Google Ads is different from LinkedIn or TikTok ads. Look for platform-specific expertise.",
      },
      {
        title: "Transparency You Can Trust –",
        text: "You should get logins to your ad accounts (no 'black box' strategies). Weekly reports should show exactly where every rupee goes.",
      },
      {
        title: "Chemistry Matters –",
        text: "You’ll work closely with them. If their team feels like order-takers instead of strategic partners, keep looking.",
      },
      {
        title: "ROI Obsession –",
        text: "We care about your profit, not just ‘clicks’ or ‘impressions.’ If they’re not asking about your customer lifetime value, walk away.",
      },
      {
        title: "Real Results, Not Just Promises –",
        text: "Ask for case studies with screenshots of actual ad accounts. Any agency can say they ‘increase conversions’ – prove it.",
      },
      {
        title: "Quality Leads, Not Just Traffic",
        text: "We don’t just drive traffic - we bring you high-intent leads that are ready to take action.",
      },
    ],

    // Tab 2 (PPC Services Explained)
    [
      {
        title: "PPC (Pay-Per-Click)",
        text: "PPC is like putting your business in front of hungry buyers at the exact moment they’re searching for what you sell.",
      },
      {
        title: "Exact Pain Point Targeting",
        text: "A business owner scrolls LinkedIn → Sees your solution for their exact pain point.",
      },
      {
        title: "Pay Only for Clicks",
        text: "You only pay when someone actually clicks – no billboards wasting money on disinterested audiences.",
      },
      {
        title: "Search Intent Advantage",
        text: "Someone types ‘best running shoes for flat feet’ on Google → Your ad appears above organic results.",
      },
      {
        title: "Local Buyer Intent",
        text: "A local mom searches ‘pediatric dentist near me’ → Your clinic pops up with a click-to-call button.",
      },
      {
        title: "Built for Conversions",
        text: "It’s targeted, measurable, and built to turn clicks into customers fast.",
      },
    ],
    // Tab 3 (How a PPC Agency Fuels Your Growth)
[
  {
    title: "Smart Account Structure",
    text: "Ever seen an ad account with 50 campaigns and no strategy? We build lean, high-converting architectures.",
  },
  {
    title: "Bidding Like Stock Traders",
    text: "Manual bids during key hours, automated rules for nights/weekends, and constant adjustments based on performance.",
  },
  {
    title: "Deep-Dive Research",
    text: "We analyze your past data (if any), competitors, and customer behavior to find hidden opportunities.",
  },
  {
    title: "Landing Page Optimization",
    text: "Because sending traffic to a broken page is like hosting a party but locking the front door.",
  },
  {
    title: "Ad Copy That Converts",
    text: "Not just “professional” but actually persuasive. We test emotional vs. rational angles to see what resonates.",
  },
  {
    title: "Real Results",
    text: "We don’t “set and forget.” Every click, keyword, and creative is monitored, tweaked, and improved to squeeze out maximum ROI.",
  },
],

  ];

  // Correct: dynamically use active tab data
  const items = tabItems[activeTab];

  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      <h1 className="text-4xl font-extrabold text-center mb-4">
        Finding a PPC Partner Who Actually Grows Your Business
      </h1>

      <p className="text-gray-600 max-w-3xl text-center mb-8">
        Most agencies love talking about impressions and clicks. But your business needs more than vanity metrics. The right PPC partner aligns with your goals,
        proves results with data, and treats your ad spend responsibly. Here’s how to spot one.
      </p>

      {/* Navigation Tabs */}
      <div className="flex gap-6 border-b mb-10">
        <button 
          onClick={() => setActiveTab(0)} 
          className={`pb-2 font-semibold ${activeTab === 0 ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
        >
          How to Choose PPC Agency
        </button>

        <button 
          onClick={() => setActiveTab(1)} 
          className={`pb-2 font-semibold ${activeTab === 1 ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
        >
          PPC Services Explained
        </button>

        <button 
  onClick={() => setActiveTab(2)} 
  className={`pb-2 font-semibold ${activeTab === 2 ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
>
  How a PPC Agency Fuels Your Growth
</button>

        
        <button className="pb-2 text-gray-500">Why PPC?</button>
      </div>

      {/* Main Section */}
      <div className="bg-white shadow rounded-2xl p-10 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-4">
          How to Choose the Right PPC Agency – A No-Nonsense Guide
        </h2>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Let’s be real – not all PPC companies are created equal. Some just take your money and let campaigns run on autopilot. Others (like us) treat your ad
          spend like it’s our own money. Here’s what truly matters when picking a partner:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="border rounded-xl p-6 bg-white shadow-sm">
              <p className="font-semibold text-red-600 mb-1">{item.title}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
