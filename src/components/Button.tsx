import Link from "next/link";

const Button = () => (
  <Link
    href={"/"}
    className="uppercase bg-primary text-[#333] p-[20px] rounded-md cursor-pointer font-bold w-fit"
  >
    Shop Now
  </Link>
);

export default Button;
