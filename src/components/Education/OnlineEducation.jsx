export default function OnlineVsOfflineMarketing() {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="max-w-7xl w-full">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center">
          Online vs Offline Education Marketing
        </h1>
        <p className="text-center text-gray-600 mt-2">
          A smart education marketing strategy blends the best of both worlds.
        </p>

        {/* Cards Container */}
        <div className="mt-12 bg-white shadow-lg rounded-3xl p-10 relative">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* ---------------- LEFT (Online) ---------------- */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">Online Marketing</h2>
              <p className="text-gray-600 mb-6">
                Online marketing allows education brands to connect with a wider, more
                targeted audience using data-driven strategies.
              </p>

              {/* Bullet List */}
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-red-500 text-xl">✔</span>
                  Scalable and cost-effective reach across regions
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 text-xl">✔</span>
                  Targeted campaigns based on interests, behavior, and location
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 text-xl">✔</span>
                  Real-time tracking and measurable results
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 text-xl">✔</span>
                  Ideal for lead generation, brand building, and fast visibility
                </li>
              </ul>
            </div>

            {/* ---------------- RIGHT (Offline) ---------------- */}
            <div className="bg-red-50 rounded-2xl p-8">
              <h2 className="text-3xl font-semibold mb-4">Offline Marketing</h2>
              <p className="text-gray-600 mb-6">
                Offline marketing helps schools and EdTech brands create trust and credibility
                through personal, real-world engagement.
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-red-500 text-xl">✔</span>
                  Builds trust through face-to-face connections
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 text-xl">✔</span>
                  Adds a personal, human touch to your brand
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 text-xl">✔</span>
                  Effective for local community and ground-level outreach
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 text-xl">✔</span>
                  Ideal for events, seminars, and traditional institutions
                </li>
              </ul>
            </div>

          </div>

          {/* Horizontal Line */}
          <hr className="my-10" />

          {/* Pro Tip Section */}
          <div className="flex gap-3 items-start">
            <span className="text-red-500 text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-lg">Pro Tip</h3>
              <p className="text-gray-600 mt-1">
                The smartest strategy is a well-balanced mix—combining the personal touch of
                offline with the scalability of digital.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
