import React, { useContext } from "react";
import { CoinContext } from "../Context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    const value = event.target.value;

    if (value === "usd") setCurrency({ name: "usd", symbol: "$" });
    else if (value === "eur") setCurrency({ name: "eur", symbol: "€" });
    else if (value === "inr") setCurrency({ name: "inr", symbol: "₹" });
  };

  return (
    <div className="w-full border-b border-[#3c3c3c] bg-[#0b004e]/30 backdrop-blur-md sticky top-0 z-50">
      {/* CONTAINER */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="w-[130px] md:w-[150px] object-contain"
          />
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/features" className="hover:text-white transition">
              Features
            </Link>
          </li>

          <li>
            <Link to="/pricing" className="hover:text-white transition">
              Pricing
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-white transition">
              Blog
            </Link>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* CURRENCY */}
          <select
            onChange={currencyHandler}
            className="px-3 py-2 rounded-full bg-white text-black text-sm shadow-md cursor-pointer hover:scale-105 transition"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>

          {/* SIGN UP */}
          <Link to="/signup">
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-gradient-to-r from-white to-gray-100 text-black font-medium
              shadow-md border border-gray-200
              hover:scale-105 hover:shadow-xl transition"
            >
              Sign Up
              <img
                src="/src/assets/arrow_icon.png"
                alt="arrow"
                className="w-4 h-4"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
