"use client";
import { Oswald } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { Flower2, Drone, Webhook, Warehouse, Vegan,  } from "lucide-react";

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
  return (
    <main className="px-20 md:pb-20">
      <div className="h-[600px] w-full flex gap-5">
        {/* LEFT SIDE */}
        <div className="relative  flex-1 h-full">
          <div className="z-2">
            <img src="/image21.jpg" alt="" />
          </div>

          <div className="absolute top-20 -left-15 w-[250px] h-[250px] rounded-full shadow-lg z-2">
            <img src="/image18.webp" alt="image" className="rounded-md" />
          </div>

          <div className="absolute -top-15 -left-25 w-[250px] h-[250px]">
            <img src="/image19.png" alt="image" className="rounded-md" />
          </div>
              
          <div className={`px-20 ${oswald.variable} absolute -bottom-3 z-8`}>
      <h4 className="text-xl md:text-5xl font-sans text-yellow-500">Fresh harvest</h4>
      {/* rest of your component */}
    </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 h-full overflow-y-scroll scroll-smooth scrollbar-hide">
          <div className="border-b-1 border-gray-400 pb-3">
            <p className="flex gap-3 text-green-400">
              <span>
                <Flower2 color="#80ff00" />
              </span>
              We conduct our business with integrity.
            </p>
            <h4 className="font-bold text-xl md:text-3xl py-4 text-green-900">
              Feeding the world with consistency, responsible, and sustainable
              way!
            </h4>
            <p className="text-md md:text-lg py-4 text-green-900">
              We put people's physical safety above all else by helping
              colleagues and those we interact with reach their full potential
              by respecting everyone, being inclusive and valuing differences.
            </p>
            <p className="text-l md:text-lg py-4 text-green-900">
              Our approach goes beyond organic, it is always social because
              people are at the heart of everything we do from the fields of
              agriculture and forestry work together with partners from
              processing to trade.
            </p>

            <div className="flex gap-10">
              <button className="bg-green-800 p-4 text-white hover:bg-yellow-500 transition-all duration-300 ease-in-out rounded-lg font-bold">
                How it's works
              </button>
              <button className="bg-white p-4 hover:text-white hover:bg-green-800 transition-all duration-300 ease-in-out rounded-lg font-bold border-2 border-green-800">
                meet our team
              </button>
            </div>
          </div>

          {/* Counter Section */}
          <div>
            {/* 99% */}
            <div className="group flex gap-5 py-3 items-center border-b-1">
              <div className="p-3  group-hover:animate-bounce transition-transform duration-500 ease-in-out">
              <Webhook  size={36} color="#008040" />
              </div>
              <div>
                <h3 className="font-bold text-md md:text-4xl py-3 text-green-800">
                  <CountUpOnScroll end={99} suffix="%" />
                </h3>
                <p className="text-md md:text-lg">
                  Customer satisfaction based on 750+ reviews of 6,154 works and
                  Projects, with 2,194 Happy Clients who deeply trust our
                  services.
                </p>
              </div>
            </div>

            {/* 196K */}
            <div className="group flex gap-5 py-3 items-center border-b-1">
              <div className="p-3  group-hover:animate-bounce transition-transform duration-500 ease-in-out">
              <Warehouse  size={36} color="#008040" />
              </div>
              <div>
                <h3 className="font-bold text-md md:text-4xl py-3 text-green-800">
                  <CountUpOnScroll end={196} suffix="K" />
                </h3>
                <p className="text-md md:text-lg">
                  Expert farmers worldwide work with us today as a global
                  network to bring together people, ideas and resources that can
                  nourish lives.
                </p>
              </div>
            </div>

            {/* 58M */}
            <div className="group flex gap-5 py-3 items-center border-b-1">
              <div className="p-3  group-hover:animate-bounce transition-transform duration-500 ease-in-out">
              <Vegan  size={36} color="#008040" />
              </div>
              <div>
                <h3 className="font-bold text-md md:text-4xl py-3 text-green-800">
                  <CountUpOnScroll end={58} suffix="M" />
                </h3>
                <p className="text-md md:text-lg">
                  Products and seeds delivered annually by us to bring food,
                  plants, solutions, organic products and ingredients to meet
                  customers needs.
                </p>
              </div>
            </div>

            {/* 98K */}
            <div className="group flex gap-5 py-3 items-center border-b-1">
              <div className="p-3  group-hover:animate-bounce transition-transform duration-500 ease-in-out">
                <Drone size={36} color="#008000" />
              </div>
              <div>
                <h3 className="font-semibold text-md md:text-4xl py-3 text-green-800">
                  <CountUpOnScroll end={98} suffix="K" />
                </h3>
                <p className="text-md md:text-lg">
                  Acres of growing space we plant worldwide to bring new ideas
                  and sustainable practices to reduce our impact and take care
                  of planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoreComponent;
