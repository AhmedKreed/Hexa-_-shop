"use client";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
interface Params {
  links: {
    id: number;
    title: string;
    link: string;
  }[];
}
[];
const MenuToggle = ({ links }: Params) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ul className="md:hidden flex z-10 text-white mr-3">
      <MdOutlineMenu
        size={42}
        className="text-primary cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      />
      <ul
        className={`${
          toggle ? "flex " : "hidden "
        }absolute right-0 bottom-[-296px] py-10 w-[200px] px-6 flex-col gap-6 scale-up-tr rounded-lg bg-border shadow-lg`}
      >
        {links.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.title}
          </Link>
        ))}
        <li>
          <Link
            href={"/"}
            className="font-medium text-sm uppercase bg-primary text-white p-[10px] cursor-pointer rounded-md"
          >
            logout
          </Link>
        </li>
      </ul>
    </ul>
  );
};

export default MenuToggle;
