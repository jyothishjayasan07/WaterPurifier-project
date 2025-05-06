import React from "react";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { RiExchangeFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

const Why = () => {
  const helpDet = [
    {
      icon: <TbCirclePercentageFilled />,
      title: "Instant Discount",
      description: "10% instant discount with all debit and credit cards",
    },
    {
      icon: <RiExchangeFill />,
      title: "Exchange old device",
      description: "Save upto ₹3,000 by exchanging an old device",
    },
    {
      icon: <MdDateRange />,
      title: "Online coupons",
      description: "Get additional online exclusive coupons on login",
    },
    {
      icon: <FaShoppingBag />,
      title: "No Cost EMIs",
      description: "EMIs upto 6 months for purchases above ₹10,000",
    },
  ];
  return (
    <div className="bg-[#F9F9F9]">
      <div className="text-[35px] ml-[30px] md:ml-[150px] md:text-[50px] font-semibold">
        <h1>Why buy from eurekaforbes.com?</h1>
      </div>
      <div className="ml-[30px] md:ml-[150px] grid grid-cols-2 md:flex flex-row pt-[50px] pb-[50px]">
        {helpDet.map((data, index) => (
          <div
            key={index}
            className="mb-[30px] md:mr-[70px] flex flex-col justify-between  w-[160px] h-[200px] md:w-[300px] md:h-[200px] bg-white p-[20px] border-1 border-gray-200 rounded-2xl"
          >
            <h1 className="text-[25px] md:text-[30px] text-[#60A4FF]">
              {data.icon}
            </h1>
            <h1 className="md:text-[25px] font-extrabold">{data.title}</h1>
            <h1 className="md:text-[18px]">{data.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
