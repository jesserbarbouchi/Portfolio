import axios from 'axios';
import { useEffect, useState } from 'react';

const CoinGeckoIntegration = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrency data:", error);
      });
  }, []);

  return (
    <div className="coin-section">
      <h2>Cryptocurrency Data (CoinGecko)</h2>
      <div className="coin-list">
        {coins.map((coin) => (
          <div className="coin-card" key={coin.id}>
            <h3>{coin.name}</h3>
            <p>Current Price: ${coin.current_price}</p>
            <p>Market Cap: ${coin.market_cap}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinGeckoIntegration;
