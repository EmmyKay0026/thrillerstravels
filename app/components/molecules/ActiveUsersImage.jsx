import React from "react";
import UserImg from "../atoms/UserImg";

const ActiveUsersImage = () => {
  return (
    <div className="flex items-center relative my-[20px]">
      <UserImg alt={"linda"} src="/linda.jpg" />
      <UserImg
        alt={"emmanuel"}
        className="absolute left-[30px]"
        src="/emmanuel.jpg"
      />
      <UserImg alt={"matt"} className="absolute left-[60px]" src="/matt.jpeg" />
      <UserImg
        alt={"emmanuel"}
        className="absolute left-[90px]"
        src="/Emmanuel.gif"
      />
      <div className="flex items-center justify-center absolute left-[120px]  bg-rosemary w-[45px] h-[45px] rounded-full">
        <span className="flex items-center justify-center text-white text-[.8rem] bg-sunorange w-[40px] h-[40px] rounded-full">
          70+
        </span>
      </div>
    </div>
  );
};

export default ActiveUsersImage;
