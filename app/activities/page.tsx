"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const CommunityActivities: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activities = [
    {
      title: "Establishment of nursery trees for sale",
      description:
        "Cultivating and selling tree seedlings to promote environmental sustainability and generate income.",
    },
    {
      title: "Initiate agribusiness farming",
      description:
        "Developing agricultural projects to boost food security and create revenue through crop and livestock production.",
    },
    {
      title: "Organizing and conducting education fairs and career guidance",
      description:
        "Hosting events to provide educational resources and career advice to empower community members.",
    },
    {
      title: "Poultry farming",
      description:
        "Raising poultry to produce eggs and meat for sale, supporting local economies and food supply.",
    },
    {
      title: "Table banking",
      description:
        "Implementing a community-based savings and loan system to promote financial inclusion and entrepreneurship.",
    },
    {
      title: "Partnership engagements with other organizations",
      description:
        "Collaborating with like-minded organizations to pool resources and enhance program impact.",
    },
    {
      title: "Conduct financial literacy to youth and women groups",
      description:
        "Providing training to youth and women on managing finances to ensure successful enterprise operations.",
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
          alt="Activities Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-500/80"></div>
        <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <h1 className="text-3xl border-b-2 pb-2 border-secondary font-bold tracking-tight text-center text-white">
            Our Activities
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4 lg:p-14">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-18">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            VIHENDO CBO Activities
          </h1>
          <p className="text-center text-gray-600 mb-8">
            VIHENDO CBO shall undertake the following activities to generate
            resources for our programs:
          </p>
          <ul className="space-y-2">
            {activities.map((activity, index) => (
              <li key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-3 text-left text-gray-800 hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="flex-1">{activity.title}</span>
                  <span className="text-blue-500">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="pl-4 pb-3 text-gray-600 text-sm">
                    {activity.description}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommunityActivities;
