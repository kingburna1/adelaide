import NaveBarComponent from "@/components/navbar/NaveBarComponent";
import React from "react";
import HeroServices from "./HeroServices";
import { Flower2, Wheat } from "lucide-react";
import ServicesCard from "./ServicesCard";
import services from "./../../utils/servicesData";
import ContactSection from "@/components/thecontact/ContactSection";
import faqData from "@/utils/faqData";
import AccordionItem from "@/components/accord/AccordionItem";


const page = () => {
  return (
    <main className="relative w-full overflow-hidden">
      <div>
        <div className="relative w-full h-auto md:h-screen">
          <HeroServices />

          {/*  Navbar positioned at the top */}
          <div className="absolute top-0 left-0 w-full z-50">
            <NaveBarComponent />
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center text-green-800 p-8 md:mt-30">
            <p>Let's start your farming journey together!</p>
            <h4 className="text-xl md:text-5xl font-bold max-w-xl mx-auto text-center">
              Innovative solutions for agriculture optimal crops growth & soil
              health.
            </h4>
            <h5 className="flex">
              {" "}
              <span>
                <Wheat color="#008040" />
              </span>{" "}
              <span>
                <Wheat color="#008040" />
              </span>
            </h5>
          </div>

          {/* ServicesCard component can be placed here */}
          <section className="py-12 md:py-20 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {services.map((item) => (
                <ServicesCard key={item.id} data={item} />
              ))}
            </div>
          </section>
        </div>
        <div className="flex justify-center items-center py-5">
          <h4 className="text-l  font-bold max-w-xl mx-auto text-center text-green-800">
            Providing the highest quality of service to our customers with our
            business solutions over the years, and our approach allow us to meld
            latest technology with our knowledge.{" "}
            <span className="text-green-400 hover:underline transition-all duration-300 ease-in-out">
              Contact Us Now!
            </span>
          </h4>
        </div>
           
          
        <section className="flex flex-col md:flex-row h-screen w-full px-10 py-5 md:px-20 md:py-10 gap-4 md:gap-10">
          <div className="relative flex-1 bg-green-400 rounded-[30px] h-full overflow-hidden">
            <img
              src="/image50.webp"
              alt="img of the gods"
              className="w-full h-full object-cover hover:scale-105 transition transform duration-300"
            />
            <div className="absolute bottom-8 left-8 z-20"> 
                  <h3 className="text-5xl font-bold">Growing excellence</h3>
            </div>
          </div>

          <div className="flex-1 bg-white  rounded-[30px] flex flex-col  items-center  text-green-900">
               
               <p className=" flex"> <Flower2 />  We conduct our business with integrity.</p>
               <h3  className="py-5 text-xl md:text-3xl font-bold">Feeding the world with consistency, responsible, and sustainable way!</h3>
               <p  className=" py-5 font-semibold">We put people's physical safety above all else by helping colleagues and those we interact with reach their full potential by respecting everyone, being inclusive and valuing differences.</p>
               <p  className=" text-md md:text-xl py-5  ">Our approach goes beyond organic, it is always social because people are at the heart of everything we do from the fields of agriculture and forestry work together with partners from processing to trade.</p>
               <div className="flex  flex-col md:flex-row gap-10">
               <button className="p-4 bg-green-800 font-bold hover:bg-yellow-500 transition-all duration-500 ease-in-out text-white rounded-[10px] ">How its works </button>
               <button className="P-4 px-2 border-2 bg-white text-green-800 hover:bg-green-800 hover:text-white font-bold rounded-[10px] transition-all duration-500 ease-in-out ">Meet our team</button>
               </div>

               

          </div>
        </section>


        <section className="flex flex-col md:flex-row h-screen w-full px-10 py-5 md:px-20 md:py-10 gap-4 md:gap-10">

            <div  className="flex-1 bg-white  rounded-[10px] flex flex-col  items-center  text-green-900 overflow-y-scroll scroll-smooth scrollbar-hide">
                <p className="pb-3 text-lg md:text-xl ">Our expert team works closely with each client to offer tailored solutions that works perfectly with their unique needs in trust and innovation. Whether we're addressing urgent challenges or new opportunities, we will make sure to support our customers' success.</p>
                <p> We are committed to build long lasting partnerships with our clients which founded on trust and collaboration in our work. We help foster a sustainable growth for our clients to contribute the industry's advancement.</p>

                <div> 

                {faqData.map((faq) => (
            <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}

                </div>

            </div>
            <div  className="relative flex-1  rounded-[30px] h-full overflow-hidden">

            <img
              src="/image43.jpg"
              alt="img of the gods"
              className="w-full h-full object-cover hover:scale-105 transition transform duration-300"
            />
            <div className="absolute top-10 left-8 w-[200px] h-[180px] bg-yellow-500 z-20 rounded-[10px] flex flex-col justify-center text-green-900 "> 
                <h3 className="text-center f1ont-bold text-lg md:text-6xl ">75</h3>
                <p className="text-center">Years of farming with decades of work heritage!</p>
            </div>
            </div>
             </section>

             <section>
                <ContactSection/>
             </section>
            
      </div>
    </main>
  );
};

export default page;
