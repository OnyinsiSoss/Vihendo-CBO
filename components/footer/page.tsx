import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="m-8  rounded-2xl bg-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          <div className=" text-xl text-center">
            <Link href="/">Vihendo Community</Link>
            <p className="text-gray-300 mt-4">
              “Putting love for the communities into actions”
            </p>
          </div>
          <div className=" justify-center text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-400">
                  Causes
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact US
                </a>
              </li>
            </ul>
          </div>
          <div className="justify-center text-center">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@vihendocbo.com</li>
              <li>Phone: 01777112564</li>
              <li>Address: P.O. Box 56-80108, KILIFI, Kenya.</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Vihendo Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
