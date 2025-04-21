"use client";

import React from "react";
import dynamic from "next/dynamic";

// Load ApexCharts without SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function BarChart() {
  const series = [
    {
      name: "Q1 Budget",
      group: "budget",
      color: "#80c7fd",
      data: [44000, 55000, 41000, 67000, 22000, 43000],
    },
    {
      name: "Q1 Actual",
      group: "actual",
      color: "#008FFB",
      data: [48000, 50000, 40000, 65000, 25000, 40000],
    },
    {
      name: "Q2 Budget",
      group: "budget",
      color: "#80f1cb",
      data: [13000, 36000, 20000, 8000, 13000, 27000],
    },
    {
      name: "Q2 Actual",
      group: "actual",
      color: "#00E396",
      data: [20000, 40000, 25000, 10000, 12000, 28000],
    },
  ];

  const options = {
    chart: {
      type: "bar" as const,
      height: 350,
      stacked: true,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    dataLabels: {
      formatter: (val: number) => `${val / 1000}K`,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: [
        "Online ads",
        "Sales Training",
        "Print ads",
        "Catalogs",
        "Meetings",
        "Public relations",
      ],
    },
    fill: {
      opacity: 1,
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val / 1000}K`,
      },
    },
    legend: {
      position: "bottom",
      customLegendItems: ["Q1 Budget", "Q1 Actual", "Q2 Budget", "Q2 Actual"],
      markers: {
        fillColors: ["#80c7fd", "#008FFB", "#80f1cb", "#00E396"],
      },
    },
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-xl font-semibold mb-4">Grouped Stacked Bar Chart</h1>
      <div className="bg-white shadow rounded-xl p-4">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}
