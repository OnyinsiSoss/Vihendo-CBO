import React from "react";
import Purpose from "@/components/purpose/page";
import Goals from "@/components/goals/page";
import Projects from "@/components/projects/page";
import Activities from "@/components/activities/page";

const page = () => {
  return (
    <div>
      <div className="flex flex-col md:justify-center md:items-start gap-8 m-20 p-10 shadow-lg  hover:shadow-2xl transition-shadow duration-300">
        <div className="">
          <h1 className="text-5xl   font-[cinzel] ">What we do</h1>
          <hr className="border-t-2 my-5 border-gray-500" />
        </div>
        <div>
          <Purpose />
          <Goals />
        </div>
        <Activities />
        <Projects />
      </div>
      <div></div>
    </div>
  );
};

export default page;
