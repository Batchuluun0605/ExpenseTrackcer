import HomeIcon from "@/icon/Home";

export default function Homecomp() {
  return (
    <div className="flex justify-between py-5 ">
      <div className="flex items-center gap-4">
        <div className="bg-blue-800 w-10 h-10 rounded-3xl flex justify-center items-center">
          <HomeIcon />
        </div>
        <div className="">
          <h4 className="text-2xl">Lending & Renting</h4>
          <p>3 hours ago</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-lg text-green-500">- 3000</p>
      </div>
    </div>
  );
}
