"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { List, PlusSquare, Menu, ChevronLeft } from "lucide-react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  // ✅ Load saved state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarExpanded");
    if (savedState !== null) {
      setIsExpanded(savedState === "true");
    }
  }, []);

  // ✅ Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sidebarExpanded", isExpanded.toString());
  }, [isExpanded]);

  return (
    <aside
      className={`h-screen bg-white transition-all duration-300 ease-in-out ${
        isExpanded ? "w-56" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-md hover:bg-gray-100 transition-all"
          aria-label="Toggle sidebar"
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="px-3">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 transition-all"
            >
              <List size={20} className="text-green-600" />
              <span
                className={`text-gray-800 font-medium transition-all duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                Products
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/products/new"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 transition-all"
            >
              <PlusSquare size={20} className="text-yellow-500" />
              <span
                className={`text-gray-800 font-medium transition-all duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                Add Product
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
