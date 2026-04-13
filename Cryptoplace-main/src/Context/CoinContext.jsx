import { createContext, useEffect, useState } from "react";

// ✅ Create Context
export const CoinContext = createContext();

const CoinProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  // ✅ Fetch all coins with market data
  const fetchAllCoin = async () => {
    const url = `/api/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=50&page=1&sparkline=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllCoin(data);
    } catch (error) {
      console.error("Error fetching market data:", error);
    }
  };

  // ✅ Fetch data on mount and when currency changes
  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  // ✅ Context value to share globally
  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;
