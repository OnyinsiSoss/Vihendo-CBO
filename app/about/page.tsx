import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative h-[400px]">
        <Image
          src="https://i.ibb.co.com/xKhRkrFz/slide2.jpg"
          width={1920}
          height={400}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-500/80"></div>
        <div className="relative text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <h1 className="text-3xl border-b-2 pb-2 border-secondary font-bold tracking-tight text-center text-white">
            About Us
          </h1>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-center">Who Are We?</h1>
          <p className="text-lg mb-6">
            VIHENDO Community Based Organization (CBO) is dedicated to improving
            the lives of vulnerable communities through sustainable development
            initiatives. Our mission is to empower individuals and communities
            by providing access to education, healthcare, and economic
            opportunities.
          </p>
          <p className="text-lg mb-6">
            Founded in 2010, VIHENDO CBO has been at the forefront of community
            development, working closely with local partners and stakeholders to
            implement projects that address the unique needs of each community
            we serve. Our programs focus on areas such as health education
          </p>
        </div>
      </div>
      <div>
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Vision</h2>
          <p className="text-lg mb-6">
            A resilient, self-reliant, and thriving community where every
            individual has the opportunity to live a dignified life.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-lg mb-6">
            To enhance the well-being of marginalized populations in KILIFI
            County through inclusive programs in education, health, environment,
            and economic empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
