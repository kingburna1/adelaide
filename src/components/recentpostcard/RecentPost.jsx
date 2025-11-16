import React from "react";

const RecentPost = ({post}) => {
  const customSlug = post?.title?.toLowerCase().split(" ").join("-");
  return (
    <main>
      {/* Responsive Change 1: Removed `justify-center` to allow content to align to the start.
        Used `items-start` to ensure content aligns properly in the flex row.
      */}
      <div className="flex flex-col md:flex-row gap-4 border-b-2 border-gray-700/30 pb-5 items-start p-4">

        {/* Responsive Change 2: Replaced fixed `w-[300px]` with `w-full` (100%) on small screens 
          and `md:w-1/3` on medium screens. This ensures the image takes full width 
          on mobile and is constrained on desktop.
        */}
        <div className="h-[60px] w-full md:w-[300px] md:w-1/3 rounded-lg ">
          <img 
            src={post?.image_source} 
            alt="image i made" 
            className="w-full  h-full object-cover hover:scale-105 transition-all duration-300"
          /> 
        </div>

        <div> 
          <p className="text-green-700">{post?.date}</p>
          {/* Responsive Change 3: Removed `md:text-l` (not a valid Tailwind class). 
             Ensured the text size is set correctly. */}
          <h3 className="font-bold text-green-900 text-sm">
            How to optimize all your farm inputs for great efficiency during low commodity prices times!
          </h3>
        </div>

      </div>
    </main>
  );
};

export default RecentPost;