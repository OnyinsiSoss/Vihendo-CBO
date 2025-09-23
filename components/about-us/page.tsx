import React from "react";
import Mission from "@/components/mission/page";
import Vission from "@/components/vission/page";

const aboutUs = () => {
  return (
    <div className="bg-white rounded-md text-[#146D2D] p-10 shadow-lg  hover:shadow-2xl sm:mx-10 sm:my-10 transition-shadow duration-300">
      <div className="flex bg-white flex-col md:justify-around md:items-start gap-8 sm:px-20  my-20">
        <div className="">
          <h1 className="text-5xl font-[cinzel] ">Who we are</h1>
          <hr className="border-t-2 my-5 border-[#146D2D]" />
        </div>
        <div>
          <p className="text-lg text-left leading-8 ">
            <span className="font-bold text-xl uppercase">
              VIHENDO Community Based Organization (VCBO)
            </span>
            is a grassroots, non-profit Community-Based Organization founded in
            2024 and officially registered on 13th, May, 2025. Based in KILIFI
            County, Kenya. VCBO was established by local volunteers with a
            shared passion for uplifting vulnerable and underserved communities
            through sustainable development initiatives. Our work is driven by
            the belief that positive transformation begins at the community
            level, and we strive to empower individuals and families to create
            lasting change in their own lives.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center md:items-start py-10 gap-8">
        <Mission />
        <Vission />
      </div>
    </div>
  );
};

export default aboutUs;
