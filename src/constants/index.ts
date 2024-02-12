export type Datas = {
  description: string;
  title: string;
  thumbnail: string | StaticImport;
  images: string[] | StaticImport[];
  discountPercentage: number;
  price: number;
  id: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}[];
export type Data = {
  description: string;
  title: string;
  thumbnail: string | StaticImport;
  images: string[] | StaticImport[];
  discountPercentage: number;
  price: number;
  id: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
};
export const links = [
  {
    id: 1,
    title: "About",
    link: "/About",
  },
  {
    id: 2,
    title: "Products",
    link: "/Products",
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/Portfolio",
  },
  {
    id: 4,
    title: "Contact",
    link: "/Contact",
  },
];
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { telegram, facebook, instagram, x, youtube } from "../../public";
export const footer = [
  {
    id: 1,
    img: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    img: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    img: telegram,
    link: "https://www.telegram.org/",
  },
  {
    id: 4,
    img: youtube,
    link: "https://www.youtube.com/",
  },
  {
    id: 5,
    img: x,
    link: "https://www.twitter.com/",
  },
];
