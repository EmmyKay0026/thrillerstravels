import React from "react";
import Image from "next/image";
import { MenuList } from "..";
import ActiveUsersImage from "../molecules/ActiveUsersImage";

const SideBar = () => {
  return (
    <section className="flex-[1.3_1.3_0%] bg-rosemary rounded-r-[60px] pb-[20px]">
      <div className="flex flex-col bg-darkergreen  items-center gap-[20px] mb-[20px] rounded-tr-[60px] py-[40px] ">
        <Image
          className="rounded-[50%]"
          src="/personjpg.jpg"
          alt="User's image"
          width={110}
          height={110}
        />
        <div className="flex flex-col text-white ">
          <span className="font-medium text-[1.1rem]">ALEX JOHNSON</span>
          <span className="text-[.7rem] ">alex.johnson@gmail.com</span>
        </div>
      </div>
      <div>
        <MenuList />
        <div className=" ml-[30px]  mt-[35px]">
          <p className="text-sunorange text-[.8rem]">ACTIVE USERS</p>

          <ActiveUsersImage />
        </div>
        <Image src="/mapmore.jpg" alt="" width={220} height={220} />
      </div>
    </section>
  );
};

export default SideBar;
