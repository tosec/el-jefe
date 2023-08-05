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
      <Meta />
      <Navbar />
      <main className="flex-grow bg-white">{children}</main>
      <Footer />
    </div>
  );
}
