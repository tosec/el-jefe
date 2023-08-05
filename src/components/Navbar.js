import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar() {
  const { formattedTotalPrice, cartCount } = useShoppingCart();

  return (
    <header className="sticky top-0 bg-zinc-300 z-10">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
        <Link
          href="/cart"
          className="flex items-center space-x-1 text-zinc-500 hover:text-zinc-600"
        >
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-lg">
            {formattedTotalPrice}{" "}
            <span className="text-md text-zinc-400">({cartCount})</span>
          </p>
        </Link>
      </div>
    </header>
  );
}
