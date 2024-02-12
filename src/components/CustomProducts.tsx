"use client";
import { Data, Datas } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 680 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const CustomProducts = ({ data }: { data: Datas }) => {
  const discountPercentage = data.filter(
    (product: { discountPercentage: number }) => product.discountPercentage > 16
  );

  const trending = data.filter(
    (product: { stock: number }) => product.stock < 50
  );

  const highestRating = data.filter(
    (product: { rating: number }) => product.rating > 4.59
  );
  const products = [discountPercentage, trending, highestRating];
  const headers = ["Trending", "High Discounts", "High rating"];
  return (
    <>
      {headers.map((head, index) => (
        <div key={head}>
          <h1 className="ml-[10px] mb-12 text-[2rem] font-bold ">{head}</h1>
          <Carousel
            responsive={responsive}
            swipeable
            infinite
            removeArrowOnDeviceType={["mobile"]}
            autoPlay
            autoPlaySpeed={5000}
            itemClass="px-3 flex flex-col relative pb-2"
          >
            {products[index].map((item: Data) => (
              <>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={150}
                  className="w-full h-[150px] object-cover rounded-t-2xl "
                />
                <h3 className="text-center text-xl font-bold my-3">
                  {item.title}
                </h3>
                <div className="mt-auto pl-2">
                  <p className="font-semibold">
                    Price :
                    <span className="text-[#992929] line-through">
                      {" "}
                      ${item.price}.99
                    </span>{" "}
                    $
                    {Math.floor(
                      item.price - item.price / item.discountPercentage
                    )}
                    .99
                  </p>
                  <p className="text-lg">Rating : {item.rating}</p>
                  <p className="text-xl text-primary font-semibold">
                    {item.stock ? "In stock" : "not available"}
                  </p>
                </div>
                <Link
                  href={`/Products/${item.id}`}
                  className="absolute h-full z-[2] left-1/2 top-0 link_w -translate-x-1/2 border-2 border-border rounded-2xl hover:border-primary transition-all"
                ></Link>
              </>
            ))}
          </Carousel>
        </div>
      ))}
    </>
  );
};

export default CustomProducts;
