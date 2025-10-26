import React from "react";
import HeroShop from "./HeroShop";
import NaveBarComponent from "@/components/navbar/NaveBarComponent";

const page = () => {
  return (
    <main>
      <div>
        <div className="relative w-full h-auto md:h-screen">
          <HeroShop />

          {/*  Navbar positioned at the top */}
          <div className="absolute top-0 left-0 w-full z-50">
            <NaveBarComponent />
          </div>
        </div>

        <div className="mt-1  grid grid-cols-1 md:grid-cols-3  gap-5 px-3 md:px-8 md:mt-30">
          <div className="col-span-1 md:col-span-2   px-3  py-2 md:py-10 flex flex-col gap-10 ">
            <div className="flex justify-between">

              <div><h2>Showing 1-9 of 12 Result</h2></div>

              <form className="max-w-md mx-auto space-y-6">
                
                <select className="p-4 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-green-400 outline-none w-full">
                  <option value="">Select an option</option>
                  <option value="drone">Drone Monitoring</option>
                  <option value="irrigation">Automated Irrigation</option>
                  <option value="soil">Soil Data Analysis</option>
                  <option value="integration">AI Integration</option>
                  <option value="weather">Weather Forecasting</option>
                  <option value="yield">Crop Yield Prediction</option>
                </select>
              </form>
            </div>
            
            <div> </div>
          </div>

          <div className=" h-auto md:col-span-1  p-10">

          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
