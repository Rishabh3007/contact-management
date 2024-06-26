import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import LineGraph from "./LineGraph";
import MapComponent from "./MapComponent";

interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    data: (any | null)[];
    borderColor: string;
    fill: false;
  }[];
}

function Dashboard() {
  const [chartData, setChartData] = useState<IChartData>({} as IChartData);

  const { data: countryData, isLoading: isCountryDataLoading } = useQuery({
    queryFn: async () => {
      const response = await axios.get("https://disease.sh/v3/covid-19/countries");
      return response.data;
    },
    queryKey: ["countryData"],
  });

  if (isCountryDataLoading) return <div>Loading...</div>;

  return(
    // <div>
    //   <div className="h-screen bg-gray-100">
    //     <div className="p-8">
    //       <h1 className="text-3xl font-semibold text-gray-800">
    //         COVID-19 Cases Fluctuations
    //       </h1>
    //       <p className="text-gray-600">
    //         Data fetched from{' '}
    //         <a
    //           href="https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    //           className="text-blue-500 underline"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           COVID-19 API
    //         </a>
    //       </p>
    //     </div>
    //     <div className="p-8">
    //       <Line data={chartData} />
    //     </div>
    //   </div>
    // </div>
    <>
    <h1 className="text-center my-4 text-xl font-semibold">Dashboard</h1>
    <div className="w-3/4 mx-auto">
    <LineGraph />
    </div>
    <MapComponent/>
    </>
  )
}

export default Dashboard;