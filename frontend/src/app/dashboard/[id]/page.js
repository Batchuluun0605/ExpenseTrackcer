"use client";
import Doughnut from "@/components/Doughnut";
import Geld from "@/components/Geld";
import Navbar from "@/components/Navbar";
import BottomArrow from "@/icon/BottomArrow";
import TopArrow from "@/icon/TopArrow";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
Chartjs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default function DashBoard() {
  const data = {
    labels: ["jul", "jul", "jul", "jul", "jul", "jul"],
    datasets: [
      {
        label: "sales number",
        data: [300, 300, 300, 300, 300, 300],
        borderColor: "black",
        backgroundColor: ["green"],
        borderWidth: 1,
        options: false,
      },
      {
        label: "sales number",
        data: [200, 200, 200, 200, 200, 200],
        borderColor: "black",
        backgroundColor: ["orange"],
        borderWidth: 1,
      },
    ],
  };
  const option = {};
  return (
    <div className=" bg-white h-full">
      <div className=" bg-white m-auto">
        <Navbar />
        <div className=" bg-slate-200">
          <div className=" px-[100px] m-auto">
            <div className=" m-auto pt-8 flex gap-6">
              <div className="w-96 h-[220px] bg-blue-800 flex flex-col gap-24 p-8 rounded-2xl">
                <Geld className="text-white" />
                <div>
                  <p>Cash</p>
                  <p className="text-white text-2xl">10,000,00</p>
                </div>
              </div>
              <div className="w-96 h-[220px] bg-white rounded-2xl pb-6">
                <div className="px-6 py-4 flex gap-2 items-center">
                  <p className="w-2 h-2 bg-green-400 rounded-3xl"></p>
                  <p>Your Income </p>
                </div>
                <div className=" border-b"></div>
                <div className="px-6 py-6">
                  <h1 className=" text-3xl">1,200,000</h1>
                  <p>Your Income Amount</p>
                </div>
                <div className="flex px-6 gap-2">
                  <TopArrow />
                  <p>32% from last month</p>
                </div>
              </div>
              <div className="w-96 h-[220px] bg-white rounded-2xl">
                <div className="px-6 py-4 flex gap-2 items-center">
                  <p className="w-2 h-2 bg-green-400 rounded-3xl"></p>
                  <p>Your Express </p>
                </div>
                <div className=" border-b"></div>
                <div className="px-6 py-6">
                  <h1 className=" text-3xl">-1,200,000</h1>
                  <p>Your Income Amount</p>
                </div>
                <div className="flex px-6 gap-2">
                  <BottomArrow />
                  <p>32% from last month</p>
                </div>
              </div>
            </div>
            <div className=" py-6  flex gap-4">
              <div className="w-1/2 bg-white rounded-2xl">
                <div className="py-4 px-6">
                  <p>Income-Expense</p>
                </div>
                <div className="border-b"></div>
                <div>
                  <Bar data={data} options={option}></Bar>
                </div>
              </div>
              <div className="w-1/2 bg-white rounded-2xl">
                <div className="py-4 px-6 flex justify-between">
                  <p>Income-Expense</p>
                  <p>Jun 1 - Nov 30</p>
                </div>
                <div className="border-b"></div>
                <div className="">
                  <Doughnut />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
