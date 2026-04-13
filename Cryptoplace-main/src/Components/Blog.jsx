import React, { useState } from "react";

const Blog = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    setFormData({ name: "", email: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 py-12 text-white">
      {/* MAIN CARD */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 bg-[#1d152f] rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Crypto Insights <br /> & Market Updates
          </h1>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Stay updated with crypto trends, market analysis, and expert
            insights. Join our community for daily updates.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <p>✔ Real-time crypto news</p>
            <p>✔ Market analysis</p>
            <p>✔ Beginner-friendly guides</p>
            <p>✔ Free weekly insights</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4 bg-[#0b004e]/40 p-6 rounded-xl border border-gray-600 shadow-lg"
          >
            {/* TITLE */}
            <h2 className="text-center font-bold text-xl md:text-2xl mb-1">
              Join Newsletter
            </h2>

            <p className="text-center text-gray-400 text-sm mb-2">
              Get latest crypto updates
            </p>

            {/* INPUTS */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4500c6] to-[#7b2ff7] hover:scale-[1.03] transition-all text-white py-3 rounded-lg font-semibold shadow-md"
            >
              Subscribe
            </button>

            {/* SUCCESS */}
            {submitted && (
              <p className="text-green-400 text-sm text-center mt-1">
                🎉 Successfully Registered!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
