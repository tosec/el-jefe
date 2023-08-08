import Link from "next/link";
import Image from "next/image";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useShoppingCart } from "use-shopping-cart";

export default function CartProduct({ product }) {
  const { setItemQuantity, removeItem } = useShoppingCart();
  return (
    <div className="flex justify-between space-x-4 rounded-md p-4 bg-zinc-300 bg-opacity-50 hover:bg-opacity-100 hover:shadow-lg ">
      <Link
        href={`/products/${product.id}`}
        className="flex items-center sm:space-x-4 space-x-2 group"
      >
        <div className="relative sm:w-20 sm:h-20 w-12 h-12 group-hover:scale-110 transition-transform">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <p className="font-semibold sm:text-xl text-xs group-hover:underline">
          {product.name}
        </p>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center sm:space-x-5 space-x-1">
          <button
            onClick={() => setItemQuantity(product.id, product.quantity - 1)}
            disabled={product.quantity <= 1}
            className="sm:p-1 rounded-md hover:bg-rose-100 hover:text-rose-500"
          >
            <MinusSmallIcon className="sm:w-6 sm:h-6 w-4 h-4 flex-shrink-0" />
          </button>
          <p className="font-semibold sm:text-xl text-sm">{product.quantity}</p>
          <button
            onClick={() => setItemQuantity(product.id, product.quantity + 1)}
            className="sm:p-1 rounded-md hover:bg-green-100 hover:text-green-500"
          >
            <PlusSmallIcon className="sm:w-6 sm:h-6 w-4 h-4 flex-shrink-0" />
          </button>
        </div>
        <XMarkIcon className="hidden sm:w-4 sm:h-4 w-2 h-2 sm:ml-14 sm:mb-1 mr-2 mt-1 text-zinc-500 sm:inline-block" />
        <p className="font-semibold sm:text-xl text-sm sm:ml-16 ml-4">
          {product.formattedPrice}
        </p>

        <button
          onClick={() => removeItem(product.id)}
          className="sm:ml-4 ml-2 hover:text-red-500"
        >
          <XCircleIcon className="sm:w-6 sm:h-6 w-4 h-4 flex-shrink-0" />
        </button>
      </div>
    </div>
  );
}
