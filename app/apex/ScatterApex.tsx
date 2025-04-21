"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ApexChart with SSR disabled
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function ScatterApex() {



  const scatterSeries = [
    {
      name: "SAMPLE A",
      data: [
        [16.4, 5.4],
        [21.7, 2],
        [25.4, 3],
        [19, 2],
        [10.9, 1],
        [13.6, 3.2],
        [10.9, 7.4],
        [10.9, 0],
        [10.9, 8.2],
        [16.4, 0],
      ],
    },
    {
      name: "SAMPLE B",
      data: [
        [36.4, 13.4],
        [1.7, 11],
        [5.4, 8],
        [9, 17],
        [1.9, 4],
        [3.6, 12.2],
        [1.9, 14.4],
        [1.9, 9],
        [1.9, 13.2],
        [1.4, 7],
      ],
    },
    {
      name: "SAMPLE C",
      data: [
        [21.7, 3],
        [23.6, 3.5],
        [24.6, 3],
        [29.9, 3],
        [21.7, 20],
        [23, 2],
        [10.9, 3],
        [28, 4],
        [27.1, 0.3],
        [16.4, 4],
      ],
    },
  ];

  const scatterOptions = {
    chart: {
      height: 350,
      type: "scatter" as const,
      zoom: {
        enabled: true,
        type: "xy" as const,
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: (val: number) => val.toFixed(1),
      },
    },
    yaxis: {
      tickAmount: 7,
    },
  };

  return (
    <div className="p-6 w-full">
      <div className=" grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border rounded-xl p-4 shadow bg-white">
          <h2 className="text-lg font-medium mb-2">Scatter Chart</h2>
          <ReactApexChart
            options={scatterOptions}
            series={scatterSeries}
            type="scatter"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
