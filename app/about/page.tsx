import React from "react";
import Image from "next/image";
import AboutUs from "@/components/about-us/page";
import Mission from "@/components/mission/page";
import Vission from "@/components/vission/page";
import WhyUs from "@/components/whyUs/page";

const page = () => {
  return (
    <div>
      <div className="relative h-[400px]">
        <Image
          src="https://i.ibb.co.com/xKhRkrFz/slide2.jpg"
          width={1920}
          height={400}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-500/80"></div>
        <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <h1 className="text-3xl border-b-2 pb-2 border-secondary font-bold tracking-tight text-center text-white">
            About Us
          </h1>
        </div>
      </div>
      <AboutUs />
      <WhyUs />
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 m-20">
        <Mission />
        <Vission />
      </div>
    </div>
  );
};

export default page;
