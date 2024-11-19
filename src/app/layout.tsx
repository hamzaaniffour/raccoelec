import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "animate.css";
import Navbar from "./components/Global/Header/Navbar";
import Footer from "./components/Global/Footer/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-old-standard-tt",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-50`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
