import Link from "next/link";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { toast } from "react-hot-toast";

export default function Product({ product, index }) {
  const { addItem } = useShoppingCart();

  function addItemToCart(event) {
    event.preventDefault();
    const id = toast.loading("Added item...");
    addItem(product);
    toast.success(`${product.name} added!`, { id });
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden"
    >
      <div className="relative h-[350px] sm:h-[450px]">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.chicanoeats.com%2Fwp-content%2Fuploads%2F2019%2F05%2FIMG_9275-819x1024.jpg%3Fresize%3D819%252C1024&f=1&nofb=1&ipt=aca1c2d578275c4dd38cddc186047f84a139a096cd242874aed6a47c48bf9a10&ipo=images"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.chicanoeats.com%2Fwp-content%2Fuploads%2F2019%2F05%2FIMG_9275-819x1024.jpg%3Fresize%3D819%252C1024&f=1&nofb=1&ipt=aca1c2d578275c4dd38cddc186047f84a139a096cd242874aed6a47c48bf9a10&ipo=images"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="relative bg-white pt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {product.name}
        </h3>

        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">
            {formatCurrencyString({
              currency: product.currency,
              value: product.price,
            })}
          </p>

          <button
            onClick={addItemToCart}
            className="text-xs uppercase tracking-wide hover:text-gray-500"
          >
            add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}
