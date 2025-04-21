"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Lazy load ApexCharts for client-side only
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const HeatmapChart = () => {
  const colors = ["#008FFB"]; // Example: could be extended to multiple shades

  // Sample data - you can replace this with your dynamic `data` variable
  const data = [
    {
      name: "Metric1",
      data: [80, 90, 70, 60, 50, 40, 70, 100],
    },
    {
      name: "Metric2",
      data: [40, 50, 80, 70, 60, 90, 100, 30],
    },
    {
      name: "Metric3",
      data: [20, 30, 60, 90, 100, 40, 50, 70],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 450,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: colors,
    xaxis: {
      type: "category",
      categories: ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
    },
    title: {
      text: "HeatMap Chart (Different color shades for each series)",
    },
    grid: {
      padding: {
        right: 20,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-xl p-4 w-full">
      <h2 className="text-lg font-semibold mb-2">Time-Based Heatmap</h2>
      <ReactApexChart options={options} series={data} type="heatmap" height={450} />
    </div>
  );
};

export default HeatmapChart;
