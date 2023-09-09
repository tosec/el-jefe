import axios from "axios";
import { useRouter } from "next/router";
import { RotateLoader } from "react-spinners";
import useSWR from "swr";
import { useShoppingCart } from "use-shopping-cart";

export default function SuccessPage() {
  const { clearCart } = useShoppingCart();
  const router = useRouter();
  const sessionId = router.query.session_id;
  const { data, error } = useSWR(
    () => (sessionId ? `/api/checkout-sessions/${sessionId}` : null),
    (url) => axios.get(url).then((res) => res.data),
    {
      onSuccess() {
        clearCart();
      },
    }
  );
  const email = data?.customer_details?.email;
  return (
    <div className="container xl:max-w-screen-xl mx-auto text-center">
      {error ? ( // error state
        <div className="grid h-screen px-4 bg-white place-content-center">
          <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">404</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Uh-oh!
            </p>

            <p className="mt-4 text-gray-500">We can't find that page.</p>

            <a
              href="#"
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Go Back Home
            </a>
          </div>
        </div>
      ) : !data ? ( // loading state
        <div className="flex items-center justify-center h-screen">
          <RotateLoader color="#000000" />
        </div>
      ) : (
        // success state
        <div className="py-12 px-6">
          <div className="py-4 px-8 space-y-4 rounded-md mx-w-lg mx-auto">
            <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
              Order succeeded!
            </h2>
            <p className="text-lg">
              Check your email ({email}) to see order details.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
