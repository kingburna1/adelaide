import { ArrowRight } from 'lucide-react'
import React from 'react'

const ProjectsCards = ({project}) => {
    const customSlug = project?.title?.toLowerCase().split(" ").join("-");
  return (
    <div>
         <div className="group w-80 h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white mx-auto my-8">
                    
                            {/* Relative container for the image and the content overlay */}
                            <div className="relative h-full">
                                
                                {/* Image */}
                                <img
                                    // Note: Using a local path, ensure it's correct for your project
                                    src={project?.image_source}
                                    alt="Farmer carrying a crate of corn"
                                    className="w-full h-full object-cover"
                                />
        
                                {/* Content Overlay Card - The element that expands on hover */}
                              
                                <div className="
                                    absolute bottom-10 left-0 right-0 p-4 pt-6 bg-white rounded-t-2xl 
                                    h-[160px] 
                                    transition-all duration-500 ease-in-out
                                    group-hover:h-[280px]  mx-2 
                                ">
                                    {/* NEW: Inner Flex Container for Text and Button */}
                                    <div className="flex h-full -mx-4">
                                    
                                        {/* Text Content Area (flex-1) - Wrapped in px-4 to offset -mx-4 */}
                                        <div className="flex-1 px-4 flex flex-col justify-between h-full overflow-hidden">
                                            
                                            <div> {/* Wrapper for Tags, Title, and new Paragraph */}
                                                {/* Tags */}
                                                <div className="flex space-x-2 mb-3">
                                                    <span className="bg-green-800 text-white hover:text-green-800 text-xs font-semibold px-3 py-1 rounded-md hover:bg-yellow-300  transition-all duration-300 ease-in-out ">
                                                        {project?.category1}
                                                    </span>
                                                    <span className="bg-green-800 text-white hover:text-green-800 text-xs font-semibold px-3 py-1 rounded-md hover:bg-yellow-300  transition-all duration-300 ease-in-out ">
                                                       {project?.category2}
                                                    </span>
                                                </div>
        
                                                {/* Title */}
                                                <h2 className="text-xl font-bold leading-snug text-gray-800 mb-4">
                                                   {project?.title}
                                                </h2>
                                            
                                                {/* Hidden Paragraph - This is the element that appears on hover */}
                                                <p className="
                                                    text-gray-600 text-base leading-relaxed 
                                                    opacity-0 max-h-0 overflow-hidden 
                                                    transition-all duration-500 ease-in-out transform 
                                                    group-hover:opacity-100 group-hover:max-h-24 group-hover:mt-4
                                                ">
                                                    Over the last few years, we have witnessed a steady rise
                                                    in demand for locally sourced food, restaurants are growing
                                                    their own food even.
                                                </p>
                                            </div>
                                        </div>
        
                                        {/* Right Arrow Button Area - NOW A FLEX ITEM - CORRECTED */}
                                        {/* It uses h-full to match the overlay's height and expands its width on hover. */}
                                        <div className="
                                            w-12 h-full bg-green-800 
                                            flex items-center justify-center cursor-pointer 
                                            transition-all duration-300 ease-in-out 
                                            group-hover:w-20 group-hover:bg-yellow-300 
                                            text-gray-900 rounded-lg mr-4
                                        ">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default ProjectsCards