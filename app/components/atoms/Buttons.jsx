import React from "react";
import { cn } from "../../lib/utils";

const Button = ({ type, BtnChildren, className, onClick }) => {
  return (
    <button
      type={type}
      className={cn(
        "py-[13px] px-[45px] rounded-[50px] text-[.9rem]",
        className
      )}
      onClick={onClick}
    >
      {BtnChildren}
    </button>
  );
};

export default Button;
