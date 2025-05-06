import React from "react";

const BannerProducts = () => {
  const bannerdata = [
    {
      img: "bg-[url('/Images/Bannerproductlg7.jpg')]",
      des: " for 2 Years",
      spanDes: "Needs No Service",
      name: "Aquaguard Aura 2X Life",
      price: "Starting at ₹17,999*",
      Emi: "10% instant bank discount + 5% coupon*",
      Spanclr: "text-[#FFE793]",
      textclr: "text-white",
      Emiclr: "text-[#CFCFCF]",
    },
    {
      img: "bg-[url('/Images/Bannerproductlg8.jpg')]",
      des: "hot water instantly",
      spanDes: "Get  80ºC steaming ",
      name: "Aquaguard Blaze Insta",
      price: "Starting at ₹19,999*",
      Emi: "10% instant bank discount + 5% coupon*",
      Spanclr: "text-[#B1B1B1]",
      textclr: "text-white",
      EmiClr: "text-[#CFCFCF]",
    },
    {
      img: "bg-[url('/Images/Bannerproductlg1.jpg')]",
      des: " Copper in every drop",
      spanDes: "Goodness of",
      name: "Aquaguard Blaze Insta",
      price: "Starting at ₹19,999*",
      Emi: "10% instant bank discount + 5% coupon*",
      Spanclr: "text-[#FFE793]",
      textclr: "text-white",
      Emiclr: "text-[#CFCFCF]",
    },
    {
      img: "bg-[url('/Images/Bannerproductlg2.jpg')]",
      des: "60% water saving vs regular RO",
      name: "Aquaguard Marvel NXT",
      price: "Starting at ₹13,699*",
      Emi: "10% instant bank discount + 5% coupon",
      Spanclr: "text-[#FFE793]",
      textclr: "text-white",
      Emiclr: "text-[#CFCFCF]",
    },
    {
      img: "bg-[url('/Images/Bannerproductlg3.jpg')]",
      des: "Cleaning made as easy as 1-2-3",
      name: "Delight NXT RO Aquasaver",
      price: "Get it as low as ₹9,157*",
      Emi: "10% instant bank discount + 5% coupon",
      Spanclr: "text-[#FFE793]",
      textclr: "text-black",
      Emiclr: "text-[#CFCFCF]",
    },
    {
      img: "bg-[url('/Images/Bannerproductlg4.webp')]",
      des: "Deep cleaning made easy",
      name: "Forbes Smartclean Nuo Robotic Vacuum",
      price: "Get it as low as ₹18,949*",
      Emi: "10% instant bank discount + 5% coupon",
      Spanclr: "text-[#FFE793]",
      textclr: "text-black",
      Emiclr: "text-[#CFCFCF]",
    },
    {
      img: "bg-[url('/Images/Bannerproductlg5.jpg')]",
      des: " sink water purifier",
      spanDes: "Under the",
      name: "Forbes Zerobend",
      price: "Starting at ₹25,999**",
      Emi: "10% instant bank discount + 5% coupon",
      Spanclr: "text-[#FFE793]",
      textclr: "text-white",
      Emiclr: "text-[#CFCFCF]",
    },
    {
      img: "bg-[url('/Images/Bannerproductlg6.jpg')]",
      des: " water purifier ever",
      spanDes: "The slimmest",
      name: "Aquaguard Designo NXT",
      price: "Starting at ₹19,999*",
      Emi: "10% instant bank discount + 5% coupon",
      Spanclr: "text-[#B1B1B1]",
      textclr: "text-black",
      EmiClr: "text-[#CFCFCF]",
    },
  ];

  return (
    <div>
      {/* Responsive grid: 1 column on mobile, 2 on md+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {bannerdata.map((data, index) => (
          <div
            key={index}
            className={`h-[80vh] md:h-screen w-full ${data.img} bg-center bg-cover flex justify-center items-center`}
          >
            <div
              className={`flex flex-col justify-between text-center w-[80%] md:w-[30vw] h-[90%] md:h-[85%] ${data.textclr}`}
            >
              <div>
                <h1 className="text-[28px] sm:text-[36px] md:text-[50px] font-extrabold leading-tight">
                  <span className={data.Spanclr}>{data.spanDes}</span>
                  {data.des}{" "}
                </h1>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h1 className="text-[20px] sm:text-[24px] md:text-[30px] font-extrabold">
                  {data.name}
                </h1>
                <h1 className="text-[16px] sm:text-[18px] md:text-[20px]">
                  {data.price}
                </h1>
                <p className={`text-[14px] sm:text-[16px] ${data.EmiClr}`}>
                  {data.Emi}
                </p>
                <div className="flex justify-center items-center rounded-3xl w-[120px] h-[45px] md:w-[140px] md:h-[50px] text-[white] bg-black text-[16px] md:text-[20px] font-semibold cursor-pointer hover:scale-105 transition-all mt-5">
                  Shop Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerProducts;
