"use client";
import { Datas } from "@/constants";
import { CartContext } from "@/context/CartContext";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key, useContext, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { IoTrashBin } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const deleteItem = (id: number) => {
    setCart((currItems: Datas) => currItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <button
        className="w-14 h-14 rounded-full bg-primary absolute transition-all border-2 border-[#ffdf00] hover:border-[26px] top-[-8px] right-[-8px]"
        onClick={() => setShowCart(true)}
      >
        <BsCart4
          size={32}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black"
        />
      </button>
      <div
        className={`no_scroll_bar min-w-[320px] max-md:w-screen h-screen overflow-y-scroll absolute pl-5 z-[20000] flex flex-col bg-white shadow-2xl transition-all pt-5 ${
          showCart ? "right-0" : "md:right-[-120%] right-[-110vw]"
        }`}
      >
        <div
          className="flex gap-3 cursor-pointer items-center text-primary font-bold w-fit mb-16 "
          onClick={() => setShowCart(false)}
        >
          <RiArrowGoBackFill size={32} />
          <p className="font-bold text-lg">Go Back</p>
        </div>
        <div className="flex flex-col text-[#bbb] gap-12">
          {cart
            ? cart.map(
                (
                  item: {
                    price: number;
                    stock: number;
                    description: string;
                    title: string;
                    id: number;
                    thumbnail: string | StaticImport;
                  },
                  index: number
                ) => (
                  <div
                    key={item.id}
                    className={` flex gap-3 shadow-xl pr-5 md:flex-row flex-col md:text-left text-center`}
                  >
                    <Image
                      src={item.thumbnail}
                      alt={"img"}
                      width={200}
                      height={100}
                      className="md:w-[200px] w-[320px] h-[100px] object-cover mx-auto"
                    />
                    <div className="md:w-[500px] md:max-w-[500px] w-full py-3">
                      <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                      <p className="text-xs">{item.description}</p>
                    </div>
                    <div className="py-3 flex flex-col justify-between">
                      <h2 className="text-[#ffdf00] text-[22px]">
                        {item.price * item.stock}.99
                      </h2>
                      <div className="flex md:justify-between justify-evenly">
                        <p className="text-lg">{item.stock}</p>
                        <IoTrashBin
                          size={32}
                          className="text-red-700 cursor-pointer"
                          onClick={() => deleteItem(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                )
              )
            : null}
        </div>
      </div>
    </>
  );
};

export default Cart;
