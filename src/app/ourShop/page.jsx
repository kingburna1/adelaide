"use client";
import React, { useState } from "react";
import HeroShop from "./HeroShop";
import NaveBarComponent from "@/components/navbar/NaveBarComponent";
import { ArrowRight, ChevronRight, Search } from "lucide-react";
import LatestProduct from "@/components/latestProduct/LatestProduct";
import latestProduct from "@/utils/latestProduct";
import ProductCard from "@/components/products/ProductCard";
import productsData from "@/utils/productsData";

const page = () => {
  const [price, setPrice] = useState(100.0);
  return (
    <main>
      <div>
        <div className="relative w-full h-auto md:h-screen">
          <HeroShop />

          {/*  Navbar positioned at the top */}
          <div className="absolute top-0 left-0 w-full z-50">
            <NaveBarComponent />
          </div>
        </div>

        <section className="mt-1  grid grid-cols-1 md:grid-cols-3  gap-5 px-5 md:px-10 md:mt-30 w-full">
          <div className="col-span-1 md:col-span-2   px-3  py-2 md:py-10  h-auto">
            <div className="flex justify-between items-center">
              <div>
                <h3>Showing 1-9 of 12 Result</h3>
              </div>
              <div>
                <form className="max-w-md mx-auto space-y-6">
                  <select className="p-4 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-green-400 outline-none w-full">
                    <option value="">Select an option</option>
                    <option value="drone">Drone Monitoring</option>
                    <option value="irrigation">Automated Irrigation</option>
                    <option value="soil">Soil Data Analysis</option>
                    <option value="integration">AI Integration</option>
                    <option value="weather">Weather Forecasting</option>
                    <option value="yield">Crop Yield Prediction</option>
                  </select>
                </form>
              </div>
            </div>



           <div className="flex flex-wrap mt-5 md:mt-10 gap-4 md:gap-40 w-full ">
              {productsData?.slice(0, 6).map ((items) =>(<ProductCard key={items.id} products={items} />))} 
           </div>

             <div className="flex justify-center items-center mt-5">
                  <ul className="flex justify-center items-center gap-2">
                    <li className="border border-green-800 p-3 rounded-lg hover:bg-green-800 hover:text-white font-bold transition-all duration-400 ease-in-out cursor-pointer">1</li>
                    <li className="border border-green-800 p-3 rounded-lg hover:bg-green-800 hover:text-white font-bold transition-all duration-400 ease-in-out cursor-pointer">2</li>
                    <li className="border border-green-800 p-3 rounded-lg hover:bg-green-800 hover:text-white font-bold transition-all duration-400 ease-in-out cursor-pointer" ><ChevronRight /></li>
                  </ul>
             </div>


          </div>

          <div className="h-auto md:col-span-1  p-10">
            <div>
              <ul className="flex flex-col p-5 bg-green-50 h-auto w-full justify-center rounded-lg space-y-3">
                {[
                  "Drone Monitoring",
                  "Automated Irrigation",
                  "Soil Data Analysis",
                  "AI Integration",
                  "Weather Forecasting",
                  "Crop Yield Prediction",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-3 text-gray-800 font-medium cursor-pointer transition-all border-b border-gray-200 p-3"
                  >
                    {/* Icon */}
                    <span className="opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight size={18} />
                    </span>
                    {/* Text */}
                    <span className="transition-all duration-300 group-hover:text-green-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center mt-5 border-2 border-gray-300 p-5 rounded-lg hover:border-green-900 transition-all duration-300 ease-in-out">
              <input
                type="text"
                placeholder="search for products"
                className="outline-none"
              />
              <Search color="gray" size={22} />
            </div>

            <div className="mt-5 md:mt-10">
              <h3 className="text-md md:text-lg font-bold text-green-800">
                Latest Products
              </h3>

              <div className="mt flex flex-col gap-6 bg-green-100/20 h-auto w-full p-2 rounded-lg">
                {latestProduct?.map((items) => (
                  <LatestProduct key={items.id} latest={items} />
                ))}
              </div>
            </div>

            <div className="w-full max-w-sm bg-white p-4 rounded-lg">
              <h2 className="text-lg font-bold text-green-900 mb-4">
                Filter by price
              </h2>

              <input
                type="range"
                min="100000"
                max="25000000"
                step="1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full h-2 bg-green-800 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:bg-green-800
          [&::-webkit-slider-thumb]:rounded-sm
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-moz-range-thumb]:w-4
          [&::-moz-range-thumb]:h-4
          [&::-moz-range-thumb]:bg-green-800
          [&::-moz-range-thumb]:border-none
          [&::-moz-range-thumb]:rounded-sm"
              />

              <div className="flex justify-between items-center text-green-900 mt-3">
                <span className="text-base font-medium">
                  Price: xaf0—xaf{price}
                </span>
                <button className="font-semibold hover:underline">
                  Filter
                </button>
              </div>
            </div>
              
              <div className="mt-5 md:mt-8 flex flex-col justify-center p-5 ">
                <h4 className="text-md md:text-lg font-bold text-green-800 "> Tags</h4>
                   <ul className="flex gap-4 justify-center items-center pt-2">
                    <li className="bg-yellow-400 p-2 rounded-lg text-green-800 hover:bg-yellow-300 transition-all duration-400 ease-in-out font-bold cursor-pointer"> Best Seeds</li>
                    <li className="bg-yellow-400 p-2 rounded-lg text-green-800 hover:bg-yellow-300 transition-all duration-400 ease-in-out font-bold cursor-pointer">Machinary</li>
                   </ul>
              </div>

          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
