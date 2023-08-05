import "src/styles/globals.css";
import AppLayout from "../components/Layout";
import { CartProvider } from "use-shopping-cart";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE;
export default function App({ Component, pageProps }) {
  return (
    <CartProvider stripe={stripeKey} cartMode="checkout-session" currency="USD">
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </CartProvider>
  );
}
