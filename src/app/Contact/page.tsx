import React from "react";

const page = () => {
  return (
    <section className="pb-4">
      <div className="mb-10">
        <h1 className="text-gradient mb-3 font-black uppercase text-[40px]">
          Contact-Us
        </h1>
        <p className="text-[14px] leading-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          tenetur exercitationem quae dolores amet
        </p>
      </div>
      <div className="flex justify-between md:flex-row flex-row-reverse">
        <form action="" className="basis-[70%] flex flex-col items-end">
          <input
            type="text"
            name="text"
            placeholder="YOUR NAME"
            className="input"
          />
          <input
            type="email"
            name="mail"
            placeholder="YOUR MAIL"
            className="input"
          />
          <textarea
            name="textarea"
            placeholder="YOUR MESSAGE"
            className="input h-[250px] p-3 mb-0"
          ></textarea>
          <input
            type="submit"
            value="SEND MESSAGE"
            className="text-inherit mt-5 py-5 px-8 border-2 border-primary"
          />
        </form>
        <div className="basis-[25%] max-md:text-center">
          <h4 className="uppercase mb-8 md:text-lg font-medium text-base">
            Get In Touch
          </h4>
          <span className="block text-[#777] mb-3 max-md:text-[10px]">
            +00 123.456.789
          </span>
          <span className="block text-[#777] mb-3 max-md:text-[10px]">
            +00 123.456.789
          </span>
          <h4 className="uppercase mb-8 md:text-lg font-medium mt-24 text-base">
            Where We Are
          </h4>
          <div className="block text-[#777] mb-3 leading-8 max-md:text-[10px] ">
            Awesome Address 17
            <br />
            New York, NYC
            <br />
            123-4567-890
            <br />
            USA
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
