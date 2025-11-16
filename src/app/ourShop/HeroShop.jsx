import React from "react";

const HeroShop = () => {
  return (
    // ISSUE A: Removed `w-screen` and `left-0 right-0` as they are redundant. 
    // The main element naturally fills the viewport width.
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      
      {/* ISSUE B: The parent div for the image can be removed. The image can fill the outer div directly. */}
      <img
        src="/image51.jpg"
        alt="all my life"
        // w-full is enough, no need for w-screen if parent is w-full
        className="w-full h-full object-cover" 
      />
      
      {/* Overlay Container: This is the content layer */}
      <div className="absolute top-10 md:top-0 w-full h-full bg-black/60">
        
        {/* Centering Container: Used to center the text content */}
        <div className="flex justify-center items-center h-full px-4 sm:px-10"> 
          
          {/* ISSUE C: Removed pl-10 from the previous line and added symmetric padding (px-4/px-10) here */}
          <div className="flex flex-col gap-1 md:gap-4 text-white max-w-xl">
            
            <h1 className="text-xl md:text-6xl font-bold text-center">
              Our Shop
            </h1>
            
            <p className="text-sm md:text-lg leading-relaxed text-center">
              Our success depends on our customers' success, so we are committed
              to building long lasting partnerships based on trust,
              collaboration, and fostering true sustainable growth.
            </p>

            <div className=" flex flex-col md:flex-row gap-4 justify-center">
              <button className="p-4 bg-green-800 rounded-md hover:bg-yellow-500 font-bold transition-all duration-500 ease-in-out">
                More About Us
              </button>
              <button className="border-2 border-white p-4 hover:text-black hover:bg-white hover:border-green-800 transition-all duration-500 ease-in-out font-bold rounded-md">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroShop;