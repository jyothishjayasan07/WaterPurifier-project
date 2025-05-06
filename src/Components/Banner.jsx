import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay rendering until client-side mounting
    setIsMounted(true);
  }, []);
  const imageSlides = [
    {
      desktop: "/Images/Banner1.webp",
      mobile: "/Images/Banner1sm.webp",
    },
    {
      desktop: "/Images/Banner2.webp",
      mobile: "/Images/Banner2sm.webp",
    },
    {
      desktop: "/Images/Banner3.webp",
      mobile: "/Images/Banner3sm.webp",
    },
  ];
  if (!isMounted) return null;

  return (
    <section className="pt-6">
      <Swiper
        key={isMounted ? "mounted-swiper" : "server-swiper"}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#cccccc",
        }}
      >
        {imageSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full">
              <picture>
                <source media="(min-width: 768px)" srcSet={slide.desktop} />
                <img
                  src={slide.mobile}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
