import { footer } from "@/constants";
import Image from "next/image";
import Link from "next/link";
const Footer = () => (
  <footer className="flex py-3 flex-wrap gap-5 ">
    <p>©{new Date().getFullYear()} Hexashop. All right reserved.</p>
    <div className="flex gap-3 ml-auto">
      {footer.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="w-6 h-6 rounded-full last:bg-white opacity-60 transition-all duration-300 hover:opacity-100 "
        >
          <Image src={item.img} alt={"social media logo"} />
        </Link>
      ))}
    </div>
  </footer>
);

export default Footer;
