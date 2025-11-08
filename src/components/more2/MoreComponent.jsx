"use client";

import { Oswald } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { Flower2, Drone, Webhook, Warehouse, Vegan } from "lucide-react";
import { motion, useInView } from "framer-motion";

// 👇 Reusable Counter Component
const CountUpOnScroll = ({ end, suffix = "", duration = 1000, className }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (started) {
      let start = 0;
      const stepTime = Math.max(Math.floor(duration / end), 10);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [started, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const MoreComponent = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });

  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 md:pb-20">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full h-auto lg:h-[600px]">
        {/* LEFT SIDE (Slide from left) */}
        <motion.div
          ref={leftRef}
          initial={{ x: -150, opacity: 0 }}
          animate={
            leftInView
              ? { x: 0, opacity: 1 }
              : { x: -150, opacity: 0 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full"
        >
          <div className="relative z-10">
            <img
              src="/image21.jpg"
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="absolute top-10 sm:top-16 md:top-20 -left-6 sm:-left-10 md:-left-14 w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-auto z-20">
            <img src="/image18.webp" alt="image" className="rounded-md w-full" />
          </div>

          <div className="absolute -top-10 sm:-top-12 md:-top-16 -left-10 sm:-left-14 md:-left-20 w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-auto z-10">
            <img src="/image19.png" alt="image" className="rounded-md w-full" />
          </div>

          <div
            className={`absolute bottom-0 left-0 px-4 sm:px-8 md:px-10 lg:px-20 ${oswald.variable} z-30`}
          >
            <h4 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-sans text-yellow-500">
              Fresh harvest
            </h4>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Slide from right) */}
        <motion.div
          ref={rightRef}
          initial={{ x: 150, opacity: 0 }}
          animate={
            rightInView
              ? { x: 0, opacity: 1 }
              : { x: 150, opacity: 0 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 h-auto max-h-[600px] overflow-y-auto scroll-smooth scrollbar-hide"
        >
          <div className="border-b border-gray-400 pb-3">
            <p className="flex items-center gap-2 sm:gap-3 text-green-400 text-sm sm:text-base">
              <Flower2 color="#80ff00" />
              We conduct our business with integrity.
            </p>

            <h4 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl py-4 text-green-900">
              Feeding the world with consistency, responsibility, and sustainability!
            </h4>

            <p className="text-sm sm:text-base md:text-lg py-3 text-green-900">
              We put people's physical safety above all else by helping colleagues
              and those we interact with reach their full potential by respecting
              everyone, being inclusive, and valuing differences.
            </p>

            <p className="text-sm sm:text-base md:text-lg py-3 text-green-900">
              Our approach goes beyond organic — it is always social because people
              are at the heart of everything we do, from the fields of agriculture
              and forestry to trade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-3">
              <button className="bg-green-800 px-4 py-3 text-sm sm:text-base text-white hover:bg-yellow-500 transition-all duration-300 ease-in-out rounded-lg font-bold">
                How it works
              </button>
              <button className="bg-white px-4 py-3 text-sm sm:text-base hover:text-white hover:bg-green-800 transition-all duration-300 ease-in-out rounded-lg font-bold border-2 border-green-800">
                Meet our team
              </button>
            </div>
          </div>

          {/* Counter Section */}
          <div className="mt-6 space-y-6">
            {/* 99% */}
            <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 py-3 border-b border-gray-300">
              <div className="p-2 sm:p-3 group-hover:animate-bounce transition-transform duration-500 ease-in-out">
                <Webhook size={32} color="#008040" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl py-2 text-green-800">
                  <CountUpOnScroll end={99} suffix="%" />
                </h3>
                <p className="text-sm sm:text-base md:text-lg">
                  Customer satisfaction based on 750+ reviews of 6,154 works and
                  projects, with 2,194 happy clients who deeply trust our services.
                </p>
              </div>
            </div>

            {/* 196K */}
            <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 py-3 border-b border-gray-300">
              <div className="p-2 sm:p-3 group-hover:animate-bounce transition-transform duration-500 ease-in-out">
                <Warehouse size={32} color="#008040" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl py-2 text-green-800">
                  <CountUpOnScroll end={196} suffix="K" />
                </h3>
                <p className="text-sm sm:text-base md:text-lg">
                  Expert farmers worldwide work with us to bring together people,
                  ideas, and resources that nourish lives.
                </p>
              </div>
            </div>

            {/* 58M */}
            <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 py-3 border-b border-gray-300">
              <div className="p-2 sm:p-3 group-hover:animate-bounce transition-transform duration-500 ease-in-out">
                <Vegan size={32} color="#008040" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl py-2 text-green-800">
                  <CountUpOnScroll end={58} suffix="M" />
                </h3>
                <p className="text-sm sm:text-base md:text-lg">
                  Products and seeds delivered annually to bring food, plants, and
                  ingredients that meet customers' needs.
                </p>
              </div>
            </div>

            {/* 98K */}
            <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 py-3 border-b border-gray-300">
              <div className="p-2 sm:p-3 group-hover:animate-bounce transition-transform duration-500 ease-in-out">
                <Drone size={32} color="#008000" />
              </div>
              <div>
                <h3 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl py-2 text-green-800">
                  <CountUpOnScroll end={98} suffix="K" />
                </h3>
                <p className="text-sm sm:text-base md:text-lg">
                  Acres of growing space planted worldwide to reduce impact and
                  protect the planet.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default MoreComponent;
