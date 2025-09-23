"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center overflow-hidden justify-between p-2 sm:px-20 font-[cinzel] text-blue-950 w-full uppercase fixed bg-white z-50 shadow-md">
        <div>
          <Link href="/#home">
            <Image
              className="cursor-pointer "
              src="/images/logo.jpg"
              width={96}
              height={32}
              alt="logo"
              priority
            />
          </Link>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded bg-blue-950"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="stroke-white h-6 w-6" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {/* Desktop Menu */}
        <div className="hidden md:block text-[#146D2D] text-lg">
          <ul className="flex space-x-4">
            <li>
              <Link
                className="hover:text-xl transition-scale duration-300"
                href="/#Who-we-are"
              >
                who we are
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-xl transition-scale duration-300"
                href="/#what-we-do"
              >
                what we do
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-xl transition-scale duration-300"
                href="/get-involved"
              >
                get Involved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed overflow-hidden top-20 font-[cinzel] flex justify-center uppercase h-[50vh] left-0 w-full bg-white z-40">
          <ul className="flex flex-col  items-center overflow-hidden justify-center space-y-4">
            <li>
              <Link
                className="hover:text-xl transition-scale duration-300"
                href="/#Who-we-are"
                onClick={() => setMenuOpen(false)}
              >
                who we are
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-xl transition-scale duration-300"
                href="/#what-we-do"
                onClick={() => setMenuOpen(false)}
              >
                what we do
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-xl transition-scale duration-300"
                href="/get-involved"
                onClick={() => setMenuOpen(false)}
              >
                get Involved
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Page;
