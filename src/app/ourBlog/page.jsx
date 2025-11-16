import NaveBarComponent from "@/components/navbar/NaveBarComponent";
import React from "react";
import HeroBlog from "./HeroBlog";
import BlogCards1 from "@/components/blogcards/BlogCards1";
import blogData from "@/utils/blogData";
import { Search } from "lucide-react";
import RecentPost from "@/components/recentpostcard/RecentPost";
import postData from "@/utils/postData";
import SmNavBar from "@/components/smnavbsr/SmNavBar";

const page = () => {
  return (
    <main>
      <div>
      <div className="relative w-full h-auto md:h-screen">
        <HeroBlog/>

        {/*  Navbar positioned at the top */}
        <div className="absolute top-0  left-0 w-full z-50">
          <div className="hidden md:block"> <NaveBarComponent /></div>
          <div  className="block md:hidden" > <SmNavBar/> </div>
        
        </div>
      </div>

        <div className="mt-1  grid grid-cols-1 md:grid-cols-3  gap-5 px-5 md:px-10 md:mt-30 ">
          <div className="col-span-1 md:col-span-2   px-3  py-2 md:py-10 flex flex-col gap-10 ">
              {blogData?.map((item) =>(<BlogCards1 key={item.id} blog={item} />))}  
          </div>

          <div className=" h-auto md:col-span-1  p-10">
          <div className="w-full bg-yellow-400 rounded-lg flex flex-col p-8"> 
      
      {/* The text is already responsive with md:text-2xl */}
      <h3 className="text-lg md:text-2xl font-bold py-2 mb-2 md:mb-5">Search</h3>
      
      {/* Input container is already perfectly responsive */}
      <div className="flex bg-white p-3 rounded-lg focus:ring-2 focus:ring-green-600"> 
        {/* FIX B: Added w-full to the input to ensure it fills the available space */}
        <input 
          type="text" 
          placeholder="search more info" 
          className="outline-none w-full" 
        /> 
        {/* Search icon is correctly placed */}
        <span className="text-gray-400"><Search /></span> 
      </div>
    </div>



            <div className="w-full h-auto p-10 bg-gray-100 mt-10 rounded-lg">
              <h3 className="text-md md:text-xl text-green-900 font-bold pb-5">Recent Post</h3>

              <div>
             
             {postData?.map ((item) =>(<RecentPost key={item.id} post={item} />))}  
              </div>
            </div>



            
            <div className="w-full h-auto p-10 bg-gray-100 mt-10 rounded-lg">
              <h3 className="text-md md:text-xl text-green-900 font-bold pb-5">Categories</h3>

              <div>
                <ul className="flex flex-col gap-4 text-green-800 ">

                  <li className="bg-green-800 text-white p-3 rounded-lg flex justify-between items-center hover:bg-green-600 transition-all duration-300 text-sm">Seed supply distribution <span className="bg-white text-green-800 rounded-full p-1 w-5 h-5 text-center flex justify-center items-center">5</span></li>
                  <li className="bg-green-800 text-white p-3 rounded-lg flex justify-between items-center hover:bg-green-600 transition-all duration-300 text-sm">Soil health management <span className="bg-white text-green-800 rounded-full p-1 w-5 h-5 text-center flex justify-center items-center">4</span></li>
                  <li className="bg-green-800 text-white p-3 rounded-lg flex justify-between items-center hover:bg-green-600 transition-all duration-300 text-sm">Crop Irrigation Management <span className="bg-white text-green-800 rounded-full p-1 w-5 h-5 text-center flex justify-center items-center">3</span></li>
                  <li className="bg-green-800 text-white p-3 rounded-lg flex justify-between items-center hover:bg-green-600 transition-all duration-300 text-sm">Detailed field Reports <span className="bg-white text-green-800 rounded-full p-1 w-5 h-5 text-center flex justify-center items-center">2</span></li>
                  <li className="bg-green-800 text-white p-3 rounded-lg flex justify-between items-center hover:bg-green-600 transition-all duration-300 text-sm">Soil Textture Mapping <span className="bg-white text-green-800 rounded-full p-1 w-5 h-5 text-center flex justify-center items-center">1</span></li>
                 
                </ul>
               
              </div>
            </div>


            <div className="w-full h-auto p-10 bg-gray-100 mt-10 rounded-lg">
              <h3 className="text-md md:text-xl text-green-900 font-bold pb-5">Tags</h3>

              <div>
                <ul className="flex flex-wrap gap-4 text-green-800 ">

                  <li className=" bg-yellow-500 text-sm p-2 rounded-lg  hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out">Agriculture</li>
                  <li className="bg-yellow-500 text-sm p-2 rounded-lg  hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out">Climate</li>
                  <li className="bg-yellow-500 text-sm p-2 rounded-lg  hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out">Farm</li>
                  <li className="bg-yellow-500 text-sm p-2 rounded-lg  hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out">Field</li>
                  <li className=" bg-yellow-500 text-sm p-2 rounded-lg  hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out">Food</li>
                  <li className="bg-yellow-500 text-sm p-2 rounded-lg  hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out">Solar panels</li>
                  <li className="bg-yellow-500 text-sm p-2 rounded-lg  hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out">Strawberry</li>
                  <li className="bg-yellow-500 text-sm p-2 rounded-lg  hover:bg-green-800 hover:text-white transition-all duration-500 ease-in-out">Tax</li>
                 
                 
                </ul>
               
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
