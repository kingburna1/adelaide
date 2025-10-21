import { Drone, EarthLock, Flower2, Grape } from 'lucide-react'
import React from 'react'

const More1Component = () => {
  return (
    <div className="px-10 flex flex-col md:flex-row  my-20 gap-10 h-[700px] text-green-950"> 
          {/* left side div */}
        <div className='flex flex-1 flex-row gap-6'>
            {/* left1 side div */}
        <div className='sticky top-0 self-start'> <Flower2 size={30} color="#ffff00" /></div>

            {/* left2 side div */}
        <div className=" overflow-y-scroll scrollbar-hide"> 
             <h3 className='font-bold pb-5 text-md md:text-xl'>We help ensure farmers and consumers have the technologies they need to protect the crops, communities, and ecosystems from the threat of pests, weeds diseases in an environmentally sound, safe, and sustainable way.</h3>
             <h3 className='pb-5 text-md md:text-xl border-b-1'>With over 65 years of experience, we utilize deep industry knowledge, market insights & innovation expertise to create solutions for tomorrow.</h3>

              <div className='group  flex gap-5 py-3 items-center border-b-1'>
                      <div className=' p-3 bg-green-100 shadow-xl group-hover:animate-bounce transition-transform duration-500 ease-in-out'><EarthLock className="" size={36} color="#008000 " /></div>
                      <div>
                        <h3 className='font-bold text-md md:text-xl py-3'>Always support farmers</h3>
                        <p className='text-md md:text-lg'>Farmers could strengthen soil health while increasing crop yields and profitability.</p>
                      </div>
              </div>

              <div className='group flex gap-5 py-3 items-center border-b-1'>
                      <div className=' p-3 bg-green-100 shadow-xl  group-hover:animate-bounce transition-transform duration-500 ease-in-out'><Drone className="" size={36} color="#008000" /></div>
                      <div>
                        <h3 className='font-bold text-md md:text-xl py-3'>Power of regeneration</h3>
                        <p className='text-md md:text-lg'>Shifting agriculture from being a carbon emitter to a powerful carbon sink.</p>
                      </div>
              </div>


              <div className='group flex gap-5 py-3 items-center border-b-1'>
                      <div className=' p-3 bg-green-100 shadow-xl  group-hover:animate-bounce transition-transform duration-500 ease-in-out'><Grape size={36} color="#008000" /></div>
                      <div>
                        <h3 className='font-bold text-md md:text-xl py-3'>Growing excellence</h3>
                        <p className='text-md md:text-lg'>Providing premium vegetable and soft fruit starter plants with our excellent seeds.</p>
                      </div>
              </div>

                   <div>
                    <p className="py-5 text-md md:text-xl">Sitting at the heart of the global supply chain, we join farmers, ranchers, foodservice customers and retailers in sourcing, making and delivering products that are vital for living. </p>

                    <div className='flex gap-5'>
                          <button className="p-5 font-bold hover:text-white  bg-green-500 hover:bg-yellow-400 transition-all duration-300 ease-in-out rounded-lg">more about us</button>
                          <button className='border-1 font-bold hover:text-white border-green-700 bg-white hover:bg-green-900 transition-all duration-300 ease-in-out rounded-lg p-5'>contact us</button>
                     </div>

                   </div>
              

       </div>

        </div>

            {/* right side div */}
        <div className='flex flex-1 flex-col  relative'>
           <div className='h-[700px]' >
               <img src="/image12.jpg" alt="more image" className='w-full ,h-full object-cover rounded-lg shadow-lg'/>
           </div>
           <div className="absolute -top-10 right-10 w-[100px] h-[100px] rounded-full shadow-lg">  
               <img src="/adela1.jpg" alt="more image small" className='w-full h-full object-cover rounded-full'/>
           </div>
              
               <div className="flex absolute bottom-3 right-0 w-[350px] h-[190px]  shadow-l">
              <div className='group flex-2 rounded-lg bg-white border-1 flex items-center flex-col'>
                        <img src="/image13.png" alt="all in one" className="w-[100px] h-[100px] text-cyan-500 group-hover:animate-bounce transition-transform duration-500 ease-in-out"/>
                        <h3 className="text-center text-xl md:text-2xl font-bold">Vegetables & Fruits</h3>

              </div>
              <div className='group flex-2 rounded-lg  bg-white border-1 flex items-center flex-col'>
                       <img src="/image14.png" alt="all in one" className="w-[100px] h-[100px] text-cyan-500 group-hover:animate-bounce transition-transform duration-500 ease-in-out"/>
                       <h3 className="text-center text-xl md:text-2xl font-bold">Agriculture & Foods</h3>
              </div>

              <div className='flex-1 backdrop-blur rounded-l bg-cyan-500/20 hover:bg-yellow-500/20'></div>

              </div>

              

        </div>

    </div>
  )
}

export default More1Component