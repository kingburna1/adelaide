"use client";

import { usePathname } from "next/navigation";
import FooterComponent from "./footer/FooterComponent";
import FixedContactButton from "./aibutton/FixedContactButton";


// import HeaderComponent from "./header/HeaderComponent"; // optional if you want to hide it too

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // 🧠 List of routes where you don’t want footer/header to show
  const hideOnRoutes = ["/dashboard", "/signin", "/signup", "/adviser","/profile"];

  // ✅ Check if the current path starts with any of the hidden routes
  const shouldHideLayout = hideOnRoutes.some((path) => pathname.startsWith(path));

  return (
    <>
      {/* Example if you had a header:
      {!shouldHideLayout && <HeaderComponent />} */}

      <main>{children}</main>
        
      {/* 2. FIXED BUTTON ADDED HERE */}
      {!shouldHideLayout && <FixedContactButton />} 

      {!shouldHideLayout && <FooterComponent />}
    </>
  );
}