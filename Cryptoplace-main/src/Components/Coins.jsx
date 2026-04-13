import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../Context/CoinContext";
import Linechart from "./Linechart";

const Coins = () => {
  const { coinId } = useParams();
  const [coindata, setcoindata] = useState(null);
const [historicaldata, sethistoricaldata] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchcoindata = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      const data = await response.json();
      setcoindata(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  const fetchhistoricaldata = async () => {
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-hB5SHy1FumhXP1Agp4c9WdRB" },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      );
      const data = await response.json();
      console.log("Historical data:", data);
      sethistoricaldata(data);
    } catch (error) {
      console.error("Historical data fetch error:", error);
    }
  };

  useEffect(() => {
    fetchcoindata();
    fetchhistoricaldata();
  }, [coinId, currency]); 

  if (!coindata) {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div
          className="w-[65px] h-[65px] border-4 border-gray-400
                     border-t-[#4500c6] rounded-full animate-spin
                     [animation-duration:2s]"
        ></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-4">
      <div className="flex flex-col items-center gap-4">
        <img
          src={coindata?.image?.large}
          alt={coindata?.name || "Coin"}
          className="w-[80px] h-[80px]"
        />
        <p className="text-xl font-bold text-white">
          {coindata.name} ({coindata.symbol.toUpperCase()})
        </p>
      </div>
      <div>
        <Linechart historicaldata={historicaldata}/>
      </div>

      <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* Market Rank */}
  <ul className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
    <li className="text-gray-400 font-medium">Crypto Market Rank</li>
    <li className="text-lg font-semibold text-yellow-400">#{coindata.market_cap_rank}</li>
  </ul>

  {/* Current Price */}
  <ul className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
    <li className="text-gray-400 font-medium">Current Price</li>
    <li className="text-lg font-semibold text-green-400">
      {currency.symbol}{' '}
      {coindata.market_data.current_price[currency.name].toLocaleString()}
    </li>
  </ul>

  {/* Market Cap */}
  <ul className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
    <li className="text-gray-400 font-medium">Market Cap</li>
    <li className="text-lg font-semibold text-blue-400">
      {currency.symbol}{' '}
      {coindata.market_data.market_cap[currency.name].toLocaleString()}
    </li>
  </ul>

  {/* 24 Hour High */}
  <ul className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
    <li className="text-gray-400 font-medium">24 Hour High</li>
    <li className="text-lg font-semibold text-emerald-400">
      {currency.symbol}{' '}
      {coindata.market_data.high_24h[currency.name].toLocaleString()}
    </li>
  </ul>

  {/* 24 Hour Low */}
  <ul className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
    <li className="text-gray-400 font-medium">24 Hour Low</li>
    <li className="text-lg font-semibold text-red-400">
      {currency.symbol}{' '}
      {coindata.market_data.low_24h[currency.name].toLocaleString()}
    </li>
  </ul>
</div>



     
      {historicaldata && (
        <div className="text-gray-300 text-sm">
          <p>Last 10 days prices loaded successfully </p>
        </div>
      )}
    </div>
  );
};

export default Coins;
