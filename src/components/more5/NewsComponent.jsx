"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const NewsComponent = () => {
  return (
    <main className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center text-green-800 mb-10">
        <p className="text-sm sm:text-base md:text-lg">
          Latest ideas & insights from the world!
        </p>
        <h3 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold max-w-2xl mt-2">
          Farming and agriculture news from farmers!
        </h3>
        <div className="flex gap-2 mt-2">
          <span>y</span> <span>y</span>
        </div>
      </div>

      {/* News Cards Section */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          justify-items-center
        "
      >
        {/* CARD 1 */}
        <motion.div
          className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/image31.jpg"
              alt="Farmer on field"
              width={600}
              height={400}
              className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              <span className="bg-yellow-400 text-green-900 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-md hover:bg-green-800 hover:text-white">
                Fields
              </span>
              <span className="bg-yellow-400 text-green-900 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-md hover:bg-green-800 hover:text-white">
                Tax
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-green-900 leading-snug mb-3">
              Tax deductions available for residual fertility on purchased land
              beneficial ownership.
            </h2>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-3">
              <span>September 4, 2025</span>
              <span className="w-5 h-[1px] bg-green-600 inline-block"></span>
              <span className="text-green-700 font-medium hover:text-green-800 cursor-pointer">
                Nikolas Gibbons
              </span>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
              When farmland is purchased, tax code allows the purchaser to deduct
              the value of the excess fertility in the field like other
              improvements on the ground, such that...
            </p>

            <button className="bg-green-800 hover:bg-green-600 transition-all duration-500 ease-in-out p-2 font-bold text-white rounded-md flex items-center gap-2 text-sm sm:text-base">
              Read more <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/image33.jpg"
              alt="Farmer on field"
              width={600}
              height={400}
              className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              <span className="bg-yellow-400 text-green-900 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-md hover:bg-green-800 hover:text-white">
                Agriculture
              </span>
              <span className="bg-yellow-400 text-green-900 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-md hover:bg-green-800 hover:text-white">
                Farm
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-green-900 leading-snug mb-3">
              How to optimize all your farm inputs for great efficiency during
              low commodity price times!
            </h2>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-3">
              <span>September 4, 2025</span>
              <span className="w-5 h-[1px] bg-green-600 inline-block"></span>
              <span className="text-green-700 font-medium hover:text-green-800 cursor-pointer">
                Nikolas Gibbons
              </span>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
              When a producer evaluates what is necessary to grow a good crop,
              there are very few inputs that can be forgone. At that point, our
              objective is to make...
            </p>

            <button className="bg-green-800 hover:bg-green-600 transition-all duration-500 ease-in-out p-2 font-bold text-white rounded-md flex items-center gap-2 text-sm sm:text-base">
              Read more <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-sm"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/image34.jpg"
              alt="Farmer on field"
              width={600}
              height={400}
              className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 transform transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
              <span className="bg-yellow-400 text-green-900 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-md hover:bg-green-800 hover:text-white">
                Agriculture
              </span>
              <span className="bg-yellow-400 text-green-900 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-md hover:bg-green-800 hover:text-white">
                Tax
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6">
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-green-900 leading-snug mb-3">
              Can urban agriculture feed our cities sustainably? Insights from
              experts around the world!!
            </h2>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-3">
              <span>September 4, 2025</span>
              <span className="w-5 h-[1px] bg-green-600 inline-block"></span>
              <span className="text-green-700 font-medium hover:text-green-800 cursor-pointer">
                Nikolas Gibbons
              </span>
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
              In a typical food network model, you buy a "share" before planting,
              this enables the farmer to purchase seeds, compost and technology
              without taking out loans...
            </p>

            <button className="bg-green-800 hover:bg-green-600 transition-all duration-500 ease-in-out p-2 font-bold text-white rounded-md flex items-center gap-2 text-sm sm:text-base">
              Read more <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default NewsComponent;
