import React from "react";

const RecentPost = ({post}) => {
  const customSlug = post?.title?.toLowerCase().split(" ").join("-");
  return (
    <main>

      <div className="flex flex-col md:flex-row gap-4 border-b-2 border-gray-700/30  pb-5 justify-center p-4">

       <div className="h-[60px] w-[300px] rounded-lg "><img src={post?.image_source} alt="image i made" className="w-full h-full object-cover  hover:scale-105 transition-all duration-300"/> </div>

       <div > 
       <p className="text-green-700">{post?.date}</p>
       <h3 className="font-bold  md:text-l text-green-900 text-sm">How to optimize all your farm inputs for great efficiency during low commodity prices times!</h3>
      </div>
          
     </div>
     
    </main>
  );
};

export default RecentPost;
