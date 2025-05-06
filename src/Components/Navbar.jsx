import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi"; // Hamburger menu icon
import { IoClose } from "react-icons/io5"; // Close icon for the menu
import { Link } from "react-router-dom";

const Navbar = ({ hideOnScroll }) => {
  // State to toggle the mobile menu (dashboard)
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the dashboard menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-full bg-white z-10">
      <div
        className={` flex justify-between items-center h-[80px] px-6 relative ${
          menuOpen ? "" : "shadow"
        }`}
      >
        {/* Logo / Brand */}
        <div className="text-[30px] font-bold">hello</div>

        <div className=" hidden md:flex mr-[200px]">
          <div className="">
            {hideOnScroll && (
              <ul className="md:flex gap-x-6 mr-[50px] text-[18px] sm:hidden">
                <Link to={"/waterpurifiers"}>
                  <li>Water Purifier</li>
                </Link>
                <li>Vaccum Cleaner</li>
                <li>Air Purifier</li>
                <li>Service and Amc</li>
                <li>Water Solution</li>
              </ul>
            )}
          </div>
          <ul className="flex gap-x-6 items-center">
            <li className="hidden md:block text-[18px]">
              <Link>Book Service</Link>
            </li>
            <h1 className="text-[23px] cursor-pointer">
              <IoIosSearch />
            </h1>
            <h1 className="text-[23px] cursor-pointer">
              <IoCartOutline />
            </h1>
            <h1 className="text-[23px] cursor-pointer">
              <Link to="/login">
                <FaRegCircleUser />
              </Link>
            </h1>
            <li className="hidden md:block text-[18px]">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex gap-x-6 items-center text-[23px]">
          <h1>
            <IoIosSearch />
          </h1>
          <h1>
            <IoCartOutline />
          </h1>
          <h1 className="cursor-pointer">
            <Link to="/login">
              <FaRegCircleUser />
            </Link>
          </h1>
          <div className="text-[28px]" onClick={toggleMenu}>
            <FiMenu />
          </div>
        </div>

        {/* Mobile Dashboard Menu (Full Screen) */}
        {menuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-screen h-screen bg-white  z-10 flex flex-col items-center">
            {/* Close Button */}
            <div
              className="absolute top-6 right-6 text-[30px]"
              onClick={toggleMenu}
            >
              <IoClose />
            </div>
            <ul className="flex flex-col items-center py-10 bg-white w-full mt-[50px] border-b">
              <li className="py-4 text-[20px] flex gap-x-3 border-b">
                <FaRegCircleUser />
                <span className="font-bold">Sign in</span> to view your devices
              </li>
              <li className="py-4 text-[20px] font-semibold">Water Purifier</li>
              <li className="py-4 text-[20px] font-semibold">Vaccum Cleaner</li>
              <li className="py-4 text-[20px] font-semibold">Air purifier</li>
              <li className="py-4 text-[20px] font-semibold">
                Service and Amc
              </li>
              <li className="py-3 text-[20px] font-semibold ">
                Water Solutions
              </li>
            </ul>
            <h1 className="py-3 text-[20px] font-semibold ">Book Service</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
