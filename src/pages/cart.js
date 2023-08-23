import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import CartProduct from "src/components/CartProduct";
import axios from "axios";
import { useState } from "react";

export default function Cart() {
  const { cartCount, clearCart, formattedTotalPrice, cartDetails } =
    useShoppingCart();

  const [isRedirecting, setRedirecting] = useState(false);

  async function onCheckout() {
    if (cartCount > 0) {
      try {
        setRedirecting(true);

        const response = await axios.post(
          "/api/checkout-sessions",
          cartDetails,
          {
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );

        const session = response.data;

        // ensure that the session url is a valid url before redirecting
        if (session && session.url && new URL(session.url)) {
          window.location.href = session.url;
        } else {
          console.log("Invalid session data received.");
        }
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setRedirecting(false);
      }
    }
  }

  return (
    <div className="container x;:max-w-screen-xl mx-auto py-16 px-8">
      {cartCount > 0 ? (
        <>
          <h2 className="sm:text-3xl text-2xl font-semibold">
            Your Shopping cart
          </h2>
          <p className="mt-1 sm:text-xl text-md">
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
          <h2 className="text-center text-3xl font-semibold">
            Looks like your cart is feeling lonely...
          </h2>
          <p className="text-center mt-1 text-xl">
            Browse our collection{" "}
            <Link href="/shop" className=" text-orange-400">
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
            <button
              disabled={isRedirecting}
              onClick={onCheckout}
              className="border rounded-md py-2 px-6 bg-zinc-400 hover:bg-zinc-500 text-white mt-4 max-w-max"
            >
              {isRedirecting ? "Redirecting..." : "Checkout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
