"use client";
import { TreePalm, Wheat, ArrowRight, Sprout, Hop } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FirstCardComponent = () => {
  return (
    <main className="w-full">
      {/* Top section */}
      <motion.div
        className="flex flex-col justify-center items-center text-center py-10 px-5 sm:px-10 md:px-16 lg:px-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="text-green-500 text-sm sm:text-base md:text-lg">
          Let's start your farming journey together!
        </p>
        <h4 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto text-green-800 leading-snug mt-3">
          Innovative solutions for agriculture optimal crops growth & soil
          health.
        </h4>
        <div className="flex justify-center items-center gap-2 mt-4">
          <TreePalm size={24} color="#008000" />
          <Wheat size={24} color="#008000" />
        </div>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-10 md:px-16 lg:px-20">
        {/* Card 1 */}
        <motion.div
          className="w-full bg-white rounded-2xl shadow-lg overflow-hidden relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-green-700 rounded-t-2xl"></div>

          <div className="p-5 sm:p-6 flex flex-col gap-5 mt-3">
            <div className="flex justify-start">
              <div className="p-3 bg-green-100 rounded-lg shadow-md">
                <Sprout size={40} className="sm:size-[44px]" color="#006400" />
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-3">
                Seed Supply and Distribution
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We have dedicated resources that will meet your huge seed
                storage and all distribution needs to assure a ready seed supply
                on time for you.
              </p>
            </div>

            <button className="relative flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-all duration-300 w-fit overflow-hidden group">
              <span className="text-sm sm:text-base">Explore More</span>
              <ArrowRight
                size={18}
                className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-x-0"
              />
              <ArrowRight
                size={18}
                className="absolute right-5 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </button>

            <div className="relative w-full h-44 sm:h-48 md:h-56 lg:h-60 overflow-hidden rounded-2xl mt-3 group">
              <Image
                src="/image17.jpg"
                alt="Seed Distribution"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-full bg-white rounded-2xl shadow-lg overflow-hidden relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-green-700 rounded-t-2xl"></div>

          <div className="p-5 sm:p-6 flex flex-col gap-5 mt-3">
            <div className="flex justify-start">
              <div className="p-3 bg-green-100 rounded-lg shadow-md">
                <TreePalm size={50} className="sm:size-[56px]" color="#008000" />
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-3">
                Soil Health and Management
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Soil health refers to the soil’s capability to function as a
                vital living ecosystem that leads to a huge productive system
                success for your farm.
              </p>
            </div>

            <button className="relative flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-all duration-300 w-fit overflow-hidden group">
              <span className="text-sm sm:text-base">Explore More</span>
              <ArrowRight
                size={18}
                className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-x-0"
              />
              <ArrowRight
                size={18}
                className="absolute right-5 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </button>

            <div className="relative w-full h-44 sm:h-48 md:h-56 lg:h-60 overflow-hidden rounded-2xl mt-3 group">
              <Image
                src="/image15.jpg"
                alt="Soil Management"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="w-full bg-white rounded-2xl shadow-lg overflow-hidden relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-green-700 rounded-t-2xl"></div>

          <div className="p-5 sm:p-6 flex flex-col gap-5 mt-3">
            <div className="flex justify-start">
              <div className="p-3 bg-green-100 rounded-lg shadow-md">
                <Hop size={50} className="sm:size-[56px]" color="#008000" />
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-3">
                Crop Irrigation Management
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Water is a precious resource for humanity, and it makes sense to
                optimize its use with technology and scheduling for efficient
                field irrigation.
              </p>
            </div>

            <button className="relative flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-all duration-300 w-fit overflow-hidden group">
              <span className="text-sm sm:text-base">Explore More</span>
              <ArrowRight
                size={18}
                className="transition-all duration-300 opacity-100 group-hover:opacity-0 translate-x-0"
              />
              <ArrowRight
                size={18}
                className="absolute right-5 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </button>

            <div className="relative w-full h-44 sm:h-48 md:h-56 lg:h-60 overflow-hidden rounded-2xl mt-3 group">
              <Image
                src="/image16.jpg"
                alt="Irrigation Management"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom text */}
      <motion.div
        className="flex items-center justify-center text-center p-6 sm:p-8 md:p-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="text-green-900 text-sm sm:text-base md:text-lg leading-relaxed">
          We are constantly advancing our methods to prevent, minimize, and{" "}
          <br className="hidden sm:block" />
          control plant diseases and pests.{" "}
          <span className="text-green-700 border-b border-green-700">
            Explore Our Services
          </span>
        </p>
      </motion.div>
    </main>
  );
};

export default FirstCardComponent;
