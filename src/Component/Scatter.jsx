import React from "react";
import "../App.css";
import ReactECharts from "echarts-for-react";
import { data } from "../data";
import BarChart from "./BarChart";

const Scatter = () => {
  console.log("dataaa", data);
  const colorIntensity = [];
  const hue = [];
  for (let i = 0; i < data.length; i++) {
    colorIntensity.push(data[i]["Color intensity"]);
    hue.push(data[i]["Hue"]);
  }

  const option = {
    xAxis: {
      data: colorIntensity,
      name: "Color Intensity",
    },
    yAxis: {
      name: "Hue",
    },
    series: [
      {
        type: "scatter",
        data: hue,
      },
    ],

    backgroundColor: {
      type: "radial",
      x: 0.3,
      y: 0.3,
      r: 0.8,
      colorStops: [
        {
          offset: 0,
          color: "#fafaf7",
        },
        {
          offset: 1,
          color: "#efe9ef",
        },
      ],
    },
    title: {
      text: "  Color Intensity and Hue ",
      x: "center",
      fontSize: "5px",
    },
  };

  return (
    <div className="Scatter">
      <ReactECharts option={option} />
    </div>
  );
};

export default Scatter;
