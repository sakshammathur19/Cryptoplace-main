import React from "react";

const Features = () => {
  const features = [
    {
      title: "Real-Time Prices",
      desc: "Track live cryptocurrency prices with fast updates and accurate market data.",
      icon: "📈",
    },
    {
      title: "Market Insights",
      desc: "Get detailed insights about market cap, trends, and 24h performance.",
      icon: "📊",
    },
    {
      title: "Crypto Search",
      desc: "Search any coin instantly and get detailed information in seconds.",
      icon: "🔍",
    },
    {
      title: "Secure & Fast",
      desc: "Optimized performance with secure API handling and fast loading UI.",
      icon: "⚡",
    },
    {
      title: "Currency Switch",
      desc: "Switch between USD, EUR, and INR easily for global tracking.",
      icon: "💱",
    },
    {
      title: "User Friendly UI",
      desc: "Clean, modern and responsive interface for all devices.",
      icon: "🎨",
    },
  ];

  return (
    <div className="min-h-screen px-6 md:px-12 py-14 flex flex-col items-center text-white">
      {/* HEADER */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-3xl md:text-5xl font-bold">Powerful Features</h1>
        <p className="text-gray-300 mt-4 text-sm md:text-base">
          Everything you need to track and analyze cryptocurrency markets in one
          place.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-3 w-full max-w-6xl">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#1d152f] border border-gray-700 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            {/* ICON */}
            <div className="text-3xl mb-4">{item.icon}</div>

            {/* TITLE */}
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
