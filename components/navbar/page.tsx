import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <nav className="flex items-center bg-transparent justify-between p-4 px-20 text-blue-700  z-10 w-full  uppercase fixed bg-white shadow-md">
        <div>
          <Link href="/">VIHENDO Cbo</Link>
        </div>
        <div className="text-lg font-semibold">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <a href="/causes">Causes</a>
            </li>
            <li>
              <a href="/activities">Activities</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
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
