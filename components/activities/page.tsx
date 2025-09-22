"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CommunityActivities = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activities = [
    {
      title: "Nursery Tree Establishment",
      description:
        "Establishing tree nurseries to cultivate and sell seedlings for reforestation, landscaping, and community greening initiatives. This project not only generates income but also supports climate change mitigation, soil conservation, and biodiversity enhancement by making tree planting accessible to farmers, schools, and local households.",
    },
    {
      title: "Agribusiness Farming",
      description:
        "Launching crop and livestock farming projects aimed at improving food security while creating employment and revenue streams. The initiative will promote modern farming techniques, sustainable land use, and value chain development to ensure that both subsistence and commercial agriculture thrive.",
    },
    {
      title: "Education Fairs & Career Guidance",
      description:
        "Organizing interactive forums where students, parents, and professionals meet to exchange educational resources, explore career paths, and receive mentorship. These events empower community members, especially youth, with knowledge to make informed academic and career decisions, thereby fostering long-term social and economic development.",
    },
    {
      title: "Poultry Farming",
      description:
        "Engaging in poultry production to supply eggs and meat to local markets. This initiative creates self-employment opportunities, strengthens household nutrition, and stimulates local economies. It will also incorporate training on poultry management, disease control, and value addition for maximum profitability.",
    },
    {
      title: "Table Banking",
      description:
        "Implementing a community-driven savings and lending model where members contribute to a collective fund and borrow on flexible terms. Table banking promotes financial inclusion, entrepreneurship, and resilience, especially for women and marginalized groups, by offering accessible capital for small-scale businesses and household needs.",
    },
    {
      title: "Organizational Partnerships",
      description:
        "Building strategic collaborations with other organizations to share resources, knowledge, and networks. Such partnerships amplify program impact, attract funding, and foster innovation in addressing community challenges. Joint initiatives may include training, advocacy, and shared infrastructure to maximize reach and efficiency.",
    },
    {
      title: "Financial Literacy Training",
      description:
        "Providing targeted financial management skills to youth and women groups to strengthen their ability to run sustainable enterprises. Training will cover budgeting, savings, credit management, investment, and record-keeping, ensuring that beneficiaries are empowered to make sound financial decisions and grow their businesses.",
    },
  ];

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="">
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 w-full bg-white/70 text-blue-950 shadow-lg rounded-lg overflow-hidden ">
          <div className="basis-1/3 w-full flex items-center justify-center p-8">
            <h1 className="font-[cinzel] text-3xl">
              Vihendo CBO is undertaking the following activities to generate
              resources for our programs:
            </h1>
          </div>
          <div className="basis-2/3 w-full flex items-center justify-center sm:p-4 ">
            <div className="w-full bg-white shadow-lg rounded-lg">
              <ul className="space-y-2">
                {activities.map((activity, index) => (
                  <li key={index} className=" border-b border-gray-200">
                    <button
                      className="w-full flex justify-between items-center p-5 text-left text-gray-800 hover:bg-gray-300 focus:outline-none"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="flex-1 text-lg">{activity.title}</span>
                      <span className="text-blue-950">
                        {openIndex === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="pl-4 pb-3 text-gray-600 text-md">
                        {activity.description}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityActivities;
