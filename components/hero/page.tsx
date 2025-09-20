import { ChevronsRight } from "lucide-react";
import { HandHeart } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" ">
      <div className="relative h-[100vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 ">
        <Image
          src="https://i.ibb.co.com/xKhRkrFz/slide2.jpg"
          width={1920}
          height={400}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-gray-500/50 -z-10"></div>
        <div>
          <div className="text-white">
            <h1 className="text-center text-4xl mb-4 uppercase">
              <span className="text-5xl font-bold">VIHENDO</span> Community
            </h1>
            <h2 className="text-center text-4xl  font-bold">
              “Putting love for the communities into actions”
            </h2>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <button
              type="button"
              className="group cursor-pointer slide-anime px-3 md:px-5 py-3 rounded-full max-w-max bg-white text-blue-600 flex justify-between items-center font-semibold gap-1 hover:border border border-transparent hover:border-blue-600"
            >
              Donate Now{" "}
              <div className="group-hover:translate-x-2 transition-all">
                <HandHeart size={18} />
              </div>
            </button>
            <a
              className="flex max-w-max gap-2 cursor-pointer px-4 py-3 bg-blue-600 hover:bg-white hover:text-blue-600 text-white transition-all  dark:border-white  rounded-full font-semibold hover:border border hover:border-blue-600"
              href="/about"
            >
              Learn More
              <ChevronsRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
