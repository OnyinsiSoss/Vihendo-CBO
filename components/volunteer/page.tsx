// components/SupportInvitation.js
import React from "react";
import {
  BanknotesIcon,
  WrenchScrewdriverIcon,
  GiftIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Donate from "@/components/Donate/page";

const SupportInvitation = () => {
  return (
    <div className="my-10 sm:m-10 sm:p-10 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-[cinzel] font-bold mb-4 text-blue-950">
        Support Our Mission
      </h2>
      <p className="text-lg mb-6 text-gray-600">
        We invite individuals, development partners, and philanthropic
        organizations to support our mission through:
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-gray-50 rounded-lg shadow flex items-start">
          <BanknotesIcon className="h-8 w-8 text-green-500 mr-3" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 font-[cinzel]">
              Financial Contributions
            </h3>
            <p className="text-gray-600">
              Provide monetary support to fund our initiatives.
            </p>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow flex items-start">
          <WrenchScrewdriverIcon className="h-8 w-8 text-blue-500 mr-3" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 font-[cinzel]">
              Technical Expertise and Mentorship
            </h3>
            <p className="text-gray-600">
              Share your skills and guide our team.
            </p>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow flex items-start">
          <GiftIcon className="h-8 w-8 text-purple-500 mr-3" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 font-[cinzel]">
              In-Kind Donations
            </h3>
            <p className="text-gray-600">
              (Learning materials, farming tools, sanitary products)
            </p>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow flex items-start">
          <UsersIcon className="h-8 w-8 text-orange-500 mr-3" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 font-[cinzel]">
              Collaborative Project Implementation
            </h3>
            <p className="text-gray-600">Partner with us on joint projects.</p>
          </div>
        </div>
      </div>
      <Donate />
    </div>
  );
};

export default SupportInvitation;
