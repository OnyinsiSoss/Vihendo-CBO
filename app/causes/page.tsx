import React from "react";
import Image from "next/image";
import {
  FaHandHoldingWater,
  FaClinicMedical,
  FaSchool,
  FaDonate,
} from "react-icons/fa";
import { TbTrees } from "react-icons/tb";

const thematicAreas = [
  {
    title: "Education Support",
    subItems: [
      "Provision of bursaries and learning materials for needy students",
      "Mentorship and life-skills training for youth",
    ],
    image: <FaSchool />,
    bgColor: "bg-[#366334]",
  },
  {
    title: "Community Health Promotion",
    subItems: [
      "Health awareness campaigns (ANTI-JIGGER & Eye related diseases, reproductive health, nutrition)",
      "Linkages to public health services and mental health support",
    ],
    image: <FaClinicMedical />,
    bgColor: "bg-white",
  },
  {
    title: "Environmental Conservation",
    subItems: [
      "Community tree planting and climate resilience education",
      "Clean-up drives and sustainable waste management",
    ],
    image: <TbTrees />,
    bgColor: "bg-[b8ce83]",
  },
  {
    title: "Water/Sanitation and Hygiene",
    subItems: [
      "Promotion of safe water access",
      "Hygiene education and construction of latrines in schools",
    ],
    image: <FaHandHoldingWater />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Economic Empowerment",
    subItems: [
      "Support for women and youth groups in agribusiness and vocational skills",
      "Access to micro-loans and savings schemes",
    ],
    image: <FaDonate />,
    bgColor: "bg-[#d5a250]",
  },
];

const page = () => {
  return (
    <div>
      <div className="relative h-[400px]">
        <Image
          src="https://i.ibb.co.com/xKhRkrFz/slide2.jpg"
          width={1920}
          height={400}
          alt="Causes Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-500/80"></div>
        <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <h1 className="text-3xl border-b-2 pb-2 border-secondary font-bold tracking-tight text-center text-white">
            Our Causes
          </h1>
        </div>
      </div>
      <section className="">
        <div className=" w-full">
          {/* <h1 className="text-3xl font-bold text-center text-white mb-8">
            Our Causes
          </h1> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {thematicAreas.map((area, index) => (
              <div
                key={index}
                className={`border border-black/30 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:backdrop-blur-lg group hover:shadow-lg ${area.bgColor}`}
              >
                <div className="flex flex-col group m-auto items-center justify-center p-4 ">
                  <div className="text-4xl  py-4">{area.image}</div>
                  <h2 className="text-4xl text-center  font-[angella] my-2">
                    {area.title}
                  </h2>
                  <ul className="text-lg p-4">
                    {area.subItems.map((item, subIndex) => (
                      <li key={subIndex} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
