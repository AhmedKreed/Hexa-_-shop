import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Counter from "@/components/Counter";

async function getData(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const data = await getData(params.id);
  return {
    title: `Hexashop - ${data.title}`,
    description: data.description,
  };
}
const page = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);
  const priceDis = Math.floor(
    data.price - data.price / data.discountPercentage
  );
  return (
    <section className="pb-16">
      <h1 className="my-4 text-[2rem] font-bold">{data.title}</h1>
      <p className="mb-[10px]">{data.description}</p>
      <ImageSlider data={data} />
      <div className=" mt-16 flex md:flex-row flex-col gap-24">
        <p className="text-[14px] leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint in
          pariatur voluptatibus vel a necessitatibus, quae, consequatur, maiores
          labore modi vitae. Omnis maxime, maiores explicabo dicta quod quae ut
          doloremque. Necessitatibus commodi, dolores praesentium nulla minus
          dolorum odio totam similique. Cupiditate at, unde fugit vitae nihil
          fugiat. Fugit esse iusto aspernatur nisi modi! Praesentium architecto
          fugit quas perspiciatis! Exercitationem numquam eaque qui incidunt
          explicabo rerum enim a porro quam neque dolor illum eos eligendi iste
          modi ea provident culpa ullam suscipit corporis, tempore voluptatem!
          Quam facere natus, blanditiis aut, ducimus, dolor veniam debitis in
          earum sapiente ex explicabo molestias?
        </p>
        <div className="lg:min-w-[400px] md:min-w-[280px] w-full flex flex-col items-center">
          <p className="line-through text-[#fd3636] text-[22px] p-[10px] self-start">
            Price : ${data.price}.99
          </p>
          <p className="text-[#d1d100] text-[22px] p-[10px] self-start">
            Price : ${priceDis}.99
          </p>
          <Image
            src={data.thumbnail}
            alt={"img"}
            width={400}
            height={300}
            className="object-cover w-[400px] h-[300px]"
          />
          <Counter data={data} />
        </div>
      </div>
    </section>
  );
};

export default page;
