import React from 'react';
import { Wheat } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const logos = [
    { id: 1, name: 'Foresight', src: '/image22.png' },
    { id: 2, name: 'BuildingBlocks', src: '/image23.png' },
    { id: 3, name: 'Biosynthesia', src: '/image24.png' },
    { id: 4, name: 'Clandestine', src: '/image25.png' },
    { id: 5, name: 'Command+R', src: '/image26.jpg' },
  ];


const More3Component = () => {
    return (
        <main className="w-full">
            {/* Header Section (Unchanged) */}
            <div className="flex flex-col justify-center items-center text-green-800 p-8">
                <p>We have experience in farming and agriculture!</p>
                <h4 className="text-xl md:text-5xl font-bold max-w-xl mx-auto text-center">
                    Explore our projects and latest success stories.
                </h4>
                <h5 className="flex"> <span><Wheat color="#008040" /></span> <span><Wheat color="#008040" /></span></h5>
            </div>
            
            {/* Blog Card Section */}
            <div className="grid grid-cols-3  mx-10 ">
                
                <div className="group w-80 h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white mx-auto my-8">
            
                    {/* Relative container for the image and the content overlay */}
                    <div className="relative h-full">
                        
                        {/* Image */}
                        <img
                            // Note: Using a local path, ensure it's correct for your project
                            src="/image21.jpg"
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
                                                Economy
                                            </span>
                                            <span className="bg-green-800 text-white hover:text-green-800 text-xs font-semibold px-3 py-1 rounded-md hover:bg-yellow-300  transition-all duration-300 ease-in-out ">
                                                Food
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-xl font-bold leading-snug text-gray-800 mb-4">
                                           Is indoor farming critical to the local food economy ?
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

        <div className="group w-80 h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white mx-auto my-8">
            
            {/* Relative container for the image and the content overlay */}
            <div className="relative h-full">
                
                {/* Image */}
                <img
                    // Note: Using a local path, ensure it's correct for your project
                    src="/image21.jpg"
                    alt="Farmer carrying a crate of corn"
                    className="w-full h-full object-cover"
                />

                {/* Content Overlay Card - The element that expands on hover */}
               
                <div className="
                    absolute bottom-10 left-0 right-0 p-4 pt-6 bg-white rounded-t-2xl 
                    h-[160px] 
                    transition-all duration-500 ease-in-out
                    group-hover:h-[280px] mx-2 
                ">
                    {/* NEW: Inner Flex Container for Text and Button */}
                    <div className="flex h-full -mx-4">
                    
                        {/* Text Content Area (flex-1) - Wrapped in px-4 to offset -mx-4 */}
                        <div className="flex-1 px-4 flex flex-col justify-between h-full overflow-hidden">
                            
                            <div> {/* Wrapper for Tags, Title, and new Paragraph */}
                                {/* Tags */}
                                <div className="flex space-x-2 mb-3">
                                    <span className="bg-green-800 text-white hover:text-green-800 text-xs font-semibold px-3 py-1 rounded-md hover:bg-yellow-300  transition-all duration-300 ease-in-out ">
                                        Climate
                                    </span>
                                    <span className="bg-green-800 text-white hover:text-green-800 text-xs font-semibold px-3 py-1 rounded-md hover:bg-yellow-300  transition-all duration-300 ease-in-out ">
                                        Farmers
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-bold leading-snug text-gray-800 mb-4">
                                    How to help farmers break their financial barriers?
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


        <div className="group w-80 h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white mx-auto my-8">
            
            {/* Relative container for the image and the content overlay */}
            <div className="relative h-full">
                
                {/* Image */}
                <img
                    // Note: Using a local path, ensure it's correct for your project
                    src="/image21.jpg"
                    alt="Farmer carrying a crate of corn"
                    className="w-full h-full object-cover"
                />

                {/* Content Overlay Card - The element that expands on hover */}
              
                <div className="
                    absolute bottom-10 left-0 right-0 p-4 pt-6 bg-white rounded-t-2xl 
                    h-[160px] 
                    transition-all duration-500 ease-in-out
                    group-hover:h-[280px] mx-2
                ">
                    {/* NEW: Inner Flex Container for Text and Button */}
                    <div className="flex h-full -mx-4">
                    
                        {/* Text Content Area (flex-1) - Wrapped in px-4 to offset -mx-4 */}
                        <div className="flex-1 px-4 flex flex-col justify-between h-full overflow-hidden">
                            
                            <div> {/* Wrapper for Tags, Title, and new Paragraph */}
                                {/* Tags */}
                                <div className="flex space-x-2 mb-3">
                                    <span className="bg-green-800 text-white hover:text-green-800 text-xs font-semibold px-3 py-1 rounded-md hover:bg-yellow-300  transition-all duration-300 ease-in-out ">
                                        Farming
                                    </span>
                                    <span className="bg-green-800 text-white hover:text-green-800 text-xs font-semibold px-3 py-1 rounded-md hover:bg-yellow-300  transition-all duration-300 ease-in-out ">
                                        Food
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-bold leading-snug text-gray-800 mb-4">
                                    Future of food production in smart new indoor farming.
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

            <div>
            <section className="py-2 md:py-4 bg-white border-t-1 border-b-1 boreder-gray-200 shadow-md">
                 <div className="container mx-auto px-4">
        
        {/* Title/Header Section */}
        <div className="text-center mb-1 md:mb-2">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            200+ Clients Trust Us
          </p>
          <h2 className="text-l md:text-xl font-bold text-gray-800">
            They Trust Our Agriculture Solution
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="w-full max-w-[150px] p-2"
            >
              <img
                // Use a placeholder source if you don't have the image file yet
                src={logo.src} 
                alt={logo.name + ' logo'}
                // Styling for grayscale, reduced opacity, and color-on-hover effect
                className="
                  w-full h-auto object-contain 
                  filter grayscale opacity-70 
                  transition-all duration-300 ease-in-out 
                  hover:filter-none hover:opacity-100 
                  hover:scale-105
                "
              />
            </div>
          ))}

        </div>
      </div>
    </section>
            </div>
        </main>
    )
}

export default More3Component