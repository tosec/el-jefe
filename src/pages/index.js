import Link from "next/link";

export default function index() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Michelada Mix
              <strong className="font-extrabold text-red-700 block">
                El Jefe
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/about"
              >
                About us
              </Link>

              <Link
                className="rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/shop"
              >
                View shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
