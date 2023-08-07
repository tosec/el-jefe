import Link from "next/link";
import Image from "next/image";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { useShoppingCart } from "use-shopping-cart";

export default function CartProduct({ product }) {
  const { setItemQuantity, removeItem } = useShoppingCart();
  return (
    <div className="flex justify-between space-x-4 rounded-md p-4 bg-zinc-300 bg-opacity-50 hover:bg-opacity-100 hover:shadow-lg ">
      <Link
        href={`/products/${product.id}`}
        className="flex items-center space-x-4 group"
      >
        <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <p className="font-semibold text-xl group-hover:underline">
          {product.name}
        </p>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center space-x-5">
          <button
            onClick={() => setItemQuantity(product.id, product.quantity - 1)}
            disabled={product.quantity <= 1}
            className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500"
          >
            <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
          </button>
          <p className="font-semibold text-xl">{product.quantity}</p>
          <button
            onClick={() => setItemQuantity(product.id, product.quantity + 1)}
            className="p-1 rounded-md hover:bg-green-100 hover:text-green-500"
          >
            <PlusSmallIcon className="w-6 h-6 flex-shrink-0" />
          </button>
        </div>
        <p className="font-semibold text-xl ml-16">{product.formattedPrice}</p>

        <button
          onClick={() => removeItem(product.id)}
          className="ml-4 hover:text-red-500"
        >
          <XCircleIcon className="w-6 h-6 flex-shrink-0" />
        </button>
      </div>
    </div>
  );
}
