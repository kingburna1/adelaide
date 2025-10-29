import { X } from "lucide-react";
import React from "react";

const HeroProducts = ({pData}) => {
  const customSlug = pData.product_name.toLowerCase().split(" ").join("-");
  return (
    <div>
      <div>
        <div className="flex justify-center items-center px-5 py-6 bg-linear-to-tr from-blue-400 to-blue-100 via-blue-300">
          <h2 className=" font-bold md:text-3xl lg:text-3xl xl:text-4xl">
           {pData?.product_name}
          </h2>
         
        </div>

        <div className="flex justify-center items-center w-full px-10 py-5 bg-linear-to-tr from-blue-300 to-blue-100 via-blue-200 rounded-b-4xl shadow-2xl shadow-amber-50 mb-4">
          <div>
            <h3 className="text-sm md:text-lg lg:text-xl font-bold">
               {pData?.sub_title}
            </h3>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;
