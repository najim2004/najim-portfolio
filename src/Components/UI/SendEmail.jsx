"use client";

import { useState } from "react";

const SendEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your email sending logic here
    console.log("Sending email:", { name, email, message });
    // Reset form fields after sending
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="font-primary border border-box-border lg:p-5">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-red-500">This feature coming soon...!!</h1>
        <h2 className="text-2xl font-bold mb-8">Send Message</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full h-10 border border-img-border bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full h-10 border border-img-border bg-white"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full border border-img-border shadow-sm bg-white resize-none"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 bg-primary/80 hover:bg-primary/50 text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SendEmail;
