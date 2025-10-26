 "use client"
import { Mail, Clock, ArrowRight } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <main className="px-4 md:px-20">
      <section
        className="contact-section bg-[#F2F8F4]/40 border-1 border-gray-200 py-10 px-6 md:px-16 rounded-3xl max-w-[1300px] mx-auto my-20 relative overflow-hidden"
      >
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-[#F2F8F4]/20 rounded-3xl z-0"></div>

        <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
          {/* LEFT SIDE */}
          <div className="flex-1">
            {/* Heading text */}
            <h2 className="text-3xl md:text-2xl font-extrabold text-green-900 leading-snug mb-8">
              If you have questions or you&apos;d like to find out more about services, please get in touch!
            </h2>

            {/* Contact Details */}
            <div className="mt-8 space-y-10">
              {/* Quick Contact */}
              <div className="flex gap-4 items-start ">
                <div className="bg-green-800 text-white p-4 rounded-full">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900">Quick Contact</h3>
                  <p className="text-green-800">ngakoboniventure@gmail.com</p>
                  <p className="text-green-800">+237 681376076</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4 items-start">
                <div className="bg-green-800 text-white p-4 rounded-full">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900">Working Hours</h3>
                  <p className="text-green-800">Mon - Fri: 8.00am - 18.00pm</p>
                  <p className="text-green-800">Sat: 9.00am - 17.00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="flex-1 w-full bg-transparent">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name & Email */}
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-xl border bg-white border-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-xl border bg-white border-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
              />

              {/* Company & Phone */}
              <input
                type="text"
                placeholder="Company Name"
                className="p-4 rounded-xl border bg-white border-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-4 rounded-xl border bg-white border-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
              />

              {/* Property Size & Solutions */}
              <select className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none bg-white">
                <option>Property size (hectares)</option>
                <option>1 - 10</option>
                <option>10 - 50</option>
                <option>50 - 100+</option>
              </select>
              <select className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none bg-white">
                <option>AI Integration solutions</option>
                <option>Drone Monitoring</option>
                <option>Automated Irrigation</option>
                <option>Soil Data Analysis</option>
              </select>

              {/* Message */}
              <textarea
                placeholder="Kindly provide enough information about your farm business..."
                rows="4"
                className="md:col-span-2 p-4 rounded-xl border bg-white border-gray-200 focus:ring-2 focus:ring-green-400 outline-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="md:col-span-2 flex items-center justify-center gap-2 bg-green-700 hover:bg-yellow-500 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-500"
              >
                Submit Request
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <style jsx>{`
          .contact-section {
            background-image: url('/image36.jpg'); 
            background-repeat: no-repeat;
            background-position:  center;
            background-size: auto 100%;
          }

          @media (max-width: 1024px) {
            .contact-section {
              background-position: center top;
              background-size: cover;
            }
          }
        `}</style>
      </section>
    </main>
  );
};

export default ContactSection;
