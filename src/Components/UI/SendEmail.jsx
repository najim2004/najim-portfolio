"use client";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const SendEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const templateParams = {
      from_name: form.name.value,
      from_email: form.email.value,
      message: form.message.value,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
      )
      .then(
        (response) => {
          toast.success("Successfully Email Sent!");
          form.reset();
          setIsLoading(false);
        },
        (error) => {
          toast.error("Failed to Email Sent!");
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="font-primary border border-box-border dark:border-secondary/50 duration-300 p-3 lg:p-5 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 duration-300 dark:text-primary-bg">
          Send Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 duration-300 dark:text-primary-bg"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full h-10 border border-img-border bg-white duration-300 dark:bg-transparent px-3 resize-none rounded-xl dark:text-primary-bg outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 duration-300 dark:text-primary-bg"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full h-10 border border-img-border bg-white duration-300 dark:bg-transparent resize-none rounded-xl dark:text-primary-bg outline-none px-3"
            />
          </div>
          <div className="lg:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 duration-300 dark:text-primary-bg"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 block w-full h-[160px] border border-img-border shadow-sm bg-white duration-300 dark:bg-transparent p-3 resize-none rounded-xl dark:text-primary-bg outline-none"
            ></textarea>
          </div>
          <div className="lg:col-span-2">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full flex justify-center py-2 px-4 bg-primary/80 dark:bg-primary-bg group dark:text-primary dark:hover:bg-primary-bg/80 hover:bg-primary/50 text-white duration-300 rounded-xl disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default SendEmail;
