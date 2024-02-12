import CustomProducts from "@/components/CustomProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hexashop - Portfolio",
  description: `Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home`,
};
const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
const page = async () => {
  const data = await getData();
  return (
    <section className="py-12 flex flex-col gap-24">
      <CustomProducts data={data.products} />
    </section>
  );
};
export default page;
