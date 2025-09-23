import { HandHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div id="#home">
      <div className="relative h-[100vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 ">
        <Image
          src="/images/children-1-scaled.jpg"
          width={1920}
          height={400}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-blue-950/40 -z-10"></div>
        <div>
          <div className="text-white">
            <h1 className="text-center text-4xl mb-4 uppercase">
              <span className="text-5xl font-bold">VIHENDO</span> Community
            </h1>
            <h2 className="text-center text-4xl  font-bold">
              “Putting love for the communities into actions”
            </h2>
          </div>
          <div className="flex justify-center uppercase gap-4 mt-8">
            <Link
              type="button"
              className="group cursor-pointer slide-anime px-3 md:px-5 py-3 rounded-full max-w-max bg-white text-[#146D2D] flex justify-between items-center font-semibold gap-1 "
              href="/get-involved"
            >
              Get Involved
              <div className="group-hover:translate-x-2 transition-all">
                <HandHeart size={18} />
              </div>
            </Link>
            <Link
              type="button"
              className="group cursor-pointer slide-anime px-3 md:px-5 py-3 rounded-full max-w-max bg-white text-[#146D2D] flex justify-between items-center font-semibold gap-1 "
              href="#Who-we-are"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
