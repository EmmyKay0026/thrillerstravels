import React from "react";
import BodySearch from "../molecules/BodySearch";
import Button from "../atoms/Buttons";
import FromTo from "../molecules/FromTo";
import Results from "../molecules/Results";

const Body = () => {
  return (
    <section className="flex-[5_5_0%] flex gap-8 flex-col pt-11 pr-[32px] h-screen">
      <>
        <BodySearch />
      </>
      <div className="flex items-center justify-between text-rosemary ">
        <p className="font-semibold text-[1.2rem] tracking-[2px]">
          RESULT (25)
        </p>
        <div className="flex items-center justify-between gap-[20px] ">
          <Button className="bg-white  font-semibold" BtnChildren={"FILTER"} />
          <select
            className="bg-white py-[13px] px-[30px] outline-0 rounded-[50px] text-[.9rem] font-semibold"
            name=""
            id=""
          >
            <option defaultValue value="">
              TICKET OF CLASS
            </option>
          </select>
        </div>
      </div>
      <div className="flex gap-6 justify-between ">
        <Results />
        <FromTo />
      </div>
    </section>
  );
};

export default Body;
