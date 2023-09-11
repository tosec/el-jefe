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
        <div className="grid h-screen px-4 place-content-center">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">
                500
              </h1>
              <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                Internal Server Error
              </p>
              <p class="mb-4 text-lg font-light text-gray-500">
                We are already working to solve the problem
              </p>
            </div>
          </div>
        </div>
      ) : !data ? ( // loading state
        <div className="flex items-center justify-center h-screen">
          <RotateLoader color="#000000" />
        </div>
      ) : (
        // success state
        <div className="grid h-screen px-4 place-content-center">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-700">
                Success!
              </h1>
              <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                Thank you for your purchase!
              </p>
              <p class="mb-4 text-lg font-light text-gray-500">
                An invoice as been sent to{" "}
                <span className="underline cursor-pointer font-semibold">
                  {email}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
