"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/manjvnyr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <main className="max-w-xl mx-auto py-12 px-4 text-teal-900">
      <h1 className="text-4xl font-bold mb-4 text-teal-700">Contact Us</h1>
      <p className="mb-6 text-lg text-teal-800 bg-teal-50 p-4 rounded shadow-sm">
        We&apos;d love to hear from you! Fill out the form below or reach out directly.
      </p>
      <form className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
        <label className="font-medium">Name
          <input name="name" type="text" className="mt-1 block w-full border border-teal-200 rounded p-2 focus:ring-2 focus:ring-teal-300" required />
        </label>
        <label className="font-medium">Email
          <input name="email" type="email" className="mt-1 block w-full border border-teal-200 rounded p-2 focus:ring-2 focus:ring-teal-300" required />
        </label>
        <label className="font-medium">Message
          <textarea name="message" className="mt-1 block w-full border border-teal-200 rounded p-2 focus:ring-2 focus:ring-teal-300" rows={4} required />
        </label>
        <button type="submit" className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors font-semibold">Send Message</button>
        {status === "SUCCESS" && <p className="text-green-700 text-sm mt-2">Thank you! Your message has been sent.</p>}
        {status === "ERROR" && <p className="text-red-700 text-sm mt-2">Sorry, there was a problem sending your message. Please try again later.</p>}
      </form>
      <div className="text-teal-800">
        <p><span className="font-semibold">Email:</span> <a href="mailto:shauni@wagonthewildside.com" className="underline hover:text-teal-600">shauni@wagonthewildside.com</a></p>
        <p><span className="font-semibold">Phone:</span> +44 7885 511067</p>
      </div>
    </main>
  );
} 