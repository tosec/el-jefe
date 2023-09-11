import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current.querySelector("#user_email");
    const subjectInput = form.current.querySelector("#subject");
    const messageInput = form.current.querySelector("#message");

    // validate
    if (!emailInput.value || !subjectInput.value || !messageInput.value) {
      setIsSuccess(false);
      return;
    }

    emailjs
      .sendForm(
        "service_g6trb66",
        "template_fm110qp",
        form.current,
        "sz51eEESUYVyLYVse"
      )
      .then(
        () => {
          setIsSuccess(true);
          form.current.reset(); // reset the form fields
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000); // hide the alert after 5 seconds
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section className=" mt-32">
      {isSuccess && (
        <div className="fixed bottom-20 right-10 w-500 z-50 bg-green-500 text-white p-4 text-center rounded-md animate-bounce">
          <strong className="font-bold text-lg">Success!</strong>
          <span className="block sm:inline text-md">
            {" "}
            Your message has been sent.
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              onClick={() => setIsSuccess(false)}
              className="fill-current h-6 w-12 text-white hover:text-gray-500 transition duration-300"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            ></svg>
          </span>
        </div>
      )}
      <div className="md:py-20 lg:py-18 px-4 mb-20 mx-auto max-w-screen-md">
        <h2 className="md:text-5xl text-4xl font-bold text-center text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 lg:text-2xl md:text-xl sm:text-xl text-lg">
          Need a helping hand with our irresistible Michelada Mix? Got thoughts
          to share about our websites features? We're all ears and ready to
          assist!
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="user_email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 lg:text-md text-sm rounded-lg block w-full p-4"
              placeholder="name@domain.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-4 w-full lg:text-md text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full lg:text-md text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-md font-medium text-center justify-center text-white bg-red-800 rounded-lg sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
