import React from "react";
import ReactECharts from "echarts-for-react";
import { data } from "../data";
const BarChart = () => {
  let alcohol = [];
  let malicAcid = [];
  for (let i = 0; i < data.length; i++) {
    console.log("Alcohol", data[i]["Alcohol"]);
    alcohol.push(data[i]["Alcohol"]);
    malicAcid.push(data[i]["Malic Acid"]);
  }

  // var average = malicAcid.reduce((malic, i) => {
  //   console.log("malic", malic + i);
  // }, 0);

  const option = {
    xAxis: {
      data: malicAcid,
      backgroundColor: "red",
      name: "Malic Acid",
    },
    title: {
      text: "  Alcohol Containing Malic acid",
      x: "center",
    },
    yAxis: {
      name: "Alcohol",
    },

    series: [
      {
        type: "bar",
        data: alcohol,
        
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
  };

  return <ReactECharts option={option} />;
};

export default BarChart;
