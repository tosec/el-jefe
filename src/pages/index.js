import Link from "next/link";
import Carousel from "src/components/Carousel";

export default function index() {
  return (
    <div>
      <section className="bg-gray-50 mt-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link
            href="/shop"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-lime-400 rounded-full"
            role="alert"
          >
            <span className="text-sm font-medium px-2">
              See our shop for new releases!
            </span>
            <svg
              className=" w-5 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <h1 className="mb-8 text-4xl font-extrabold tracking-wide leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Michelada Mix El Jefe
          </h1>
          <Carousel />
        </div>
      </section>
    </div>
  );
}
