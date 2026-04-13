import { createContext, useEffect, useState } from "react";

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  // FETCH COINS
  const fetchAllCoin = async () => {
    setLoading(true);

    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=50&page=1&sparkline=false`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("API response failed");
      }

      const data = await response.json();

      setAllCoin(data);
    } catch (error) {
      console.error("Error fetching market data:", error);
      setAllCoin([]); // fallback empty state
    } finally {
      setLoading(false);
    }
  };

  // RUN ON LOAD + CURRENCY CHANGE
  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  return (
    <CoinContext.Provider
      value={{
        allCoin,
        currency,
        setCurrency,
        loading,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinProvider;
