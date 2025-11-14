import React from "react";
import {
  Pencil,
  Copy,
  Camera,
  ChevronRight,
  UserRound,
  Cog,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import NaveBarComponent from "@/components/navbar/NaveBarComponent";
const user = {
  name: "Agbor Bonventure",
  email: "agb***@gmail.com",
  memberId: "us39189397470jksr",
  avatar: null, // replace with avatar URL if available
};

const page = () => {
  return (
    <main>
      <div>
        {/* <NaveBarComponent /> */}
      </div>
      <div className="px-20">
        <section className="flex items-center justify-between w-full px-8 py-6 bg-white">
          {/* LEFT SIDE: Avatar + Info */}
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-3xl uppercase">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="object-cover rounded-full"
                />
              ) : (
                <span>{user.name.charAt(0)}</span>
              )}

              {/* Camera Icon */}
              <button
                className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow-md hover:scale-105 transition"
                title="Change profile picture"
              >
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* User Info */}
            <div className="flex flex-col space-y-1">
              <h2 className="text-xl font-bold text-green-900">{user.name}</h2>

              {/* Email */}
              <div className="flex items-center gap-2 text-green-700">
                <span className="font-medium">Email</span>
                <span className="text-green-800 text-xs">{user.email}</span>
                <Pencil className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>

              {/* Member ID */}
              <div className="flex items-center gap-2 text-green-700">
                <span className="font-medium">Member ID</span>
                <span className="text-green-800 text-xs">{user.memberId}</span>
                <Copy
                  className="w-4 h-4 text-gray-500 cursor-pointer hover:text-gray-700"
                  title="Copy ID"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-green-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-700 transition-all duration-400 ease-in-out">
              Edit my profile
            </button>
            <button
              className="relative text-green-800 font-semibold 
                        before:content-[''] before:absolute before:left-0 before:bottom-0 
                        before:w-0 before:h-0.5 before:bg-green-500 
                        before:opacity-0 before:transition-all before:duration-300 before:ease-in-out
                        hover:before:w-full hover:before:opacity-100"
            >
              Sign out
            </button>
          </div>
        </section>

        <section>
          <main className="w-full min-h-screen px-8 py-10 flex flex-col gap-8">
            {/* GRID CONTAINER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ACCOUNT INFORMATION */}
              <section className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <UserRound className="w-5 h-5 text-gray-700" />
                  <h2 className="text-lg font-bold text-green-900">
                    Account information
                  </h2>
                </div>

                <hr className="border-gray-200 mb-4" />

                {/* Links */}
                <ul className="flex flex-col gap-3 ">
                  <ListItem title="My profile"  />
                  <ListItem title="Member profile" />
                  <ListItem
                    title="Connected accounts"
                    rightIcon={
                      <div className="flex items-center gap-2">
                        <Image
                          src="/image77.png"
                          alt="Google"
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                      </div>
                    }
                  />
                  <ListItem title="Tax information" />
                </ul>
              </section>

              {/* ACCOUNT SETTINGS */}
              <section className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cog className="w-5 h-5 text-gray-700" />
                  <h2 className="text-lg font-bold text-green-800">
                    Account settings
                  </h2>
                </div>

                <hr className="border-gray-200 mb-4" />

                <ul className="flex flex-col gap-3">
                  <ListItem title="Change password" />
                  <ListItem title="Change email" subtitle={user.email} />
                  <ListItem title="Change phone number" />
                  <ListItem title="Delete account" />
                </ul>
              </section>
            </div>

            {/* PREFERENCES SECTION */}
            <section className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-6 w-full md:w-[48%]">
              <div className="flex items-center gap-3 mb-4">
                <SlidersHorizontal className="w-5 h-5 text-gray-700" />
                <h2 className="text-lg font-bold text-green-900">
                  Preferences
                </h2>
              </div>

              <hr className="border-gray-200 mb-4" />

              <ul className="flex flex-col gap-3">
                <ListItem title="Privacy settings" />
                <ListItem title="Email preferences" />
                <ListItem title="Ads preferences" />
              </ul>
            </section>
          </main>
        </section>
      </div>
    </main>
  );
};

export default page;

function ListItem({ title, subtitle, rightIcon }) {
  return (
    <li className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-lg px-2 py-2 transition">
      <div className="flex flex-col">
        <span className="text-gray-900 text-base font-medium">{title}</span>
        {subtitle && <span className="text-sm text-gray-500">{subtitle}</span>}
      </div>
      {rightIcon ? (
        rightIcon
      ) : (
        <ChevronRight className="w-4 h-4 text-gray-700" />
      )}
    </li>
  );
}
