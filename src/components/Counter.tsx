"use client";

import { Data, Datas } from "@/constants";
import { CartContext } from "@/context/CartContext";
import { useContext, useState } from "react";

const Counter = ({ data }: { data: Data }) => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const addToCart = () => {
    if (cart) {
      setCount(0);
      setCart((currItems: Datas) => {
        if (
          currItems.find((item: { id: number }) => item.id === data.id) == null
        ) {
          return [...currItems, { ...data, stock: count }];
        } else {
          return currItems.map((item: { stock: number; id: number }) => {
            if (item.id === data.id) {
              return { ...item, stock: count + item.stock };
            } else {
              return item;
            }
          });
        }
      });
    } else {
      setCount(0);
      setCart([{ ...data, stock: count }]);
    }
  };
  return (
    <div className="text-center flex flex-col w-full items-center">
      <p className="mt-5 text-[30px] text-primary ">
        {data.stock ? "In stock" : "fuck u"}
      </p>
      <div className="mt-3 flex gap-[30px] items-center select-none w-full justify-between">
        <span
          className="cursor-pointer text-3xl"
          onClick={() => setCount((prev) => (prev > 9 ? prev - 10 : prev))}
        >
          ➖
        </span>
        <span
          className="cursor-pointer "
          onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          ➖
        </span>
        <span className="w-[30px]">{count}</span>
        <span
          className="cursor-pointer "
          onClick={() => setCount((prev) => prev + 1)}
        >
          ➕
        </span>
        <span
          className="cursor-pointer text-3xl"
          onClick={() => setCount((prev) => prev + 10)}
        >
          ➕
        </span>
      </div>
      <button
        className=" w-[250px] py-3 mt-4 rounded-[30px] text-lg bg-primary text-white"
        onClick={addToCart}
      >
        Add to cart
      </button>
      <button className=" w-[250px] py-3 mt-4 rounded-[30px] text-lg bg-primary text-white">
        Buy now
      </button>
      <button className="mx-auto w-fit p-3 mt-10 border border-primary text-xs ">
        Add to wish list
      </button>
    </div>
  );
};

export default Counter;
