import React, { useEffect, useState, useRef } from "react";
import HelpTopup from "./HelpTopup";

const Help = () => {
  const [showTopup, setShowTopup] = useState(false);
  const modalRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowTopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modalRef]);
  const helpDatas = [
    {
      ImgHelp: "/Images/Help1.png",
      des: "Book a service",
    },
    {
      ImgHelp: "/Images/Help2.png",
      des: "View my Devices",
    },
    {
      ImgHelp: "/Images/Help3.png",
      des: "Buy AMC plans",
    },
    {
      ImgHelp: "/Images/Help4.png",
      des: "Replace filter",
    },
  ];
  return (
    <>
      <div className="ml-[10px] text-[24px] md:text-[25px]">
        <h1 className="md:flex items-center  justify-center">
          Need help with your device?
        </h1>
      </div>
      <div className="grid grid-cols-2 md:flex items-center justify-center m-[35px]    ">
        {helpDatas.map((helpData, index) => (
          <div
            key={index}
            onClick={() => setShowTopup(true)}
            className="md:w-[170px] w-[150px] h-[100px] flex items-center justify-center  shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-[20px] md:ml-[30px] p-[10px] mb-[20px] cursor-pointer"
          >
            {helpData.des}
            <div className="w-[90px]">
              <img src={helpData.ImgHelp} alt="" />
            </div>
          </div>
        ))}
        {showTopup && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div ref={modalRef}>
              <HelpTopup />
            </div>
          </div>
        )}
      </div>
    </>
  );
};                                                                                                                                                                                                                                                        

export default Help;
