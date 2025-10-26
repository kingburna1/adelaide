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

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-auto md:h-screen">
        <HeroComponent />

        {/*  Navbar positioned at the top */}
        <div className="absolute top-0 left-0 w-full z-50">
          <NaveBarComponent />
        </div>
      </div>

      {/*CommitmentComponent overlaps hero slightly */}
      <div className="relative z-40 -mt-[30px]">
        <CommitmentComponent />
      </div>


      <More1Component/>

      <FirstCardComponent/>

      <div> <MoreComponent/></div>

      <div > <More3Component/>   </div>

         <div> <More4Component/>  </div>
         <div> <NewsComponent/>  </div>
         <div> <ContactSection/> </div>
{/* 
         <div> <FooterComponent/> </div> */}
    </div>
  );
}
