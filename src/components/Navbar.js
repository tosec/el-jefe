import { useState } from "react";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "./Logo";

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
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-7 cursor-pointer md:hidden w-8 h-8"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 transition-all duration-300 ease-in ${
            open ? "top-13" : "top-[-490px]"
          }`}
        >
          <div className="md:flex md:items-center">
            {Links.map((link, index) => (
              <li
                key={index}
                className="lg:ml-12 md:ml-6 md:my-0 my-7 font-semibold text-center"
              >
                <Link
                  onClick={() => setOpen(!open)}
                  href={link.link}
                  className="hover:text-red-800 duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <div className="text-lg text-red-800 font-semibold py-1 duration-300 md:static flex justify-center md:ml-8 md:mr-8">
              <Link
                onClick={() => setOpen(!open)}
                href="/cart"
                className="flex items-center"
              >
                <AiOutlineShoppingCart className="mr-2 w-8 h-8" />
                <span>({cartCount})</span>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
