import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Blog from "./Components/Blog";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834] text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 pt-24 pb-16  px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coins />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
