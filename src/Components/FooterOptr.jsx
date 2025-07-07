import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";

const FooterSection = ({ title, items, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className="mt-[20px] border-b-2 border-b-[#E7E7E7] md:border-none">
      <div
        className="text-[20px]  font-semibold mb-2 cursor-pointer md:cursor-default  flex  justify-between items-center h-[50px]"
        onClick={handleToggle}
      >
        {title}
        {isOpen ? (
          <FaChevronUp className="block md:hidden" />
        ) : (
          <IoIosArrowDown className="block md:hidden" />
        )}
      </div>

      {/* Dropdown on small screen */}
      <ul
        className={`text-[18px] list-none space-y-4 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const FooterOptr = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Water Purifiers",
      items: [
        "RO Water Purifiers",
        "UV Water Purifiers",
        "Active Copper",
        "Alkaline Boost",
        "Hot & Ambient",
        "Stainless Steel Purifier",
        "Slim Water Purifier",
        "Under Counter Purifier",
        "Spares & Accessories",
        "Genuine Filters",
      ],
    },
    {
      title: "Vacuum Cleaners",
      items: [
        "Robotic",
        "Upright",
        "Canister",
        "Wet & Dry",
        "Handheld",
        "Pet Grooming",
        "Accessories",
      ],
    },
    {
      title: "Water Solutions",
      items: [
        "Water Softeners",
        "Sediment Filter",
        "Activated Carbon Filter",
        "Iron Remover",
        "Water Solutions Accessories",
      ],
    },
    {
      title: "Commercial Purifiers",
      items: [
        "UV Products",
        "RO Products",
        "Storage Water Cooler With Inbuilt Purifier",
        "Skid Mounted RO Plants",
      ],
    },
    { title: "Air Purifiers", items: ["All Air Purifiers", "Filters"] },
    { title: "Services", items: ["Buy AMC", "Raise A Complaint"] },
    { title: "Account", items: ["Profile", "Your Devices", "Your Orders"] },
    {
      title: "About",
      items: [
        "About Us",
        "Connect With Us",
        "Investor Relations",
        "Press Release",
        "Authorized Service Center",
        "Office Near You",
        "Blog",
        "Book a Demo",
        "Returns & R",
      ],
    },
  ];

  return (
    <div className="flex justify-center bg-[#F9F9F9] pt-[50px] pb-[50px]">
      <div className="w-[90vw] grid grid-cols-1 md:grid-cols-2 md:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px] cursor-alias">
          {sections.slice(0, 5).map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              items={section.items}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[100px] cursor-pointer">
          {sections.slice(5).map((section, index) => (
            <FooterSection
              key={index + 5}
              title={section.title}
              items={section.items}
              index={index + 5}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterOptr;
