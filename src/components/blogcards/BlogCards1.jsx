import { ArrowRight } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const BlogCards1 = ({blog}) => {
  const customSlug = blog?.title?.toLowerCase().split(" ").join("-");
  return (
    <div>
         <div className="max-w-sm md:max-w-screen bg-white rounded-2xl  overflow-hidden h-auto  ">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={blog?.image_source}
              alt="Farmer on field"
              width={600}
              height={400}
              className="object-cover w-full h-64 md:h-100 transform transition-transform duration-500 ease-in-out hover:scale-105"
            />

            {/* Tags */}
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-3 py-1 rounded-md transition-all duration-500 ease-in-out  hover:bg-green-800 hover:text-white">
               {blog?.category1}
              </span>
              <span className="bg-yellow-400 text-green-900 text-sm font-semibold px-3 py-1 rounded-md transition-all duration-500 ease-in-out  hover:bg-green-800 hover:text-white ">
              {blog?.category2}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 h-auto bg-white shadow-2xl rounded-lg border border-green-200">
            <h2 className="text-xl font-extrabold text-green-900 leading-snug mb-3">
            {blog?.title}
            </h2>

            {/* Meta Info */}
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <span>September 4, 2025</span>
              <span className="w-5 h-[1px] bg-green-600 inline-block"></span>
              <span className="text-green-700 font-medium hover:text-green-800 cursor-pointer">
                Nikolas Gibbons
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
            {blog?.description}
            </p>

            <button className="bg-green-800 hover:bg-green-600 transition-all duration-500 ease-in-out p-2 font-bold text-white rounded-md  flex gap-2 my-2">Read more <span><ArrowRight /></span></button>
          </div>
        </div>
    </div>
  );
}

export default BlogCards1;
