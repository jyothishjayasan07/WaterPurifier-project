import React from "react";
import { GiStarsStack } from "react-icons/gi";
import { GiBubbles } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";

const Service = () => {
  const serviceFeatures = [
    {
      icons: <GiStarsStack />,
      title: "Up to 4 free maintenance visits",
      description: "Filter & tank cleaning with unlimited breakdown visits.",
    },
    {
      icons: <GiBubbles />,
      title: "Annual filter replacement",
      description:
        "Get genuine filters & free filter replacement, based on plan.",
    },
    {
      icons: <IoSettings />,
      title: "Aquaguard Genuine spares",
      description:
        "All parts including electronics & pump with free replacement.",
    },
    {
      icons: <FaShieldAlt />,
      title: "A legacy of trust & quality",
      description:
        "Trusted brand for over 40 years with 8500+ service technicians.",
    },
  ];

  return (
    <>
      <div className="bg-[#F3F8FF] min-h-screen py-10">
        <div className=" flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold pt-6">
            Genuine AMC service & filters
          </h1>
          <h2 className="text-base md:text-lg mt-2">
            Buy AMC online to get up to 20% off today.
          </h2>
          <div className="w-60 h-14 flex justify-center items-center font-bold text-white bg-[#3175AF] rounded-2xl mt-5 text-lg mb-10 cursor-pointer">
            Find plans for my device
          </div>
        </div>

        <div className="md:ml-[150px] md:w-[80vw] flex flex-col md:flex-row items-center justify-center gap-8 px-4">
          <div className="w-full">
            <div className="flex md:hidden overflow-x-auto gap-4 px-2">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white w-[250px] h-56 border rounded-2xl border-gray-200 p-5 flex flex-col"
                >
                  <h1 className="text-3xl mb-2">{feature.icons}</h1>
                  <h2 className="text-xl font-bold mb-1">{feature.title}</h2>
                  <p className="text-[#42577F] text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-4">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white w-[300px] h-56 border rounded-2xl border-gray-200 p-5 flex flex-col"
                >
                  <h1 className="text-3xl mb-2">{feature.icons}</h1>
                  <h2 className="text-xl font-bold mb-1">{feature.title}</h2>
                  <p className="text-[#42577F] text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Video/Image Section */}
          <div className="w-full md:w-[80vw]">
            <div className="overflow-hidden bg-white w-full h-[56vh] border rounded-2xl flex flex-col border-gray-200">
              <div className="flex-1">
                <img
                  className="w-full h-full object-cover"
                  src="/Images/VideoImg.jpg"
                  alt="Video Preview"
                />
              </div>
              <h2 className="flex justify-center items-center h-[70px] text-xl md:text-2xl font-bold text-center px-2">
                Why are Aquaguard Genuine Filters superior?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
