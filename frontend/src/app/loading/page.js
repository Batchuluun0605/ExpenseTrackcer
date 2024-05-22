"use client";
import Geld from "@/components/Geld";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(router.push("/dashboard"));
  }, 8000);
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-12">
      <Geld />
      <div className="flex flex-col gap-4 justify-center items-center">
        <span class="loading loading-spinner text-info"></span>
        <p> Tүр хүлээнэ үү</p>
      </div>
    </div>
  );
}
