import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] bg-teal-50 py-12 px-4 text-teal-900">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-2 text-teal-700 drop-shadow-sm text-center">
            Wag On The Wild Side
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-center text-teal-800 tracking-wide uppercase">Dog Walkers Dundee</h2>
          <h3 className="text-2xl font-semibold mb-2 text-center text-teal-800">Professional Dog Walking in Dundee</h3>
          <p className="mb-6 text-lg text-teal-800 bg-white p-4 rounded shadow-sm text-center">
            I&apos;m Shauni, a fully insured, professional dog walker based in Dundee. I offer solo or small group dog walking adventures tailored to your dog&apos;s personality. I specialise in dogs that require extra patience &amp; special adjustments, but everyone is welcome 🐾🐶🥰<br/><br/>
            Looking for a reliable dog walker in Dundee? I provide safe, fun, and caring dog walking services across Dundee and the surrounding area. Contact me today to give your dog the adventure they deserve!
          </p>
          <blockquote className="italic text-teal-700 bg-teal-100 rounded p-3 mb-4 max-w-md mx-auto">
            &quot;Shauni is the best dog walker in Dundee! Our nervous rescue dog absolutely loves her walks and we have total peace of mind.&quot;<br/>
            <span className="block text-right font-semibold mt-2">- Happy Client</span>
          </blockquote>
          <div className="flex gap-4 mt-2 justify-center">
            <Link href="/services">
              <span className="bg-teal-600 text-white px-6 py-2 rounded shadow hover:bg-teal-700 transition-colors font-semibold">Our Services</span>
            </Link>
            <Link href="/contact">
              <span className="bg-white text-teal-700 border border-teal-600 px-6 py-2 rounded shadow hover:bg-teal-50 transition-colors font-semibold">Contact Us</span>
            </Link>
          </div>
          <p className="mt-6 text-sm text-teal-700 text-center">
            Are you a happy client? <a href="https://g.page/r/CfQw7k8Qw8wDEBM/review" className="underline text-teal-800" target="_blank" rel="noopener noreferrer">Leave a Google review!</a>
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/dogs/hero-dog.jpg"
            alt="Dog walking in Dundee"
            width={350}
            height={350}
            className="rounded-full shadow-lg object-cover bg-teal-100"
            priority
          />
        </div>
      </div>
    </main>
  );
}
