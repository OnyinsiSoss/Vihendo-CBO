import React from "react";
import { ChevronsRight } from "lucide-react";

const aboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around md:items-start gap-8 mx-20 my-5 p-8 border border-gray-400 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <div className="">
        <h1 className="text-7xl text-blue-700 text-center font-[angella] ">
          Who we are
        </h1>
      </div>
      <div>
        <p className="text-lg text-right max-w-2xl">
          VIHENDO Community Based Organization (VCBO) is grassroots, non-profit
          Community-Based Organization founded in 2024 and officially registered
          on 13th, May, 2025. Based in KILIFI County, Kenya. VCBO was
          established by local volunteers with a shared passion for uplifting
          vulnerable and underserved communities through sustainable development
          initiatives. Our work is driven by the belief that positive
          transformation begins at the community level, and we strive to empower
          individuals and families to create lasting change in their own lives.
        </p>
        <a
          className="mt-10 flex max-w-max gap-2 cursor-pointer px-4 py-3 bg-blue-700 border hover:border-1 hover:bg-white hover:text-black text-white transition-all float-right rounded-full font-semibold"
          href="/about"
        >
          Learn More
          <ChevronsRight />
        </a>
      </div>
    </div>
  );
};

export default aboutUs;
