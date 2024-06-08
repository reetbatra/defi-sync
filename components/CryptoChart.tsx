// src/components/CryptoChart.tsx
import React, { useState } from 'react';
import SingleTokenChart from './SingleTokenChart';

const CryptoChart = () => {
  const [filter, setFilter] = useState<string>('month');
  const tokens = ['BTC', 'ETH', 'USDT', 'DOGE'];
  const colors = ['rgba(75,192,192,1)', 'rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)'];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <button onClick={() => setFilter('day')} style={{ margin: '0 1rem' }}>Day</button>
        <button onClick={() => setFilter('week')} style={{ margin: '0 1rem' }}>Week</button>
        <button onClick={() => setFilter('month')} style={{ margin: '0 1rem' }}>Month</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {tokens.map((token, index) => (
          <div key={token} style={{ width: '45%', marginBottom: '2rem' }}>
            <SingleTokenChart token={token} filter={filter} color={colors[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoChart;

