"use client";
import { Data } from "@/constants";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
const ImageSlider = ({ data }: { data: Data }) => {
  const [img, setImg] = useState(data.thumbnail);
  const handelClick = (image: string | StaticImport) => {
    setImg(image);
  };
  return (
    <div>
      <div className="relative">
        <Image
          src={img}
          alt={"img"}
          width={400}
          height={400}
          className="w-full h-[400px] object-cover my-4"
        />
        <span className="absolute right-0 bottom-0 p-3 bg-[#54c28bc2] text-white">
          {data.category}
        </span>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.images.map((image: string | StaticImport, i: Number) => {
          return (
            <Image
              key={`${i}`}
              src={image}
              alt={"img"}
              width={130}
              height={140}
              className={`w-[130px] h-[140px] object-cover  transition-all hover:p-1 hover:border-2 hover:border-primary cursor-pointer ${
                img === image ? `border-4 border-primary` : ``
              }`}
              onClick={() => handelClick(image)}
            ></Image>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
