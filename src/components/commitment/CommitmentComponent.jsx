import { ArrowRightCircle } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import CommitmentFade from './CommitmentFade'

const CommitmentComponent = () => {
  return (
    <div className="relative w-full ">
      {/* Main container */}
      <div className="relative flex flex-col md:flex-row items-center w-full px-4 md:px-10 z-10 gap-6 md:gap-4">
        {/* Left section (text + image on md+) */}
        <div className="relative w-full h-fit md:w-2/3 flex items-center backdrop-blur-md white/70 p-5 rounded-2xl shadow-md ">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center">
            {/* Text block */} 
            <div className="w-full md:w-1/2 z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Feeding The World <br className="block" />With Consistency.
              </h3>

              <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">
                We are committed to build long lasting partnerships with our clients
                founded on trust to foster growth.
              </p>

              <button
                className="mt-4 inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-md font-semibold transition-transform duration-200 hover:scale-[1.03] hover:bg-amber-300"
                type="button"
              >
                Contact us now <ArrowRightCircle />
              </button>
            </div>

            {/* Image: hidden on small, visible and positioned on md+ */}
            <div className="hidden md:block md:w-1/2 relative">
              <div className="relative w-full h-[260px] md:h-[320px] lg:h-[380px]">
                <Image
                  src="/image32.png"
                  alt="farmer with vegetables"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right section (CommitmentFade) */}
        <div className="w-full md:w-1/3">
          <div className="w-full h-[220px] sm:h-[260px] md:h-[320px]">
            <CommitmentFade />
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-6 px-4 md:px-10">
        <h4 className="text-xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto text-center text-green-800">
          Our commitment is to produce quality crops and empower the future of food production!
        </h4>
      </div>
    </div>
  )
}

export default CommitmentComponent
