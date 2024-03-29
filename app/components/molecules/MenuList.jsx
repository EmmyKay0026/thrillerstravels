"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineHouse } from "react-icons/md";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { VscPieChart } from "react-icons/vsc";
import { GoGear } from "react-icons/go";

const menuList = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineHouse />,
  },
  {
    title: "Flights",
    path: "/flight",
    icon: <PiAirplaneTiltThin />,
  },
  {
    title: "Wallet",
    path: "/wallet",
    icon: <LuWallet />,
  },
  {
    title: "Reports",
    path: "/Reports",
    icon: <IoNewspaperOutline />,
  },
  {
    title: "statistics",
    path: "/statistics",
    icon: <VscPieChart />,
  },
  {
    title: "settings",
    path: "/settings",
    icon: <GoGear />,
  },
];
const MenuList = () => {
  const pathName = usePathname();

  return (
    <div>
      <ul>
        {menuList.map((linkList, index) => {
          return (
            <li
              className="text-white w-full font-bold my-[13px] ml-[20px] text-[14px]"
              key={index}
            >
              <Link
                className={
                  "/flight" === linkList.path
                    ? "flex items-center gap-[15px] p-[10px] bg-skyblue text-rosemary text-[13px]  cursor-pointer font-normal rounded-[20px] w-full bg-techko-main"
                    : "flex items-center gap-[20px] p-[15px]  cursor-pointer text-[white] text-[13px] font-normal rounded-[30px] w-full my-[9px] hover:bg-skyblue hover:text-rosemary"
                }
                href={linkList.path}
              >
                <span className="text-sunorange text-[1.7rem]">
                  {linkList.icon}
                </span>
                <p className="uppercase text-[.9rem]">{linkList.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuList;
