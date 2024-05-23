import { useState } from "react";
import axios from "axios";
import { CategoryImgData } from "./CategoryImg";
import { parseCookies } from "nookies";
import dotenv from "dotenv";
dotenv.config();
const api = process.env.NEXT_PUBLIC_NEON_CONNECTION;

export default function AddCategoryInput({ closeCategoryModal }) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const cookies = parseCookies();
  const id = cookies.id;
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handlerInput = async () => {
    let res = await axios.post(`${api}categorys`, {
      name: name,
      description: "",
      user_id: id,
    });
    handleCloseModal();
  };
  const handleModal = () => {
    setOpen(true);
  };
  return (
    <div>
      <button
        className="text-[20px] border-solid bg-blue-700 w-full text-white py-1 rounded-xl"
        onClick={handleModal}
      >
        <span className="text-blue-300">+</span> Add category
      </button>
      {open && (
        <div className=" bg-slate-200 p-4 mt-[8px] flex flex-col gap-2  ">
          <div className="flex justify-between ">
            <button
              onClick={handleCloseModal}
              className=" flex justify-center items-center border-solid rounded-xl bg-black text-white w-6 h-6 p-1"
            >
              x
            </button>
          </div>

          <input
            type="text"
            value={name}
            onChange={(el) => setName(el.target.value)}
            placeholder="Name"
            className=""
          />
          <button
            onClick={handlerInput}
            className="btn mt-1 btn-primary w-full"
          >
            Add category
          </button>
        </div>
      )}
      {open === true && (
        <dialog className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-2xl">
                ✕
              </button>
            </form>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="dropdown"></div>
                <input
                  type="text"
                  value={name}
                  onChange={(el) => setName(el.target.value)}
                  placeholder="Name"
                  className="p-1"
                />
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
