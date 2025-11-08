'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, ArrowRight } from 'lucide-react';

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
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-green-800 px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8">
        <p className="text-sm sm:text-base md:text-lg text-center">
          We have experience in farming and agriculture!
        </p>
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto text-center leading-snug md:leading-tight mt-3">
          Explore our projects and latest success stories.
        </h4>
        <h5 className="flex mt-4">
          <Wheat color="#008040" className="mx-1 w-5 h-5 sm:w-6 sm:h-6" />
          <Wheat color="#008040" className="mx-1 w-5 h-5 sm:w-6 sm:h-6" />
        </h5>
      </div>

      {/* Blog Card Section */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 sm:gap-8 md:gap-10 
          px-4 sm:px-6 md:px-10 
          justify-items-center
        "
      >
        {[
          {
            img: '/image28.jpg',
            tags: ['Economy', 'Food'],
            title: 'Is indoor farming critical to the local food economy?',
            direction: 'left',
          },
          {
            img: '/image29.jpg',
            tags: ['Climate', 'Farmers'],
            title: 'How to help farmers break their financial barriers?',
            direction: 'up',
          },
          {
            img: '/image30.jpg',
            tags: ['Farming', 'Food'],
            title: 'Future of food production in smart new indoor farming.',
            direction: 'right',
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={
              card.direction === 'left'
                ? { opacity: 0, x: -100 }
                : card.direction === 'right'
                ? { opacity: 0, x: 100 }
                : { opacity: 0, y: 80 }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
              delay: index * 0.2,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="
              group w-full sm:w-[320px] md:w-[360px] lg:w-[380px] 
              h-[380px] sm:h-[400px] 
              rounded-2xl overflow-hidden shadow-xl bg-white mx-auto my-6
              transition-all duration-500 ease-in-out
            "
          >
            <div className="relative h-full">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />

              <div
                className="
                  absolute bottom-8 left-0 right-0 p-4 pt-6 bg-white rounded-t-2xl 
                  h-[150px] sm:h-[160px]
                  transition-all duration-500 ease-in-out
                  group-hover:h-[270px] sm:group-hover:h-[280px] mx-2
                "
              >
                <div className="flex h-full -mx-4">
                  {/* Text */}
                  <div className="flex-1 px-4 flex flex-col justify-between h-full overflow-hidden">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="
                              bg-green-800 text-white hover:text-green-800 
                              text-xs sm:text-sm font-semibold 
                              px-3 py-1 rounded-md hover:bg-yellow-300 
                              transition-all duration-300 ease-in-out
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold leading-snug text-gray-800 mb-3 sm:mb-4">
                        {card.title}
                      </h2>

                      <p
                        className="
                          text-gray-600 text-sm sm:text-base leading-relaxed 
                          opacity-0 max-h-0 overflow-hidden 
                          transition-all duration-500 ease-in-out transform 
                          group-hover:opacity-100 group-hover:max-h-24 group-hover:mt-4
                        "
                      >
                        Over the last few years, we have witnessed a steady rise
                        in demand for locally sourced food, restaurants are growing
                        their own food even.
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      w-10 sm:w-12 h-full bg-green-800 
                      flex items-center justify-center cursor-pointer 
                      transition-all duration-300 ease-in-out 
                      group-hover:w-16 sm:group-hover:w-20 group-hover:bg-yellow-300 
                      text-gray-900 rounded-lg mr-2 sm:mr-4
                    "
                  >
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Logo Section */}
      <section className="py-6 md:py-8 bg-white border-t border-gray-200 shadow-md mt-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center mb-4 md:mb-6">
            <p className="text-green-600 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
              200+ Clients Trust Us
            </p>
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
              They Trust Our Agriculture Solution
            </h2>
          </div>

          <div
            className="
              grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
              gap-6 sm:gap-8 md:gap-10 items-center justify-items-center
            "
          >
            {logos.map((logo) => (
              <div key={logo.id} className="w-full max-w-[120px] sm:max-w-[150px] p-2">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="
                    w-full h-auto object-contain 
                    filter grayscale opacity-70 
                    transition-all duration-300 ease-in-out 
                    hover:filter-none hover:opacity-100 hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default More3Component;
