import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextAuth from "next-auth";
import { NextAuthProvider } from "./api/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
        <div className="max-w-3xl mx-auto ">
          <Navbar />
          {children}
        </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
