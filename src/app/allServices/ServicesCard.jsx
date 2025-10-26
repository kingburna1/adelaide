import React from "react";
import { servicesData } from "./../../utils/servicesData";

import * as LucideIcons from "lucide-react";

const Icon = ({ name, ...props }) => {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

const ServicesCard = ({ data }) => {
  const topShadowClass = "shadow-[0_-10px_15px_-3px_rgba(0,5,5,5.5)]";
  const customSlug = data?.title?.toLowerCase().split(" ").join("-");
  return (
    <main>
      <div className=" relative w-[360px] h-[480px] rounded-[30px] overflow-hidden mx-auto ">
        <div className="absolute top-0 left-0 right-0 h-[55%] rounded-[30px] overflow-hidden">
          <img
            src={data?.image_source}
            alt="Farmer checking soil health"
            className="w-full h-full object-cover hover:scale-105 transition transform duration-300"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[60%] flex z-10 ">
          <div className="flex-1 bg-white rounded-b-[30px] rounded-t-[30px] p-8 flex flex-col justify-center  shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-green-900 leading-snug mb-3">
              {data.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.description}
            </p>

            <button className="p-2 bg-green-800 rounded-[10px] font-bold text-white mt-2 hover:bg-yellow-500 transition-all duration-300 ease-in-out">
              Explore more{" "}
            </button>
          </div>

          <div className="w-[100px] flex-shrink-0 rounded-br-[30px] rounded-tr-[30px] p-4  z-20 ">
            {/* Placeholder for the farming icon (ensure it's a deep green/black color) */}
            <div className="text-white w-14 h-14 flex items-center justify-center">
              {/* Example SVG - Replace with your actual icon */}
              <Icon name={data.icon} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesCard;
