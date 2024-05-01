import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  import { Line } from 'react-chartjs-2';
  import { useQuery } from '@tanstack/react-query';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const LineGraph = () => {

      const [chartData, setChartData] = useState({
            datasets: [
              {
                label: 'COVID-19 Cases',
                data: [] as number[],
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
              },
            ],
            labels: [] as string[],
          });

    const { data: caseData, isLoading: isCaseDataLoading } = useQuery({
    queryFn: async () => {
      const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
      return response.data;
    },
    queryKey: ["caseData"],
  });
  
  useEffect(() => {
    if (caseData) {
      const keysArray = Object.keys(caseData.cases);
      const valuesArray = Object.values(caseData.cases);
      setChartData({
        labels: keysArray,
        datasets: [
          {
            ...chartData.datasets[0],
            data: valuesArray as number[],
          },
        ],
      });
    }
  }, [caseData]);

  if(isCaseDataLoading) {
    return <div>Loading...</div>;
  }
  


  return (
    <>
        <Line data={chartData} />
    </>
  );
};

export default LineGraph;
