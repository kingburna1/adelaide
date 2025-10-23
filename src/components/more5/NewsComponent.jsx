import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const NewsComponent = () => {
  return (
    <main>
      <div className="flex justify-center items-center flex-col text-green-800">
        <p>Latest ideas & insights from the world!</p>
        <h3 className="text-xl md:text-5xl font-bold max-w-xl mx-auto text-center">
          Farming and agriculture news from farmers!
        </h3>
        <div>
          <span>y</span> <span>y</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-20 gap-10">
        <div className="max-w-sm bg-white rounded-2xl  overflow-hidden ">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/image31.jpg" // Replace with your image path
              alt="Farmer on field"
              width={600}
              height={400}
              className="object-cover w-full h-64 transform transition-transform duration-500 ease-in-out hover:scale-105"
            />

            {/* Tags */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-3 py-1 rounded-md transition-all duration-500 ease-in-out  hover:bg-green-800 hover:text-white">
                Fields
              </span>
              <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-3 py-1 rounded-md transition-all duration-500 ease-in-out  hover:bg-green-800 hover:text-white ">
                Tax
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-xl font-extrabold text-green-900 leading-snug mb-3">
              Tax deductions available for residual fertility on purchased land
              beneficial ownership.
            </h2>

            {/* Meta Info */}
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <span>September 4, 2025</span>
              <span className="w-5 h-[1px] bg-green-600 inline-block"></span>
              <span className="text-green-700 font-medium hover:text-green-800 cursor-pointer">
                Nikolas Gibbons
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              When farmland is purchased, tax code allows the purchaser to
              deduct the value of the excess fertility in the field like other
              improvements on the ground, such that...
            </p>

            <button className="bg-green-800 hover:bg-green-600 transition-all duration-500 ease-in-out p-2 font-bold text-white rounded-md  flex gap-2 my-2">Read more <span><ArrowRight /></span></button>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl  overflow-hidden ">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/image33.jpg" // Replace with your image path
              alt="Farmer on field"
              width={600}
              height={400}
              className="object-cover w-full h-64 transform transition-transform duration-500 ease-in-out hover:scale-105"
            />

            {/* Tags */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-3 py-1 rounded-md transition-all duration-500 ease-in-out  hover:bg-green-800 hover:text-white">
                Agricultre
              </span>
              <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-3 py-1 rounded-md transition-all duration-500 ease-in-out  hover:bg-green-800 hover:text-white ">
                Farm
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-xl font-extrabold text-green-900 leading-snug mb-3">
            How to optimize all your farm inputs for great efficiency during low commodity prices times!
            </h2>

            {/* Meta Info */}
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <span>September 4, 2025</span>
              <span className="w-5 h-[1px] bg-green-600 inline-block"></span>
              <span className="text-green-700 font-medium hover:text-green-800 cursor-pointer">
                Nikolas Gibbons
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
            When a producer evaluates what is necessary to grow a good crop, there are very few inputs that can be forgone.  At that point, our objective is to make ...
            </p>

            <button className="bg-green-800  hover:bg-green-600 transition-all duration-500 ease-in-out p-2 font-bold text-white rounded-md  flex gap-2 my-2">Read more <span><ArrowRight /></span></button>
          </div>
        </div>


        <div className="max-w-sm bg-white rounded-2xl  overflow-hidden ">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/image34.jpg" // Replace with your image path
              alt="Farmer on field"
              width={600}
              height={400}
              className="object-cover w-full h-64 transform transition-transform duration-500 ease-in-out hover:scale-105"
            />

            {/* Tags */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-3 py-1 rounded-md transition-all duration-500 ease-in-out  hover:bg-green-800 hover:text-white">
                Agriculture
              </span>
              <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-3 py-1 rounded-md transition-all duration-500 ease-in-out  hover:bg-green-800 hover:text-white ">
                Tax
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-xl font-extrabold text-green-900 leading-snug mb-3">
            Can urban agriculture feed our cities sustainably? Insights from experts around the world!!
            </h2>

            {/* Meta Info */}
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <span>September 4, 2025</span>
              <span className="w-5 h-[1px] bg-green-600 inline-block"></span>
              <span className="text-green-700 font-medium hover:text-green-800 cursor-pointer">
                Nikolas Gibbons
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
            In a typical food network model, you buy a "share" before planting, this enables the farmer to purchase seeds, compost and technology without taking out loans our ...
            </p>

            <button className="bg-green-800  hover:bg-green-600 transition-all duration-500 ease-in-out p-2 font-bold text-white rounded-md  flex gap-2 my-2">Read more <span><ArrowRight /></span></button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default NewsComponent;
