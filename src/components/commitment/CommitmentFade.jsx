"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const CommitmentSlide = () => {
  const swiperRef = useRef(null);

  const slides = [
    {
      title: "Our Mission",
      text: "Our mission is to empower our customers by delivering the highest quality plants and innovative solutions tailored to their specific needs.",
      bg: "bg-yellow-400/20",
    },
    {
      title: "Our Vision",
      text: "We envision a greener world where sustainable farming and innovation work hand in hand to create a better future for all.",
      bg: "bg-green-400/20",
    },
    {
      title: "Our Values",
      text: "We value sustainability, integrity, and growth — nurturing both nature and people to achieve lasting impact.",
      bg: "bg-cyan-400/20",
    },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className={`${slide.bg} flex flex-col justify-center p-6 h-full w-full text-gray-800`}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">{slide.title}</h2>
              <p className="text-base md:text-lg leading-relaxed">{slide.text}</p>

              <div className="mt-auto flex space-x-3">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="border border-black text-black bg-transparent hover:bg-black hover:text-white px-3 py-2 rounded-md transition-all duration-300"
                >
                  ←
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="border border-black text-black bg-transparent hover:bg-black hover:text-white px-3 py-2 rounded-md transition-all duration-300"
                >
                  →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommitmentSlide;
