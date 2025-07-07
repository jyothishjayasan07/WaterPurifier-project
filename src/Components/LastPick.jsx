import React from "react";

const LastPick = () => {
  const lastData = [
    {
      img: "/Images/last!.jpg",
      desc: "Aquaguard Slimtech Glass UV Storage Copper Water Purifier",
    },
    {
      img: "/Images/last2.jpg",
      desc: "Aquaguard Designo NXT UTC UV+UF Copper Water Purifier",
    },
    {
      img: "/Images/last3.jpg",
      desc: "Forbes Smartclean Nuo Vacuum Cleaner with Home Mapping 5000Pa Hypersuction",
    },
  ];
  return (
    <div className="bg-[#F9F9F9]">
      <div className="text-center text-[25px] font-extrabold p-[20px] ">
        <h1>Pickup where you left off</h1>
      </div>
      <div className="flex justify-center ">
        <div className="w-[400px]  h-[120px] border-2 rounded-2xl flex  ">
          <div className="border-r-2">
            <img
              className="h-[120px] w-[180px]"
              src="/Images/last!.jpg"
              alt=""
            />
          </div>
          <div className="p-[20px]">
            <h1>Aquaguard Slimtech Glass UV Storage Copper Water Purifier</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPick;
