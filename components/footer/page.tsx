import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white p-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right ">
          <div className=" text-xl">
            <Link className="font-bold uppercase" href="/">
              Vihendo Community
            </Link>
            <p className=" mt-4">
              “Putting love for the communities into actions”
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg hover:text-xl">
              <li>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#who-we-are" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-blue-400">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved/#contact"
                  className="hover:text-blue-400"
                >
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-bold uppercase mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Email: info@vihendocbo.com</li>
              <li>Phone: 01777112564</li>
              <li>Address: P.O. Box 56-80108, KILIFI, Kenya.</li>
            </ul>
          </div>
        </div>
        <div className="border-t-3 border-gray-200 mt-8 pt-8 text-center">
          <p className=" text-xl uppercase">
            © {new Date().getFullYear()} Vihendo Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
