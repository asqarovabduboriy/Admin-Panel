import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {useFetch} from "../../../hook/useFetch";

const Chart = () => {
    const {data} = useFetch('/products')

    
  return (
    <>
      <div className="container">
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["Mon", "Tue", "Wed"] },
          ]}
          series={[
            { data: [20, 50, 25] },
            { data: [10, 20, 30] },
            { data: [5, 10, 15] },
          ]}
          width={500}
          height={300}
        />
      </div>
    </>
  );
};

export default Chart;
