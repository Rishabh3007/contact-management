import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Dashboard() {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
        const response = await axios.get("https://disease.sh/v3/covid-19/countries")
        return response.data;
    },
    queryKey: ["countryData"],
  });

  if (isLoading) return <div>Loading...</div>;
  console.log(data)

  return(
    <div>
    this is the dashboard page
  </div>
  ) 
}

export default Dashboard;
