import React from "react";

export default function PPCSection() {
  return (
    <div className="w-full bg-[#ffecec] rounded-2xl p-10 md:p-16 mt-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-gray-900 mb-4">
            PPC That Actually Works (No
            <br /> Bluff, Just Results)
          </h2>

          <p className="text-gray-700 mt-4 leading-relaxed">
            We Build PPC Campaigns That Feel Like Your Best Salesperson. Let's be
            honest – most PPC campaigns just burn cash. Ours? They work like your
            top-performing sales rep, bringing in ready-to-buy customers 24/7.
          </p>

          <button className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all">
            Get Your Free Campaign Review
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {[
            {
              title: "We don’t waste your money -",
              text: "Every ad dollar is tracked and optimized for maximum return",
            },
            {
              title: "We don’t guess -",
              text: "Our campaigns are built on real data about who’s actually buying",
            },
            {
              title: "We don’t set and forget -",
              text: "Your campaigns get smarter every week as we refine what works",
            },
            {
              title: "The best part?",
              text: "You’ll see the difference in your bottom line within weeks, not months.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm border border-red-100 flex gap-4"
            >
              <div className="text-red-500 text-2xl">⭐</div>
              <div>
                <p className="font-semibold text-gray-900">{item.title}</p>
                <p className="text-gray-700 text-sm mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}