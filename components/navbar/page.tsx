import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <nav className="flex items-center  justify-between p-4 px-20 text-white  z-10 w-full  uppercase fixed bg-transparent shadow-md">
        <div>
          <Link href="/">VIHENDO Cbo</Link>
        </div>
        <div className="text-lg font-semibold">
          <ul className="flex space-x-4">
            <li>
              <a href="/activities">Programs</a>
            </li>
            <li>
              <a href="/projects">Get Involved</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default page;
