import { Drone, EarthLock, Flower2, Grape } from 'lucide-react'
import React from 'react'

const More1Component = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 flex flex-col md:flex-row my-10 md:my-20 gap-10 text-green-950">
      {/* left side div */}
      <div className="flex flex-col md:flex-1 md:flex-row gap-6">
        {/* left1 side div */}
        <div className="sticky top-0 self-start hidden md:block">
          <Flower2 size={30} color="#ffff00" />
        </div>

        {/* left2 side div */}
        <div className="overflow-y-auto max-h-[80vh] md:max-h-[700px] scrollbar-hide">
          <h3 className="font-bold pb-5 text-base sm:text-lg md:text-xl">
            We help ensure farmers and consumers have the technologies they need to protect the crops, communities, and ecosystems from the threat of pests, weeds diseases in an environmentally sound, safe, and sustainable way.
          </h3>

          <h3 className="pb-5 text-base sm:text-lg md:text-xl border-b">
            With over 65 years of experience, we utilize deep industry knowledge, market insights & innovation expertise to create solutions for tomorrow.
          </h3>

          {/* Section 1 */}
          <div className="group flex flex-col sm:flex-row gap-4 py-4 items-start sm:items-center border-b">
            <div className="p-3 bg-green-100 shadow-xl group-hover:animate-bounce transition-transform duration-500 ease-in-out">
              <EarthLock size={36} color="#008000" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl py-2 sm:py-3">
                Always support farmers
              </h3>
              <p className="text-sm sm:text-base md:text-lg">
                Farmers could strengthen soil health while increasing crop yields and profitability.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="group flex flex-col sm:flex-row gap-4 py-4 items-start sm:items-center border-b">
            <div className="p-3 bg-green-100 shadow-xl group-hover:animate-bounce transition-transform duration-500 ease-in-out">
              <Drone size={36} color="#008000" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl py-2 sm:py-3">
                Power of regeneration
              </h3>
              <p className="text-sm sm:text-base md:text-lg">
                Shifting agriculture from being a carbon emitter to a powerful carbon sink.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="group flex flex-col sm:flex-row gap-4 py-4 items-start sm:items-center border-b">
            <div className="p-3 bg-green-100 shadow-xl group-hover:animate-bounce transition-transform duration-500 ease-in-out">
              <Grape size={36} color="#008000" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg md:text-xl py-2 sm:py-3">
                Growing excellence
              </h3>
              <p className="text-sm sm:text-base md:text-lg">
                Providing premium vegetable and soft fruit starter plants with our excellent seeds.
              </p>
            </div>
          </div>

          {/* Bottom text + buttons */}
          <div className="pt-5">
            <p className="py-3 text-base sm:text-lg md:text-xl">
              Sitting at the heart of the global supply chain, we join farmers, ranchers, foodservice customers and retailers in sourcing, making and delivering products that are vital for living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4">
              <button className="p-4 sm:p-5 font-bold hover:text-white bg-green-500 hover:bg-yellow-400 transition-all duration-300 ease-in-out rounded-lg">
                more about us
              </button>
              <button className="border font-bold hover:text-white border-green-700 bg-white hover:bg-green-900 transition-all duration-300 ease-in-out rounded-lg p-4 sm:p-5">
                contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* right side div */}
      <div className="flex flex-1 flex-col relative">
        {/* main image */}
        <div className="w-full h-[250px] sm:h-[400px] md:h-[700px]">
          <img
            src="/image12.jpg"
            alt="more image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* small top image */}
        <div className="absolute -top-6 sm:-top-8 md:-top-10 right-4 sm:right-8 md:right-10 w-[70px] sm:w-[90px] md:w-[100px] h-[70px] sm:h-[90px] md:h-[100px] rounded-full shadow-lg">
          <img
            src="/adela1.jpg"
            alt="more image small"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* floating cards */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-1 absolute bottom-4 sm:bottom-6 md:bottom-3 right-2 sm:right-4 md:right-0 hidden sm:flex ">
          <div className="group flex flex-col items-center bg-white border rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition">
            <img
              src="/image13.png"
              alt="all in one"
              className="w-[60px] sm:w-[70px] md:w-[70px] h-[70px] sm:h-[80px] md:h-[90px] group-hover:animate-bounce transition-transform duration-500 ease-in-out"
            />
            <h3 className="text-center text-base sm:text-lg md:text-2xl font-bold mt-2">
              Vegetables & Fruits
            </h3>
          </div>

          <div className="group flex flex-col items-center bg-white border rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition">
            <img
              src="/image14.png"
              alt="all in one"
              className="w-[60px] sm:w-[70px] md:w-[70px] h-[70px] sm:h-[80px] md:h-[90px] group-hover:animate-bounce transition-transform duration-500 ease-in-out"
            />
            <h3 className="text-center text-base sm:text-lg md:text-2xl font-bold mt-2">
              Agriculture & Foods
            </h3>
          </div>

          {/* the blurred accent div (kept and made responsive) */}
          <div className="hidden sm:flex flex-1 backdrop-blur rounded-l bg-cyan-500/20 hover:bg-yellow-500/20 transition-all duration-300 ease-in-out min-w-[50px] sm:min-w-[80px] md:min-w-[100px]" />
        </div>
      </div>
    </div>
  )
}

export default More1Component
