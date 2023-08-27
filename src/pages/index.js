import Link from "next/link";
import Carousel from "src/components/Carousel";

export default function index() {
  return (
    <div>
      <section class="bg-gray-50 mt-24">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <Link
            href="/shop"
            class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-lime-400 rounded-full"
            role="alert"
          >
            <span class="text-sm font-medium px-2">
              See our shop for new releases!
            </span>
            <svg
              class=" w-5 h-7"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <h1 class="mb-8 text-4xl font-extrabold tracking-wide leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Michelada Mix El Jefe
          </h1>
          <Carousel />
          {/* <p class="mb-10 text-lg font-normal text-black lg:text-2xl sm:px-16 xl:px-48">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black bg-red-800 rounded-lg"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg bg-slate-400"
            >
              About Us
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}
