import { Star } from "lucide-react";
import React from "react";

const LatestProduct = ({ latest }) => {
  const customSlug = latest?.title?.toLowerCase().split(" ").join("-");
  return (
    <div className="flex justify-center gap-2 items-center">
      <div className="w-[70px] h-[50px] bg-green-200 overflow-hidden">
        <img
          src={latest?.image_source}
          alt="image i made"
          className="w-full h-full object-cover hover:scale-130 transition-all duration-300"
        />
      </div>

      <div>
        <h3 className="text-sm md:text-md font-bold text-green-800">
          {" "}
          {latest?.product_name}
        </h3>
        <ul className="flex gap-5 text-gree  pt-2">
          <li className="line-through text-md text-green-800/80">
            {latest?.old_price}
          </li>
          <li className="text-md text-green-800">{latest?.new_price}</li>
        </ul>

        <ul className="flex  pt-2 ">
          <li>
            <Star color="#ffff00" fill="#ffff00" size={22} />
          </li>
          <li>
            <Star color="#ffff00" fill="#ffff00" size={22} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatestProduct;
