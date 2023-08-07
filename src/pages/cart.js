import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function Cart() {
  const { cartCount, clearCart } = useShoppingCart();

  return (
    <div className="container x;:max-w-screen-xl mx-auto py-16 px-8">
      {cartCount > 0 ? (
        <>
          <h2 className="text-3xl font-semibold">Your Shopping cart</h2>
          <p className="mt-1 text-xl">
            {cartCount} items{" "}
            <button
              onClick={() => clearCart()}
              className="opacity-50 hover:opacity-100 text-base capitalize"
            >
              (Remove all items)
            </button>
          </p>
        </>
      ) : (
        <>
          {" "}
          <h2 className=" text-center text-3xl font-semibold">
            Looks like your cart is feeling lonely...
          </h2>
          <p className="text-center mt-1 text-xl">
            Browse our collection{" "}
            <Link href="/" className=" text-blue-800">
              here!
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
