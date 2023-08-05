import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function AppLayout({ children }) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <Navbar />
      <main className="flex-grow bg-zinc-600">{children}</main>
      <Footer />
    </div>
  );
}
