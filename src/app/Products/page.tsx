import Products from "@/components/Products";
import SearchBar from "@/components/SearchBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hexashop - Products",
  description: `Discover a world of endless shopping possibilities at our online
          store. browse, choose amd order your favorite products from the
          comfort of your home`,
};

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  return (
    <section className="py-16 mb-auto">
      <SearchBar data={data.products} />
    </section>
  );
};

export default page;
