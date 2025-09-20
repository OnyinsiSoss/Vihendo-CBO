"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

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
      <div className="relative h-[400px]">
        <Image
          src="https://i.ibb.co.com/xKhRkrFz/slide2.jpg"
          width={1920}
          height={400}
          alt="Projects Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-500/80"></div>
        <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <h1 className="text-3xl border-b-2 pb-2 border-secondary font-bold tracking-tight text-center text-white">
            Our Projects
          </h1>
        </div>
      </div>
      <section className="min-h-screen bg-gray-500 flex items-center justify-center p-4 bg-[url('https://source.unsplash.com/random/1920x1080/?nature')] bg-cover  bg-center">
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-8">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            VIHENDO CBO Current Priorities (2025-2026)
          </h1>
          <p className="text-center text-gray-200 mb-8">
            The following are the key priorities for VIHENDO CBO for the period
            2025-2026:
          </p>
          <ul className="space-y-2">
            {priorities.map((priority, index) => (
              <li key={index} className="border-b border-white/20">
                <button
                  className="w-full flex justify-between items-center py-3 text-left text-white hover:bg-white/10 focus:outline-none transition-colors"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="flex-1">{priority.title}</span>
                  <span className="text-white">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pl-4 pb-3 text-gray-200 text-sm">
                    {priority.description}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CurrentPriorities;
