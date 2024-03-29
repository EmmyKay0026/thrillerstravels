"use client";
import React from "react";
import Image from "next/image";
import ReactSlider from "react-slider";
import Input from "../atoms/Input";

const FromTo = () => {
  return (
    <div className="w-[37%] bg-darkergreen rounded-[20px]">
      <div className="bg-rosemary rounded-t-[20px]">
        <div className="flex justify-between items-end text-white  pt-[30px] px-[20px]">
          <div>
            <p className="text-[.8rem]">FROM</p>
            <h6 className="text-[1.5rem]">JFK</h6>
          </div>
          <p className="text-[.8rem]">NON-STOP</p>
          <div className="text-right">
            <p className="text-[.8rem]">TO</p>
            <h6 className="text-[1.5rem]">BOM</h6>
          </div>
        </div>
        <div className="  px-[20px]">
          <Image src="/fromto.jpg" alt="" width={320} height={320} />
        </div>
      </div>
      <div className="bg-darkergreen  pb-[30px]  px-[20px] rounded-b-[40px] ">
        <form action="">
          <div className="flex items-center justify-between">
            <Input
              className="flex "
              type="radio"
              name="numberOfStops"
              id="nonstop"
              inputClassName="peer hidden w-0"
              htmlFor="nonstop"
              labelClassname="cursor-pointer text-white text-nowrap  bg-sunorange py-[10px] px-[20px] text-[.8rem]  rounded-[50px] "
              label="NON STOP"
            />
            <Input
              className="flex "
              type="radio"
              name="numberOfStops"
              id="onestop"
              inputClassName="peer/onestop  w-0"
              htmlFor="onestop"
              labelClassname="cursor-pointer text-white text-nowrap   py-[10px] px-[20px] text-[.8rem]  rounded-[50px] peer-checked/published:bg-sunorange "
              label="ONE STOP"
            />
            <Input
              className="flex "
              type="radio"
              name="numberOfStops"
              id="morestops"
              inputClassName="peer hidden w-0"
              htmlFor="morestops"
              labelClassname="cursor-pointer text-white text-nowrap  peer-checked:bg-sunorange py-[10px] px-[20px] text-[.8rem]  rounded-[50px] "
              label="MORE STOP"
            />
          </div>
          <p className="mt-[10px] mb-[20px] text-white text-[.7rem] ">
            PRICING
          </p>
          <ReactSlider
            className="horizontal-slider "
            thumbClassName="example-thumb flex flex-row-reverse justify-start items-center text-center  px-[20px] py-[5px] text-white rounded-[20px] bg-sunorange outline-0 text-[.7rem] top-[30px] before:inline-block before:w-[15px] before:h-[15px] before:bg-sunorange before:relative before:bottom-[43px] before:left-[0px] before:rounded-full "
            trackClassName="example-track bg-grey h-[2px] "
            defaultValue={[0, 4000]}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={10}
          />
        </form>
      </div>
    </div>
  );
};

export default FromTo;
