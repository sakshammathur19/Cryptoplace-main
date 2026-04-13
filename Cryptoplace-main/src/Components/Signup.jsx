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
      {/* MAIN WRAPPER (CENTERED BUT NOT STUCK) */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join Crypto <br /> Revolution
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Create your account and start tracking real-time crypto prices,
            market trends and insights like a pro trader.
          </p>

          <div className="space-y-4 text-gray-400">
            <p>✔ Live market tracking</p>
            <p>✔ Personalized dashboard</p>
            <p>✔ Real-time alerts</p>
            <p>✔ Free access plan</p>
          </div>
        </div>
        {/* RIGHT */}
        <div className="bg-[#1d152f]/80 border border-gray-700 rounded-2xl p-10 shadow-xl">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full mt-2 py-3 bg-gradient-to-r from-[#4500c6] to-[#7b2ff7] rounded-lg font-semibold hover:scale-105 transition"
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
