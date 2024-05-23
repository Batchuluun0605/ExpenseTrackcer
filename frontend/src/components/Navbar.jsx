import Logo from "@/icon/LogLogo";
import Profile from "@/icon/Profile";
import { useEffect, useState } from "react";
import Button1 from "./Button1";
import { parseCookies } from "nookies";

export default function Navbar() {
  const cookies = parseCookies();
  const id = cookies.id;
  const email = cookies.email;
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
            href={`/dashboard/${email}`}
            to={`/dashboard/${email}`}
            style={{ color: active ? "black" : "gray" }}
          >
            dashboard
          </a>
          <a
            href={`/record/${email}`}
            to={`/record/${email}`}
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
