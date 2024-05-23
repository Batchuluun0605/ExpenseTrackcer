import Eye from "@/icon/Eye";
import Leading from "@/icon/Leading";
import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
const cookies = parseCookies();
const id = cookies.id;
const apiUrl = process.env.NEXT_PUBLIC_NEON_CONNECTION;

const CategoryNameData = () => {
  const [data, setData] = useState([]);
  const toggle = async () => {
    const res = await axios.get(`${apiUrl}categorys?user_id=${id}`);
    setData(res.data);
  };
  useEffect(() => {
    toggle();
  }, []);
  return (
    <div>
      {data.map((el, ind) => {
        return (
          <div className="flex gap-2 justify-between" key={ind}>
            <div className="flex gap-2">
              <Eye />
              <p>{el.name}</p>
            </div>
            <Leading />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNameData;
