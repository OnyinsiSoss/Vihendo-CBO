import { HandHeart } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 ">
        <div
          className="absolute inset-0 w-full  -z-10"
          style={{
            backgroundAttachment: "fixed",
            backgroundImage: "url('https://i.ibb.co.com/xKhRkrFz/slide2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "brightness(0.7)",
          }}
        >
          <div
            style={{
              height: "100%",
              zIndex: -40,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .5))",
            }}
          ></div>
        </div>
        <h1 className="text-7xl text-white text-center font-[angella] my-10">
          Why Partner with Us?
        </h1>
        <p className="text-center text-white w-2/3 mx-20 mb-10">
          VCBO is led by committed local volunteers who understand the needs,
          challenges, and potential of their own communities. We offer a direct,
          cost-effective, and participatory approach to grassroots development.
          By partnering with us, donors and well-wishers can be assured of
          impact-driven programs, strong community engagement, and transparent
          use of resources.
          {/* Vihendo CBO is dedicated to empowering marginalized
          communities in Kilifi County through inclusive programs in education,
          health, environment, and economic empowerment. Our holistic approach
          addresses the multifaceted challenges faced by these populations,
          fostering sustainable development and improved quality of life. By
          collaborating with local stakeholders and leveraging community
          strengths, we strive to create lasting positive change and promote
          social equity. */}
        </p>
        <button
          type="button"
          className="group cursor-pointer slide-anime px-3 md:px-5 py-3 rounded-full max-w-max bg-white text-black flex justify-between items-center font-semibold gap-1 hover:border border border-transparent hover:border-blue-600"
        >
          Become a volunteer{" "}
          <div className="group-hover:translate-x-2 transition-all">
            <HandHeart size={18} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default page;
