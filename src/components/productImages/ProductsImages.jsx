'use client';
import React, { useState } from 'react';

const ProductsImages = ({pData}) => {
    const images = [
        pData?.image_source,
        pData?.image2_source,
        pData?.image3_source,
      ];
    
      const [mainImage, setMainImage] = useState(pData?.image4_source || images[0]);
      const [isFading, setIsFading] = useState(false);
    
      const handleHover = (img) => {
        setIsFading(true); // start fade
        setTimeout(() => {
          setMainImage(img);
          setIsFading(false); // end fade after image changes
        }, 200); // fade timing
      };
  return (
    <div className="flex gap-4 w-full p-5 bg-gray-400/20 rounded-lg shadow-2xs">
      {/* LEFT SMALL IMAGES */}
      <div className="w-full h-[500px] p-2 flex flex-col gap-4 flex-1 bg-green-400/30 rounded-lg">
        {images.map((src, i) => (
          <div
            key={i}
            onMouseEnter={() => handleHover(src)}
            className="w-full h-[150px] cursor-pointer"
          >
            <img
              src={src}
              alt={`thumbnail-${i}`}
              className="w-full h-full object-cover rounded-lg hover:opacity-80 transition"
            />
          </div>
        ))}
      </div>

      {/* MAIN IMAGE (Fades when switching) */}
      <div className="w-full h-[500px] flex-3 p-5 bg-green-400/30 rounded-lg overflow-hidden relative">
        <img
          src={mainImage}
          alt="main"
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
    </div>
  );
}

export default ProductsImages;
