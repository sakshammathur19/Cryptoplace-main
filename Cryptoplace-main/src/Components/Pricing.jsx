import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      window.alert("⚠ Please fill all fields!");
      return;
    }

    window.alert(`🎉 Welcome ${form.name}! Signup Successful`);

    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 text-white">
      {/* BIG OUTER CARD (SPACIOUS FEEL) */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 bg-[#1d152f]/80 border border-gray-700 rounded-3xl shadow-2xl p-12">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join Crypto <br /> Marketplace 🚀
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Create your account and start tracking live crypto prices, market
            trends and insights like a pro trader.
          </p>

          <div className="space-y-4 text-gray-400">
            <p>✔ Live crypto tracking</p>
            <p>✔ Portfolio insights</p>
            <p>✔ Real-time updates</p>
            <p>✔ Free starter access</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-[#0b004e]/40 border border-gray-600 rounded-2xl p-10 space-y-6 shadow-lg"
          >
            <h2 className="text-center text-2xl font-bold mb-6">
              Create Account
            </h2>

            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create password"
                className="px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-gradient-to-r from-[#4500c6] to-[#7b2ff7] rounded-lg font-semibold hover:scale-105 transition-all shadow-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
