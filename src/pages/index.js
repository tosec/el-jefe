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
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="Michelada Mix"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.chicanoeats.com%2Fwp-content%2Fuploads%2F2019%2F05%2FIMG_9275-819x1024.jpg%3Fresize%3D819%252C1024&f=1&nofb=1&ipt=aca1c2d578275c4dd38cddc186047f84a139a096cd242874aed6a47c48bf9a10&ipo=images"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center lg:bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Browse our Collection!
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded bg-red-700 px-12 py-3 text-sm font-medium text-white"
                >
                  View shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
