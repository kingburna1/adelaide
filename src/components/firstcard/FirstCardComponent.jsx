import { TreePalm, Wheat, ArrowRight, Sprout, Hop } from "lucide-react";
import React from "react";
import Image from "next/image";

const FirstCardComponent = () => {
  return (
    <main>
      <div className="flex justify-center items-center flex-col py-10 px-20 ">
        <p className="text-green-500">
          Let's start your farming journey together!
        </p>
        <h4 className="text-xl md:text-5xl font-bold max-w-xl mx-auto text-center text-green-800">
          Innovative solutions for agriculture optimal crops growth & soil
          health.
        </h4>
        <div className="flex justify-center items-center">
          {" "}
          <TreePalm size={26} color="#008000" />{" "}
          <Wheat size={26} color="#008000" />{" "}
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-3 px-20 gap-6">
        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden relative">
          {/* Top green border */}
          <div className="absolute top-0 left-0 w-full h-3 bg-green-700 rounded-t-2xl"></div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-5 mt-3">
            {/* Icon */}
            <div className="flex justify-start">
              <div className="p-3 bg-green-100 rounded-lg shadow-md">
                <Sprout size={44} color="#006400" />
              </div>
            </div>

            {/* Title & description */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
                Seed Supply and Distribution
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We have dedicated resources that will meet your huge seed
                storage and all distribution needs to assure a ready seed supply
                on time for you.
              </p>
            </div>

            {/* Button */}
            <button className="relative flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 w-fit overflow-hidden group">
              <span>Explore More</span>
              {/* Static arrow (fades out) */}
              <ArrowRight
                size={18}
                className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-x-0"
              />
              {/* Hover arrow (slides in) */}
              <ArrowRight
                size={18}
                className="absolute right-5 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </button>

            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-2xl mt-3 group">
              <Image
                src="/image17.jpg" // replace with your image path
                alt="Seed Distribution"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden relative">
          {/* Top green border */}
          <div className="absolute top-0 left-0 w-full h-3 bg-green-700 rounded-t-2xl"></div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-5 mt-3">
            {/* Icon */}
            <div className="flex justify-start">
              <div className="p-3 bg-green-100 rounded-lg shadow-md">
              <TreePalm size={56} color="#008000" />
              </div>
            </div>

            {/* Title & description */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
                Soil Health and Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Soil health refers to the  soils capability to function  as vital living ecosystem that lead to a huge productive system success for your farm.
              </p>
            </div>

            {/* Button */}
            <button className="relative flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 w-fit overflow-hidden group">
              <span>Explore More</span>
              {/* Static arrow (fades out) */}
              <ArrowRight
                size={18}
                className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-x-0"
              />
              {/* Hover arrow (slides in) */}
              <ArrowRight
                size={18}
                className="absolute right-5 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </button>

            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-2xl mt-3 group">
              <Image
                src="/image15.jpg" // replace with your image path
                alt="Seed Distribution"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>




        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden relative">
          {/* Top green border */}
          <div className="absolute top-0 left-0 w-full h-3 bg-green-700 rounded-t-2xl"></div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-5 mt-3">
            {/* Icon */}
            <div className="flex justify-start">
              <div className="p-3 bg-green-100 rounded-lg shadow-md">
              <Hop size={56} color="#008000" />
              </div>
            </div>

            {/* Title & description */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-green-900 mb-3">
                Crop Irrigation Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                 water is a process resources for humanity and make's sence to optimize it's use by technology and scheduling water applied to the field.
              </p>
            </div>

            {/* Button */}
            <button className="relative flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-300 w-fit overflow-hidden group">
              <span>Explore More</span>
              {/* Static arrow (fades out) */}
              <ArrowRight
                size={18}
                className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-x-0"
              />
              {/* Hover arrow (slides in) */}
              <ArrowRight
                size={18}
                className="absolute right-5 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </button>

            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-2xl mt-3 group">
              <Image
                src="/image16.jpg" // replace with your image path
                alt="Seed Distribution"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>

          <div className="flex items-center justify-center p-10">
               <p className="text-center text-green-900">we are constantly advancing our methods to prevent, minimize, and <br/> control plant diseases and pests.<span className="text-green-700 border-b-1">Explore  Our Services</span> </p>
            </div>
    </main>
  );
};

export default FirstCardComponent;
