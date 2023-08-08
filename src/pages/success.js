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
        <div className="py-12 px-6">
          <div className="py-2 rounded-md mx-auto mx-w-md text-red-500 bg-red-100">
            <p className="text-lg">Uh oh, something went wrong!</p>
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
