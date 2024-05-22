import { Chart as Chartjs, Tooltip, Legend, Title, ArcElement } from "chart.js";
import { useState } from "react";
Chartjs.register(Tooltip, Legend, Title, ArcElement);
import { Pie } from "react-chartjs-2";

export default function Doughnut() {
  const data = {
    datasets: [
      {
        type: "doughnut",
        width: 100,
        data: [10, 20, 20, 30, 10],
        backgroundColor: ["red", "blue", "orange", "aqua", "pink"],
      },
    ],

    labels: ["Bills", "Food", "Shopping", "Insuranse", "Clothing"],
  };
  const [chartOptions, setChartOptions] = useState({
    cutoutPersentage: 20,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // Hide the border of the arcs
      },
    },
  });

  return (
    <div className="w-[300px] flex">
      <Pie data={data} options={chartOptions} className="flex" />
    </div>
  );
}
