// src/components/SingleTokenChart.tsx
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

const SingleTokenChart = ({ token, filter, color }: { token: string, filter: string, color: string }) => {
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY;
      let url = '';
      let limit = 30; 

      switch (filter) {
        case 'day':
          limit = 1;
          break;
        case 'week':
          limit = 7;
          break;
        case 'month':
        default:
          limit = 30;
          break;
      }

      url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${token}&tsym=USD&limit=${limit}&api_key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data.Data.Data;

        const labels = data.map((item: any) => new Date(item.time * 1000).toLocaleDateString());
        const prices = data.map((item: any) => item.close);

        setChartData({
          labels,
          datasets: [
            {
              label: `${token} Price`,
              data: prices,
              fill: false,
              backgroundColor: color.replace('1)', '0.2)'),
              borderColor: color,
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
  }, [filter, token]);

  if (loading) return <div>Loading...</div>;

  return <Line data={chartData} />;
};

export default SingleTokenChart;
