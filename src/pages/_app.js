import "src/styles/globals.css";
import AppLayout from "../components/Layout";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE;
export default function App({ Component, pageProps }) {
  return (
    <CartProvider stripe={stripeKey} cartMode="checkout-session" currency="USD">
      <AppLayout>
        <Component {...pageProps} />
        <Toaster />
      </AppLayout>
    </CartProvider>
  );
}
