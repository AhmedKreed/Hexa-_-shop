"use client";
import { useContext, useState } from "react";
import makeAnimated from "react-select/animated";
import Select, { InputActionMeta } from "react-select";
import { Datas, Data } from "@/constants";
import Products from "./Products";
const options = [
  { value: "smartphones", label: "Smartphones" },
  { value: "laptops", label: "Laptops" },
  { value: "fragrances", label: "Fragrances" },
  { value: "skincare", label: "Skincare" },
  { value: "groceries", label: "Groceries" },
  { value: "home-decoration", label: "Home-decoration" },
];
const SearchBar = ({ data }: { data: Datas }) => {
  const [hover, setHover] = useState(false);
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState("");
  const [category, setCategory] = useState<any[]>();
  const onInputChange = (x: any, { action, prevInputValue }: any) => {
    if (action === "select-option") {
      setCategory(x);
    } else if (action === "clear") {
      setCategory(undefined);
    } else if (action === "remove-value") {
      category?.length === 1 ? setCategory(undefined) : setCategory(x);
    }
  };
  const categories = category?.map((x) => x.value);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTitles(title);
    setTitle("");
  };
  const handleClick = (t: string) => {
    setTitle(t);
  };
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  const slide = data
    .filter((item: Data) => !categories || categories.includes(item.category))
    .filter(
      (item: Data) =>
        title &&
        item.title.slice(0, title.length).toLowerCase() ===
          title.toLowerCase() &&
        item.title.toLowerCase() !== title.toLowerCase()
    )
    .map((item: Data) => {
      return (
        <div
          key={item.title}
          onClick={() => handleClick(item.title)}
          className="p-2 cursor-pointer hover:pl-5 transition-all"
        >
          {item.title}
        </div>
      );
    });
  const x = 40 * slide.length + 1;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center md:flex-row flex-col mb-[70px] justify-between md:h-[50px]  md:gap-0 gap-5  "
      >
        <Select
          components={makeAnimated()}
          isMulti
          name="category"
          options={options}
          className="basic-multi-select md:basis-[35%] w-full"
          classNamePrefix="select"
          onInputChange={onInputChange}
          onChange={onInputChange}
        />
        <div className="search_bar_size relative ">
          <input
            type="text"
            placeholder="Search"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onChange={handleChange}
            className={`bg-transparent transition-all p-3 border-2 border-border w-full rounded-3xl outline-none ${
              hover && "border-primary hover_input "
            }`}
            value={title}
          ></input>
          <button className="absolute right-3 top-[50%] translate-y-[-50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              className={`fill-border transition-all h-6 w-6  ${
                hover && "fill-primary"
              }`}
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
          <div
            className="absolute right-3 slide_size bg-white  text-dark overflow-hidden rounded-md z-[5]"
            style={slide ? { bottom: -x } : { bottom: 0, height: 0 }}
          >
            {slide}
          </div>
        </div>
      </form>
      <div className="flex flex-row sm:justify-between justify-center flex-wrap gap-10">
        <Products
          data={data}
          title={titles.toLowerCase()}
          category={categories}
        />
      </div>
    </>
  );
};

export default SearchBar;
