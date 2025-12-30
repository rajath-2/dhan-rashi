import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings (Modern, Clean)
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhan-Raashi | India's Smartest Budgeting App",
  description: "Save more, worry less. Built for the Indian wallet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
