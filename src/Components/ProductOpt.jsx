import React, { useEffect, useState } from "react";

const ProductOpt = ({ setHideOnScroll, products }) => {
  const [option, setOption] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setHideOnScroll]);

  return (
    <div className="flex md:gap-x-[40px] w-full h-200px  items-center justify-center pt-[100px]">
      <div className="flex md:gap-x-[40px] scrollbar-hide md:justify-center overflow-x-auto w-full">
        {products.map((product, index) => (
          <div key={index} className="flex">
            <div
              key={product.id}
              className="min-w-[130px] flex-shrink-0 text-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-[60px] md:w-[80px] ml-[45px]"
              />
              <h1 className="  md:text-[20px] sm:text-[5px] xs:text-[5px] ">
                {product.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOpt;
