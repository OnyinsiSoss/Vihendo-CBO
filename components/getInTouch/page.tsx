import React from "react";

const page = () => {
  return (
    <main id="contact" className="">
      <>
        <div className="sm:m-10 rounded-2xl px-4 sm:px-6 lg:px-20 py-10 bg-gray-300">
          <div className="flex flex-col my-15 sm:flex-row">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 sm:mb-8 text-[#146D2D] font-[cinzel]">
                Get in Touch
              </h2>
            </div>
            <div className="flex-1 max-w-3xl mx-auto bg-[#146D2D] p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 bg-white block w-full rounded-md focus:border-none shadow-xl sm:text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 p-2 bg-white block w-full rounded-md focus:border-none shadow-xl sm:text-sm"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 bg-white block w-full border border-gray-300 rounded-md shadow-xl
                  focus:ring-transparent focus:border-transparent sm:text-sm"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    className="mt-1 bg-white p-2  block w-full border border-gray-300 rounded-md shadow-xl
                  focus:ring-0 focus:border-white sm:text-sm"
                    rows={4}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white border font-[cinzel] text-blue-950 hover:bg-blue-950 hover:text-white rounded-md hover:bg-primary-dark
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </main>
  );
};

export default page;
