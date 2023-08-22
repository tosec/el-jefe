import { useState } from "react";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { CiBeerMugFull } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  const { cartCount } = useShoppingCart();
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "SHOP", link: "/shop" },
    { name: "ABOUT US", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className=" w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl flex items-center gap-3">
          <CiBeerMugFull className="w-10 h-10 text-lime-600 tracking-widest" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-13" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-12 md:my-0 my-7 font-semibold">
              <Link
                href={link.link}
                className="hover:text-lime-600 duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <div className="text-lg text-lime-600 md:ml-8 font-semibold py-1 duration-300 md:static">
            <Link href="/cart" className="flex items-center">
              <AiOutlineShoppingCart className="mr-2 w-8 h-8" />{" "}
              <span className="flex items-center">({cartCount})</span>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
