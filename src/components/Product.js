import Link from "next/link";
import Image from "next/image";

export default function Product({ product, index }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="border-2 rounded-sm group overflow-hidden"
    >
      <div className="relative w-full h-96">
        <Image
          priority={index === 0}
          src={product.image}
          alt={product.name}
          fill
          sizes="100%"
        ></Image>
      </div>
    </Link>
  );
}
