// src/components/CryptoChart.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoChart = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '5706669dcf7d5db98c3d53a63ecf98d3791cb0213b8812d038537c7fc258fc75';
      const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30&api_key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data.Data.Data;
        const labels = data.map((item: any) => new Date(item.time * 1000).toLocaleDateString());
        const prices = data.map((item: any) => item.close);

        setChartData({
          labels,
          datasets: [
            {
              label: 'BTC Price',
              data: prices,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default CryptoChart;
