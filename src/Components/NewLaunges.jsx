import React from "react";

const NewLaunges = () => {
  const newproducts = [
    {
      category: "Water Purifier",
      name: "Aquaguard Aura RO 2X Life",
      features: "Needs no service for 2 years",

      price: 15999,
      img: "/Images/Product2.jpg",
      text: "text-[#1A73E9]",
      bgColor: "bg-[#E8F1FB]",
    },
    {
      category: "Air Purifier",
      name: "Forbes 355 Surround",
      features: "360° Powerful cyclonic suction tech",

      price: 11999,
      img: "/Images/Product11.jpg",
      text: "text-[#2BAB7B]",
      bgColor: "bg-[#FBEEE8]",
    },
    {
      category: "Water Purifier",
      name: "Aquaguard Blaze Insta",
      features: "Instant hot water on demand",

      price: 19999,
      img: "/Images/Product5.jpg",
      text: "text-[#1A73E9]",
      bgColor: "bg-[#E8F1FB]",
    },
    {
      category: "Water Purifier",
      name: " Forbes SmartClean Nuo",
      features: "With 5000pa Hypersuction",

      price: 24999,
      img: "/Images/Product15.jpg",
      text: "text-[#2BAB7B]",
      bgColor: "bg-[#FBEEE8]",
    },
    {
      category: "Water Purifier",
      name: " Aquaguard Ritz Pro 2X Smart",
      features: "India's First Smart Purifier",

      price: 24999,
      img: "/Images/Product10.jpg",
      text: "text-[#1A73E9]",
      bgColor: "bg-[#E8F1FB]",
    },
  ];

  return (
    <div>
      <div className="  bg-[#F9F9F9]">
        <div className="md:ml-[150px] md:text-[50px] text-[30px] ml-[30px] font-semibold">
          New Launches
        </div>
        <div className="flex w-[85%] ml-[30px] md:ml-[150px] pt-[50px] pb-[50px] overflow-x-auto overflow-y-hidden scrollbar-hide">
          {newproducts.map((product, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[280px] h-[520px] md:w-[400px] md:h-[720px] rounded-[20px] p-[30px] ${product.bgColor} mr-[20px]`}
            >
              <div className="md:h-[700px] flex flex-col justify-between">
                <div>
                  <h1 className={`${product.text}`}>{product.category}</h1>

                  <h1 className="text-[30px] md:text-[40px] font-bold">
                    {product.name}
                  </h1>
                  <h1 className="text-[20px]">{product.features}</h1>

                  <h1 className="text-[20px] font-semibold mt-[10px]">
                    Starting at ₹{product.price.toLocaleString()}
                  </h1>
                </div>
                <div>
                  <img src={product.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewLaunges;
