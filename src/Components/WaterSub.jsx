import React, { useState, useEffect } from "react";

const data = {
  Copper: {
    bg: "/Images/Watersub1.jpg",
    smBg: "/Images/WatersumSm1.jpg",
    title: "Aquaguard Marvel",
    subtitle: "The Goodness of Copper",
    price: "Starts at ₹13,000",
    textClr: "text-black",
  },
  "Hot & ambient": {
    bg: "/Images/Watersub2.jpg",
    smBg: "/Images/WatersumSm2.jpg",
    title: "Aquaguard Blaze Insta",
    subtitle: "Purity with Temperature Control",
    price: "Starts at ₹15,000",
    textClr: "text-white",
  },
  "Slimtech Glass": {
    bg: "/Images/Watersub3.webp",
    smBg: "/Images/WatersumSm3.webp",
    title: "Aquaguard Slimtech",
    subtitle: "Stylish. Smart. Safe.",
    price: "Starts at ₹14,000",
    textClr: "text-black",
  },
};

const WaterSub = () => {
  const [selected, setSelected] = useState("Copper");
  const [isMobile, setIsMobile] = useState(false);

  const { bg, smBg, title, subtitle, price, textClr } = data[selected];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const backgroundImage = isMobile ? smBg : bg;

  return (
    <div>
      <div
        className="flex pt-[30px] md:p-0 md:items-center justify-center h-[100vh] bg-center bg-cover transition-all duration-500"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className={`w-[90%] max-w-[800px] h-[80vh] md:h-[90vh] text-center flex flex-col justify-between items-center ${textClr}`}
        >
          <div>
            <div className="flex justify-center">
              <h1 className="text-[8vw] md:text-[50px] font-extrabold">
                Water Purifier
              </h1>
            </div>
            <ul className="flex flex-wrap gap-4 justify-around text-[4.5vw] md:text-[20px] font-semibold p-2">
              {Object.keys(data).map((key) => (
                <li
                  key={key}
                  className={`cursor-pointer hover:underline ${
                    selected === key ? "underline" : ""
                  }`}
                  onClick={() => setSelected(key)}
                >
                  {key}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[8vw] md:text-[60px] font-extrabold">
              {title}
            </h1>
            <h2 className="text-[4vw] md:text-[25px]">{subtitle}</h2>
            <h1 className="text-[4vw] md:text-[25px] font-bold">{price}</h1>
            <div className="flex justify-center items-center rounded-3xl w-[120px] h-[45px] md:w-[140px] md:h-[50px] text-white bg-black text-[4vw] md:text-[20px] font-semibold cursor-pointer hover:scale-105 transition-all mt-5">
              Shop Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterSub;
