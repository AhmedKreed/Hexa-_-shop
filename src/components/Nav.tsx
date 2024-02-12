import { links } from "@/constants";
import Link from "next/link";
import DarkModeToggle from "./ThemeToggle";
import MenuToggle from "./MenuToggle";
const Nav = () => (
  <nav className="flex justify-between items-center h-[100px] relative">
    <Link href={"/"} className="uppercase font-bold">
      HexaShop
    </Link>
    <div className="flex gap-3 items-center">
      <DarkModeToggle />
      <ul className="flex gap-3 max-md:hidden">
        {links.map((item) => (
          <Link key={item.id} href={item.link}>
            {item.title}
          </Link>
        ))}
        <li>
          <Link
            href={"/"}
            className="m-5 font-medium text-sm uppercase bg-primary text-white p-[10px] cursor-pointer rounded-md"
          >
            logout
          </Link>
        </li>
      </ul>
      <MenuToggle links={links} />
    </div>
  </nav>
);

export default Nav;
