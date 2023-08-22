import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta from "./Metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function AppLayout({ children }) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <Navbar />
      <Meta />
      <main className="flex-grow bg-white mt-10">{children}</main>
      <Footer />
    </div>
  );
}
