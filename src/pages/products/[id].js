import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import { stripe } from "../../../lib/stripe";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ProductDetails({ product }) {
  const [count, setCount] = useState(1);
  const { addItem } = useShoppingCart();

  function addItemToCart(event) {
    event.preventDefault();
    const id = toast.loading(`Added ${count} item${count > 1 ? "'s" : ""} `);
    addItem(product, { count });
    toast.success(`${count} ${product.name} added!`, { id });
  }

  return (
    <div className="container lg:max-w-screen-lg mx-auto py-12 mt-40">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-12">
        <div className="relative w-96 h-96 sm:2-96 sm:h-96 lg:mr-32 ">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
            sizes="100%"
            priority
          />
        </div>
        <div className="lg:w-full md:w-full flex-1 mx-w-md m-4 rounded-md p-6">
          <h2 className="text-3xl font-semibold underline">{product.name}</h2>
          <div className="mt-6 pt-6">
            <p className="text-2xl">
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })}
            </p>
            <div className="mt-4 pt-4">
              <div className="mt-1 flex items-center space-x-3">
                <span className="text-xl">Quantity:</span>
                <button
                  disabled={count <= 1}
                  onClick={() => setCount(count - 1)}
                  className="p-1 rounded-full bg-rose-100 text-rose-500"
                >
                  <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
                </button>
                <p className="text-xl">{count}</p>
                <button
                  onClick={() => setCount(count + 1)}
                  className="p-1 rounded-full bg-green-100 text-green-500"
                >
                  <PlusSmallIcon className="w-6 h-6 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={addItemToCart}
            className="w-full mt-8 py-2 px-6 bg-red-700 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
          >
            Add to Cart
          </button>
          {/* <p className="text-zinc-500 mt-4">Description: </p> */}
          <p className="mt-10 text-lg">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const inventory = await stripe.products.list();
  const paths = inventory.data.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const inventory = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products = inventory.data.map((product) => {
    const price = product.default_price;
    return {
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      image: product.images[0],
      description: product.description,
    };
  });
  const product = products.find((product) => product.id === params.id);

  return {
    props: {
      product,
    },
    revalidate: 60 * 30,
  };
}
