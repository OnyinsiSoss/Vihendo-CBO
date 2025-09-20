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
      <div className="w-full bg-white overflow-hidden backdrop-blur-md rounded-xl shadow-lg  p-10">
        <h1 className="text-3xl font-bold font-[cinzel] mb-6">
          VIHENDO CBO Current Priorities (2025-2026)
        </h1>
        <p className="text-left mb-8">
          The following are the key priorities for VIHENDO CBO for the period
          2025-2026:
        </p>
        <ul className=" w-full">
          {priorities.map((priority, index) => (
            <li key={index} className=" border-b border-gray-500/20">
              <button
                className="w-full flex justify-between  items-center py-3 text-left hover:bg-gray-200 "
                onClick={() => toggleDropdown(index)}
              >
                <span className="flex-1 text-xl pl-1">{priority.title}</span>
                <span className="pr-1">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-3 bg-gray-200 rounded text-gray-700 text-lg">
                  {priority.description}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentPriorities;
