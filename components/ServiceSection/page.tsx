// components/ServicesSection.js
import Link from "next/link";
import { FaDollarSign, FaUsers, FaAddressBook } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section className="relative z-10 -mt-[100px] px-8 pb-10 md:px-0 md:pb-8 sm:-mt-20 sm:pb-10 bg-transparent max-w-screen w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl sm:px-20 mx-auto">
        {/* Donate Now */}
        <div className="p-4 md:p-6 bg-[#eeeeee] hover:bg-white hover:shadow-[2px_2px_5px_rgba(0,0,0,0.3)] transition-all duration-400 group">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-700 text-[35px] md:text-[32px] sm:text-[29px] mb-4 transition-all duration-400">
              <FaDollarSign />
            </div>
            <h3 className="text-[#202a30] font-[cinzel] text-[24px] md:text-[22px] sm:text-[18px] font-bold uppercase leading-tight py-4 md:py-3 transition-all duration-400">
              Donate Now
            </h3>
            <p className="text-gray-700 mb-8">
              Make a difference today—your donation brings hope, healing, and
              help to those who need it most. Join us in changing lives!
            </p>
            <Link
              href="/Donate"
              className="mt-8 px-6 py-3 text-[16px] md:text-[16px] sm:text-[14px] font-[cinzel] font-medium capitalize bg-blue-700 text-white hover:bg-[#eeeeee] hover:text-blue-700 transition-all duration-400"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Partner With Us */}
        <div className="p-4 md:p-6 bg-[#eeeeee] hover:bg-white hover:shadow-[2px_2px_5px_rgba(0,0,0,0.3)] transition-all duration-400 group">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-700 text-[35px] md:text-[32px] sm:text-[28px] mb-4 transition-all duration-400">
              <FaUsers />
            </div>
            <h3 className="text-[#202a30] font-[cinzel] text-[24px] md:text-[22px] sm:text-[18px] font-bold uppercase leading-tight py-4 md:py-3 transition-all duration-400">
              Partner With Us
            </h3>
            <p className="text-gray-700 mb-8">
              Join hands with us to create lasting impact. Partner today and be
              a force for hope, change, and humanity. Together, we make the
              impossible possible.
            </p>
            <Link
              href="/get-involved"
              className="mt-8 px-6 py-3 text-[16px] md:text-[16px] sm:text-[14px] font-[cinzel] font-medium capitalize bg-blue-700 text-white hover:bg-[#eeeeee] hover:text-blue-700 transition-all duration-400"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Contact Us */}
        <div className="p-4 md:p-6 bg-[#eeeeee] hover:bg-white hover:shadow-2xl transition-all duration-400 group">
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-700 text-[35px] md:text-[32px] sm:text-[28px] mb-4 transition-all duration-400">
              <FaAddressBook />
            </div>
            <h3 className="text-[#202a30] font-[cinzel] text-[24px] md:text-[22px] sm:text-[18px] font-bold uppercase leading-tight py-4 md:py-3 transition-all duration-400">
              Contact Us
            </h3>
            <p className="text-gray-700 mb-8">
              Have questions or want to connect? We&apos;re here to listen and
              help. Reach out today—let’s make a difference together.
            </p>
            <Link
              href="/contact"
              className="mt-8 px-6 py-3 text-[16px] font-[cinzel] md:text-[16px] sm:text-[14px] capitalize bg-blue-700 text-white hover:bg-[#eeeeee] hover:text-blue-700 transition-all duration-400"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
