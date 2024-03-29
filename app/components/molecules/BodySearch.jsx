"use client";
import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Buttons";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { PiArmchairFill } from "react-icons/pi";
import { BsFillPersonFill } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";

const BodySearch = () => {
  return (
    <section className="bg-white py-7 px-6 rounded-[40px]">
      <form className="flex items-center flex-wrap gap-5" action="">
        <div className="bg-skyblue py-[5px] pl-[15px] pr-[5px] rounded-[40px] w-[50%] flex   items-center justify-between">
          <Input
            label={<FaLocationDot />}
            className=" my-0 flex flex-row-reverse items-center justify-between "
            inputClassName="bg-transparent border-0 mt-0 w-[160px] uppercase placeholder:text-rosemary"
            labelClassname={"text-rosemary text-[1.3rem] "}
            placeholder={"NEW YORK (JFK)"}
          />
          <div className="flex items-center justify-center text-white text-[1.5rem] rounded-full w-[40px] h-[40px] bg-rosemary">
            <RiArrowLeftRightLine />
          </div>
          <Input
            label={<FaLocationDot />}
            className=" my-0 flex items-center flex-row-reverse justify-between "
            inputClassName="bg-transparent border-0  uppercase w-[160px] mt-0  placeholder:text-rosemary"
            labelClassname={"text-rosemary text-[1.3rem] "}
            placeholder={"MUMBAI (BOM)"}
          />
        </div>

        <Input
          className={
            "flex flex-row-reverse items-center justify-end my-0 bg-skyblue py-[15px] px-[25px] rounded-[40px] w-[22%]"
          }
          type="text"
          placeholder="29 JULY 2019"
          inputClassName={
            "border-0 m-0 placeholder:text-rosemary uppercase w-[160px] placeholder:text-[.8rem] bg-transparent "
          }
          label={<RxCalendar />}
          labelClassname={"text-[1.3rem] text-rosemary"}
        />
        <Input
          className={
            "flex flex-row-reverse items-center justify-end my-0 bg-skyblue py-[15px] px-[25px] rounded-[40px] w-[22%]"
          }
          type="text"
          placeholder="2 TRAVELLER"
          inputClassName={
            "border-0 m-0 placeholder:text-rosemary uppercase w-[160px] placeholder:text-[.8rem] bg-transparent "
          }
          label={<BsFillPersonFill />}
          labelClassname={"text-[1.3rem] text-rosemary"}
        />
        <div className="bg-skyblue py-[5px] pl-[5px] pr-[5px] rounded-[40px] w-[50%] flex   items-center justify-between">
          <Input
            className="flex   my-0"
            type="radio"
            name="numberOfStops"
            id="nonstop"
            inputClassName="peer hidden w-0"
            htmlFor="nonstop"
            labelClassname="cursor-pointer  text-nowrap  bg-rosemary text-white  py-[15px] px-[40px] text-[.8rem]   rounded-[50px] "
            label="ONE WAY"
          />

          <Input
            className="flex my-0 "
            type="radio"
            labelClassname="cursor-pointer text-rosemary text-nowrap peer-checked:bg-rosemary peer-checked:text-white py-[15px] px-[35px] text-[.8rem]  rounded-[50px] "
            name="numberOfStops"
            id="onestop"
            inputClassName="peer hidden w-0 "
            htmlFor="onestop"
            label="ROUND TRIP"
          />
          <Input
            className="flex my-0 "
            type="radio"
            name="numberOfStops"
            id="morestops"
            inputClassName="peer hidden w-0"
            htmlFor="morestops"
            labelClassname="cursor-pointer text-rosemary text-nowrap  peer-checked:bg-rosemary peer-checked:text-white py-[15px] px-[40px] text-[.8rem]  rounded-[50px] "
            label="MULTI CITY"
          />
        </div>
        <Input
          className={
            "flex flex-row-reverse items-center justify-end my-0 bg-skyblue py-[15px] px-[25px] rounded-[40px] w-[22%]"
          }
          type="text"
          placeholder="FIRST CLASS"
          inputClassName={
            "border-0 m-0 placeholder:text-rosemary uppercase w-[160px] placeholder:text-[.8rem] bg-transparent "
          }
          label={<PiArmchairFill />}
          labelClassname={"text-[1.3rem] text-rosemary"}
        />
        <Button
          BtnChildren={"Search"}
          className="bg-sunorange text-white uppercase py-[15px] px-[25px] w-[22%]"
        />
      </form>
    </section>
  );
};

export default BodySearch;
