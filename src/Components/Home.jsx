import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductOpt from "./ProductOpt";
import Banner from "./Banner";
import Help from "./Help";
import ProductsNew from "./ProductsNew";
import NewLaunges from "./NewLaunges";
import Hero from "./Hero";
import Why from "./Why";
import BannerProducts from "./BannerProducts";
import Service from "./Service";
import WaterSub from "./WaterSub";
import VaccumSub from "./VaccumSub";

const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <Help />
      <ProductsNew />
      <NewLaunges />
      <BannerProducts />
      <Why />
      <Service />
      <WaterSub />
      <VaccumSub />
    </>
  );
};

export default Home;
