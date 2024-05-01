// import React, { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Line } from 'react-chartjs-2';

// interface IChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: (any | null)[];
//     borderColor: string;
//     fill: false;
//   }[];
// }

// function Dashboard() {
//   const [chartData, setChartData] = useState<IChartData>({} as IChartData);

//   const { data, isLoading } = useQuery({
//     queryFn: async () => {
//         const response = await axios.get("https://disease.sh/v3/covid-19/countries")
//         return response.data;
//     },
//     queryKey: ["countryData"],
//   });
//   const { data : resData , isLoading : loading } = useQuery({
//     queryFn: async () => {
//         const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
//         return response.data;
//     },
//     queryKey: ["caseData"],
//   });

//   useEffect(() => {
//     if (!loading && resData) {
//       const caseDataObj = resData.cases;
//       const labels = Object.keys(caseDataObj);
//       const casesData = Object.values(caseDataObj);

//       setChartData({
//         labels,
//         datasets: [
//           {
//             label: 'Cases',
//             data: casesData,
//             borderColor: 'rgba(75, 192, 192, 1)',
//             fill: false,
//           },
//         ],
//       });
//     }
//   }, [loading, resData]);

//   if (isLoading || loading) return <div>Loading...</div>;
//   console.log(resData)

//   const caseData  = resData.cases;
//       const labels = Object.keys(caseData);
//       const casesData = Object.values(caseData);
//       setChartData({
//         labels,
//         datasets: [
//           {
//             label: 'Cases',
//             data: casesData,
//             borderColor: 'rgba(75, 192, 192, 1)',
//             fill: false,
//           },
//         ],
//       });

//   return(
//     <div>
//     <div className="h-screen bg-gray-100">
//       <div className="p-8">
//         <h1 className="text-3xl font-semibold text-gray-800">
//           COVID-19 Cases Fluctuations
//         </h1>
//         <p className="text-gray-600">
//           Data fetched from{' '}
//           <a
//             href="https://disease.sh/v3/covid-19/historical/all?lastdays=all"
//             className="text-blue-500 underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             COVID-19 API
//           </a>
//         </p>
//       </div>
//       <div className="p-8">
//         <Line data={chartData} />
//       </div>
//     </div>
//   </div>
//   ) 
// }

// export default Dashboard;


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

  // const { data: caseData, isLoading: isCaseDataLoading } = useQuery({
  //   queryFn: async () => {
  //     const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
  //     return response.data;
  //   },
  //   queryKey: ["caseData"],
  // });

  // useEffect(() => {
  //   if (!isCaseDataLoading && caseData) {
  //     const caseDataObj = caseData.cases;
  //     const labels = Object.keys(caseDataObj);
  //     const casesData = Object.values(caseDataObj);

  //     setChartData({
  //       labels,
  //       datasets: [
  //         {
  //           label: 'Cases',
  //           data: casesData,
  //           borderColor: 'rgba(75, 192, 192, 1)',
  //           fill: false,
  //         },
  //       ],
  //     });
  //   }
  // }, [isCaseDataLoading, caseData]);

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
    <h1>dashboard</h1>
    <LineGraph />
    <MapComponent/>
    </>
  )
}

export default Dashboard;