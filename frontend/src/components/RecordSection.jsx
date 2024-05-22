import HomeIcon from "@/icon/Home";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecordSection({ input, filter }) {
  const get = localStorage.getItem("id");
  const userId = JSON.parse(get);
  const apiUrl = `http://localhost:8000/transactions?user_id=${userId.id}`;
  const [data, setData] = useState([]);
  const handler = async () => {
    const res = await axios.get(apiUrl);
    setData(res.data);
  };
  useEffect(() => {
    handler();
  }, [input, filter]);
  const filterData = data.filter((e) => {
    if (input === "" && filter === "") {
      return e;
    } else if (input !== "") {
      return e?.name?.includes(input);
    } else if (filter === "Income") {
      return e?.transaction_type?.includes("INC");
    } else if (filter === "Expense") {
      return e.transaction_type === "EXP";
    } else if (filter === "All") {
      return e;
    }
  });
  const start = filterData.length <= 8 ? 0 : filterData.length - 8;
  return (
    <div className="flex flex-col gap-3 rounded-3xl">
      {filterData.slice(start, filterData.length).map((el, ind) => {
        return (
          <div
            className=" bg-white flex justify-between px-4 py-2 items-center rounded-2xl"
            key={ind}
          >
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <div className=" bg-blue-800 items-center flex justify-center rounded-3xl w-8 h-8">
                <HomeIcon />
              </div>
              <div>
                <p>{el.name}</p>
                <p>{el.createdat.slice(11, 16)}</p>
              </div>
            </div>
            <div>
              <p
                style={{
                  color: el.transaction_type === "INC" ? "red" : "green",
                }}
              >
                {el.amount}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}