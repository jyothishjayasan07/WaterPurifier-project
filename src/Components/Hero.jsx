import React from "react";

const Hero = () => {
  const herodata = [
    {
      img: "/Images/Herosub3.png",
      title: "Wi-Fi Enabled Smart Water Purifiers",
      description: "Connect your Purifier to the Eureka Forbes App",
    },
    {
      img: "/Images/Herosub1.png",
      title: "Smart IOT",
      description: "Real time filter life monitoring",
    },
    {
      img: "/Images/Herosub2.png",
      title: "Advance Filtration",
      description: "Advanced 9-Stage purification system",
    },
  ];
  return (
    <div>
      {/* Desktop Background */}
      <div className="hidden md:block w-full mb-6 bg-[url('/Images/HeroDesk.webp')] bg-[length:100%_auto] bg-center min-h-[125vh] bg-no-repeat">
        <div className="ml-[150px] pt-[50px] text-white flex flex-col w-[400px] h-[550px] justify-between">
          <div>
            <h1 className="text-[60px] font-extrabold leading-tight">
              India's First{" "}
              <span className="text-[#B1B1B1]">Smart Purifier</span>
            </h1>
          </div>
          <div>
            <h1 className="text-[35px] font-bold">Aquaguard Ritz Pro</h1>
            <h1 className="text-[25px] font-bold">Starting at ₹18600*</h1>
            <h1 className="text-[20px] font-semibold mb-5">
              10% Instant Bank Discount
            </h1>
            <div className="flex justify-center items-center rounded-3xl w-[140px] h-[50px] bg-black text-[20px] font-semibold cursor-pointer hover:scale-105 transition-all">
              Shop Now
            </div>
          </div>
        </div>
        <div className="flex  flex-row m-[100px] gap-[50px] ">
          {herodata.map((data, index) => (
            <div
              key={index}
              className="w-[450px] rounded-[20px] overflow-hidden"
            >
              <div className="w-[450px]">
                <img src={data.img} alt="" />
              </div>
              <div className="bg-black text-white p-[30px]">
                <h1 className="text-[20px] font-bold">{data.title}</h1>
                <h1>{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Background */}
      <div className="block md:hidden w-full mb-6 bg-[url('/Images/Hero1.webp')] bg-cover bg-center min-h-[120vh] bg-no-repeat">
        <div className="px-6 pt-10 text-white flex flex-col justify-between items-start min-h-[85vh]">
          <div>
            <h1 className="text-[32px] sm:text-[36px] font-extrabold leading-tight mb-4">
              India's First{" "}
              <span className="text-[#B1B1B1]">Smart Purifier</span>
            </h1>
          </div>
          <div className="mt-6 space-y-2">
            <h1 className="text-[22px] sm:text-[24px] font-bold">
              Aquaguard Ritz Pro
            </h1>
            <h1 className="text-[18px] sm:text-[20px] font-bold">
              Starting at ₹18600*
            </h1>
            <h1 className="text-[16px] sm:text-[18px] font-semibold mb-4">
              10% Instant Bank Discount
            </h1>
            <div className="flex justify-center items-center rounded-3xl w-[120px] h-[45px] bg-black text-[16px] font-semibold cursor-pointer hover:scale-105 transition-all">
              Shop Now
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[10px] m-[20px] mt-[40px] overflow-x-auto">
          {herodata.map((data, index) => (
            <div
              key={index}
              className="  flex flex-col w-[200px]  overflow-hidden rounded-2xl flex-shrink-0"
            >
              <div className="w-[200px]">
                <img src={data.img} alt="" />
              </div>
              <div className="bg-black h-[100px] text-white p-[10px]">
                <h1 className="font-semibold">{data.title}</h1>
                <h1 className="text-[12px]">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
