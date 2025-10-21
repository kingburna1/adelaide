'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
    ArrowRightCircle,
    Facebook,
    Linkedin,
    Twitter,
    Search,
    BriefcaseConveyorBelt,
    Flower2,
    ArrowRight,
  } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FadeEffect = () => {
  return (
    <>
      {/* container */}
      <div className="left-0 right-0 w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <Swiper
          spaceBetween={0}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 4000, // 4 seconds
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper w-screen h-full"
        >
          {/* Slide 1  */}
          <SwiperSlide className="relative">
            <img
              src="./image8.jpg"
              alt="nature-1"
              className="w-screen h-full object-cover"
            />
                     <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-screen w-full p-4 md:p-8 text-white text-center bg-black/40 px-10">
                            {/* Small top message */}
               <p className="flex items-center space-x-2 text-lg md:text-xl font-medium ">
                   {/* You may want to replace this text leaf icon with an actual Lucide icon if available */}
                   <span className="text-xl md:text-2xl"> <Flower2 color="#ffffff" /></span>
                   <span>We conduct our business with integrity.</span>
                 </p>

                 {/* Main Heading */}
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mt-4 drop-shadow-lg">
                   UnLocking Nature, Enriching Live's!
                 </h1>

                 {/* Subtext */}
                 <p className="max-w-3xl text-xl md:text-2xl font-normal mb-10 drop-shadow-md">
                   Our Agriculture businesses deliver agronomic advice, services,
                   and inputs to livestock, fruit, and vegetables smart chain.
                 </p>

                 {/* Buttons Container */}
                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        
                   {/* Primary Button: Explore Our Services */}
                   <button className="flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-white text-gray-900 font-bold text-lg rounded-md shadow-xl transition duration-300 ease-in-out group">
                     Explore Our Services 
                     <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                   </button>

                              {/* Secondary Button: Contact Us */}
                   <button className="px-8 py-4 bg-white hover:bg-cyan-500 text-green-700  hover-text-white font-bold text-lg rounded-md shadow-xl transition duration-300 ease-in-out border-2 border-white">
                     Contact Us
                   </button>
                 </div>
            </div>
          </SwiperSlide>
          
          {/* Slide 2  */}
          <SwiperSlide className="relative">
            <img
              src="./image7.jpg"
              alt="nature-2"
              className="w-screen h-full object-cover"
            />
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-screen w-full p-4 md:p-8 text-white text-center bg-black/40 px-10">
                            {/* Small top message */}
               <p className="flex items-center space-x-2 text-lg md:text-xl font-medium ">
                   {/* You may want to replace this text leaf icon with an actual Lucide icon if available */}
                   <span className="text-xl md:text-2xl"><Flower2 color="#ffffff" /></span>
                   <span>We conduct our business with integrity.</span>
                 </p>

                 {/* Main Heading */}
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mt-4 drop-shadow-lg">
                   Reliable Trusted and Safe services To Help Farmers
                 </h1>

                 {/* Subtext */}
                 <p className="max-w-3xl text-xl md:text-2xl font-normal mb-10 drop-shadow-md">
                   Our Agriculture businesses deliver agronomic advice, services,
                   and inputs to livestock, fruit, and vegetables smart chain.
                 </p>

                 {/* Buttons Container */}
                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        
                   {/* Primary Button: Explore Our Services */}
                   <button className="flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-white text-gray-900 font-bold text-lg rounded-md shadow-xl transition duration-300 ease-in-out group">
                     Explore Our Services 
                     <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                   </button>

                              {/* Secondary Button: Contact Us */}
                   <button className="px-8 py-4 bg-white hover:bg-cyan-500 text-green-700  hover:text-white font-bold text-lg rounded-md shadow-xl transition duration-300 ease-in-out border-2 border-white">
                     Contact Us
                   </button>
                 </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 (Content Overlay - CORRECTED) */}
         
          <SwiperSlide className="relative"> 
            <img
              src="./image.jpg"
              alt="nature-3"
              className="w-screen h-full object-cover"
            />
           
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-screen w-full p-4 md:p-8 text-white text-center bg-black/40 px-10">
                            {/* Small top message */}
               <p className="flex items-center space-x-2 text-lg md:text-xl font-medium ">
                   {/* You may want to replace this text leaf icon with an actual Lucide icon if available */}
                   <span className="text-xl md:text-2xl"><Flower2 color="#ffffff" /></span>
                   <span>We conduct our business with integrity.</span>
                 </p>

                 {/* Main Heading */}
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mt-4 drop-shadow-lg">
                   Let's Start Your Farming Journey!
                 </h1>

                 {/* Subtext */}
                 <p className="max-w-3xl text-xl md:text-2xl font-normal mb-10 drop-shadow-md">
                   Our Agriculture businesses deliver agronomic advice, services,
                   and inputs to livestock, fruit, and vegetables smart chain.
                 </p>

                 {/* Buttons Container */}
                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        
                   {/* Primary Button: Explore Our Services */}
                   <button className="flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-white text-gray-900 font-bold text-lg rounded-md shadow-xl transition duration-300 ease-in-out group">
                     Explore Our Services 
                     <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                   </button>

                              {/* Secondary Button: Contact Us */}
                   <button className="px-8 py-4 bg-white hover:bg-cyan-500 text-green-700  hover:text-white font-bold text-lg rounded-md shadow-xl transition duration-300 ease-in-out border-2 border-white">
                     Contact Us
                   </button>
                 </div>
            </div>
          </SwiperSlide>
          
          {/* Slide 4  */}
          <SwiperSlide className="relative">
            <img
              src="./image4.jpg"
              alt="nature-4"
              className="w-screen h-full object-cover"
            />

<div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-screen w-full p-4 md:p-8 text-white text-center bg-black/40 px-10">
                            {/* Small top message */}
               <p className="flex items-center space-x-2 text-lg md:text-xl font-medium ">
                   {/* You may want to replace this text leaf icon with an actual Lucide icon if available */}
                   <span className="text-xl md:text-2xl"><Flower2 color="#ffffff" /></span>
                   <span>We conduct our business with integrity.</span>
                 </p>

                 {/* Main Heading */}
                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mt-4 drop-shadow-lg">
                   Helping Farmer's In Their Transition Eco Agriculture!
                 </h1>

                 {/* Subtext */}
                 <p className="max-w-3xl text-xl md:text-2xl font-normal mb-10 drop-shadow-md">
                   Our Agriculture businesses deliver agronomic advice, services,
                   and inputs to livestock, fruit, and vegetables smart chain.
                 </p>

                 {/* Buttons Container */}
                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        
                   {/* Primary Button: Explore Our Services */}
                   <button className="flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-white text-gray-900 font-bold text-lg rounded-md shadow-xl transition duration-300 ease-in-out group">
                     Explore Our Services 
                     <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                   </button>

                              {/* Secondary Button: Contact Us */}
                   <button className="px-8 py-4 bg-white hover:bg-cyan-500 text-green-700  hover:text-white font-bold text-lg rounded-md shadow-xl transition duration-300 ease-in-out border-2 border-white">
                     Contact Us
                   </button>
                 </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <style jsx>{`
        .swiper {
          width: 100vw !important;
          height: 100%;
        }

        .swiper-slide {
          width: 100vw !important;
          height: 100%;
          background: #000;
        }

        .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </>
  );
};

export default FadeEffect;