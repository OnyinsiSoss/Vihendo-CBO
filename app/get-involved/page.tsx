import React from "react";
import Image from "next/image";
import GetInTouch from "@/components/getInTouch/page";
import SupportInvitation from "@/components/volunteer/page";

const page = () => {
  return (
    <main className="">
      <>
        <div className="relative h-[400px]">
          <Image
            src="/images/children-1-scaled.jpg"
            width={1920}
            height={400}
            alt="Contact Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/50"></div>
          <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl border-b-2 pb-2 border-secondary font-bold tracking-tight text-center font-[cinzel] text-white">
              Make an Impact today
            </h1>
          </div>
        </div>
        <div className="m-20 rounded-2xl bg-white p-2 sm:p-6">
          <p className=" font-[angella] font-semibold capitalize sm:px-10 text-blue-950 mt-6 max-w-3xl text-lg sm:text-6xl">
            &quot;Together We can light the path to a better future for our
            communities&quot;
          </p>
          <SupportInvitation />
          <GetInTouch />
        </div>
      </>
    </main>
  );
};

export default page;
