"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CurrentPriorities = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const priorities = [
    {
      title:
        "Construct 5 latrines in needy schools in KILIFI North & GANZE sub counties",
      description:
        "Building five modern latrines to improve sanitation and hygiene in schools across Kilifi North and Ganze sub counties.",
    },
    {
      title:
        "Support a school retention/feeding program for 1,000 teenage girls & 100 ECDE pupils in TEZO Location",
      description:
        "Providing meals and support to 1,000 teenage girls and 100 early childhood education pupils to enhance school attendance and nutrition in Tezo Location.",
    },
    {
      title: "Train 50 households on sustainable farming practices",
      description:
        "Equipping 50 households with knowledge and skills in sustainable agriculture to boost food security and income generation.",
    },
    {
      title:
        "Train 10 youth and women groups in financial literacy skills in Kilifi North Sub county",
      description:
        "Empowering 10 youth and women groups with financial literacy training to improve enterprise management and economic resilience in Kilifi North Sub county.",
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 w-full bg-white/70 text-blue-950 shadow-lg rounded-lg overflow-hidden ">
        <div className="basis-1/3 w-full flex items-center justify-center p-4">
          <h1 className="font-[cinzel] text-3xl">
            VIHENDO CBO Current Priorities (2025-2026)
          </h1>
        </div>
        <div className="basis-2/3 w-full flex items-center justify-center sm:p-4">
          <div className="w-full bg-white shadow-lg rounded-lg">
            <ul className="space-y-2">
              {priorities.map((priority, index) => (
                <li key={index} className=" border-b border-gray-200">
                  <button
                    className="w-full flex justify-between items-center p-5 text-left text-gray-800 hover:bg-gray-300 focus:outline-none"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="flex-1 text-lg">{priority.title}</span>
                    <span className="text-blue-700">
                      {openIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="pl-4 pb-3 text-gray-600 text-md">
                      {priority.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPriorities;
