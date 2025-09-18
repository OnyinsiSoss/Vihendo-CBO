"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const CommunityActivities: React.FC = () => {
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
      <div className="m-20">
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 m-20 w-full bg-white shadow-lg rounded-lg overflow-hidden p-10 m-auto">
          <div className="basis-1/3 w-full flex items-center justify-center p-4">
            <h1 className="font-[angella] text-5xl">
              Vihendo cbo shall undertake the following activities to generate
              resources for our programs:
            </h1>
          </div>
          <div className="basis-2/3 w-full flex items-center justify-center p-4">
            <div className="w-full bg-white shadow-lg rounded-lg">
              {/* <h1 className="text-3xl font-bold text-center font-[angella] text-blue-600 mb-6">
              VIHENDO CBO Activities
            </h1> */}

              <ul className="space-y-2">
                {activities.map((activity, index) => (
                  <li key={index} className=" border-b border-gray-200">
                    <button
                      className="w-full flex justify-between items-center p-5 text-left text-gray-800 hover:bg-gray-300 focus:outline-none"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="flex-1 text-lg">{activity.title}</span>
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
