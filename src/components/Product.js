import Link from "next/link";
import Image from "next/image";

export default function Product({ product, index }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border-2 rounded-sm group overflow-hidden"
    >
      <div className="relative w-full h-72">
        <Image
          priority={index === 0}
          src={product.image}
          alt={product.name}
          fill
          sizes="100%"
          style={{
            objectFit: "contain",
          }}
        ></Image>
      </div>
      <div className="p-6 bg-zinc-200">
        <p className="font-semibold text-lg">{product.name}</p>
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-500">Price</p>
            <p className="text-lg font-semibold">{product.price}</p>
          </div>
          <button className="border border-zinc-700 rounded-lg py-1 px-1">
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}
