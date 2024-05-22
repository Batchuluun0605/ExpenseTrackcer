"use client";
import { useState } from "react";
import axios from "axios";
import Geld from "@/components/Geld";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Button1 from "@/components/Button1";
const api = "http://localhost:8000/";
export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }
  const keys = { name, email, password };
  const step = () => {
    router.push("/step");
    localStorage.setItem("data", JSON.stringify(keys));
  };

  return (
    <div className=" w-100vw bg-indigo-800">
      <div className="bg-white flex justify-center items-center w-1/2 h-screen ">
        <div className="py-[320px] flex flex-col gap-10 ">
          <div className="flex justify-center">
            <Geld />
            <h3>Geld</h3>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-center">Welcome Back</h3>
            <p className="text-center">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[384px]">
            <input
              value={name}
              type="text"
              placeholder="Name"
              className="border py-2 px-2 rounded-xl "
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="text"
              placeholder="Re-Password"
              className="border py-2 px-2 rounded-xl"
            />
            <button onClick={() => step()}>Sign up</button>
          </div>
          <div>
            <p className="text-center">
              Don’t have account?{" "}
              <span
                className=" text-blue-800 cursor-pointer"
                onClick={() => router.push("/login")}
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" w-1/2 "></div>
    </div>
  );
}
