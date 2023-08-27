import Link from "next/link";
import Image from "next/image";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { toast } from "react-hot-toast";

export default function Product({ product, index }) {
  const { addItem } = useShoppingCart();

  function addItemToCart(event) {
    event.preventDefault();
    const id = toast.loading("Added item...");
    addItem(product);
    toast.success(`${product.name} added!`, { id });
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className="rounded-lg group overflow-hidden shadow-md"
    >
      <div className="relative w-full h-96 mt-20">
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
      <div className="p-6 h-96">
        <p className="font-semibold text-lg">{product.name}</p>
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-zinc-500 font-semibold">Price</p>
            <p className="text-lg font-semibold">
              {formatCurrencyString({
                currency: product.currency,
                value: product.price,
              })}
            </p>
          </div>
          <button
            onClick={addItemToCart}
            className="bg-lime-500 font-semibold rounded-md py-2 px-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}
