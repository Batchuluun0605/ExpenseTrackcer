"use client";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Geld from "@/components/Geld";
import Alert from "@/components/Alert";
import Button1 from "@/components/Button1";
import { setCookie } from "nookies";
const API = process.env.NEXT_PUBLIC_NEON_CONNECTION;
export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogIn = async () => {
    try {
      const res = await axios.post(`${API}users/oneuser`, {
        email: email,
        password: password,
      });
      const user = res.data;
      setCookie(null, "id", user.id, {
        maxAge: 3600,
      });
      setCookie(null, "email", user.email, {
        maxAge: 3600,
      });
      router.push(`/dashboard/${user.email}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-indigo-900">
      <div className="bg-white flex justify-center items-center w-1/2 h-screen ">
        <div className=" flex flex-col gap-10 ">
          <div className="flex justify-center">
            <Geld />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-center">Welcome Back</h3>
            <p className="text-center">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[384px]">
            <input
              value={email}
              type="text"
              placeholder="Email"
              className="border py-2 px-2 rounded-xl "
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={password}
              type="password"
              placeholder="Password"
              className="border py-2 px-2 rounded-xl "
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogIn}>Log in</button>
          </div>
          <div>
            <p className="text-center">
              Don’t have account?{" "}
              <span
                className=" text-blue-800 cursor-pointer"
                onClick={() => router.push("/signUp")}
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
