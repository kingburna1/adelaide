"use client";
import {
  ArrowRightCircle,
  Facebook,
  Linkedin,
  Twitter,
  Search,
  BriefcaseConveyorBelt,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const NaveBarComponent = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu(null);

  return (
    <div>
      <main className="backdrop-blur bg-white/20">
        {/* Top cyan bar (UNCHANGED) */}
        <div className="flex justify-between w-full bg-green-800 items-center px-4 text-white">
          <div className="flex space-x-2 py-2 items-center">
            <p>Implementing regenerative agriculture practices!</p>
            <ul className="flex space-x-2 text-yellow-300 items-center">
              <li>Contact us</li>
              <li>
                <ArrowRightCircle size={20} />
              </li>
            </ul>
          </div>

          <div className="flex space-x-2 items-center">
            <ul className="flex space-x-2">
              <li>Pricing</li>
              <li className="border-l-2 border-r-2 px-2">Careers</li>
              <li>FAQs</li>
            </ul>

            <ul className="flex space-x-2">
              <li>
                <Facebook color="#ffff00" size={20} />
              </li>
              <li>
                <Linkedin color="#ffff00" size={20} />
              </li>
              <li>
                <Twitter color="#ffff00" size={20} />
              </li>
            </ul>
          </div>
        </div>

        {/* Main navbar (UNCHANGED) */}
        <div className="w-full  shadow-md flex items-center text-green-800 font-semibold px-3 relative">
          {/* Logo (UNCHANGED) */}
          <ul className="flex space-x-4 items-center flex-1 p-2">
            <li>
              <Image
                src="/adela1.jpg"
                alt="Adela"
                width={60}
                height={60}
                className="rounded-full object-cover"
                priority
              />
            </li>
            <Link href="/" className="font-bold text-3xl">Adela</Link>
          </ul>

          {/* Menu items */}
          <div className="flex space-x-2 flex-[2] relative">
            {["Services", "Projects", "Insight", "Shop", "Pages"].map(
              (item, i) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Nav button (UNCHANGED) */}
                  <div
                    className="
                      relative flex flex-col items-center pt-4 px-4 rounded-md cursor-pointer
                      before:absolute before:inset-0 before:bg-gray-100 before:scale-x-0 before:origin-left
                      before:transition-transform before:duration-300 before:ease-in-out before:z-0
                      after:absolute after:top-0 after:left-0 after:h-[2px] after:bg-cyan-400 after:w-0
                      after:transition-all after:duration-300 after:ease-in-out after:z-10
                      hover:before:scale-x-100 hover:after:w-full
                    "
                  >
                    <p className="relative z-20">{item}</p>
                    <ChevronDown className="relative z-20" />
                  </div>

                  {/* Dropdown animation (UNCHANGED) */}
                  <div
                    className={`
                      absolute left-0 mt-2 w-[300px] bg-white rounded-md shadow-lg overflow-hidden
                      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${
                        hoveredMenu === item
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-4 invisible"
                      }
                    `}
                  >
                    {/* Dropdown content (APPLYING FIX HERE) */}
                    {item === "Services" && (
                      <div className="p-4 space-y-3 text-gray-700">
                        <Link  href="/allServices" className="font-semibold text-green-800 border-b pb-1">
                          Our Services
                        </Link>
                        <ul className="space-y-2">
                          {/* Corrected item structure */}
                          <Link  href="/allServices" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Agricultural Consulting
                          </Link>
                          <Link  href="/allServices" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Soil Regeneration
                          </Link>
                          <Link    href="/allServices" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Farm Automation
                          </Link>
                        </ul>
                      </div>
                    )}

                    {item === "Projects" && (
                      <div className="p-4 space-y-3 text-gray-700">
                        <h4 className="font-semibold text-green-800 border-b pb-1">
                          Our Projects
                        </h4>
                        <ul className="space-y-2">
                          <Link href="ourProjects" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Agroforestry Expansion
                          </Link>
                          <Link   href="ourProjects" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Sustainable Water Systems
                          </Link >
                          <Link   href="ourProjects" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Climate-smart Farming
                          </Link>
                        </ul>
                      </div>
                    )}

                    {item === "Insight" && (
                      <div className="p-4 space-y-3 text-gray-700">
                        <h4 className="font-semibold text-green-800 border-b pb-1">
                          Insights & Research
                        </h4>
                        <ul className="space-y-2">
                          <li className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            News & Trends
                          </li>
                          <li className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Expert Articles
                          </li>
                          <li className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Whitepapers
                          </li>
                        </ul>
                      </div>
                    )}

                    {item === "Shop" && (
                      <div className="p-4 space-y-3 text-gray-700">
                        <h4 className="font-semibold text-green-800 border-b pb-1">
                          Shop Categories
                        </h4>
                        <ul className="space-y-2">
                          <Link href="ourShop" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Organic Seeds
                          </Link>
                          <Link href="ourShop" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Farming Tools
                          </Link>
                          <Link href="ourShop" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Eco Fertilizers
                          </Link>
                        </ul>
                      </div>
                    )}

                    {item === "Pages" && (
                      <div className="p-4 space-y-3 text-gray-700">
                        <h4 className="font-semibold text-green-800 border-b pb-1">
                          Explore Pages
                        </h4>
                        <ul className="space-y-2">
                          <Link href="ourBlog" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            About Us
                          </Link>
                          <Link  href="ourBlog" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Blog
                          </Link>
                          <Link href="ourBlog" className="group hover:text-cyan-600 flex items-center gap-1 transition-colors duration-300 cursor-pointer">
                            <ArrowRight size={16} 
                              className="
                                transition-all duration-300 ease-out 
                                opacity-0 -translate-x-3 w-0 
                                group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4
                              "
                            /> 
                            Contact
                          </Link>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Buttons (UNCHANGED) */}
          <div className="flex space-x-6 flex-[1] items-center justify-end">
            <button className="flex gap-2 items-center bg-green-800 p-2 rounded-md text-white hover:bg-amber-400 transition-all duration-300 ease-in-out">
              Get in touch <ArrowRightCircle size={20} />
            </button>

            <Search />

            <div className="relative inline-block">
              <BriefcaseConveyorBelt />
              <div className="absolute -top-2 -right-2 bg-green-700 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NaveBarComponent;