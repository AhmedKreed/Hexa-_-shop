"use client";
import Link from "next/link";
import Image from "next/image";
import { Datas } from "@/constants";
import { Data } from "@/constants";
const Products = ({
  data,
  title,
  category,
}: {
  data: Datas;
  title: string;
  category: any[] | undefined;
}) => {
  const elements = data
    .filter((prod: Data) => !category || category.includes(prod.category))
    .map((prod: Data) => {
      let titles: string = prod.title;
      titles = titles.toLowerCase();
      return !title || title === titles.slice(0, title.length) ? (
        <Link
          href={`/Products/${prod.id}`}
          key={prod.id}
          id={prod.category}
          className="h-[350px] lg:basis-[30%] sm:basis-[45%] basis-[350px] overflow-hidden rounded-2xl border-border border-2 relative transition-all hover:border-primary"
        >
          <span className="absolute left-0 top-0 text-[#ff0] bg-[#f4433654] p-[10px]">
            ${prod.price}.99
          </span>
          <span className="absolute right-0 top-0 text-[#ff0] bg-[#54c28bc2] p-[10px]">
            %{prod.discountPercentage}-
          </span>
          <Image
            src={prod.thumbnail}
            width={350}
            height={250}
            alt={"product"}
            className="object-cover h-[200px] w-[100%] rounded-t-2xl"
          ></Image>
          <div className="mx-auto text-center px-[10px]">
            <h3 className="my-[10px] font-bold text-[1.17rem]">{prod.title}</h3>
            <p className="text-[#999] text-[12px] leading-[160%]">
              {prod.description}
            </p>
          </div>
        </Link>
      ) : (
        ""
      );
    });
  return (
    <>
      {elements.every((element) => element === "") ? (
        <div>Sorry we dont have this shit 😳</div>
      ) : (
        elements
      )}
    </>
  );
};

export default Products;
