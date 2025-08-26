import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className="">
      <>
        <div className="relative h-[400px]">
          <Image
            src="https://i.ibb.co.com/xKhRkrFz/slide2.jpg"
            width={1920}
            height={400}
            alt="Contact Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-500/80"></div>
          <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <h1 className="text-3xl border-b-2 pb-2 border-secondary font-bold tracking-tight text-center text-white">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="m-8 rounded-2xl px-4 sm:px-6 lg:px-28 py-28 bg-gray-300">
          <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm
                  focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm
                  focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm
                  focus:ring-primary focus:border-primary sm:text-sm"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className=" m-auto px-4 sm:px-6 lg:px-8 py-8 items-center">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-2">
            <strong>Email:info@vihendocbo.com</strong>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone: +254713576462</strong>
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Address: Nikunja-2, kilifi</strong>
          </p>
        </div>
      </>
    </main>
  );
};

export default page;
