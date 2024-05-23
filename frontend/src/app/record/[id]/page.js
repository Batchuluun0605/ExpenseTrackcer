"use client";
import AddCategoryInput from "@/components/AddCategory";
import AddCard from "@/components/AddRecord";
import CategoryNameData from "@/components/CategoryNameData";
import Navbar from "@/components/Navbar";
import RecordSection from "@/components/RecordSection";
import Leading from "@/icon/Leading";
import Left from "@/icon/LeftIcon";
import Right from "@/icon/RightIcon";
import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
const cookies = parseCookies();
const id = cookies.id;
const transactionApi = process.env.NEXT_PUBLIC_NEON_CONNECTION;
//localhost:8000/categorys?user_id=${id}

export default function Record() {
  const typesData = [
    {
      text: "All",
    },
    {
      text: "Income",
    },
    {
      text: "Expense",
    },
  ];
  const [add, setAdd] = useState(false);
  const [AddCategory, setAddCategory] = useState(false);
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(30);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const search = async () => {
    const res = await axios.get(`${transactionApi}categorys?user_id=${id}`);
    localStorage.setItem("alldata", JSON.stringify(res.data));
  };

  useEffect(() => {
    search();
  }, []);
  const countPlusHandler = () => {
    setCount((count) => count + 1);
  };
  const countIncrementHandler = () => {
    setCount((count) => count - 1);
  };
  return (
    <div className="bg-white w-screen flex flex-col gap-6  ">
      <div className="">
        <Navbar />
      </div>
      <div className=" bg-slate-200 h-full">
        <div className="px-[100px] py-6 flex gap-6 m-auto">
          <div className="w-[282px] flex flex-col gap-6 bg-white rounded-xl py-6 px-4 ">
            <div className=" flex flex-col gap-6">
              <h2 className="text-3xl">Records</h2>
              <AddCard />
            </div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="search"
              className="border py-1 pl-2 rounded"
            />
            <div className="flex flex-col gap-6">
              <h3 className=" text-2xl">Types</h3>
              <div className="flex flex-col gap-2">
                {typesData.map((el, ind) => {
                  return (
                    <div className="flex gap-2" key={ind}>
                      <input
                        type="checkbox"
                        value={el.text}
                        onChange={(e) => setFilter(e.target.value)}
                      />
                      <p>{el.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <h3 className=" text-2xl">Category</h3>
                <p>clear</p>
              </div>
              <div className="flex flex-col gap-2">
                <CategoryNameData />
              </div>
            </div>
            <AddCategoryInput />
            <div>
              <h3>Amount Range</h3>
              <p>{amount}</p>
              <input
                type="range"
                value={amount}
                min={0}
                max={100}
                onChange={(el) => setAmount(el.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-[540px]">
              <div className="flex gap-3 items-center">
                <button onClick={countIncrementHandler}>
                  <Left />
                </button>

                <p>Last {count} Days</p>
                <button onClick={countPlusHandler}>
                  <Right />
                </button>
              </div>
              <div>
                <div className="">
                  <button className="flex items-center">
                    <span className="text-lg">Newest first </span>
                    <Leading />
                  </button>
                </div>
              </div>
            </div>
            <div className="border bg-white rounded-xl flex justify-between p-3">
              <div className="flex gap-4">
                <input type="checkbox" />
                <p className="font-bold">Select All</p>
              </div>
              <p>-35,500</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">Today</p>
              <RecordSection input={input} filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
