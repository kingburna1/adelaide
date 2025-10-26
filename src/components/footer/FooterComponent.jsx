import { Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-[#0A3B22] text-white relative overflow-hidden">
      {/* MAIN FOOTER GRID */}
      <div className="py-16 px-6 md:px-20 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 max-w-[1300px] mx-auto">
          {/* LOGO & DESCRIPTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md flex items-center justify-center">
                <Image src="/adela1.jpg" alt="Agritec Logo" width={24} height={24} className="rounded-full" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">Adela</h2>
            </div>

            <p className="text-gray-300 text-[15px] leading-relaxed">
              Our commitment is to help farmers have the technologies they need to
              protect crops and empower the future of food production!
            </p>

            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-[#0F4D2B] hover:bg-[#F1B80E] hover:text-[#0A3B22] p-3 rounded-md transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">About</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-[#F1B80E] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Our Farmers</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Our Products</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Careers</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-[#F1B80E] transition">Seed Distribution</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Soil Management</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Irrigation Management</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Detailed Field Reports</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Crop Rotation Planning</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Soil Texture Mapping</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Resources</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-[#F1B80E] transition">News & Media</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">How It Works</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Help & FAQs</a></li>
              <li><a href="#" className="hover:text-[#F1B80E] transition">Awards</a></li>
            </ul>
          </div>

          {/* QUICK CONTACT */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Quick Contact</h3>
            <p className="text-gray-300 leading-relaxed">
              Feu rouge<br />
              Bessengue,Douala ,<br />
              Cameroon.
            </p>

            <p className="mt-4 text-[#F1B80E] font-medium">Adela@gmail.com</p>
            <p className="text-gray-300 mt-1">+237 681376076</p>
          </div>
        </div>
      </div>

      {/* NEWSLETTER / STAY UPDATED (moved ABOVE bottom border) */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-20">
        <div
          className="bg-[#114D2D] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          aria-label="Newsletter signup"
        >
          {/* optional decorative background image can be added via CSS if desired */}
          <div className="absolute inset-0 opacity-0 pointer-events-none"></div>

          {/* LEFT TEXT */}
          <div className="relative z-10 text-center md:text-left md:w-1/2">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-200 text-[15px] leading-relaxed">
              Our newsletter is a mix of tips and trends, sign up for alerts, deals,
              news and insights from us.
            </p>
          </div>

          {/* RIGHT INPUT */}
          <div className="relative z-10 md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full sm:flex-1 bg-[#1B5A33] text-gray-200 placeholder-gray-400 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F1B80E] transition-all duration-300"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#F1B80E] hover:bg-[#e0a909] text-[#0A3B22] font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
              >
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
            <p className="text-sm text-gray-300 mt-3">
              By subscribing, you accept the{" "}
              <a href="#" className="text-[#F1B80E] hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BORDER */}
      <div className="max-w-[1300px] mx-auto mt-8 border-t border-green-800 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Agritec. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
