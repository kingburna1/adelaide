import NaveBarComponent from "@/components/navbar/NaveBarComponent";
import React from "react";
import HeroProducts from "./HeroProducts";
import ProductAddComponent from "@/components/productadd/ProductAddComponent";
import Image from "next/image";
import { ShieldCheck, Repeat, ChevronRight, MoveRightIcon } from "lucide-react";
import productsData from "@/utils/productsData";
import ProductCard from "@/components/products/ProductCard";
import ProductsImages from "@/components/productImages/ProductsImages";

export default async function Page({ params }) {
     const { slug } = await params;
     const decodedSlug = decodeURIComponent(slug);

     console.log("Decoded slug:", decodedSlug);
     console.log(
       "Available slugs:",
       productsData.map((item) =>
         item.product_name.toLowerCase().split(' ').join('-')
       )
     );
     
     const pData = productsData.find(
       (item) =>
         item?.product_name &&
         item.product_name.toLowerCase().split(' ').join('-') === decodedSlug
     );
     
     if (!pData) {
       return <div>Product not found</div>;
     }
     
     console.log(pData);
     
     


  const paymentLogos = [
    "/image67.jpg",
    "/image68.png",
    "/image69.png",
    "/image70.png",
    "/image71.png",
    "/image72.webp",
  ];
  return (
    <main>
      <div>
        <div>
          {" "}
          <NaveBarComponent />
        </div>
        <div>
          {" "}
          <HeroProducts  pData={pData}/>
        </div>

        <section className="grid  grid-cols-1 md:grid  md:grid-cols-3 md:gap-8 md:h-auto w-full px-20">
          {/* main left div */}
          <div className="w-full h-full  md:col-span-2">
            {/* first left div */}


            <div> <ProductsImages pData={pData} /></div>
            {/* <div className="flex gap-4 w-full p-5 bg-gray-400/20 rounded-lg shadow-2xs">
              <div className="w-full h-[500px] p-2 flex flex-col gap-4 flex-1  bg-green-400/30 rounded-lg">
                <div className="w-full h-[150px] ">
                  <img
                    src={pData?.image_source}
                    alt="photo i made"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full h-[150px] ">
                  <img
                    src={pData?.image2_source}
                    alt="photo i made"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-full h-[150px] ">
                  <img
                    src={pData?.image3_source}
                    alt="photo i made"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full h-[500px] flex-3 p-5 bg-green-400/30 rounded-lg ">
                <img
                  src={pData?.image4_source}
                  alt="photo i made"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div> */}

            <div className="md:mt-5">
              <div className="flex justify-between w-full  pb-5"> 
              <h3 className="text-green-900 font-bold text-md md:text-xl ">
                Product Description
              </h3>
                 
              <button className="flex items-center justify-center bg-green-800 text-white p-2 gap-2 rounded-lg hover:bg-green-900 transition-all duration-300">
              Add to Cart <MoveRightIcon size={20} />
                 </button>
              </div>
              {/* <h3 className="text-green-900 font-bold text-md md:text-xl pb-5 ">
                Product Description
              </h3> */}

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ipsum ab amet temporibus maiores eaque possimus totam,
                architecto magnam. Ipsa asperiores a velit recusandae earum,
                molestiae et nihil reiciendis sint? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Omnis ipsum ab amet temporibus
                maiores eaque possimus totam, architecto magnam. Ipsa asperiores
                a velit recusandae earum, molestiae et nihil reiciendis sint?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ipsum ab amet temporibus maiores eaque possimus totam,
                architecto magnam. Ipsa asperiores a velit recusandae earum,
                molestiae et nihil reiciendis sint? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Omnis ipsum ab amet temporibus
                maiores eaque possimus totam, architecto magnam. Ipsa asperiores
                a velit recusandae earum, molestiae et nihil reiciendis sint?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                ipsum ab amet temporibus maiores eaque possimus totam,
                architecto magnam. Ipsa asperiores a velit recusandae earum,
                molestiae et nihil reiciendis sint?
              </p>
            </div>
          </div>

          <div className="md:col-span-1 ">
            <ProductAddComponent />
            <div>
              <aside className="w-full max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                {/* Buttons row */}
                <div className="px-6 pt-6 pb-4">
                  <div className="flex gap-4">
                    {/* Primary - orange pill */}
                    <button
                      className="flex-1 py-2 px-4 rounded-full bg-[#d24608] text-white font-semibold text-base shadow-sm hover:brightness-95 transition"
                      aria-label="Send inquiry"
                    >
                      Send inquiry
                    </button>

                    {/* Secondary - outlined pill */}
                    <button
                      className="flex-1 py-3 px-6 rounded-full bg-white text-gray-800 font-semibold text-base border border-gray-300 hover:bg-gray-50 transition"
                      aria-label="Chat now"
                    >
                      Chat now
                    </button>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Protections heading row */}
                <div className="px-6 py-4 flex items-center justify-between cursor-pointer">
                  <h3 className="text-gray-900 font-semibold text-lg">
                    Protections for this product
                  </h3>
                  <ChevronRight size={20} className="text-gray-500" />
                </div>

                <div className="px-6 pb-6 space-y-6">
                  {/* Secure payments item */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center">
                      <ShieldCheck size={20} className="text-gray-700" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {/* small row of payment logos */}
                        <div className="flex items-center gap-2">
                          {paymentLogos.map((src, idx) => (
                            <div
                              key={idx}
                              className="w-6 h-6 bg-white rounded-sm overflow-hidden flex items-center justify-center"
                              aria-hidden
                            >
                              {/* use Image for optimization; maintain small pixel-perfect icons */}
                              <Image
                                src={src}
                                alt={`payment-${idx}`}
                                width={24}
                                height={24}
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <h4 className="text-gray-800 font-semibold mb-1">
                        Secure payments
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every payment you make on Alibaba.com is secured with
                        strict SSL encryption and PCI DSS data protection
                        protocols
                      </p>
                    </div>
                  </div>

                  {/* Standard refund policy item */}
                  <div className="flex gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center">
                      <Repeat size={20} className="text-gray-700" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-gray-800 font-semibold mb-1">
                        Standard refund policy
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Claim a refund if your order doesn't ship, is missing,
                        or arrives with product issues
                      </p>
                    </div>
                  </div>

                  {/* thin divider */}
                  <div className="border-t border-gray-200" />

                  {/* bottom small grey text with trade assurance badge */}
                  <div className="flex items-center gap-3 pt-4">
                    <p className="text-xs text-gray-500 leading-snug">
                      Adela.com protects all your orders placed and paid on
                      the platform with
                    </p>
                    <div className="ml-auto flex items-center gap-2">
                      <Image
                        src="/trade-assurance.png"
                        alt="Trade Assurance"
                        width={92}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

              <div className="px-20  mt-10 ">
                  <h3 className="text-green-900 font-bold text-md md:text-xl">  Related Product</h3>

                  <div className="flex flex-wrap mt-5 md:mt-10 gap-4 md:gap-20 w-full p-5">
              {productsData?.slice(0, 3).map ((items) =>(<ProductCard key={items.id} products={items} />))} 
           </div>
              </div>
      </div>
    </main>
  );
};


