import Button from "@/components/Button";
import Image from "next/image";
import hero from "/public/undraw_online_test_re_kyfx.svg";
const page = () => (
  <section className="flex md:flex-row flex-col items-center md:gap-12 py-16 text-inherit">
    <div className="md:w-[65%] flex flex-col gap-12 md:mb-0 mb-16">
      <h1 className="lg:text-[64px] sm:text-[48px] text-[38px] uppercase font-black text-gradient ">
        Your one-stop <br />
        E-commerce Destination!
      </h1>
      <p className="lg:text-2xl sm:text-xl text-[18px] leading-8">
        Discover a world of endless shopping possibilities at our online store.
        browse, choose amd order your favorite products from the comfort of your
        home
      </p>
      <Button />
    </div>
    <Image src={hero} alt={"img"} className="md:w-[35%] " priority />
  </section>
);

export default page;
