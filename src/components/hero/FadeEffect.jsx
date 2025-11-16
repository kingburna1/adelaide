'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Flower2, ArrowRight } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const FadeEffect = () => {
  return (
    <div className="w-screen h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Swiper
        effect="fade"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="w-screen h-full"
      >
        {[
          {
            img: "/image8.jpg",
            title: "Unlocking Nature, Enriching Lives!",
            subtitle: "We conduct our business with integrity.",
          },
          {
            img: "/image7.jpg",
            title: "Reliable, Trusted and Safe Services To Help Farmers",
            subtitle: "We conduct our business with integrity.",
          },
          {
            img: "/image.jpg",
            title: "Let's Start Your Farming Journey!",
            subtitle: "We conduct our business with integrity.",
          },
          {
            img: "/image4.jpg",
            title: "Helping Farmers In Their Transition To Eco Agriculture!",
            subtitle: "We conduct our business with integrity.",
          },
        ].map((slide, i) => (
          <SwiperSlide key={i} className="relative ">
            {/* Background Image */}
            <img
              src={slide.img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
              
              {/* Top Message */}
              <p className="flex items-center justify-center space-x-2 text-sm sm:text-base md:text-lg font-medium">
                <Flower2 className="w-4 h-4 sm:w-6 sm:h-6" />
                <span>{slide.subtitle}</span>
              </p>

              {/* Title */}
              <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug mt-4 max-w-4xl drop-shadow-lg">
                {slide.title}
              </h1>

              {/* Subtext */}
              <p className="mt-2 max-w-3xl text-sm sm:text-base md:text-xl font-normal drop-shadow-md px-2">
                Our Agriculture businesses deliver agronomic advice, services, and inputs to livestock, fruit, and vegetable supply chains.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 ">
                <button className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-800 hover:bg-white text-white hover:text-green-800 font-semibold text-sm sm:text-lg rounded-md shadow-lg transition duration-300 ease-in-out group ">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-yellow-500 text-green-800 hover:text-white font-semibold text-sm sm:text-lg rounded-md shadow-lg transition duration-300 ease-in-out border-2 border-white">
                  Contact Us
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper {
          width: 100vw !important;
          height: 100%;
        }

        .swiper-slide {
          width: 100vw !important;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default FadeEffect;
