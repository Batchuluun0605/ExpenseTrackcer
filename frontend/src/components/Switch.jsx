import { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  const handleToggled = () => {
    setToggle(!toggle);
  };
  return (
    <button onClick={handleToggled} className=" bg-white p-1 rounded-xl">
      {toggle ? "EXPENSE" : "INCOME"}
    </button>
  );
}
