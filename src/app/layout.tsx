import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/styles/globals.css"
import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

//allows painless use of bootstrap without worrying about client/server components
//doesn't require useEffect/dynamic
//works with server components, however, if I choose to use 'use client' & useEffect, it would work as well because any componenet inside children tree can be a server component
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display:'swap' });
//Defaults
export const metadata: Metadata = {
  title: "Vernacular",
  description: "Personal Media Catalog & Reviews Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} default-bg-color`}>
        <Navigation />
        {children}
        <Footer/>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  );
}
