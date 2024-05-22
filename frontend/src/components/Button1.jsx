import React from "react";

const Button1 = ({ children, fn }) => {
  return (
    <div>
      <button className=" btn btn-primary w-full rounded-xl" onClick={fn}>
        {children}
      </button>
    </div>
  );
};

export default Button1;
