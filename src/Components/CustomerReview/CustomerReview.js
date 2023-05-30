import React from "react";
import "./CustemorReview.css";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        color: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      //   dropShadow: {
      //     enbled: false,
      //     enabledOnSeries: undefined,
      //     top: 0,
      //     left: 0,
      //     blur: 3,
      //     color: "#000",
      //     opacity: 0.35,
      //   },
    },
  };
  return (
    <div className="CustomerReivew">
      <Chart series={data.series} options={data.options} type="area" />
    </div>
  );
};

export default CustomerReview;
