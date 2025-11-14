'use client';

import { useState } from 'react';
import { Menu, Bell, ShoppingCart, Grid, Globe } from 'lucide-react';
import Image from 'next/image';

export default function HeaderComponent() {
  const [search, setSearch] = useState('');

  return (
    <header className="w-full bg-[#049510] text-white flex items-center justify-between px-4 md:px-8 py-3 shadow-lg">
      {/* Left: Hamburger Menu */}
      {/* <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-800 rounded-lg">
          <Menu size={24} />
        </button>
      </div> */}

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full bg-gray-200 text-gray-200 placeholder-gray-400 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
          </svg>
        </div>
      </div>

      {/* Right: Icons + Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-800 rounded-lg hidden md:block">
          <Globe size={20} />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-lg hidden md:block">
          <Grid size={20} />
        </button>

        {/* Notification Icon with Badge */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <Bell size={20} />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1.5 text-white">
            5
          </span>
        </div>

        {/* Cart Icon with Badge */}
        {/* <div className="relative">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <ShoppingCart size={20} />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1.5 text-white">
            8
          </span>
        </div> */}

        {/* Profile Avatar */}
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-cyan-500 cursor-pointer hover:ring-2 hover:ring-cyan-400 transition">
          <Image
            src="/profile.jpg" // replace with your profile image path
            alt="Profile"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}
