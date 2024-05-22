"use client";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Geld from "@/components/Geld";
import Alert from "@/components/Alert";
const API = "http://localhost:8000/users/oneuser";
export default function LogIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogIn = async () => {
    const res = await axios.post(API, { email: email, password: password });
    const user = res.data;
    localStorage.setItem("id", JSON.stringify(user));
    if (user && (user.id || user.email)) {
      router.push(`/dashboard/${user.email}`);
    } else {
      <Alert />;
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
            <button className="btn btn-primary " onClick={handleLogIn}>
              Log in
            </button>
          </div>
          <div>
            <p className="text-center">
              Don’t have account?{" "}
              <span
                className=" text-blue-800 cursor-pointer"
                onClick={() => router.push("/signin")}
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
