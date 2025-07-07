import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./Home";
import { setNavigate } from "./Navigatehelper";
import WaterPurifierHome from "./WaterPurifier/WaterPurifierHome";
import Navbar from "./Navbar";
import ProductOpt from "./ProductOpt";

const MainRouter = () => {
  const location = useLocation();
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  const defaultProducts = [
    { id: 1, name: "Water Purifier", img: "/Images/img1.png" },
    { id: 2, name: "Vacuum Cleaner", img: "/Images/img2.png" },
    { id: 3, name: "Air Purifier", img: "/Images/img3.png" },
    { id: 4, name: "Service and AMC", img: "/Images/img4.png" },
    { id: 5, name: "Water Solutions", img: "/Images/img5.png" },
  ];

  const waterPurifierProducts = [
    { Head: "Water Purifier" },
    { id: 1, name: "RO + UV", img: "/images/ro.png" },
    { id: 2, name: "Alkaline", img: "/images/alkaline.png" },
    { id: 3, name: "Copper", img: "/images/copper.png" },
  ];
  const productsToShow =
    location.pathname === "/waterpurifiers"
      ? waterPurifierProducts
      : defaultProducts;

  return (
    <div>
      <Navbar hideOnScroll={hideOnScroll} currentpath={location.pathname} />
      <ProductOpt setHideOnScroll={setHideOnScroll} products={productsToShow} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/waterpurifiers" element={<WaterPurifierHome />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRouter;
