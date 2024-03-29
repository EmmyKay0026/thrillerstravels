import React from "react";
import Image from "next/image";
import Button from "../atoms/Buttons";

const resultList = [
  {
    img: "/emirates.png",
    brand: "emirates",
    price: "$1,572",
  },
  {
    img: "/qatar.png",
    brand: "qatar airways",
    price: "$2,072",
  },
  {
    img: "/lufthansa.jpg",
    brand: "lufthansa",
    price: "$1,872",
  },
  {
    img: "/emirates.png",
    brand: "emirates",
    price: "$1,872",
  },
];

const Results = () => {
  return (
    <section className="bg-white w-[63%] rounded-[20px] px-[20px]">
      <div>
        {resultList.map((each, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between text-rosemary text-center py-[30px] border-b-[2px] border-dashed border-frostedblue "
            >
              <div>
                <Image src={each.img} alt={each.brand} width={80} height={80} />
              </div>
              <div className="flex flex-col gap-[9px] ">
                <h6 className="text-[1.5rem]">JFK</h6>
                <p className="text-[.8rem]">13:00</p>
              </div>
              <div className="flex flex-col gap-[0px] ">
                <p className="text-[.6rem] uppercase ">{each.brand}</p>
                <p className="text-sunorange">11H 20M</p>
                <h6>NON-STOP</h6>
              </div>
              <div className="flex flex-col gap-[9px] text-right">
                <h6 className="text-[1.5rem]">BOM</h6>
                <p className="text-[.8rem]">14:20</p>
              </div>
              <div className="flex flex-col gap-[9px] text-right">
                <p className="text-[.8rem] font-semibold">{each.price}</p>
                <Button
                  className=" py-[10px] px-[25px] bg-sunorange text-white text-[.6rem]"
                  BtnChildren="BOOK NOW"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Results;
