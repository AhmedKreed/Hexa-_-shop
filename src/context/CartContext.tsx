"use client";
import { Datas } from "@/constants";
import { createContext, useEffect } from "react";
import { PropsWithChildren, useState } from "react";

export const CartContext = createContext<any>(undefined);

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cart, setCart] = useState<Datas | string>("");
  useEffect(() => {
    const storage = localStorage.getItem("cart");
    setCart(JSON.parse(storage!));
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
