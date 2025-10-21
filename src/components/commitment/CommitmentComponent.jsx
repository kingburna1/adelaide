import { ArrowRightCircle } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import CommitmentFade from './CommitmentFade'

const CommitmentComponent = () => {
  return (
    <div className="relative w-full">
    

      {/*  Main container */}
      <div className="relative flex flex-col md:flex-row items-center h-[280px] w-full px-10 z-10">
        
        {/* Left (cyan gradient) section */}
        <div className="flex flex-[2]  backdrop-blur-md white/20 h-full rounded-md p-5 justify-between  relative overflow-visible shadow-lg">
          
          {/* Text content */}
          <div className="z-10 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold py-3 text-white">
              Feeding The World <br />With Consistency.
            </h3>
            <h3 className="text-lg py-4 leading-relaxed">
              We are committed to build long <br />lasting partnerships with our clients <br />founded on trust to foster growth.
            </h3>

            <button className="flex items-center gap-2 bg-amber-500 p-3 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              Contact us now <ArrowRightCircle />
            </button>
          </div>

          {/*  Image that pops out of the parent */}
          <div className="absolute -top-25 right-4 w-[55%] h-[130%] z-0">
            <Image
              src="/image11.png"
              alt="farmer with vegetables"
              fill
              className="object-contain scale-110"
            />
          </div>
        </div>

        {/* Right (amber gradient) section */}
        <div className="flex-1 backdrop-blur-md bg-cyan-400/20 h-full rounded-md shadow-lg relative overflow-hidden">
           
             <CommitmentFade />
        
        </div>
      </div>

      {/*  Caption */}
      <div className="mt-6 px-10 relative z-10">
        <h4 className="text-center  text-gray-700 font-bold text-xl md:text-7xl lg:text-5xbl px-10">
          Our commitment is to produce quality crops and empower the future of food production!
        </h4>
      </div>
    </div>
  )
}

export default CommitmentComponent
