import React from "react";
import { BanknotesIcon } from "@heroicons/react/24/outline";

const DonationSection = () => {
  return (
    <section
      id="Donate"
      className="my-10 sm:p-10 rounded-lg shadow-xl bg-white"
    >
      <div className="sm:my-20  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 my-10">
            <h4 className="text-2xl font-[cinzel] font-semibold text-[#146D2D] mb-4">
              Your contribution makes a real impact
            </h4>
            <h2 className="text-3xl font-[angella] text-gray-900">
              Make a Donation
            </h2>
            <div className="text-[#106C7B]">
              <p>
                We appreciate your kindness and commitment to our cause. By
                joining forces, we can drive positive change and create a
                fairer, more supportive society for everyone.
              </p>
              <p>
                No gift is too small—each one counts. Your support helps us
                uplift those in need, encourage independence, and drive lasting
                progress. Together, we&apos;re building hope for individuals
                overcoming challenges.
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="bg-gray-300 p-6 rounded-lg shadow-md">
            <div className="flex flex-col ">
              <div className="mb-4 p-3 rounded rounded-full hover:bg-[white] hover:text-[#146D2D] bg-[#146D2D] text-[white] duration-300 m-auto">
                <BanknotesIcon className="h-12 w-12 text-center " />
              </div>
              <h4 className="text-xl font-semibold text-[#146D2D] mb-4">
                To support our ongoing work at Vihendo CBO, kindly use the
                details below:
              </h4>
              <div className="space-y-2 flex flex-col text-gray-700">
                <p>
                  <strong>BANK NAME:&nbsp; Equity Bank</strong>
                </p>
                <p>
                  <strong>ACCOUNT NAME:&nbsp; Vihendo CBO</strong>
                </p>
                <p>
                  <strong>ACCOUNT NUMBER:&nbsp; 1060186671995</strong>
                </p>
                <p>
                  <strong>BRANCH NAME:&nbsp; Kilifi Branch</strong>
                </p>
                <p>
                  <strong>.</strong>
                </p>
                <p>
                  <strong>MPESA:Paybill No:&nbsp; 247247</strong>
                </p>

                <p>
                  <strong>ACCOUNT NUMBER:&nbsp; 200496</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
