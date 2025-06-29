export default function Contact() {
  return (
    <main className="max-w-xl mx-auto py-12 px-4 text-teal-900">
      <h1 className="text-4xl font-bold mb-4 text-teal-700">Contact Us</h1>
      <p className="mb-6 text-lg text-teal-800 bg-teal-50 p-4 rounded shadow-sm">
        We'd love to hear from you! Fill out the form below or reach out directly.
      </p>
      <form className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 mb-6">
        <label className="font-medium">Name
          <input type="text" className="mt-1 block w-full border border-teal-200 rounded p-2 focus:ring-2 focus:ring-teal-300" required />
        </label>
        <label className="font-medium">Email
          <input type="email" className="mt-1 block w-full border border-teal-200 rounded p-2 focus:ring-2 focus:ring-teal-300" required />
        </label>
        <label className="font-medium">Message
          <textarea className="mt-1 block w-full border border-teal-200 rounded p-2 focus:ring-2 focus:ring-teal-300" rows={4} required />
        </label>
        <button type="submit" className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors font-semibold">Send Message</button>
      </form>
      <div className="text-teal-800">
        <p><span className="font-semibold">Email:</span> <a href="mailto:info@wagonwildside.com" className="underline hover:text-teal-600">info@wagonwildside.com</a></p>
        <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
      </div>
    </main>
  );
} 