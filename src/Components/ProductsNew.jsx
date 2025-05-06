import React from "react";

const ProductsNew = () => {
  const products = [
    {
      name: "Aquaguard Ritz Pro 2X Life RO + UV Stainless Steel Smart IoT Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV", "Active Copper", "Smart Purifier", "Stainless Steel"],
      price: 22199,
      mrp: 32000,
      discountPercent: 30,
      emi: "₹3,700/mo",
      label: "Bestseller",
      productImg: "/Images/Product8.jpg",
    },
    {
      name: "Aquaguard Ritz Pro 2X Life RO + UV Smart IoT Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV", "Active Copper", "Smart Purifier", "Plastic"],
      price: 18699,
      mrp: 27000,
      discountPercent: 30,
      emi: "₹3,117/mo",
      label: "New Launch",
      productImg: "/Images/Product2.jpg",
    },
    {
      name: "Aquaguard Marvel NXT RO+UV+UF Taste Adjuster Copper Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV+UF", "Active Copper"],
      price: 10999,
      mrp: 22000,
      discountPercent: 50,
      emi: "₹1,834/mo",
      productImg: "/Images/Product3.jpg",
    },
    {
      name: "Aquaguard Delight NXT RO+UV+UF Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV+UF", "Mineral"],
      price: 9499,
      mrp: 18000,
      discountPercent: 47,
      emi: "₹1,584/mo",
      productImg: "/Images/Product4.jpg",
    },
    {
      name: "Aquaguard Aura 2X Life RO + UV with Taste Adjuster Copper Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV", "Active Copper", "2X Filter Life"],
      price: 15499,
      mrp: 29000,
      discountPercent: 46,
      emi: "₹2,584/mo",
      label: "Bestseller",
      productImg: "/Images/Product5.jpg",
    },
    {
      name: "Aquaguard Marvel NXT RO+UV Taste Adjuster Alkaline Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV", "Alkaline Boost"],
      price: 10999,
      mrp: 20500,
      discountPercent: 46,
      emi: "₹1,834/mo",
      productImg: "/Images/Product6.jpg",
    },
    {
      name: "Aquaguard Ritz RO+UV Taste Adjuster Stainless Steel Copper Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV", "Active Copper", "Stainless Steel"],
      price: 17199,
      mrp: 27000,
      discountPercent: 36,
      emi: "₹2,867/mo",
      productImg: "/Images/Product7.jpg",
    },
    {
      name: "Aquaguard Aura RO+UV+UF Taste Adjuster Copper Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV+UF", "Active Copper"],
      price: 12999,
      mrp: 24500,
      discountPercent: 46,
      emi: "₹2,167/mo",
      productImg: "/Images/Product8.jpg",
    },
    {
      name: "Aquaguard Slimtech Glass RO+UV Taste Adjuster Copper Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV", "Active Copper", "Toughened Glass"],
      price: 18999,
      mrp: 37000,
      discountPercent: 48,
      emi: "₹3,167/mo",
      productImg: "/Images/Product9.jpg",
    },
    {
      name: "Aquaguard Blaze Insta RO+UV Taste Adjuster Hot & Ambient Copper Water Purifier",
      category: "Water Purifier",
      tags: ["RO+UV", "Active Copper", "Hot & Ambient", "Stainless Steel"],
      price: 24999,
      mrp: 37000,
      discountPercent: 32,
      emi: "₹4,167/mo",
      label: "Bestseller",
      productImg: "/Images/Product10.jpg",
    },
    {
      name: "Forbes Robotic LVac Voice Nuo Vacuum Cleaner",
      category: "Vacuum Cleaner",
      tags: ["Robotic", "Mopping", "Pet Friendly", "Auto Charging"],
      price: 16999,
      mrp: 39999,
      discountPercent: 57,
      emi: "₹2,834/mo",
      label: "Bestseller",
      productImg: "/Images/Product11.jpg",
    },
    {
      name: "Forbes Cordless Zerobend Z21WM Vacuum Cleaner",
      category: "Vacuum Cleaner",
      tags: ["Deep Cleaning", "Multi purpose", "Mopping", "High Suction"],
      price: 49999,
      mrp: 78000,
      discountPercent: 35,
      emi: "₹8,334/mo",
      productImg: "/Images/Product12.jpg",
    },
    {
      name: "Forbes Buddy Pet Grooming Kit Vacuum Cleaner",
      category: "Vacuum Cleaner",
      tags: ["Bagless", "Pet Friendly", "Blower", "Vario Power"],
      price: 3999,
      mrp: 14500,
      discountPercent: 72,
      productImg: "/Images/Product13.jpg",
    },
    {
      name: "Forbes Wet & Dry Ultimo Vacuum Cleaner",
      category: "Vacuum Cleaner",
      tags: [
        "High Suction",
        "Deep Cleaning",
        "Multi purpose",
        "Stainless steel tank",
      ],

      price: 6999,
      mrp: 9999,
      discountPercent: 30,
      emi: "₹1,167/mo",
      productImg: "/Images/Product14.jpg",
    },
    {
      name: "Forbes 355 Surround 360° Air Purifier",
      category: "Air Purifier",
      tags: [
        "Activated Carbon Filter",
        "True HEPA filters",
        "Auto | Sleep Mode",
        "Living Room",
      ],
      price: 13499,
      mrp: 19000,
      discountPercent: 28,
      emi: "₹2,250/mo",
      label: "Bestseller",
      productImg: "/Images/Product15.jpg",
    },
  ];
  const getTagStyles = (tag) => {
    switch (tag) {
      case "Active Copper":
        return "bg-[#E6F4E8] text-[#2BAB3F] border-[#2BAB3F]";
      case "Smart Purifier":
        return "bg-[#FAF7E3] text-[#EAB308] border-[#EAB308]";
      case "Stainless Steel":
        return "bg-[#FAEFEF] text-[#EF4444] border-[#EF4444]";
      case ("RO+UV", "High Suction", "Pet Friendly"):
        return "bg-[#E8F0FA] text-[#003594] border-[#003594]";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };
  return (
    <div className="bg-[#F9F9F9] pb-[50px] font-semibold">
      <div className="flex md:ml-[120px] ml-[50px] md:text-[50px] text-[28px] font-semibold p-[20px]">
        <h1>Trending Products</h1>
      </div>
      <div className=" w-[85%] md:ml-[120px]   ml-[30px] overflow-x-auto px-4">
        <div className="w-max flex space-x-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[600px] border border-[#E7E7E7] rounded-3xl "
            >
              <div className="w-full h-[200px] border-b border-b-[#E7E7E7] flex justify-center items-center">
                <img
                  className="w-[200px]"
                  src={product.productImg}
                  alt={product.name}
                />
              </div>
              <div className="p-5">
                <div className="text-[20px] font-medium mb-2">
                  <p>{product.name}</p>
                </div>
                <div className="flex flex-wrap text-[14px] mb-2">
                  {product.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className={`border p-1 m-1 rounded ${getTagStyles(tag)}`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-[24px] font-semibold text-gray-800 mb-1">
                    ₹{product.price.toLocaleString()}
                  </div>
                  <div className="text-[16px] text-green-600 mb-1">
                    <span className="line-through text-gray-500">
                      ₹{product.mrp.toLocaleString()}
                    </span>
                    {` (${product.discountPercent}%)`}
                  </div>
                  {product.emi && (
                    <div className="text-blue-600 text-[14px]">
                      No-cost Emi from {product.emi}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsNew;
