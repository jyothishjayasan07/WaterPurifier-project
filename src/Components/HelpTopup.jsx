import React from "react";

const HelpTopup = () => {
  return (
    <>
      <div>
        <div className="w-full max-w-md p-6 sm:p-8 md:p-10 lg:p-12 border border-[#d1e0f5] rounded-2xl bg-white shadow-lg transition-all duration-300">
          <h1 className="text-2xl sm:text-2.5xl md:text-3xl font-bold pb-4 md:pb-6 text-[black]">
            Enter registered mobile number
          </h1>
          <input
            type="tel"
            pattern="[0-9]*"
            placeholder="Enter Mobile Number"
            className="w-full h-12 sm:h-14 text-base sm:text-lg px-4 border-2 border-[#bfdbfe] rounded-lg focus:border-[#3B82F6] focus:ring-2 focus:ring-[#93c5fd] focus:outline-none transition-all duration-200"
          />
          <p className="pt-3 pb-6 sm:pb-8 text-sm sm:text-base text-[#374151] leading-relaxed">
            You can also create an account by entering your mobile number
          </p>
          <button className="w-full h-12 sm:h-14 bg-[black] hover:bg-[#2563eb] active:bg-[##F9F9F9] text-white flex items-center justify-center rounded-lg text-base sm:text-lg font-medium transition-colors duration-200 shadow-sm">
            Get OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default HelpTopup;
