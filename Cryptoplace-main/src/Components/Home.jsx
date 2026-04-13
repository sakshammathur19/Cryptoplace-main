import React, { useEffect, useState, useContext } from "react";
import { CoinContext } from "../Context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);

  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (event) => {
    setInput(event.target.value);

    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = (event) => {
    event.preventDefault();

    const coins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase()),
    );

    setDisplayCoin(coins);
  };

  useEffect(() => {
    if (allCoin) setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:px-10 py-10 space-y-10">
      {/* HERO SECTION */}
      <div className="max-w-xl text-center space-y-5">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Largest <br /> Crypto Marketplace
        </h1>

        <p className="text-gray-300 text-sm md:text-base">
          Welcome to the world's largest Cryptocurrency marketplace.
        </p>

        {/* SEARCH BAR (SMALL + CLEAN) */}
        <form
          onSubmit={searchHandler}
          className="w-full flex items-center bg-white rounded-full overflow-hidden shadow-md max-w-md mx-auto"
        >
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search Crypto..."
            className="flex-1 px-4 py-2 text-black text-sm outline-none"
            required
          />

          <datalist id="coinlist">
            {allCoin?.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button
            type="submit"
            className="px-4 py-2 bg-[#0b004e] text-white text-sm hover:bg-[#1d152f] transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* GAP */}
      <div className="h-6"></div>

      {/* COIN TABLE */}
      <div className="w-full max-w-5xl rounded-2xl bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] border border-[#3c3c3c]/40 shadow-lg overflow-hidden min-h-[65vh] flex flex-col">
        {/* HEADER */}
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-4 md:px-6 py-5 text-xs md:text-sm font-semibold text-gray-200 border-b border-[#3c3c3c]/60">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p className="text-center">24h Change</p>
          <p className="text-right">Market Cap</p>
        </div>

        {/* ROWS */}
        <div className="flex-1">
          {displayCoin?.slice(0, 15).map((item, index) => {
            const price = item?.current_price ?? 0;
            const marketCap = item?.market_cap ?? 0;
            const change = item?.price_change_percentage_24h ?? 0;

            return (
              <Link
                to={`/coin/${item.id}`}
                key={index}
                className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-4 md:px-6 py-5 items-center border-b border-[#3c3c3c]/60 text-xs md:text-sm text-gray-300 hover:bg-white/5 transition"
              >
                <p>{item?.market_cap_rank}</p>

                <div className="flex items-center gap-2 md:gap-3">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <p>
                    {item?.name}{" "}
                    <span className="uppercase text-gray-400">
                      ({item?.symbol})
                    </span>
                  </p>
                </div>

                <p>
                  {currency.symbol}
                  {price.toLocaleString()}
                </p>

                <p
                  className={`text-center ${change > 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {change.toFixed(2)}%
                </p>

                <p className="text-right">
                  {currency.symbol}
                  {marketCap.toLocaleString()}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
