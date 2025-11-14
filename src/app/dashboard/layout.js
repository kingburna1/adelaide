"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Sidebar for md+ screens (always visible) */}
      <aside className="hidden md:block w-72 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-lg md:text-2xl font-bold text-green-800">
            Adela Admin
          </h1>
        </div>
        <Sidebar />
      </aside>

      {/* Sidebar for mobile (slide-in) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-lg font-bold text-green-800">Adela Admin</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <Sidebar />
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 "
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <Header />
        </div>

        {/* Page content */}
        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
}
