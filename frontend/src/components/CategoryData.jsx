import { CategoryImgData } from "./CategoryImg";

export default function CategoryData() {
  return (
    <div className="flex flex-col gap-5 w-80">
      <div className="flex gap-5">
        <p className=" bg-blue-600 w-6 h-6 rounded-xl text-center text-xl text-white">
          +
        </p>
        <p>Add Record</p>
      </div>
      <div className="border-b"></div>

      {CategoryImgData.map((el, ind) => {
        return (
          <div className="flex gap-4" key={ind}>
            <p>{el.img}</p>
            <p>{el.name}</p>
          </div>
        );
      })}
    </div>
  );
}
