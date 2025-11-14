import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
import LayoutWrapper from "@/components/layoutWrapper";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oswald",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // 1. Standard Favicons (Desktop Browsers)
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png', // Path is relative to the /public folder
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico', // Standard ICO file
    },
    {
        // 2. iOS/Apple Touch Icon
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
    },
  ],

  // 3. Web Manifest (Android/PWA)
  manifest: '/site.webmanifest', // Path is relative to the /public folder

  // (Optional: You can keep other metadata like title and description here)
  title: 'Adela', 
  description: 'Welcome to my new Next.js app.',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
      
      <LayoutWrapper> {children}</LayoutWrapper> 
        
      </body>
    </html>
  );
}
