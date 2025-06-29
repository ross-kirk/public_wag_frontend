import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] bg-teal-50 py-12 px-4 text-teal-900">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-extrabold mb-4 text-teal-700 drop-shadow-sm text-center md:text-left">
            Wag On The Wild Side
          </h1>
          <p className="mb-6 text-lg text-teal-800 bg-white p-4 rounded shadow-sm text-center md:text-left">
            I'm Shauni. A fully insured, professional dog walker, offering solo or small group adventures tailored to your dog's personality in the Dundee area.<br/>
            I specialise in dogs that require extra patience & special adjustments, but everyone is welcome 🐾🐶🥰
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="/services">
              <span className="bg-teal-600 text-white px-6 py-2 rounded shadow hover:bg-teal-700 transition-colors font-semibold">Our Services</span>
            </Link>
            <Link href="/contact">
              <span className="bg-white text-teal-700 border border-teal-600 px-6 py-2 rounded shadow hover:bg-teal-50 transition-colors font-semibold">Contact Us</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/dogs/hero-dog.jpg"
            alt="Happy dog on a walk"
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
