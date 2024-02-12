import styles from "./page.module.css";
import hero from "/public/undraw_online_test_re_kyfx.svg";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Button from "@/components/Button";
export const metadata: Metadata = {
  title: "Hexashop - About",
  description: `Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home`,
};
const page = () => {
  return (
    <section className="flex lg:flex-row-reverse flex-col items-center md:gap-16 py-16 text-inherit">
      <div className="lg:w-[65%] flex flex-col gap-12 md:mb-0 mb-16">
        <h1 className="sm:text-[64px] text-[48px] uppercase font-black text-gradient ">
          ABOUT US
        </h1>
        <p className="lg:text-2xl text-xl leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          adipisci rem quibusdam. Doloribus distinctio aperiam nemo ut
          accusantium, assumenda laboriosam similique quia sit illo! Atque in
          dolorum dolorem, soluta modi quaerat debitis incidunt, enim sunt, sint
          rem vero omnis aliquid ab. Natus suscipit rem labore consequatur autem
          exercitationem, corporis explicabo a, aut tenetur sit esse adipisci,
          sint excepturi. Iure animi aspernatur eum expedita non ut accusamus
          voluptatum.
        </p>
        <Button />
      </div>
      <Image src={hero} alt={"img"} className="lg:w-[35%] " />
    </section>
  );
};

export default page;
