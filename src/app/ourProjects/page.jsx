import NaveBarComponent from '@/components/navbar/NaveBarComponent'
import React from 'react'
import HeroProject from './HeroProject'
import ProjectsCards from '@/components/pcards/ProjectsCards'
import newsData from '@/utils/newsData'

const page = () => {
  return (
    <main>
        <div>
        <div className="relative w-full h-auto md:h-screen">
          <HeroProject />

          {/*  Navbar positioned at the top */}
          <div className="absolute top-0 left-0 w-full z-50">
            <NaveBarComponent />
          </div>
        </div>
        
           <div className="flex justify-center py-10 mt-30"> 
            <ul className="flex gap-10 justify-center items-center text-green-900">
                <li className="hover:bg-green-300/20 p-2 rounded-md transition-all duration-500 ease-in-out">All</li>
                <li className="hover:bg-green-300/20 p-2 rounded-md transition-all duration-500 ease-in-out">Agriculture</li>
                <li className="hover:bg-green-300/20 p-2 rounded-md transition-all duration-500 ease-in-out">Climate</li>
                <li className="hover:bg-green-300/20 p-2 rounded-md transition-all duration-500 ease-in-out">Crops</li>
                <li className="hover:bg-green-300/20 p-2 rounded-md transition-all duration-500 ease-in-out">Economy</li>
                <li className="hover:bg-green-300/20 p-2 rounded-md transition-all duration-500 ease-in-out">Farming</li>
                <li className="hover:bg-green-300/20 p-2 rounded-md transition-all duration-500 ease-in-out">Food</li>
                <li className="hover:bg-green-300/20 p-2 rounded-md transition-all duration-500 ease-in-out">GreenHouse</li>
            </ul>
           </div>

        <div className=" mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 "> 

           {newsData?.map((item) =>( <ProjectsCards key={item.id} project={item} />))} 
           
           
           </div>


        </div>
    </main>
  )
}

export default page