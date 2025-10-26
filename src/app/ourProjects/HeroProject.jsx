import React from 'react'

const HeroProject = () => {
  return (
    <main className="relative left-0 right-0 w-screen h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <div className="h-full w-full">
        <img
          src="/image41.jpg"
          alt="all my life"
          className="w-screen h-full object-cover "
        />
      </div>
      <div className="absolute top-0 w-screen h-full bg-black/60">
        <div className="flex justify-center items-center h-full pl-10">
          <div className="flex flex-col gap-4 text-white max-w-xl">
            <h1 className="text-xl md:text-6xl font-bold text-center">Our Projects</h1>
            <p className="text-lg leading-relaxed text-center">
              Our success depends on our customers' success, so we are committed
              to building long lasting partnerships based on trust,
              collaboration, and fostering true sustainable growth.
            </p>

            <div className=" flex flex-col md:flex-row gap-4 justify-center">
                <button className="p-4 bg-green-800  rounded-md hover:bg-yellow-500 font-bold transition-all duration-500 ease-in-out">More About Us</button>
                <button className="border-2 border-white p-4 hover:text-black hover:bg-white hover:border-green-800 transition-all duration-500 ease-in-out  font-bold rounded-md">Meet Our Team</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroProject