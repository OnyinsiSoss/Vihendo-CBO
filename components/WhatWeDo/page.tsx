import React from "react";
import Purpose from "@/components/purpose/page";
import Goals from "@/components/goals/page";
import Projects from "@/components/projects/page";
import Activities from "@/components/activities/page";
import SpecificObjectives from "../specificObjectives/page";

const page = () => {
  return (
    <div>
      <div className="flex flex-col  gap-8 sm:m-20 sm:p-10 shadow-lg text-white bg-[#146D2D] hover:shadow-2xl transition-shadow duration-300 rounded-md">
        <div className="mt-20 my-20">
          <h1 className="text-5xl px-10 font-[cinzel] ">What we do</h1>
          <hr className="border-t-2 m-5 border-white" />
        </div>
        <div>
          <SpecificObjectives />
        </div>

        <div className="flex flex-col gap-10">
          <Purpose />
          <Activities />
        </div>
        <div className="flex flex-col gap-10">
          <Goals />
          <Projects />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
