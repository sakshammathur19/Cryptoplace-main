import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1d152f] text-gray-300 mt-28">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* LOGO + DESC */}
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="w-32 object-contain" />

            <p className="text-gray-400 text-sm leading-relaxed">
              Track crypto prices, analyze trends, and stay updated with
              real-time market insights.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link className="hover:text-white transition" to="/">
                Home
              </Link>
              <Link className="hover:text-white transition" to="/features">
                Features
              </Link>
              <Link className="hover:text-white transition" to="/pricing">
                Pricing
              </Link>
              <Link className="hover:text-white transition" to="/blog">
                Blog
              </Link>
            </div>
          </div>

          {/* RESOURCES */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Resources</h3>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-white transition">
                Support
              </a>
              <a href="#" className="hover:text-white transition">
                Documentation
              </a>
              <a href="#" className="hover:text-white transition">
                API Guide
              </a>
              <a href="#" className="hover:text-white transition">
                FAQs
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect</h3>

            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:scale-110 transition">
                📘
              </a>
              <a href="#" className="hover:scale-110 transition">
                🐦
              </a>
              <a href="#" className="hover:scale-110 transition">
                📸
              </a>
              <a href="#" className="hover:scale-110 transition">
                💼
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              Follow us for updates & insights
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CryptoTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
