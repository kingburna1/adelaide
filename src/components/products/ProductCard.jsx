import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductCard = ({products}) => {
    const customSlug =products?.product_name?.toLowerCase().split(" ").join("-");
  return (
    // ISSUE A FIX: Removed <main> and fixed the width here
    <div className="w-full h-auto bg-gray-200 p-5 flex flex-col justify-center rounded-lg"> 
        
      <Link href={`/products/${customSlug}`} className="h-[200px] w-full rounded-lg relative group overflow-hidden before:absolute before:inset-0 before:bg-black/20 before:opacity-0 before:transition-opacity before:duration-500 before:rounded-lg hover:before:opacity-100">
        <img
          src={products?.image_source}
          alt="photo i made"
          className="w-full h-full object-cover rounded-lg transform transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="flex items-center justify-center bg-green-800 text-white p-2 gap-2 rounded-lg hover:bg-green-900 transition-all duration-300">
            Add to Cart <MoveRightIcon size={20} />
          </button>
        </div>
      </Link>

      <div className="mt-5 flex flex-col justify-center items-center">
        <h4 className="text-green-800 font-bold text-md md:text-lg">
          {products?.product_name}
        </h4>
        <p className="text-green-800">{products?.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;