import { useEffect, useState } from "react";
import axios from "axios";
import { parseCookies } from "nookies";
export default function AddCard() {
  const [exActive, setExActive] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const cookies = parseCookies();
  const id = cookies.id;
  const api = "http://localhost:8000/transactions";
  const categoryApi = `http://localhost:8000/categorys?user_id=${id}`;
  const handler = async () => {
    const res = await axios.get(categoryApi);
    setData(res.data);
  };

  const toggled = () => {
    setExActive(!exActive);
    setActiveButton(!activeButton);
  };
  const handlerRecord = async () => {
    try {
      const response = await axios.post(api, {
        user_id: id,
        name: name,
        amount: exActive === true ? amount : -amount,
        transaction_type: exActive ? "EXP" : "INC",
        description: description,
      });

      setName("");
      setAmount("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handler();
  }, [handlerRecord]);
  return (
    <div className="">
      <button
        className="btn  btn-primary w-full"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        + Add
      </button>
      <dialog id="my_modal_4" className="modal w-full ">
        <div className="modal-box bg-white w-full ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <p>Add Record</p>
            <div className="border-b"></div>
            <div className="flex gap-10">
              <div className="w-1/2 flex flex-col gap-4">
                <div
                  className="border rounded-2xl flex items-center "
                  onClick={toggled}
                >
                  <button
                    className="flex items-center w-1/2 justify-center rounded-xl p-1"
                    style={{
                      background: exActive === false ? "red" : "",
                    }}
                  >
                    Expense
                  </button>
                  <button
                    className="flex w-1/2 justify-center rounded-xl p-1"
                    style={{
                      background: exActive === true ? "green" : "",
                    }}
                  >
                    Income
                  </button>
                </div>
                <div className="border rounded-2xl px-4 py-2">
                  <p>Amount</p>
                  <input
                    type="text"
                    value={amount}
                    placeholder="$ 00.000"
                    className=" bg-white w-4/5"
                    onChange={(el) => setAmount(el.target.value)}
                  />
                </div>
                <div className="">
                  <p>Category</p>
                  <select
                    name=""
                    id=""
                    value={name}
                    onChange={(el) => setName(el.target.value)}
                    className="border rounded-xl p-2"
                  >
                    <option value="">Find or choose category</option>

                    {data.map((el, ind) => {
                      return <option key={ind}>{el.name}</option>;
                    })}
                  </select>
                </div>
                <div className="flex gap-4">
                  <div>
                    <p>Date</p>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      defaultValue={"2018-07-22"}
                      min="2018-01-01"
                      max="2018-12-31"
                      className="border rounded-xl p-1"
                    />
                  </div>
                  <div>
                    <p>Date</p>
                    <input
                      type="time"
                      id="appt"
                      name="appt"
                      defaultValue={"19:00"}
                      className="border rounded-xl p-1"
                    />
                  </div>
                </div>
                <form method="dialog">
                  <button
                    className="rounded-xl btn-ghost py-2"
                    style={{ background: activeButton ? "green" : "red" }}
                    onClick={handlerRecord}
                  >
                    Add Record
                  </button>
                </form>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <p>Payee</p>
                <input
                  type="text"
                  placeholder="write here"
                  className="border p-3 rounded-xl bg-slate-200"
                />
                <p>Note</p>
                <textarea
                  defaultValue={description}
                  name=""
                  id=""
                  placeholder="write here"
                  className="border p-3 h-52 rounded-xl bg-slate-200"
                  onChange={(el) => setDescription(el.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
