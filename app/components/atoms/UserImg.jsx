import React from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";

const UserImg = ({ src, alt, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-rosemary w-[45px] h-[45px] rounded-full",
        className
      )}
    >
      <Image
        className="rounded-full"
        alt={alt}
        src={src}
        width={40}
        height={40}
      />
    </div>
  );
};

export default UserImg;
