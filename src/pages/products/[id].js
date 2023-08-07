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
    <div className="container lg:max-w-screen-lg mx-auto py-12 px-">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 md:space-x-12">
        <div className="relative w-80 h-80 sm:2-96 sm:h-96 mr-32">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "contain" }}
            sizes="100%"
            priority
          />
        </div>
        <div className="w-full flex-1 mx-w-md rounded-md shadow-lg p-6 bg-white">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <div className="mt-4 pt-4">
            <p className="text-zinc-500">Price: </p>
            <p className="text-xl font-semibold">
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })}
            </p>
          </div>
          <div className="mt-4 pt-4">
            <p className="text-zinc-500">Quantity:</p>
            <div className="mt-1 flex items-center space-x-3">
              <button
                disabled={count <= 1}
                onClick={() => setCount(count - 1)}
                className="p-1 rounded-md hover:bg-rose-100 hover:text-rose-500"
              >
                <MinusSmallIcon className="w-6 h-6 flex-shrink-0" />
              </button>
              <p className="font-semibold text-xl">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="p-1 rounded-md hover:bg-green-100 hover:text-green-500"
              >
                <PlusSmallIcon className="w-6 h-6 flex-shrink-0" />
              </button>
            </div>
          </div>
          <button
            onClick={addItemToCart}
            className="w-full mt-4 border border-lime-500 py-2 px-6 bg-lime-500 hover:bg-lime-600 hover:border-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-line-500 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
          >
            Add to Cart
          </button>
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
