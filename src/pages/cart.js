import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import CartProduct from "src/components/CartProduct";

export default function Cart() {
  const { cartCount, clearCart, formattedTotalPrice, cartDetails } =
    useShoppingCart();

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

      {cartCount > 0 && (
        <div className="mt-12 space-y-4">
          {Object.entries(cartDetails).map(([key, product]) => (
            <CartProduct key={product.id} product={product} />
          ))}
          <div className="flex flex-col items-end border-t py-4 mt-8">
            <p className="text-xl">
              Total:{" "}
              <span className="font-semibold">{formattedTotalPrice}</span>
            </p>
            <button className="border rounded-md py-2 px-6 bg-zinc-400 hover:bg-zinc-500 text-white mt-4 max-w-max">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
