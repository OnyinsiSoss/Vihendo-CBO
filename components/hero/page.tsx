import { ChevronsRight } from "lucide-react";
import { HandHeart } from "lucide-react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-hero-bg bg-cover bg-center">
      <div>
        <div className="text-blue-600">
          <h1 className="text-center text-4xl mb-4 uppercase">
            <span className="text-5xl font-bold">VIHENDO</span> Community
          </h1>
          <h2 className="text-center text-4xl  font-bold">
            “Putting love for the communities into actions”
          </h2>
        </div>
        <div className="flex gap-4 justify-center mt-8">
          <button className="group cursor-pointer slide-anime px-3 md:px-5 py-3 rounded-full max-w-max bg-white  text-blue-600 flex justify-between items-center font-semibold bg-primary gap-1 hover:border border border-transparent   hover:border-blue-600">
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
  );
};
export default page;
