import React from "react";
import { ChevronsRight } from "lucide-react";

const aboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-center max-w-2xl">
        VIHENDO Community Based Organization (VCBO) is grassroots, non-profit
        Community-Based Organization founded in 2024 and officially registered
        on 13th, May, 2025. Based in KILIFI County, Kenya. VCBO was established
        by local volunteers with a shared passion for uplifting vulnerable and
        underserved communities through sustainable development initiatives. Our
        work is driven by the belief that positive transformation begins at the
        community level, and we strive to empower individuals and families to
        create lasting change in their own lives.
      </p>
      <a
        className="mt-10 flex max-w-max gap-2 cursor-pointer px-4 py-3  bg-[#1B8271] border hover:border-1 hover:bg-white hover:text-black text-white transition-all  rounded-full font-semibold"
        href="#"
      >
        Learn More
        <ChevronsRight />
      </a>
    </div>
  );
};

export default aboutUs;
