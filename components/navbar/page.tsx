import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <nav className="flex items-center bg-white justify-between p-4 px-20 text-blue-600 z-10 w-full  uppercase fixed">
        <div>
          <Link href="/">VIHENDO Cbo</Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <a href="/causes">our Causes</a>
            </li>
            <li>
              <a href="/activities">our Activities</a>
            </li>
            <li>
              <a href="/projects">our Projects</a>
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
