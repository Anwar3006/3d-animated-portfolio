import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          //   setSuccess(true);
          e.target.reset();
          setLoading(false);
          toast.success("Message sent successfully!🥳");
        },
        (error) => {
          //   setError(true);
          setLoading(false);
          toast.error("Something went wrong...🚨");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="w-full max-w-[40rem]" onSubmit={sendEmail} ref={form}>
      <h1 className="text-[1.7rem] md:text-4xl font-bold">
        Let's get in touch
      </h1>
      <div className="mb-4 mt-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm md:text-base font-medium text-neutral-300"
        >
          Your name
        </label>
        <input
          type="text"
          name="from_name"
          className="bg-neutral-200 text-zinc-700 placeholder-zinc-500 text-sm rounded-lg focus:ring-pink-600 focus:border-green-500 block w-full p-2.5"
          placeholder="Bonnie Green"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm md:text-base font-semibold text-neutral-300"
        >
          Email Address
        </label>
        <input
          type="email"
          name="from_email"
          className="bg-neutral-200 text-zinc-700 placeholder-zinc-500 text-sm rounded-lg focus:ring-pink-600 focus:border-green-500 block w-full p-2.5"
          placeholder="bonnieG@mail.com"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 text-sm md:text-base font-semibold text-neutral-300"
        >
          Your message
        </label>
        <textarea
          name="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading} // Disable button when loading
        className="w-full bg-[#fd0a54] rounded-xl flex items-center justify-center px-4 py-2 md:p-3 mt-5 md:mt-5"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default Form;
