import Product from "src/components/Product";
import { stripe } from "../../lib/stripe";

export default function Shop({ products }) {
  return (
    <div className="mt-32">
      <div class="max-w-2xl mx-auto md:px-6">
        <div class="md:py-20 py-18">
          <div class="md:pb-20 pb-12 max-w-3xl mx-auto text-center ">
            <h2 class="md:text-5xl text-4xl text-black font-bold">
              Micheladas
            </h2>
          </div>
        </div>
      </div>
      <div className="container xl:max-w-screen-xl mx-auto px-3 mb-20">
        <div className="grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {products.map((product, index) => (
            <Product key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const inventory = await stripe.products.list({
    limit: 6,
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
  return {
    props: {
      products,
    },
  };
}
