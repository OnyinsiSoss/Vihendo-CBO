import React from "react";
import Image from "next/image";
import GetInTouch from "@/components/getInTouch/page";
import SupportInvitation from "@/components/volunteer/page";

const page = () => {
  return (
    <main className="bg-[#146D2D]">
      <>
        <div className="relative h-[400px]">
          <Image
            src="/images/children-1-scaled.jpg"
            width={1920}
            height={400}
            alt="Contact Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#146D2D]/50"></div>
          <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl border-b-2 pb-2 border-secondary font-bold tracking-tight text-center font-[cinzel] text-white">
              Make an Impact today
            </h1>
          </div>
        </div>
        <div className="rounded-2xl bg-[#146D2D] p-2">
          <div className=" sm:m-20">
            <SupportInvitation />
            <GetInTouch />
          </div>
        </div>
      </>
    </main>
  );
};

export default page;
