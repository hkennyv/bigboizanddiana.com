import React from "react";
import { Pie } from "@reactchartjs/react-chart.js";

// TODO: add a color/border generator
const backgroundColors = [
  "rgba(255, 99, 132, 0.4)",
  "rgba(54, 162, 235, 0.4)",
  "rgba(255, 206, 86, 0.4)",
  "rgba(75, 192, 192, 0.4)",
  "rgba(153, 102, 255, 0.4)",
  "rgba(255, 159, 64, 0.4)",
];

const borderColors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

function DiscordPieChart({ activeChannel, channelData }) {
  const data = {
    labels: Object.keys(channelData.stats),
    datasets: [
      {
        label: "# of Messages",
        data: Object.keys(channelData.stats).map(
          (user, _) => channelData.stats[user]
        ),
        backgroundColor: Object.keys(channelData.stats).map(
          (_, i) => backgroundColors[i % backgroundColors.length]
        ),
        borderColor: Object.keys(channelData.stats).map(
          (_, i) => borderColors[i % borderColors.length]
        ),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "left",
      labels: {
        boxWidth: 25,
        fillStyle: "rgb(255, 255, 255)",
        fontColor: "rgb(220,220,220)",
        fontSize: 16,
        padding: 5,
      },
    },
  };

  return (
    <div className="pieChartContainer">
      <Pie
        className="pieChartContainer"
        data={data}
        width={window.innerWidth / 1.055} // TODO: figure out better way to handle this..
        height={window.innerHeight / 2.86} // it is hardcoded to match the DiscordTable's ratio
        legend={options.legend}
        options={options}
      />
    </div>
  );
}

export default DiscordPieChart;
