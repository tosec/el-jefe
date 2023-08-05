import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-zinc-700 z-10">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
        <Link href="/cart" className="flex items-center space-x-1">
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0 text-zinc-300 hover:text-zinc-400 " />
          </div>
          <p className="text-lg text-zinc-200">0$</p>
        </Link>
      </div>
    </header>
  );
}
