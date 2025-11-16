import CommitmentComponent from "@/components/commitment/CommitmentComponent";
import FirstCardComponent from "@/components/firstcard/FirstCardComponent";
import HeroComponent from "@/components/hero/HeroComponent";
import More1Component from "@/components/more1/More1Component";
import NaveBarComponent from "@/components/navbar/NaveBarComponent";
import MoreComponent from './../components/more2/MoreComponent';
import More3Component from './../components/more3/More3Component';
import More4Component from "@/components/more4/More4Component";
import NewsComponent from "@/components/more5/NewsComponent";
import ContactSection from "@/components/thecontact/ContactSection";
import FooterComponent from "@/components/footer/FooterComponent";
import SmNavBar from "./../components/smnavbsr/SmNavBar"

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-auto md:h-screen">
        <HeroComponent />

        {/*  Navbar positioned at the top */}
        <div className="absolute top-0  left-0 w-full z-50">
          <div className="hidden md:block"> <NaveBarComponent /></div>
          <div  className="block md:hidden" > <SmNavBar/> </div>
        
        </div>
      </div>

      {/*CommitmentComponent overlaps hero slightly */}
      <div className="relative z-40  md:-mt-[10px]">
        <CommitmentComponent />
      </div>


      <More1Component/>

      <FirstCardComponent/>

      <div> <MoreComponent/></div>

      <div className="md:mt-27"> <More3Component/>   </div>

         <div className="hidden"> <More4Component/>  </div>
         <div> <NewsComponent/>  </div>
         <div> <ContactSection/> </div>
{/* 
         <div> <FooterComponent/> </div> */}
    </div>
  );
}
