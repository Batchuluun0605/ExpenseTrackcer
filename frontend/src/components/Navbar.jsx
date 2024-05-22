import Logo from "@/icon/LogLogo";
import Profile from "@/icon/Profile";
import { useState } from "react";
import Button1 from "./Button1";

export default function Navbar() {
  const get = localStorage.getItem("id");
  const id = JSON.parse(get);
  const [active, setActive] = useState(true);
  const handleClickDashboard = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className=" px-[100px] py-4 flex justify-between  m-auto">
        <div className="flex gap-6 items-center" onClick={handleClickDashboard}>
          <Logo />
          <a
            href={`/dashboard/${id.email}`}
            style={{ color: active ? "black" : "gray" }}
          >
            dashboard
          </a>
          <a
            href={`/record/${id.email}`}
            style={{ color: active ? "gray" : "black" }}
          >
            Record
          </a>
        </div>
        <div className="flex gap-6">
          <Button1>+ Record</Button1>
          <Profile />
        </div>
      </div>
    </div>
  );
}
