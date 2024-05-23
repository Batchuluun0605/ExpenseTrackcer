import Eye from "@/icon/Eye";
import Leading from "@/icon/Leading";
import axios from "axios";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
const cookies = parseCookies();
const id = cookies.id;
const apiUrl = `http://localhost:8000/categorys?user_id=${id}`;

const CategoryNameData = () => {
  const [data, setData] = useState([]);
  const toggle = async () => {
    const res = await axios.get(apiUrl);
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
