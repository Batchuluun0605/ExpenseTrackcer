"use client";
import Allow from "@/icon/Allow";
import Button from "@/components/Button";
import Geld from "@/components/Geld";
import axios from "axios";
import { useRouter } from "next/navigation";
import Button1 from "@/components/Button1";
import dotenv from "dotenv";
import { parseCookies } from "nookies";

dotenv.config();
const api = process.env.NEXT_PUBLIC_NEON_CONNECTION;

export default function Step() {
  const router = useRouter();
  const cookies = parseCookies();
  const name = cookies.name;
  const email = cookies.userEmail;
  const curr = cookies.curr;
  const password = cookies.password;
  const handlerName = async () => {
    try {
      let res = await axios.post(`${api}users/1`, {
        name: name,
        email: email,
        password: password,
        currency_type: curr,
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-24 w-96 m-auto">
      <div className="flex flex-col gap-12 pt-10  items-center">
        <div>
          <Geld />
        </div>
        <div>
          <ul className="steps">
            <li className="step step-primary">Currency</li>

            <li className="step step-primary">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col m-auto items-center gap-7 w-96">
        <Allow />
        <h2 className="text-3xl">Good job</h2>

        <p className="text-center">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
      </div>
      <button onClick={() => handlerName()}>Go to dashboard</button>
    </div>
  );
}
