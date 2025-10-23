import React from 'react'

const More4Component = () => {
  return (
    <main className="w-full px-20 py-5">
             
             <div className=' grid grid-cols-1 md:grid-cols-[1fr_2fr] w-full h-[350px] border-1 border-gray-200 rounded-md shadow-md '>
             
               <div className=' px-20 py-5'>
                     <div className="bg-yellow-400 h-full w-full rounded-md flex flex-col items-center p-8 text-green-800 ">
                        <h3 className="font-bold text-md md:text-4xl pb-4">4.6</h3>
                        <div className="flex relative items-center justify-center"> 
                            <img src="/image5.jpg" alt="y" className="h-[30px] w-[30px] rounded-full "/>
                            <img src="/image6.jpg" alt="y" className="h-[30px] w-[30px] rounded-full"/>
                            <img src="/image7.jpg" alt="y" className="h-[30px] w-[30px] rounded-full  "/>
                            <img src="/image8.jpg" alt="y" className="h-[30px] w-[30px] rounded-full  "/>
                            <button  className="h-[30px] w-[30px] rounded-full  bg-green-800 text-white"> +</button>
                        </div>
                        <h3 className="text-center pb-4">Satisfaction rate based on 750+ reviews</h3>
                        <div className="flex gap-4">
                            <button className="border-1 p-3 text-center">11</button>
                            <button className="border-1 p-3 text-center">11</button>
                        </div>
                     </div>
                 </div>  
               <div   className=' p-10'>
                       
                     <div className='flex '> 
                        <div className="flex-1 border-r-1 border-gray-200 p-2">
                            <h3 className="text-lg md:text-xl font-sans">The cluster size is larger than I've ever seen before in this block, and the crop load is more than I've ever had per vine. The five gallon bucket came from feet of cordon basically one vine.</h3>
                               <div className="flex ">
                               <div className="w-[100px] h-[100px] rounded-md overflow-hidden">
                                  <img src="/image9.jpg" alt="" className="object-cover w-full h-full"/>
                               </div>

                               <div className="w-[70px] h-[100px] rounded-md bg-green-800 flex items-center justify-center text-white">
                                   hh
                               </div>

                               </div>
                        </div>

                        <div className="flex-1 p-2">
                            <h3>The cluster size is larger than I've ever seen before in this block, and the crop load is more than I've ever had per vine. The five gallon bucket came from feet of cordon basically one vine.</h3>
                        </div>

                        

                        


                     </div>
                
                </div>       


               

             </div>
   </main>
  )
}

export default More4Component