import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Charts from './components/Charts'
import NavBar from './components/NavaBar'

import './styles.scss'

const App = () => {
  const [coinData, setCoinData] = useState([])
  const [marketCap, setMarketCap] = useState([])

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true')
      .then(res => setCoinData(res.data))
      .catch(err => console.log('ERROR WITH COINDATA', err))

    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h')
      .then(res => setMarketCap(res.data))
      .catch(err => console.log('ERROR WITH MARKETCAP', err))
  }, [])

  console.log(coinData)
  console.log(marketCap)
  return (
    <div className="App">
      <NavBar />
      <Charts coinData={coinData} />
    </div>
  );
}

export default App;
